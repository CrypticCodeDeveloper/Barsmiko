import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../components/ui/input";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { createBlogPost, editBlogPost } from "../utils/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { id } from "zod/v4/locales";

const CreateBlogForm = ({
    mode = "create", 
    blog = {},
}) => {

  const { register , handleSubmit, control, reset } = useForm();
    // console.log(blog)

  useEffect(() => {
    const fillFields = () => {
        reset({
            title: blog?.title,
            content: blog?.content,
            category: blog?.category,
            cover_image: blog?.cover_image,
        })
    }

    if (mode === "edit") {
        fillFields()
    }
  
  }, [blog?.title, blog?.content, blog?.category, mode, blog.cover_image, reset])
  

  const {mutateAsync: createBlog, isPending: createBlogPending} = useMutation({
    mutationFn: createBlogPost,
    onError: () => {
        toast.error("Unexpected Error occured. Confirm if blog was posted and retry.")
    },
    onSuccess: () => {
        toast.success("New blog post created")
    },
    onSettled: () => reset()
  })


  const onSubmit = async (data) => {

      const blogFormData = {
          ...data,
          cover_image: data.cover_image[0],
        }
        
        if (mode === "edit" ) {
            try {
                await editBlogPost(blog?._id, blogFormData);
                toast.success("Blog post edited")
            } catch (error) {
                toast.error("Failed to edit blog post")
            }
        } else {
            createBlog(blogFormData)
        }
  };

  return (
    <div>
      <h3 className="text-base-color mb-4">{mode === "edit" ? "Edit" : "Create"} a new blog post</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="form-label">Title</label>
          <Input type="text" className="form-input" {...register("title", {
            required: "Blog title is required"
          })} />
        </div>

        <div className="flex flex-col gap-2">
          <label className="form-label">Content</label>
          <Controller 
          name="content"
          control={control}
          defaultValue=""
          rules={{required: "Content is required",}}
          render={({field}) => <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="form-label">Category</label>
          <Input
            type="text"
            className="form-input"
            {...register("category", {
                required: "Category is required"
            })}
            placeholder="e.g Entertainment, Technology, Business, e.t.c ... "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="form-label">Cover Image</label>
          <input type="file" className="border-2 border-base-color p-2" {...register("cover_image")} />
        </div>

        <button disabled={createBlogPending} className="btn disabled:bg-gray-600 disabled:hover:bg-gray-700 disabled:cursor-not-allowed" type="submit">
          {createBlogPending ? "Loading ..." : mode === "edit" ? "Edit blog post" : "Create a blog post"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
