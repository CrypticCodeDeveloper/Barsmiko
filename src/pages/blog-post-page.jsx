import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import {
  getBlogPost,
  deleteBlogPost,
  getAllBlogPosts,
} from "../utils/requests";

import { useAuthContext } from "../contexts/auth-context";
import toast from "react-hot-toast";
import EditBlogModal from "../components/edit-blog-modal";
import { Helmet } from "react-helmet";

const BlogPostPage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: ({ queryKey }) => getBlogPost(queryKey[1]),
    select: (data) => data.blog,
  });

  const { mutateAsync: deleteBlog, isPending: deletePending } = useMutation({
    mutationFn: deleteBlogPost,
    onSuccess: () => {
      navigate("/blog");
      queryClient.invalidateQueries(["blogs"]);
      queryClient.invalidateQueries(["blog"]);
    },
    onError: () => {
      toast.error("Could not delete blog, try again!");
    },
  });

  const handleDeleteBlogPost = async (id) => {
    deleteBlog({ id });
  };

  return (
    <div className="flex max-lg:flex-col py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>

      <div className="min-h-[60vh] p-6 md:p-8 lg:p-10 w-full flex justify-center">
        {isLoading ? (
          <div>Loading ... </div>
        ) : (
          <div className="max-w-4xl">
            <h2 className="">{blog.title}</h2>
            <div className="mt-4 flex flex-col md:items-center md:flex-row gap-4">
              <div className="flex-center-y gap-2">
                <Avatar className="size-10 md:size-12 lg:size-14">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-base-color text-white font-semibold uppercase">
                    {blog.author.username[0]}
                  </AvatarFallback>
                </Avatar>
                <p classname="font-semibold text-lg">{blog.author.username}</p>
              </div>
              <h2 className="uppercase text-lg bg-base-color p-1 px-4 text-white font-semibold w-fit md:ml-6 lg:ml-8">
                {blog.category}
              </h2>
            </div>
            {user && (
              <div className="mt-4 flex-center-y gap-4">
                <button
                  disabled={deletePending}
                  onClick={() => handleDeleteBlogPost(blog._id)}
                  className="btn !bg-red-800"
                >
                  {deletePending ? "Deleting ... " : "Delete Post"}
                </button>
                <EditBlogModal blog={blog} />
              </div>
            )}


            <div className="max-w-[500px] max-h-[400px] mt-8 overflow-hidden">
              <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
            </div>

            <p className="mt-10 flex flex-col max-w-3xl">
              <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
                {blog.content}
              </Markdown>
            </p>
          </div>
        )}
      </div>

      {/* Latest Blog posts */}
      <LatestBlogPosts />
    </div>
  );
};

const LatestBlogPosts = () => {
  const { data: blogs, isLoading } = useQuery({
    queryFn: getAllBlogPosts,
    queryKey: ["blogs", ""],
    select: (data) => data.blogs,
  });

  return (
    <div className="min-w-[450px] lg:min-w-[500px] py-12 lg:border-l-2 border-dashed border-gray-600 pl-10">
      <h2>Latest Posts</h2>
      <div className="mt-5">
        {isLoading ? (
          <h2>Loading ... </h2>
        ) : (
          <div className="grid grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 pr-5 gap-6">
            {
              blogs.slice(0, 5).map((blog, i) => (
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
                    weekday: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>

                <a href={`/blog/${blog._id}`} className="font-semibold text-base-color underline underline-offset-2 cursor-pointer">Read more</a>
              </div>
            </div>
          ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
