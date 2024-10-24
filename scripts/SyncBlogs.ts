import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import mongoose from 'mongoose';

// Define MongoDB connection and schema
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI || 'mongodb://localhost:27017/Valora');
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

// Define blog schema and model
const blogSchema = new mongoose.Schema({
    frontMatter: {
        thumbnail: { type: String },
        title: { type: String, required: true },
        description: { type: String },
        date: {
            type: String,

            // ? Formate Date into DD-MM-YYYY
            default: new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
        },
        slug: { type: String, required: true, unique: true },
        author: { type: String },
        authorImage: { type: String },
        tags: [{ type: String }],
        privacy: {
            type: String,
            default: 'public',
            enum: ['public', 'unlisted', 'private'],
        },
        views: {
            type: Number,
            default: 0,
        },
        readtime: { type: String, required: true },
    },
    content: { type: String, required: true },
});

const Blog = mongoose.model('Blog', blogSchema);

// Helper function to get all .mdx files from the blogs directory
const getAllMdxFiles = async (dir: string): Promise<string[]> => {
    const dirPath = path.join(process.cwd(), dir);
    const files = await fs.readdir(dirPath);
    return files.filter((file) => file.endsWith('.mdx'));
};

// Function to sync blogs to the database
const syncBlogsToDatabase = async () => {
    try {
        // Step 1: Get all the .mdx files from the blogs directory
        const mdxFiles = await getAllMdxFiles('blogs');

        for (const file of mdxFiles) {
            let filePath = path.join(process.cwd(), 'blogs', file);

            // Step 2: Read the file content and extract frontMatter using gray-matter
            let fileContent = await fs.readFile(filePath, 'utf-8');
            let { data: frontMatter, content } = matter(fileContent);

            let slug = frontMatter.slug || file.replace(/\.mdx$/, '');

            // Step 3: Check if the blog already exists in the database
            let existingBlog = await Blog.findOne({ 'frontMatter.slug': slug });

            if (existingBlog) {
                // Step 4: Update the existing blog post if found
                await Blog.updateOne(
                    { 'frontMatter.slug': slug },
                    {
                        'frontMatter.title': frontMatter.title || existingBlog?.frontMatter?.title,
                        'frontMatter.author': frontMatter.author || existingBlog?.frontMatter?.author,
                        'frontMatter.date': frontMatter.date || existingBlog?.frontMatter?.date,
                        'frontMatter.description': frontMatter.description || existingBlog?.frontMatter?.description,
                        'frontMatter.readtime': frontMatter.readtime || existingBlog?.frontMatter?.readtime,
                        'frontMatter.thumbnail': frontMatter.thumbnail || existingBlog?.frontMatter?.thumbnail,                                                                                                             
                        'frontMatter.privacy': frontMatter.privacy || existingBlog?.frontMatter?.privacy,
                        content,
                    }
                );
                console.log(`Updated blog: ${slug}`);
            } else {
                let newBlog = new Blog({
                    frontMatter: {
                        slug,
                        title: frontMatter.title,
                        author: frontMatter.author,
                        date: frontMatter.date || new Date(),
                        description: frontMatter.description,
                        readtime: frontMatter.readtime,
                        thumbnail: frontMatter.thumbnail,
                        privacy: frontMatter.privacy || 'public',
                    },
                    content,
                });
                await newBlog.save();
                console.log(`Added new blog: ${slug}`);
            }
        }
        console.log('Sync complete!');

        // ? Remove All Other Blogs from DB which are not in the blogs directory
        const allBlogs = await Blog.find();
        const allBlogsSlugs = allBlogs.map((blog) => blog?.frontMatter?.slug);
        const blogsToDelete = allBlogsSlugs.filter((slug) => !mdxFiles.includes(slug + '.mdx'));
        await Blog.deleteMany({ 'frontMatter.slug': { $in: blogsToDelete } });
        console.log('Deleted blogs:', blogsToDelete);

    } catch (error) {
        console.error('Error syncing blogs:', error);
    }
};



// Main function to connect to DB and start syncing
const main = async () => {
    await connectToDatabase();
    await syncBlogsToDatabase();
    mongoose.connection.close();
};

main();
