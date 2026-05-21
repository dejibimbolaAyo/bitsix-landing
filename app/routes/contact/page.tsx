import React from "react";

import ContactContactForm from "@app/components/blocks/ContactContactForm/ContactForm";
import ContactHero from "@app/components/blocks/ContactHero/Hero";
import type {
  ContactQuery,
  ContactBlocksContactHero,
  ContactBlocksContactContactForm,
} from "@tina/__generated__/types";

interface PageProps {
  data: ContactQuery;
}

export const ContactPage: React.FC<PageProps> = ({ data }) => {
  const page = data.contact;

  const Hero = page.blocks?.find(
    (block) => block?.__typename === "ContactBlocksContactHero"
  ) as ContactBlocksContactHero | undefined;
  const ContactForm = page.blocks?.find(
    (block) => block?.__typename === "ContactBlocksContactContactForm"
  ) as ContactBlocksContactContactForm | undefined;

  return (
    <div>
      {Hero && <ContactHero data={Hero} />}
      {ContactForm && <ContactContactForm data={ContactForm} />}
    </div>
  );
};

export default ContactPage;
