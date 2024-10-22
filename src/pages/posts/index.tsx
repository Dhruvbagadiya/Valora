import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@App/lib/mdx";
import { MDXFrontMatter } from "@App/lib/types";
import { Page } from "@App/components/Page";
import { PostList } from "@App/components/PostList";

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Posts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;