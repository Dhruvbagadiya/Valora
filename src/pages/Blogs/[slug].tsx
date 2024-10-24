"use server";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "../../lib/mdx";
import { MDXFrontMatter } from "../../lib/types";
import { cx } from "../../lib/utils";
import { Page } from "../../components/Page";
import { components } from "../../components/MDX";
import { Prose } from "../../components/Prose";
import remarkGfm from "remark-gfm";

interface ContextProps extends ParsedUrlQuery {
    slug: string;
}

interface PostProps {
    frontMatter: MDXFrontMatter | null; 
    mdx: any | null;
    previous: MDXFrontMatter | null;
    next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
    if (!frontMatter || !mdx) {
        return (
            <Page 
                title="Post Not Found"
                description="Sorry, we couldn't find the blog post you were looking for."
                privacy="public"
            >
                <div className="text-center">
                    <h1>Blog post not found</h1>
                    <p>Sorry, we couldn't find the blog post you were looking for.</p>
                    <Link href="/Blogs" className="text-primary underline">
                        Go back to all blogs
                    </Link>
                </div>
            </Page>
        );
    }

    return (
        <>
            <Page author={""} privacy={""} views={0} likes={0} readtime={0} {...frontMatter}>
                {/* Main content rendering */}
                <Prose>
                    <MDXRemote {...mdx} components={components} />
                </Prose>

                {/* Navigation for Previous and Next Posts */}
                {(previous || next) && (
                    <nav
                        className={cx(
                            "flex my-5",
                            previous && next ? "justify-between" : "justify-center",
                            previous && next ? "gap-4" : "gap-0"
                        )}
                    >
                        {previous && (  
                            <div className="flex-1 text-left">
                                <Link
                                    href={`/Blogs/${previous?.slug}`}
                                    className="rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-dark no-underline font-semibold text-primary"
                                >
                                    &larr; {previous?.title}
                                </Link>
                            </div>
                        )}

                        {next && (
                            <div className="flex-1 text-right"> 
                                <Link
                                    href={`/Blogs/${next?.slug}`}
                                    className="rounded-lg p-3 hover:bg-gray-200 dark:hover:bg-dark no-underline font-semibold text-primary"
                                >
                                    {next?.title} &rarr;
                                </Link>
                            </div>
                        )}
                    </nav>
                )}
            </Page>
        </>
    );
};

// Fetching the paths for all blog posts
export const getStaticPaths: GetStaticPaths = async () => {
    const mdxFiles = await getAllMdx();
    
    return {
        paths: mdxFiles.map((file:any) => ({
            params: { slug: file.frontMatter.slug },
        })),
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as ContextProps;

    const mdxFiles = await getAllMdx();
    const postIndex = mdxFiles.findIndex((p:any) => p.frontMatter.slug === slug);

    if (postIndex === -1) {
        return { notFound: true };
    }

    const post = mdxFiles[postIndex];
    const { frontMatter, content } = post;

    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
        },
        scope: frontMatter,
    });

    return {
        props: {
            frontMatter,
            mdx: mdxContent,
            previous: mdxFiles[postIndex + 1]?.frontMatter || null,
            next: mdxFiles[postIndex - 1]?.frontMatter || null,
        },
        revalidate: 60,
    };
};

export default Post;
