"use client";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import TabSelector from "@/components/TabSelector";
import Curriculum from "@/components/Curriculum";

const tabs = ["Formulario", "Curriculum"];

export default function ContactoPage() {
  const [activeTab, setActiveTab] = useState<string>("Formulario");

  return (
    <div className="flex flex-row flex-1 items-center justify-between animate-fadeIn">
      <TabSelector
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div
        key={activeTab}
        className="flex flex-col max-w-3xl w-full bg-dark-medium animate-fadeIn"
      >
        <div className="flex justify-self-start py-2 px-2.5 bg-grey-dark">
          <span className="h-8 w-8 bg-dark-medium" />
        </div>
        {activeTab === "Formulario" ? <ContactForm /> : <Curriculum />}
      </div>
    </div>
  );
}
