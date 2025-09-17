import { Helmet } from "react-helmet";

import PageHeader from "../components/page-header";
import OurCoreServices from "./our-core-services";
import WhyChooseBarsmiko from "./why-choose-barsmiko";
import PageCTA from "../components/page-cta";

import { useNavigate } from "react-router";

const ServicesPage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Barsmiko Services — Scalable Digital Solutions for Real Businesses
        </title>
      </Helmet>

      <PageHeader
        sectionTitle="OUR SERVICES"
        sectionSubTitle="Smarter Services. Seamless Growth."
        text="At Barsmiko, we deliver the behind-the-scenes tech that moves your business forward with less friction and more precision. Whether you’re building from scratch or optimizing what already works, our systems are crafted to support scale, sustainability, and speed."
      />
      <OurCoreServices />
      <WhyChooseBarsmiko />
      <PageCTA
        title="Not Sure Where to Start? Let’s Talk.
"
        subTitle="Tell us where you are and we’ll help you figure out where to go next. Whether it’s one service or a full-stack solution, we have got the team, tools, and strategy to bring it to life.

"
        btns={[
  
          {
            text: "Book a Free Consultation",
            onClick: () => navigate("/contact"),
          },
        ]}
      />
    </div>
  );
};

export default ServicesPage;
