import { FunctionComponent, SetStateAction, useState } from 'react';
import styles from './CTA.module.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyDMDretkimMaVDywt6kDZSWfakMrw09boQ",
  authDomain: "querent-emails.firebaseapp.com",
  projectId: "querent-emails",
  storageBucket: "querent-emails.appspot.com",
  messagingSenderId: "153818766847",
  appId: "1:153818766847:web:57127857d44544ab4bdbca",
  measurementId: "G-CSGMMDSSHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CTA: FunctionComponent = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'querentemails'), { email });
      alert('Email submitted successfully!');
      setEmail(''); // Clear input after submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section className={styles.cta} data-scroll-to="cTA">
      <div className={styles.cTAText}>
        <h1 className={styles.ctaTagline}>Ready to see what Querent can do?</h1>
        <div className={styles.ctaText}>Sign up to learn more about our innovative framework.</div>
        <form className={styles.formField} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.enterYourEmail}
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className={styles.imageContainer}>Sign Up</button>
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
