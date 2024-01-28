import { Image } from "react-datocms";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="mr-4 h-8 w-8">
        <Image
          alt={name}
          data={picture.responsiveImage}
          className="rounded-full"
        />
      </div>
      <div className="text-lg font-medium text-neutral-700">{name}</div>
    </div>
  );
}
