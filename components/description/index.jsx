import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation.js";
import Rounded from "../../common/RoundedButton";
export default function Index() {
  const phrase =
    "We dig deep to understand what the space means to you, what purpose it should serve,how it should make you feel, what you want it to say";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of our passion for design positions
          us in a unique place in the interior design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <span>About Us</span>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
