import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CreateBlogForm from "../../admin/components/create-blog-form"


const EditBlogModal = ({
    blog
}) => {
  return (
   <Dialog>
  <DialogTrigger>
    <button  className="btn">Edit Post</button>
  </DialogTrigger>
  <DialogContent className="overflow-y-auto">
      <div className="max-h-[70vh] pb-10">
        <CreateBlogForm mode="edit" blog={blog} />
      </div>
  </DialogContent>
</Dialog>
  )
}

export default EditBlogModal