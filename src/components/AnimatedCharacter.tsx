import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Anim = () => (
  <motion.h1
    className={
      "text-5xl xl:text-8xl font-bold text-zinc-950 staggered-animation"
    }
    variants={sentence}
    initial="hidden"
    animate="visible"
  >
    {"Innovate ".split("").map((char, index) => (
      <AnimatedSpan char={char} />
    ))}
    <br />
    {"Collaborate".split("").map((char, index) => (
      <AnimatedSpan char={char} />
    ))}
    <br />
    {"Accelerate ".split("").map((char, index) => (
      <AnimatedSpan char={char} />
    ))}
    <br />
    {"Create. ".split("").map((char, index) => (
      <AnimatedSpan char={char} />
    ))}
  </motion.h1>
);

function AnimatedSpan({ char }: { char: string }) {
  return (
    <>
      <motion.span variants={letter}>{char}</motion.span>
    </>
  );
}
