import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/auth-context";
import { LogOut } from "lucide-react";

import { Helmet } from "react-helmet";
import CreateBlogForm from "./components/create-blog-form";
import PageHeader from "../components/page-header";


const AdminPage = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuthContext();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Barsmiko Admin</title>
      </Helmet>

      <div className="w-full h-12 flex-center-y px-8">
        <h3>
          Welcome <span className="text-base-color">{user?.username}</span>
        </h3>
      </div>
      <PageHeader
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

export default AdminPage;
