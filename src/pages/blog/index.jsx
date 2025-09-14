import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/auth-context";
import {
  getBlogPost,
  deleteBlogPost,
} from "../../utils/requests";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { Helmet } from "react-helmet";
import EditBlogModal from "./components/edit-blog-modal";
import LatestBlogPosts from "./latest-blog-posts";
import toast from "react-hot-toast";

const Blog = () => {
  
  const queryClient = useQueryClient();
  const { user } = useAuthContext();
  const { id } = useParams();
  const navigate = useNavigate();


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

export default Blog;
