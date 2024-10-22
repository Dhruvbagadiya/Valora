import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllMdx } from "@App/lib/mdx";
import { slugify } from "@App/lib/utils";
import { MDXFrontMatter } from "@App/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

interface PostsProps {
  tag: string;
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ tag, posts }) => {
  return (
    <>
      <Page title={`Posts tagged: "${tag}"`}>
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    paths: Array.from(new Set(mdxFiles.map((file) => file.tags).flat())).map(
      (tag) => {
        return {
          params: {
            tag: slugify(tag!),
          },
        };
      }
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as ContextProps;
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      tag,
      posts: mdxFiles.filter((file) => {
        return file.tags?.includes(tag);
      }),
    },
  };
};

export default Posts;
