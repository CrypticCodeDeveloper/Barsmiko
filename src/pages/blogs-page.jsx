import SectionHeader from "../components/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useQuery } from "@tanstack/react-query"

import { getAllBlogPosts } from "../utils/requests";

const BlogsPage = () => {

  return (
    <div>
      <SectionHeader
        sectionTitle="LATEST NEWS AND ARTICLES"
        sectionSubTitle="Insights at the Speed of Tech"
        text="From industry deep dives to practical how-tos, our blog is where ideas meet action. Whether you’re a founder, developer, or decision-maker, you’ll find content designed to help you build stronger systems and grow without chaos."
      />
      <AllBlogs />
    </div>
  );
};

const AllBlogs = () => {

  const {data: blogs, isLoading} = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogPosts,
    select: (data) => data.blogs,
  })

  return (
    <div className="section px-4 !py-20">
      {
        isLoading ? (
          <h2 className="text-base-color">Blog posts loading ... </h2>
        ) : (
          blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <BlogCard title={blog.title}
          id={blog._id}
           preview_text={blog.preview_text}
            category={blog.category} 
            cover_image={blog.cover_image}
            author={blog.author.username}
            created_at={blog.createdAt}
             key={`Blog-post-card-${i}`}
              />
        ))}
      </div>
          ) : (
            <h2 className="text-base-color">There is no blog post yet</h2>
          )
        )
      }
    </div>
  );
};

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
                {title.length > 60  ? `${title.slice(
                  0,
                  60
                )}
                ...` : title }
              </h2>
              <p className="mt-4">{preview_text}...</p>

              <div className="mt-4 flex-center-y gap-1">
                <Avatar className="size-12">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-base-color bg-white font-semibold uppercase">{author[0]}</AvatarFallback>
                </Avatar>
                <p className="text-lg">By <span className="font-semibold underline">{author}</span></p>
              </div>
            </div>
            <div className="p-4">
                <p className="font-semibold">{new Date(created_at).toUTCString()}</p>
            </div>
          </a>
  )
}

export default BlogsPage;
