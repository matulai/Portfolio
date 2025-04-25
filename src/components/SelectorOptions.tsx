"use client";
import { useState } from "react";
import TabSelector from "@/components/TabSelector";
import type Tab from "@/types/tab";

interface ContactoPageProps {
  tabs: Tab[];
}

const ContactoPage = ({ tabs }: ContactoPageProps) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]!);

  return (
    <section className="flex flex-row flex-1 items-center justify-between animate-fadeIn">
      <TabSelector
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div
        key={activeTab.label}
        className="flex flex-col max-w-3xl w-full bg-dark-medium animate-fadeIn"
      >
        <div className="flex justify-start py-2 px-2.5 bg-grey-dark">
          <span className="h-8 w-8 bg-dark-medium" />
        </div>
        {activeTab.component()}
      </div>
    </section>
  );
};

export default ContactoPage;
