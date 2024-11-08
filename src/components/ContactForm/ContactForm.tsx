import styles from "./ContactForm.module.css";
import Swal from "sweetalert2";
import { useRef } from "react";
import React, { useState } from "react";

export function ContactForm() {
  const { fieldMessage, field, formSection, form, button } = styles;
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const emailInput = event.target.value;
    setEmail(emailInput);
  }

  const nameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const messageRef = useRef<HTMLTextAreaElement>(null!);

  const onSubmit = async (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d20c2e5d-55b1-4797-bf63-4587401626ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      await Swal.fire({
        title: "Thank you for your submit",
        text: "We will reply to your email as soon as possible.",
        icon: "success",
      });
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <section className={formSection}>
      <form className={form} onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className={field}
            placeholder="Your Name"
            name="name"
            ref={nameRef}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className={field}
            placeholder="Your Email"
            name="email"
            ref={emailRef}
            required
          />
        </div>
        <div>
          <textarea
            className={fieldMessage}
            placeholder="Your Message"
            name="message"
            ref={messageRef}
            required
          ></textarea>
        </div>
        <button className={button} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
