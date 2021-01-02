import { motion } from "framer-motion";

interface Props {}

const Blog = ({}: Props) => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: { ...transition, duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={thumbnailVariants}
      className=" relative overflow-auto w-full"
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {Array(10)
        .fill(1)
        .map((_, i) => (
          <div key={i}>asdasd</div>
        ))}
    </motion.div>
  );
};

export default Blog;
