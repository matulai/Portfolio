interface ChevronProps {
  className?: string;
}

const Chevron = ({ className }: ChevronProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
