import { motion } from "framer-motion";
import { FcAbout } from "react-icons/fc";

interface Props {}

const Nav = ({}: Props) => {
  const transition = { duration: 0.15, ease: [0.43, 0.13, 0.23, 0.96] };

  const variants = {
    initial: { y: "-100%", opacity: 0 },
    enter: { y: "0%", opacity: 1, transition },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { ...transition, duration: 0.1 },
    },
  };
  return (
    <motion.nav
      exit="exit"
      initial="initial"
      animate="enter"
      variants={variants}
      className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14"
    >
      <h1 className="font-semibold text-lg">Sina</h1>
      <span className="flex-1"></span>
      <span className="ms-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full border-2 px-2 py-1 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
        />
      </span>
      <button className=" border rounded-full me-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <FcAbout />
      </button>
    </motion.nav>
  );
};

export default Nav;
