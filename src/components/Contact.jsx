import React from "react";

function Contact() {
  return (
    <div className="contact">
      <button
        className="mail-btn"
        onClick={() => (window.location = "mailto:judith.crasser@web.de")}
      >
        Contact Me
      </button>
      <p>
        <u>Imprint</u>
        <br />
        <br />
        Copyright:
        <br />
        The contents and works on these pages are subject to German copyright
        law. The reproduction, editing, distribution and any kind of
        exploitation outside the limits of copyright require the written consent
        of the author.
        <br />
        <br />
        Liability notice:
        <br />
        Despite careful control of the content, no liability is assumed for the
        content of external links. The operators of the linked pages are solely
        responsible for their content.
        <br />
        <br />© 2022 Judith Crasser
      </p>
    </div>
  );
}

export default Contact;
