import ContactForm from "@/components/ContactForm";
import ContactInfos from "@/components/ContactInfos";
import Section from "@/components/Section";
import Spacing from "@/components/Spacing";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactPage = () => {
  const contactData = [
    {
      icons: <Phone />,
      title: "Phone",
      info: "+1 234 567 890",
    },
    {
      icons: <Mail />,
      title: "Email",
      info: "test@example.com",
    },
    {
      icons: <MapPin />,
      title: "Address",
      info: "123 Main St, City, Country",
    },
  ];
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* left */}
        <div className="bg-secondary p-8 rounded-md">
          <h1 className="text-accent text-2xl text-center md:text-start mb-4">
            {"Let's work together"}
          </h1>
          <p className="text-white/80 text-sm text-center md:text-start mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, nihil.
          </p>
          <ContactForm />
        </div>

        {/* right */}
        <div className="flex justify-center items-center ">
          <div className="flex flex-col gap-6">
            {contactData.map((item, index) => (
              <ContactInfos
                key={index}
                icon={item.icons}
                title={item.title}
                info={item.info}
              />
            ))}
          </div>
        </div>
      </div>
      <Spacing size="md" />
    </Section>
  );
};

export default ContactPage;
