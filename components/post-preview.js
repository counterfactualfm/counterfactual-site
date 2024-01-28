import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  postAuthor,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-md mb-4 text-neutral-700">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-xl leading-relaxed">{excerpt}</p>
      <Avatar name={postAuthor.name} picture={postAuthor.picture} />
    </div>
  );
}
