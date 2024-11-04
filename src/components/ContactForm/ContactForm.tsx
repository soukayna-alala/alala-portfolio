import styles from "./ContactForm.module.css";

export function ContactForm() {
  const { fieldMessage, field } = styles;

  return (
    <section>
      <form>
        <div>
          <input
            type="text"
            className={field}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className={field}
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <textarea
            className={fieldMessage}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Your Message</button>
      </form>
    </section>
  );
}
