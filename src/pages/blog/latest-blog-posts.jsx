import { useQuery } from "@tanstack/react-query";
import { getAllBlogPosts } from "../../utils/requests";

const LatestBlogPosts = () => {
  const { data: blogs, isLoading } = useQuery({
    queryFn: getAllBlogPosts,
    queryKey: ["blogs", ""],
    select: (data) => data.blogs,
  });

  return (
    <div className="min-w-[300px] lg:min-w-[500px] border-l py-12 px-4 lg:pl-10">
      <h2>Latest Posts</h2>
      <div className="mt-5">
        {isLoading ? (
          <h2>Loading ... </h2>
        ) : (
          <div className="grid grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 pr-5 gap-6">
            {blogs.slice(0, 5).map((blog, i) => (
              <div className="flex gap-2" key={`side-display-blog-${i}`}>
                <div className="w-[100px] h-[80px] overflow-hidden">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p classname="">
                    {blog.title.length > 40
                      ? `${blog.title.slice(0, 40)}
                ...`
                      : blog.title}
                  </p>
                  <p className="font-semibold mt-2">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  <a
                    href={`/blog/${blog._id}`}
                    className="font-semibold text-base-color underline underline-offset-2 cursor-pointer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestBlogPosts;
