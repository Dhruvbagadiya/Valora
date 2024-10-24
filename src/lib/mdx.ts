import { BlogModel } from "../model/blog";
import type { BlogType } from "../model/blog";
import dbConnect from "../lib/dbConnect"; 

export const getMdx = async (slug: string) => {
    await dbConnect();

    const blogPost = await BlogModel.findOne({ "frontMatter.slug": slug }).lean();

    if (!blogPost) {
        throw new Error(`Blog post with slug "${slug}" not found`);
    }

    return {
        frontMatter: blogPost.frontMatter, 
        content: blogPost.content,
    };
};

export const getAllMdx = async () => {
    await dbConnect();

    const blogPosts = await BlogModel.find({})
        .sort({ "frontMatter.date": -1 })
        .lean();

    return blogPosts.map((post: any) => ({
        frontMatter: post.frontMatter,
        content: post.content,
    }));
};



// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import type { MDXFrontMatter } from "../lib/types";

// const root = process.cwd();

// export const postsPath = path.join(root, "blogs");

// export const getMdx = (fileName: string) => {
//     const fullPath = path.join(postsPath, fileName);
//     const docSource = fs.readFileSync(fullPath, "utf-8");

//     const { data, content } = matter(docSource);

//     return {
//         frontMatter: {
//         ...data,
//         slug: fileName.replace(".mdx", ""),
//         } as MDXFrontMatter,
//         content,
//     };
// };

// export const getAllMdx = () => {
//     const items = fs.readdirSync(postsPath).map((item) => getMdx(item));
//     return items.sort(
//         (a, b) =>
//         new Date(b.frontMatter.date).getTime() -
//         new Date(a.frontMatter.date).getTime()
//     );
// };
