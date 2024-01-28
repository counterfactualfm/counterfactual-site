import AllPosts from "./all-posts";
import Intro from "./intro";

export function PostIndex({ data }) {
  const { allPosts } = data;

  return (
    <>
      <Intro />
      <AllPosts posts={allPosts} />
    </>
  );
}
