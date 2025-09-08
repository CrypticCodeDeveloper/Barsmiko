import SectionHeader from "../components/section-header";
import { LogOut } from "lucide-react";

import { useAuthContext } from "../contexts/auth-context";

import CreateBlogForm from "../components/create-blog-form";
import { useNavigate } from "react-router";

const AdminPage = () => {
 const navigate = useNavigate()
 const { logout } = useAuthContext()


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
      onClick: () => navigate("/"),
    },
    {
      text: "Logout",
      icon: <LogOut />,
      onClick: () => logout(),
      className: "!bg-red-500",
    },
  ]}
/>

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
