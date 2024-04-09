import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.link}
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
