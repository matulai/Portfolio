const Curriculum = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-white text-xl font-bold">Curriculum</h1>
      <p className="text-white mt-2">
        Aquí puedes descargar mi currículum vitae en formato PDF.
      </p>
      <a
        href="/curriculum.pdf"
        download
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default Curriculum;
