import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    frontMatter: {
        thumbnail: {
            type: String,
        },
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String
        },
        date: { 
            type: Date,
            defualt: new Date().toLocaleDateString()
        },
        slug: { 
            type: String, 
            required: true, 
            unique: true 
        },
        author: {
            type: String,
        },
        authorImage: {
            type: String,
        },
        tags: [
            { 
                type: String 
            }
        ],
        privacy: {
            type: String,
            default: "public",
            enum: ["public","unlisted", "private"],
        },
        views: {
            type: Number,
            default: 0,
        },
        readtime: {
            type: String,
            required: true,
        },
    },
    content: { 
        type: String, 
        required: true
    },
});

interface BlogType extends mongoose.Document {
    frontMatter: {
        thumbnail?: string
        title: string
        description?: string
        date: string
        slug: string
        author?: string
        authorImage?: string
        tags?: string[]
        privacy: "public" | "unlisted" | "private"
        views: number
        readtime: string
    },
    content: string,
}

export const BlogModel: mongoose.Model<BlogType> = mongoose.models?.Blog || mongoose.model<BlogType>("Blog", BlogSchema); 

export type {
    BlogType
}