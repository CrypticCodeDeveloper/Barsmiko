import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

const BlogCard = ({
  id,
  title,
  category,
  preview_text,
  cover_image,
  author,
  created_at,
}) => {
  return (
    <a
      href={`/blog/${id}`}
      className="max-w-[350px] text-white min-h-[500px] bg-base-color"
    >
      <div className="w-full max-h-[200px] overflow-hidden relative">
        <img src={cover_image} className="w-full h-full object-cover" />
        <h3 className="absolute text-xl p-1 px-4 font-semibold top-0 right-0 bg-base-color text-white uppercase">
          {category}
        </h3>
      </div>

      <div className="p-4 border-b border-gray-200">
        <h2 className="font-semibold text-lg hover:underline">
          {title.length > 60
            ? `${title.slice(0, 60)}
                ...`
            : title}
        </h2>
        <p className="mt-4">{preview_text}...</p>

        <div className="mt-4 flex-center-y gap-1">
          <Avatar className="size-12">
            <AvatarImage src="" />
            <AvatarFallback className="text-base-color bg-white font-semibold uppercase">
              {author[0]}
            </AvatarFallback>
          </Avatar>
          <p className="text-lg">
            By <span className="font-semibold underline">{author}</span>
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold">
          {new Date(created_at).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </a>
  );
};

export default BlogCard;
