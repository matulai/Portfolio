interface ChevronProps {
  className?: string;
}

const Chevron = ({ className }: ChevronProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 2xl:w-8 2xl:h-8 ${className}`}
    >
      <path
        d="M24 20L16 12L8 20"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
