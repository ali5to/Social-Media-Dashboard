import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import dataChart from "./data";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`modal overflow-y-auto fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed h-full w-full bg-black opacity-60"
        onClick={onClose}
      ></div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0, duration: 0.3 },
        }}
        className="w-[90%] max-w-[62.5rem] relative my-auto max-md:py-10"
      >
        <div className="top-bg rounded-t-2xl pt-16 md:pt-10 px-4 md:px-9 lg:px-12 pb-8 relative">
          <button
            className="secondary-text absolute top-6 right-6 hover:scale-110 transition-all duration-300"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="font-bold text-2xl md:text-4xl max-md:text-center mb-3 main-text">
            Facebook followers
          </h2>
          <div className="flex flex-col w-full">
            <div className="flex items-center max-md:justify-center gap-2 mb-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  fill="#178FF5"
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                />
              </svg>

              <span className="text-sm font-bold secondary-text">@nathanf</span>
            </div>
            <div className="flex max-md:flex-col gap-8">
              <p className="flex max-md:flex-col items-center justify-center md:gap-4">
                <span className="text-[2.5rem] leading-10 font-bold main-text">
                  1987
                </span>{" "}
                <span className="text-sm leading-4 md:max-w-[4.375rem] modal-secondary-text">
                  Total followers
                </span>
              </p>
              <div className="flex justify-between md:gap-8">
                <div className="flex items-center max-md:flex-col justify-center md:gap-4 max-md:w-1/2">
                  <span className="text-[2.5rem] flex items-center gap-[0.375rem] leading-10 font-bold text-lime-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M0 4l4-4 4 4z"
                      />
                    </svg>
                    81
                  </span>{" "}
                  <span className="text-sm modal-secondary-text leading-4 max-md:text-center max-w-[9rem] md:max-w-[7.25rem]">
                    New followers in the past 10 days
                  </span>
                </div>

                <div className="flex items-center  max-md:flex-col justify-center md:gap-4 max-md:w-1/2">
                  <span className="text-[2.5rem] flex items-center gap-[0.375rem] leading-10 font-bold text-lime-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="4"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M0 4l4-4 4 4z"
                      />
                    </svg>
                    12
                  </span>{" "}
                  <span className="text-sm modal-secondary-text max-md:text-center leading-4 max-w-[6.25rem]">
                    New followers<br></br>TODAY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-bg rounded-b-2xl pt-7 pb-8 md:pr-9 lg:pr-12 w-full">
          <h3 className="text-lg secondary-text mb-4 md:mb-7 pl-4 md:pl-9 lg:pl-12">
            May 4 - May 13
          </h3>
          <div className="w-full h-[18.75rem] relative md:pl-4 lg:pl-6 transition-all duration-500">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart
                height={400}
                width={1000}
                data={dataChart}
                margin={{
                  top: 20,
                  right: 20,
                  left: -15,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis ticks={[0, 2, 4, 6, 8, 10, 12]} />
                <Tooltip
                  labelFormatter={() => ``}
                  formatter={(value) => [`${value} new followers`]}
                  contentStyle={{
                    padding: "0px 10px",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 9, strokeWidth: 2, stroke: "#8884d8" }} // Estilos del dot activo
                  dot={{
                    r: 5,
                    strokeWidth: 2,
                    stroke: "#8884d8",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
