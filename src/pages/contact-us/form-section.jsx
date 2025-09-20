import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactUsForm from "./components/form";

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
      value: "info@barsmiko-inc.net",
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
        <p className="sub-section-heading !tracking-normal">
          We are Just a Message Away
        </p>
        <ContactUsForm />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {contactInfo.map((info, i) => (
          <div key={`contact-info-${i}`} className="flex gap-4">
            <div className="bg-base-color text-white w-[50px] h-[50px] rounded-full flex-center-all">
              <info.icon className="size-6" />
            </div>
            <div>
              <p className="font-semibold">{info.label}</p>
              <p className="text-gray-600">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
