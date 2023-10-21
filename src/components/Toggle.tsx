interface Props {
  theme: string;
  onClick: () => void;
}

const Toggle = ({ theme, onClick }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="whitespace-nowrap font-bold color-text-toggle text-sm">
        Dark Mode
      </span>
      <button
        className="relative group min-w-[3.125rem] h-[1.625rem] w-full max-w-[3.125rem] rounded-full p-[3px] bg-toggle transition-all duration-300 overflow-hidden"
        onClick={onClick}
      >
        <div
          className={`absolute top-[0.1875rem] z-10 h-5 w-5 top-bg rounded-full left-auto right-auto transition-all duration-300  ${
            theme === "light" ? "" : "translate-x-[120%]"
          }`}
        ></div>
        <div className="absolute top-0 w-[110%] -left-[5%] bg-toggle-gradient h-full z-0 opacity-0 dark:opacity-100 group-hover:opacity-100 transition-all duration-300"></div>
      </button>
    </div>
  );
};

export default Toggle;
