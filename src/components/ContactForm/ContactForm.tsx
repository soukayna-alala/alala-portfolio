import styles from "./ContactForm.module.css";
import Swal from "sweetalert2";
import { useRef } from "react";
import { useState } from "react";

export function ContactForm() {
  const { fieldMessage, field, formSection, form, button, error } = styles;

  const regEx = /^[a-zA-z0-9.-_+]+@[a-z]+\.[a-z]{2,4}$/;
  const [emailError, setEmailError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const messageRef = useRef<HTMLTextAreaElement>(null!);
  const isFormValid = emailError.length ? true : false;

  function emailValidation() {
    const emailValue = emailRef.current.value;
    const isEmailValid = regEx.test(emailValue);
    setEmailError(isEmailValid ? "" : "Email is not valid");
  }

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
    <>
      {/*delete me*/}
      <div>emailError = {JSON.stringify(emailError)}</div>
      {/*delete me*/}

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
              onChange={emailValidation}
            />
            {emailError.length ? (
              <div className={error}>Email is not valid</div>
            ) : null}
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
          <button
            className={button}
            type="submit"
            onClick={emailValidation}
            disabled={isFormValid}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
