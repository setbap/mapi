import { motion } from "framer-motion";
import Footer from "../../template/Footer";
interface Props {}

const ContactUs = ({}: Props) => {
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
      className="w-full h-full relative flex flex-col overflow-auto"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <section className="text-gray-600 body-font flex-1">
        <div className="container px-5 py-4 mx-auto flex lg:flex-row flex-col">
          <div className="lg:w-1/2 flex-col   rounded-lg  sm:mx-3  flex items-end justify-start relative">
            <iframe
              width="100%"
              height="400ox"
              className="inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.0926864293749!2d52.68007323533504!3d36.5619072599919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMzJzQyLjciTiA1MsKwNDAnNDkuNyJF!5e0!3m2!1sen!2snl!4v1609815967732!5m2!1sen!2snl"
              style={{ filter: " contrast(1.1) opacity(0.7)" }}
            ></iframe>
            <div className="   bg-white relative flex flex-wrap -mt-8 py-6 mx-4 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className=" font-semibold text-gray-900 tracking-widest text-xs">
                  آدرس:
                </h2>
                <p className="mt-1">
                  مازندران- بابل- خیابان شریعتی- دانشگاه صنعتی نوشیروانی بابل-
                  ساختمان عمران- طبقه اول- دفتر انجمن GIS ایران (شعبه مازندران)
                </p>
              </div>
              <div className="flex space-y-4 lg:flex-col sm:flex-row flex-col lg:w-1/2 w-full justify-start items-start px-6 mt-4 lg:mt-0">
                <div className="w-full ">
                  <h2 className=" font-semibold text-gray-900 tracking-widest text-xs">
                    ایمیل:
                  </h2>
                  <a className="text-yellow-500 leading-relaxed pt-1">
                    shomalGIS@gmail.com
                  </a>
                </div>
                <div className="w-full ">
                  <h2 className=" font-semibold w-full text-gray-900 tracking-widest text-xs lg:mt-4">
                    تلفن:
                  </h2>
                  <div className="leading-relaxed w-full pt-1 ">
                    011-32332071 داخلی 1540
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-40 mt-4  sm:h-28 w-10 block lg:hidden" />
          <div className="lg:w-1/2   flex flex-col md:ms-auto w-full px-2 lg:py-8 mt-8 ">
            <h2 className="text-gray-900 text-lg mb-1 font-medium ">
              ارسال نظر
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                نام *
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                پست الکترونيک
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                پیام
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              ارسال
            </button>
            <p className="text-xs text-gray-500 mt-3">
              نظر شما به هیچ وجه امکان عمومی شدن در قسمت نظرات را ندارد، و تنها
              راه پاسخگویی به آن نیز از طریق پست الکترونیک می‌باشد. بنابراین در
              صورتیکه مایل به دریافت پاسخ هستید، پست الکترونیک خود را وارد کنید.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default ContactUs;
