import { Helmet } from "react-helmet";
import PageHeader from "../components/page-header";

import Form from "./form-section";

const ContactPage = () => {
  return (
    <div>


    <Helmet>
            <meta charSet="utf-8" />
            <title>Contact Barsmiko | Build With Us</title>
        </Helmet>
      
      <PageHeader
        sectionTitle="CONTACT US"
        sectionSubTitle="Let’s Build Something Smart Together."
        text={<p>Got questions? Big ideas? Looking to partner or build something custom? <br /><br />
 Fill out the form our team would love to hear from you.</p>}
      />
      <Form />
    </div>
  );
};


export default ContactPage;
