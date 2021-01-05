import { motion } from "framer-motion";

interface Props {
  selectedId: string;
}

const BlogItemSelected = ({ selectedId }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className=" w-full"
        layoutId={`layout-${selectedId}`}
      >
        <motion.div
          layoutId={`main-${selectedId}`}
          className="h-full  bg-white  "
        >
          <div className="lg:h-48 md:h-36 w-full relative">
            <motion.img
              layoutId={`img-${selectedId}`}
              style={{ filter: "blur(6px)" }}
              className=" lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://thumbs.dreamstime.com/z/earth-globe-family-hands-world-environment-day-concept-elements-image-furnished-nasa-172933016.jpg"
              alt="blog"
            />

            <h1 className="text-green-800 absolute bottom-12 right-4  text-lg font-bold  mb-3">
              سامانه اطلاعات مکانی تحت وب
            </h1>
            <h2 className="absolute  bottom-4 right-4 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
          </div>
          <motion.div layoutId={`category-${selectedId}`} className="p-6">
            <motion.div
              layoutId={`link-${selectedId}`}
              className="flex items-center flex-wrap "
            >
              <span className="text-green-700 ms-3 inline-flex items-center lg:me-auto md:me-0 me-auto leading-none text-sm pe-3 my-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </motion.div>
          </motion.div>
          <p className="md:w-9/12 sm:w-10/12 w-11/12 text-justify max-w-screen-xl tracking-wide leading-8 text-lg mx-auto ">
            استان مازندران با مساحتی برابر با 23756.4 کیلومتر مربع،حدود 1.46
            درصد از مساحت کشور را در بر داشته و از نظر وسعت رتبه هجدهم را در بین
            استان­های کشور به خود اختصاص داده است. این استان شمالی از لحاظ جمعیت
            یکی از پرتراکم ترین مناطق ایران بوده و بر اساس سرشماری سال 1395،
            جمعیت استان مازندران بالغ بر 3283582 نفر می­باشد. این استان بین
            مدارهای 35 درجه و 47 دقیقه تا 36 درجه و 38 دقیقه عرض شمالی و 50 درجه
            و 34 دقیقه تا 54 درجه و 10 دقیقه طول شرقی قرار گرفته است. دریای خزر
            همسایه شمالی این استان می­باشد. استان­های تهران، البرز و سمنان در
            جنوب و استان­های گیلان و گلستان به ترتیب در غرب و شرق استان قرار
            دارند. استان مازندران به دلیل قرار گرفتن در ساحل جنوبی بزرگترین
            دریاچه جهان (دریاچه خزر) و همجواری با چهار کشور ساحلی این دریا یعنی
            ترکمنستان، قزاقستان، روسیه و آذربایجان از یک سو و قرار گرفتن در شمال
            پایتخت ایران (تهران) از موقعیت جغرافیایی استراتژیکی برخوردار است. بر
            اساس آخرین تقسیمات کشوری، مازندران دارای 22 شهرستان به نام­های آمل،
            بابل، بابلسر، بهشهر، تنکابن، جویبار، چالوس، رامسر، ساری، سوادکوه،
            سوادکوه شمالی، سیمرغ،کلاردشت، قائمشهر، گلوگاه، محمود آباد، نکا، نور،
            نوشهر، فریدونکنار، عباس آباد و میاندرود، 58 شهر، 56 بخش، 131 دهستان
            و 3619 آبادی می­باشد. ساری بزرگترین شهر و مرکز مازندران می‌باشد. در
            شکل زیر موقعیت جغرافیایی این منطقه و شهرستانهای استان نشان داده شده
            است.
          </p>
        </motion.div>
        <div className="sm:h-10" />
      </motion.div>
    </>
  );
};

export default BlogItemSelected;
