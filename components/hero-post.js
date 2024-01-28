import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  postAuthor,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-md mb-4 text-neutral-800 md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={postAuthor.name} picture={postAuthor.picture} />
        </div>
      </div>
    </section>
  );
}
