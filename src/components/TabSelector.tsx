import type Tab from "@/types/tab";

interface TabSelectorProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  tabs: Tab[];
}

const TabSelector = ({ activeTab, setActiveTab, tabs }: TabSelectorProps) => {
  return (
    <div className="flex flex-row gap-9 max-w-96 w-full 2xl:max-w-lg ">
      <div className="flex flex-row gap-3">
        <span className=" bg-grey-dark w-3" />
        <span className=" bg-grey-dark w-1" />
      </div>
      <div className="flex flex-col gap-5 py-5 w-full">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-left text-2xl cursor-pointer hover:bg-grey-dark hover:text-black ${
              activeTab === tab
                ? "scale-y-110 bg-grey-dark text-black"
                : "bg-dark-light"
            } 2xl:text-4xl 2xl:py-3`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
