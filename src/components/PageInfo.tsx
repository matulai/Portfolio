interface PageInfoProps {
  text: string;
}

const PageInfo = ({ text }: PageInfoProps) => {
  return (
    <div className="flex flex-row gap-4 text-xl text-start bg-dark-medium drop-shadow-[4px_4px_0px_rgba(211,211,211,0.2)] lg:text-2xl 2xl:text-4xl">
      <div className="flex flex-row gap-3">
        <span className="w-3 bg-grey-dark" />
        <span className="w-1 bg-grey-dark" />
      </div>
      <span className="py-2 2xl:py-3">{text}</span>
    </div>
  );
};

export default PageInfo;
