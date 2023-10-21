import { Movement } from ".";
import { motion } from "framer-motion";
interface Props {
  title: string;
  number: number;
  metric: string | null;
  icon: string;
  movement: number;
  movementMetric: string;
  increment: boolean;
  sn: string;
  onClick: () => void;
}
const OverviewCard = ({
  title,
  number,
  metric,
  icon,
  movement,
  movementMetric,
  increment,
  sn,
  onClick,
}: Props) => {
  return (
    <motion.div
      className="card-bg relative overflow-hidden rounded-md py-6 px-4 lg:px-9 lg:py-8 cursor-pointer transition-all duration-300"
      aria-label={`${title} on ${sn}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0 },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.75 },
        }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-7">
          <h3 className="text-sm font-bold secondary-text">{title}</h3>
          <div
            aria-label={`${sn} icon`}
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-between">
          <span className="font-bold text-4xl leading-9 main-text">
            {number}
            {metric && metric}
          </span>

          <Movement
            increment={increment}
            movement={movement}
            movementMetric={movementMetric}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OverviewCard;
