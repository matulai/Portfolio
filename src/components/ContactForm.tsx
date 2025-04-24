import Send from "@/components/Send";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 px-6 py-4">
      <input
        type="text"
        placeholder="Nombre"
        className="text-start px-4 py-2.5 bg-grey-medium placeholder-grey-light"
      />
      <input
        type="email"
        placeholder="Dirección de Email"
        className="text-start px-4 py-2.5 bg-grey-medium placeholder-grey-light"
      />
      <input
        type="tel"
        placeholder="Número de teléfono (opcional)"
        className="text-start px-4 py-2.5 bg-grey-medium placeholder-grey-light"
      />
      <textarea
        placeholder="Mensaje"
        className="text-start px-4 py-2.5 min-h-20 bg-grey-medium placeholder-grey-light"
      />
      <button
        type="submit"
        className="flex items-center justify-start gap-2 px-4 py-2.5 text-2xl cursor-pointer bg-dark-light hover:bg-grey-dark hover:text-black"
      >
        <Send />
        Enviar
      </button>
    </form>
  );
}
