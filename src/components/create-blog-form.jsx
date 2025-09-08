
import { useForm, Controller } from "react-hook-form";
import { Input } from "../components/ui/input";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { createBlogPost } from "../utils/requests";
import toast from "react-hot-toast";

const CreateBlogForm = () => {

  const { register , handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    const blog = {
        ...data,
        cover_image: data.cover_image[0],
    }

    try {
        const blogResponse = await createBlogPost(blog);
        toast.success(blogResponse?.message)
        console.log(blogResponse);
    } catch (error) {
        toast.error("Failed to create blog post")
    }

  };

  return (
    <div>
      <h3 className="text-base-color mb-4">Create a new blog post</h3>

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

        <button className="btn" type="submit">
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
