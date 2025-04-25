import SelectorOptions from "@/components/SelectorOptions";
import AnimatedTitle from "@/components/AnimatedTitle";
import ContactForm from "@/components/ContactForm";
import Curriculum from "@/components/Curriculum";
import PageInfo from "@/components/PageInfo";

const tabs = [
  {
    label: "Formulario",
    component: ContactForm,
  },
  {
    label: "Curriculum",
    component: Curriculum,
  },
];

const Contact = () => {
  return (
    <>
      <AnimatedTitle text="CONTACTO" />
      <SelectorOptions tabs={tabs} />
      <PageInfo text="Aquí podes encontrar algunas formas de contactarme" />
    </>
  );
};

export default Contact;
