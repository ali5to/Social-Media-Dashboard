import { useEffect, useState } from "react";
import { MainCard, OverviewCard, Modal, Toggle } from "./components";
import { mainCards, overviewCards } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },
};

function App() {
  /*Toggle functions*/
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  /*Modal functions*/
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="main-bg pb-20">
      <div className="top-bg">
        <div className="c-container flex max-md:flex-col-reverse items-center justify-between pt-10 pb-[10.625rem] md:pb-[12.5rem]">
          <div className="flex flex-col w-full  max-md:mt-8 max-md:text-center">
            <motion.h1
              initial={{ x: -300, opacity: 0.5 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0, duration: 0.3 },
              }}
              viewport={{ once: true }}
              className="font-bold text-4xl main-text"
            >
              Social Media Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.6 } }}
              viewport={{ once: true }}
              className="font-bold secondary-text"
            >
              Total Followers: 23,004
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
            viewport={{ once: true }}
            className="max-md:self-end max-md:scale-90"
          >
            <Toggle onClick={handleChangeTheme} theme={theme} />
          </motion.div>
        </div>
      </div>
      <div>
        <div className="c-container relative">
          <div className="w-full -mt-[7.375rem] mb-12">
            <Swiper
              {...swiperParams}
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {mainCards.map((item, i) => (
                <SwiperSlide key={i}>
                  <MainCard
                    user={item.user}
                    number={item.number}
                    metric={item.metric}
                    description={item.description}
                    increment={item.increment}
                    movement={item.movement}
                    movementMetric={item.movementMetric}
                    icon={item.icon}
                    sn={item.sn}
                    colorClass={item.colorClass}
                    onClick={openModal}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.75 } }}
              viewport={{ once: true }}
              className="text-2xl subtitle font-bold mb-6 max-md:text-center"
            >
              Overview - Today
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7">
              {overviewCards.map((item, i) => (
                <OverviewCard
                  key={i}
                  title={item.title}
                  number={item.number}
                  metric={item.metric}
                  icon={item.icon}
                  movement={item.movement}
                  movementMetric={item.movementMetric}
                  increment={item.increment}
                  sn={item.sn}
                  onClick={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default App;
