import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  classStyles: string;
}

const RevealText = ({ text, classStyles }: RevealTextProps) => {
  return (
    <motion.div style={{ overflow: "hidden" }} className={classStyles}>
      <motion.h1
        animate={{ y: 0 }}
        initial={{ y: 900 }}
        transition={{ delay: 2, stiffness: 300, duration: 1 }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default RevealText;
