import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Leikjaskúrinn</h1>
      <p className={styles.text}>
        Leikjaskúrinn is a retro game shop that has had years of experience in
        the game shop industry. It all started one summer when an idea popped up
        to start selling old games in our garage.
      </p>
      <p className={styles.text}>
        At first it seemed quite strange for people to drop by the owner's house
        to see the inventory, but later on the business started growing and the
        garage simply wasn't big enough. That's when we went ahead and built the
        store you know today.
      </p>
      <p className={styles.text}>
        We want our customers to feel like kids again and rediscover that
        magical feeling that games bring to the table. We are passionate about
        bringing retro games back to life and would love to hear any suggestions
        you might have.
      </p>
      {/* Logo displayed at the top */}
      <div className={styles.logoWrapper}>
        <Image
          src="/images/logo.png" // Ensure your logo is located at public/images/logo.png
          alt="Leikjaskúrinn Logo"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
      </div>
    </div>
  );
}
