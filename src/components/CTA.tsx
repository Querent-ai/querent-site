import { FunctionComponent, useState } from "react";
import styles from "./CTA.module.css";

const CTA: FunctionComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Assuming you have Firebase initialized and configured
    // Replace 'firebaseFunctionToSendEmail' with your actual function to send email to Firebase
    try {
      await firebaseFunctionToSendEmail(email);
      alert("Email sent successfully!");
      setEmail(""); // Clear email input after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  // Replace 'firebaseFunctionToSendEmail' with your actual function to send email to Firebase
  const firebaseFunctionToSendEmail = async (email: string) => {
    // Implement your Firebase logic here to send email
    // For example, you can use Firebase Cloud Functions, Firebase Auth, etc.
    // This function should handle sending email to Firebase
    console.log("Sending email to Firebase:", email);
    // Example Firebase function call:
    // await firebase.functions().httpsCallable('sendEmail')({ email });
    // Ensure that your Firebase setup and function invocation are correct
  };

  return (
    <section className={styles.cta} data-scroll-to="cTA">
      <div className={styles.cTAText}>
        <h1 className={styles.ctaTagline}>Ready to see what Querent can do?</h1>
        <div className={styles.ctaText}>
          {" "}
          Sign up to learn more about our MVP.
        </div>
        <form className={styles.formField} onSubmit={handleSubmit}>
          <div className={styles.teamTag}>
            <div className={styles.enterYourEmail}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <button type="submit" className={styles.signUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className={styles.footerFrame}>
        <img
          className={styles.ctaImageIcon}
          loading="lazy"
          alt=""
          src="/cta-image@2x.png"
        />
      </div>
    </section>
  );
};

export default CTA;
