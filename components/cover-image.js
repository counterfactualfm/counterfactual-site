import cn from "classnames";
import Link from "next/link";
import { Image as DatocmsImage } from "react-datocms";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <DatocmsImage
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("shadow-small", {
        "transition-shadow duration-200 hover:shadow-medium": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
