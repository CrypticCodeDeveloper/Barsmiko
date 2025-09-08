import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CreateBlogForm from "./create-blog-form"


const EditBlogModal = ({
    blog
}) => {
  return (
   <Dialog>
  <DialogTrigger>
    <button  className="btn">Edit Post</button>
  </DialogTrigger>
  <DialogContent>
    <CreateBlogForm mode="edit" blog={blog} />
  </DialogContent>
</Dialog>
  )
}

export default EditBlogModal