import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { getBlogPost, deleteBlogPost } from "../utils/requests";

import { useAuthContext } from "../contexts/auth-context";
import toast from "react-hot-toast";
import EditBlogModal from "../components/edit-blog-modal";
import { Helmet } from "react-helmet";

import { useMutation } from "@tanstack/react-query";

const BlogPostPage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogPost(id),
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
    <div className="min-h-[60vh] p-6 md:p-8 lg:p-10 w-full flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>

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
              <p>{blog.author.username}</p>
            </div>
            <p className="font-semibold">
              {new Date(blog.createdAt).toUTCString()}
            </p>
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
          <img src={blog.cover_image} alt="" className="max-h-[60vh] mt-8" />

          <p className="mt-10 flex flex-col max-w-3xl">
            <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
              {blog.content}
            </Markdown>
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
