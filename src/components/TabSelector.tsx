import type Tab from "@/types/tab";

interface TabSelectorProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  tabs: Tab[];
}

const TabSelector = ({ activeTab, setActiveTab, tabs }: TabSelectorProps) => {
  return (
    <div className="flex flex-row gap-9 max-w-xl w-full">
      <div className="flex flex-row gap-3">
        <span className=" bg-grey-dark w-3" />
        <span className=" bg-grey-dark w-1" />
      </div>
      <div className="flex flex-col gap-6 py-6 w-full">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-left text-4xl cursor-pointer hover:bg-grey-dark hover:text-black ${
              activeTab === tab
                ? "scale-y-110 bg-grey-dark text-black"
                : "bg-dark-light"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
