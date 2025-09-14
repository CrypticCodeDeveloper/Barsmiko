import { Helmet } from "react-helmet";

import PageHeader from "../components/page-header";
import FeaturedProducts from "./featured-products";
import ComingSoonProducts from "./coming-soon-products";
import WhyWeBuildTheWayWeBuild from "./why-we-build-the-way-we-do";
import PageCTA from "../components/page-cta";

const ProductsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Barsmiko Products — Business Wallet by Barsmiko | Financial Tools for
          Entrepreneurs
        </title>
      </Helmet>

      <PageHeader
        sectionTitle="OUR PRODUCTS"
        sectionSubTitle="Tools That Power Smarter Business"
        text=" From financial clarity to operational flow, our products are built to make business easier, not harder. Explore PapayMoni and what’s next from Barsmiko."
        btns={[
          {
            text: "Join the PapayMoni Waitlist",
            onClick: () => alert("Join the PapayMoni Waitlist"),
          },
          {
            text: "Talk to Our Product Team",
            onClick: () => alert("Talk to Our Product Team"),
          },
        ]}
      />
      <FeaturedProducts />
      <ComingSoonProducts />
      <WhyWeBuildTheWayWeBuild />
      <PageCTA
        title="Be the First to Try What We’re Building."
        subTitle="Get early access, updates, and insider perks on PapayMoni and our future product drops."
        btns={[
          {
            text: "Join the Waitlist",
            onClick: () => alert("Join the Waitlist"),
          },
          {
            text: "Talk to Our Product Team",
            onClick: () => alert("Talk to Our Product Team"),
          },
        ]}
      />
    </div>
  );
};

export default ProductsPage;