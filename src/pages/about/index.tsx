import { motion } from "framer-motion";

interface Props {}

const About = ({}: Props) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={thumbnailVariants}
      className="flex relative flex-1"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      about
    </motion.div>
  );
};

export default About;
