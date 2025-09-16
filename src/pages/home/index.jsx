
import HeroSection from "./hero";
import WhatWeDo from "./what-we-do";
import WhoWeHelp from "./who-we-help";
import WhyBarsmiko from "./why-barsmiko";
import Partners from "./partners";
import FAQs from "./faqs";
import PageCTA from "../components/page-cta";

import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Barsmiko — Digital Systems That Scale With You</title>
      </Helmet>
      <HeroSection />
      <WhatWeDo />
      <WhoWeHelp />
      <WhyBarsmiko />
      <Partners />
      <FAQs />
      <PageCTA
        title="Ready to simplify your hustle and scale with ease?"
        subTitle="Let Barsmiko be your unfair advantage."
        btns={[
          {
            text: "Start Your Journey",
            onClick: () => alert("Start Your Journey"),
          },
          {
            text: "Talk to Our Team",
            onClick: () => navigate("/contact"),
          },
        ]}
      />
    </section>
  );
};

export default HomePage;