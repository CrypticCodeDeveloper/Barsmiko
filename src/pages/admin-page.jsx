import { useState } from "react";
import SectionHeader from "../components/section-header"
import {  LogOut } from "lucide-react"

import { useAuthContext } from "../contexts/auth-context";

import { Editor, EditorState } from "draft-js";

const AdminPage = () => {

    const [value, setValue] = useState(null)

  return (
    <div>
        <AdminNav />
    <SectionHeader
        sectionTitle="ADMIN PAGE"
        sectionSubTitle="The Barsmiko Powerhouse"
        text="From here, you can post, edit and delete blogs."
        btns={[
          {
            text: "Back to home page",
            onClick: () => alert("Back to home page"),
          },
          {
            text: `Logout`,
            icon: <LogOut />,
            onClick: () => alert("Logout"),
            className: "!bg-red-500"
          },
        ]}
      />
      <Editor />
      </div>
  )
}

const AdminNav = () => {

    const { user } = useAuthContext()

    return (
        <div className="w-full h-12 flex-center-y px-8">
            <h3>Welcome <span className="text-base-color">{user?.username}</span></h3>
        </div>
    )
}

export default AdminPage