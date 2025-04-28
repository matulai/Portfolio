interface PageInfoProps {
  text: string;
}

const PageInfo = ({ text }: PageInfoProps) => {
  return (
    <div className="relative py-2 px-14 text-2xl text-start bg-dark-medium drop-shadow-[4px_4px_0px_rgba(211,211,211,0.2)] 2xl:text-4xl 2xl:py-3 2xl:px-16">
      <div className="absolute top-0 left-0 flex gap-3 h-full">
        <span className="h-full w-3 bg-grey-dark" />
        <span className="h-full w-1 bg-grey-dark" />
      </div>
      {text}
    </div>
  );
};

export default PageInfo;
