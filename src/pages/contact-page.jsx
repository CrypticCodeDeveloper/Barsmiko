import ContactUsForm from "../components/contact-us-form";
import SectionHeader from "../components/section-header";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      <SectionHeader
        sectionTitle="CONTACT US"
        sectionSubTitle="Let’s Build Something Smart Together."
        text="Got questions? Big ideas? Looking to partner or build something custom?
 Fill out the form our team would love to hear from you."
      />
      <Form />
    </div>
  );
};

const Form = () => {

    const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Barsmiko HQ, Lagos, Nigeria",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@barsmiko.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (XXX) XXX XXXX",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri: 9am–5pm WAT",
  },
];

    
  return (
    <div className="section flex-row px-10">

        <div>
            <p className="sub-section-heading">We are Just a Message Away.</p>
            <ContactUsForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {
                contactInfo.map((info, i) => (
                    <div key={`contact-info-${i}`} className="flex gap-4">
                        <div className="bg-base-color text-white w-[50px] h-[50px] rounded-full flex-center-all">
                            <info.icon className="size-6" />
                        </div>
                        <div>
                            <p className="font-semibold">{info.label}</p>
                            <p className="text-gray-600">{info.value}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default ContactPage;
