import React from "react";

function Contact() {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="contact">

      <button
        className="mail-btn"
        onClick={() => (window.location = "mailto:judith.crasser@web.de")}>
        Contact Me
      </button>
      
      <p className="underline">
        Imprint
      </p>
      <p>
        Copyright:
      </p>
      <p>
        The contents and works on these pages are subject to German copyright
        law. The reproduction, editing, distribution and any kind of
        exploitation outside the limits of copyright require the written consent
        of the author.
      </p>
      <p>
        Liability notice:
      </p>
      <p>
        Despite careful control of the content, no liability is assumed for the
        content of external links. The operators of the linked pages are solely
        responsible for their content.
      </p>
      <p>
        © {year} Judith Crasser
      </p>
    </div>
  );
}

export default Contact;
