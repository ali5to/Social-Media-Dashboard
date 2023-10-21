interface Props {
  increment: boolean;
  movement: number;
  movementMetric: string;
}

const Movement = ({ increment, movement, movementMetric }: Props) => {
  return (
    <div
      className={`flex items-center gap-1  text-center justify-center text-xs font-bold ${
        increment ? "text-lime-green" : "text-bright-red"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="4"
        className={`${!increment && "rotate-180"}`}
      >
        <path fill="currentColor" fillRule="evenodd" d="M0 4l4-4 4 4z" />
      </svg>

      <span>
        {movement}
        {movementMetric}
      </span>
    </div>
  );
};

export default Movement;
