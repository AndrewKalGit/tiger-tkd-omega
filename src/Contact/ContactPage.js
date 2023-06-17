import React from "react";

import ContactOptions from "./ContactOptions";
import ContactLocation from "./ContactLocation";

function ContactPage(props) {
  return (
    <section>
      <ContactOptions />
      <ContactLocation />
    </section>
  );
}

export default ContactPage;
