const Hero = () => (
  <div className="w-full max-w-6xl mx-auto h-screen grid grid-cols-2 content-center">
    <div className="block">
      <h1 className="font-extrabold text-6xl text-black dark:text-white">
        Grupo de Extensão em Software e Hardware Livre
      </h1>
      <p className="mt-8 text-xl text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde sint veniam magni obcaecati quas rerum.
        Repellat suscipit ut a nostrum eius eos pariatur odio consequuntur. Similique iste voluptas deserunt!
      </p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="px-8 py-6 text-xl bg-gray-800 rounded-md text-white font-bold focus-ring hover-ring"
        >
          Entre em contato
        </button>

        <button
          type="button"
          className="px-8 py-6 text-xl rounded-md text-black font-bold focus-ring hover-ring dark:text-white hover:bg-primary hover:text-white"
        >
          Conheça mais
        </button>
      </div>
    </div>
    <img src="/illustration.svg" alt="" />
  </div>
);

export default Hero;
