import AllPosts from "./all-posts";
import Header from "./header";
import PostBody from "./post-body";
import PostHeader from "./post-header";
import SectionSeparator from "./section-separator";

export function PostPage({ data }) {
  const { post, morePosts } = data;

  return (
    <>
      <Header />
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts.length > 0 && <AllPosts posts={morePosts} />}
    </>
  );
}
