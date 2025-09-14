import { useRef, useState } from "react";
import SectionHeader from "../components/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useQuery } from "@tanstack/react-query"

import { getAllBlogPosts } from "../utils/requests";

import { Helmet } from "react-helmet";
import { Search } from "lucide-react"

const BlogsPage = () => {

  return (
    <div>

      <Helmet>
            <meta charSet="utf-8" />
            <title>Blogs</title>
        </Helmet>

      <SectionHeader
        sectionTitle="LATEST NEWS AND ARTICLES"
        sectionSubTitle="Insights at the Speed of Tech"
        text="From industry deep dives to practical how-tos, our blog is where ideas meet action. Whether you’re a founder, developer, or decision-maker, you’ll find content designed to help you build stronger systems and grow without chaos."
      />
      <AllBlogs />
    </div>
  );
};

const SearchInput = ({setSearchTerm}) => {

  const searchRef = useRef()

  return (
    <div className="text-black border-2 border-base-color p-1 px-6 flex-center-y min-w-[300px] md:min-w-[450px] lg:min-w-[550px] h-[50px] my-3 ">
      <input type="text" ref={searchRef} placeholder="Search for blogs ..." className="flex-1 outline-none h-full text-lg font-semibold" />
      <Search onClick={() => setSearchTerm(searchRef.current.value)} className="text-base-color hover:scale-105 transition-all cursor-pointer" />
    </div>
  )
}

const AllBlogs = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const {data: blogs, isLoading} = useQuery({
    queryKey: ["blogs", searchTerm],
    queryFn: ({ queryKey }) => getAllBlogPosts(queryKey[1]),
    select: (data) => data.blogs,
  })

  return (
    <div  className="section px-4 !py-20">
      <SearchInput setSearchTerm={setSearchTerm} />
      <div className="mt-10">
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
            <h2 className="text-base-color">No blog posts</h2>
          )
        )
      }
    </div>
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
                <p className="font-semibold">{new Date(created_at).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}</p>
            </div>
          </a>
  )
}

export default BlogsPage;
