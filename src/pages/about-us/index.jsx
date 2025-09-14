import { Helmet } from "react-helmet";

import PageHeader from "../components/page-header";
import OurMission from "./our-mission";
import BuildTheFuture from "./build-the-future";
import OurCoreValues from "./our-core-values";
import MeetTheBrands from "./meet-the-brands";
import PageCTA from "../components/page-cta";

const AboutUsPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Us — Barsmiko | Innovation That Works for Real Businesses
        </title>
      </Helmet>

      <PageHeader
        sectionTitle="ABOUT US"
        sectionSubTitle="Technology That Moves Businesses Forward"
        text={
          <p>
            Barsmiko started with a simple belief: technology should work for
            real businesses, not the other way around. <br />
            We have seen the hustle: messy spreadsheets, manual tracking, hours
            wasted on what should be seamless. That’s where we come in. We
            design systems that eliminate chaos, automate the boring stuff, and
            create clarity for people who just want to run their business
            better. From small teams to scaling startups, we help bold builders
            simplify, scale, and thrive.
          </p>
        }
      />
      <OurMission />
      <BuildTheFuture />
      <OurCoreValues />
      <MeetTheBrands />
      <PageCTA
        title="Let’s Build Something That Works"
        subTitle="We don’t just build digital products,
 We build the systems that build businesses.
"
        btns={[
          {
            text: "Start Building With Barsmiko",
            onClick: () => alert("Start Building With Barsmiko"),
          },
          {
            text: "Talk to Our Team",
            onClick: () => alert("Talk to our team"),
          },
        ]}
      />
    </div>
  );
};

export default AboutUsPage;
