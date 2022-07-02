import { motion, AnimatePresence } from 'framer-motion';

function FadeInWhenVisible({ children }) {
  return (
    // <motion.div
    //   initial="hidden"
    //   whileInView="visible"
    //   viewport={{ once: true }}
    //   transition={{ ease: 'easeInOut', duration: 0.3 }}
    //   variants={{
    //     visible: { opacity: 1, y: 0 },
    //     hidden: { opacity: 0, y: 25 },
    //   }}
    // >
    <AnimatePresence>{children}</AnimatePresence>
    // </motion.div>
  );
}

export default FadeInWhenVisible;
