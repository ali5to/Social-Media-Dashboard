import CountUp from "react-countup";
import { Movement } from ".";
import { motion } from "framer-motion";

interface Props {
  user: string;
  number: number;
  metric: string | null;
  description: string;
  increment: boolean;
  movement: number;
  movementMetric: string;
  icon: string;
  sn: string;
  colorClass: string;
  onClick: () => void;
}
const MainCard = ({
  user,
  number,
  metric,
  description,
  increment,
  movement,
  movementMetric,
  icon,
  sn,
  colorClass,
  onClick,
}: Props) => {
  return (
    <motion.div
      className="card-bg relative overflow-hidden rounded-md py-9 cursor-pointer transition-all duration-300"
      aria-label={`${description} of ${user} on ${sn}`}
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { delay: 0 },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className={`${colorClass} w-[110%] h-1 absolute top-0 -left-[0.625rem]`}
      ></motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.75 } }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-2 w-full mb-6">
          <div
            aria-label={`${sn} icon`}
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
          <span className="text-sm font-bold secondary-text">{user}</span>
        </div>
        <p className="flex flex-col items-center justify-center mb-5">
          <span className="font-bold main-text text-6xl">
            <CountUp end={number} duration={1.5} delay={0.5} />
            {metric && metric}
          </span>
          <span className="secondary-text tracking-[0.2em] uppercase">
            {description}
          </span>
        </p>
        <Movement
          increment={increment}
          movement={movement}
          movementMetric={movementMetric}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainCard;
