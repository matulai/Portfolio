"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Send from "@/components/Send";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        error => {
          console.error(error);
          setStatus("Something went wrong.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 px-6 py-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        autoComplete="off"
        className="text-start px-4 py-2.5 bg-grey-medium placeholder-dark-light outline-none border-2 border-grey-medium hover:border-grey-light focus:border-grey-light focus:bg-dark-hard"
      />
      <input
        type="email"
        name="email"
        placeholder="Dirección de Email"
        autoComplete="off"
        className="text-start px-4 py-2.5 bg-grey-medium placeholder-dark-light outline-none border-2 border-grey-medium hover:border-grey-light focus:border-grey-light focus:bg-dark-hard"
      />
      <input
        type="text"
        name="title"
        placeholder="Titulo"
        autoComplete="off"
        className="text-start px-4 py-2.5 bg-grey-medium placeholder-dark-light outline-none border-2 border-grey-medium hover:border-grey-light focus:border-grey-light focus:bg-dark-hard"
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        autoComplete="off"
        className="text-start px-4 py-2.5 min-h-20 bg-grey-medium placeholder-dark-light outline-none border-2 border-grey-medium hover:border-grey-light focus:border-grey-light focus:bg-dark-hard"
      />
      <button
        type="submit"
        className="flex items-center justify-start gap-2 px-4 py-2 text-2xl cursor-pointer bg-dark-light hover:bg-grey-dark hover:text-black 2xl:py-3"
      >
        <Send />
        Enviar
      </button>
      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  );
}
