import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, postAuthor }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="mx-auto max-w-2xl text-neutral-950">
        <div className="mb-6 block">
          <Avatar name={postAuthor.name} picture={postAuthor.picture} />
        </div>
        <div className="text-md mb-6 text-neutral-800">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
