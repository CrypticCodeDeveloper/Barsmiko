import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogPosts } from "../../utils/requests";

import { Helmet } from "react-helmet";

import BlogCard from "./components/blog-card";
import SearchBlogInput from "./components/search-blog-input";
import PageHeader from "../components/page-header";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs</title>
      </Helmet>

      <PageHeader
        sectionTitle="LATEST NEWS AND ARTICLES"
        sectionSubTitle="Insights at the Speed of Tech"
        text="From industry deep dives to practical how-tos, our blog is where ideas meet action. Whether you’re a founder, developer, or decision-maker, you’ll find content designed to help you build stronger systems and grow without chaos."
      />
      <AllBlogs />
    </div>
  );
};

const AllBlogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs", searchTerm],
    queryFn: ({ queryKey }) => getAllBlogPosts(queryKey[1]),
    select: (data) => data.blogs,
  });

  return (
    <div className="section px-4 !py-20">
      <SearchBlogInput setSearchTerm={setSearchTerm} />
      <div className="mt-10">
        {isLoading ? (
          <h2 className="text-base-color">Blog posts loading ... </h2>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <BlogCard
                title={blog.title}
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
        )}
      </div>
    </div>
  );
};

export default Blogs;
