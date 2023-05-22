import { motion } from "framer-motion";
const Division = ({ animate, initial, classStyles, pageProps }: any) => {
  return (
    <motion.div animate={animate} initial={initial} className={classStyles}>
      {pageProps}
    </motion.div>
  );
};

export default Division;
