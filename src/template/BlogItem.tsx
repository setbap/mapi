import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

const BlogItem = ({ id }: Props) => {
  return (
    <>
      <motion.div
        layoutId={`layout-${id}`}
        className="p-4 sm:p-2 md:w-1/2 lg:w-1/3"
      >
        <motion.div
          layoutId={`main-${id}`}
          className="h-full border-2 border-green-50 bg-white  rounded-lg overflow-hidden"
        >
          <motion.img
            layoutId={`img-${id}`}
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://thumbs.dreamstime.com/z/earth-globe-family-hands-world-environment-day-concept-elements-image-furnished-nasa-172933016.jpg"
            alt="blog"
          />
          <motion.div layoutId={`category-${id}`} className="p-6">
            <h1 className=" font-bold  text-lg  text-green-800 mb-3">
              سامانه اطلاعات مکانی تحت وب
            </h1>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed text-gray-600 mb-3">
              روش­های مختلفی برای به اشتراک گذاشتن نقشه ­ها با دیگران وجود دارد.
              بهترین راه حل برای این کار، استفاده از بستر وب یا همان نقشه­ های
              تحت وب می­باشد.
            </p>
            <motion.div
              layoutId={`link-${id}`}
              className="flex items-center flex-wrap "
            >
              <Link
                to={`/blog/${id}`}
                className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                <span>بیشتر</span>
              </Link>
              <span className="text-green-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-green-700 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default BlogItem;
