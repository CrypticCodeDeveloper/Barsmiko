import { useState } from "react";
import SectionHeader from "../components/section-header";
import { LogOut } from "lucide-react";

// import { useEditor, EditorContent } from '@tiptap/react'
// import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
// import StarterKit from '@tiptap/starter-kit'

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import { useAuthContext } from "../contexts/auth-context";
import FileUpload from "../components/file-upload";
import CreateBlogForm from "../components/create-blog-form";

// import { Editor, EditorState } from "draft-js";

const AdminPage = () => {
  const [value, setValue] = useState(null);


  return (
    <div>
      <AdminNav />
      <SectionHeader
  sectionTitle="Admin Dashboard"
  sectionSubTitle="Manage Barsmiko with Ease"
  text="Create, update, and organize your blog posts—all in one place. Keep your content fresh and your readers engaged."
  btns={[
    {
      text: "Back to Homepage",
      onClick: () => alert("Back to home page"),
    },
    {
      text: "Logout",
      icon: <LogOut />,
      onClick: () => alert("Logout"),
      className: "!bg-red-500",
    },
  ]}
/>

      {/* <div className="m-10 max-w-[500px] flex flex-col gap-6">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      <FileUpload />
      </div> */}

     <div className="p-10">
       <CreateBlogForm />
     </div>
    </div>
  );
};

const AdminNav = () => {
  const { user } = useAuthContext();

  return (
    <div className="w-full h-12 flex-center-y px-8">
      <h3>
        Welcome <span className="text-base-color">{user?.username}</span>
      </h3>
    </div>
  );
};

export default AdminPage;
