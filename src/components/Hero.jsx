const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen shrink-0 relative flex items-center justify-between px-16 py-8 bg-[url('/museum-wall.svg')] bg-repeat text-white"
    >
      {/* Info Panel */}
      <div className="max-w-md bg-black/50 p-6 rounded-lg backdrop-blur-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Museum</h1>
        <p className="text-lg">
          Step into the gallery of code, creativity, and curious experiments.
          Each room reveals another piece of my journey as a developer.
        </p>
      </div>

      {/* Mona Lisa-style Image */}
      <div className="w-96 h-[500px] flex items-center justify-center">
        <img
          src="/me-as-monalisa.jpg"
          alt="Modern Mona Lisa"
          className="w-full h-full object-cover border-8 border-gold-400 rounded-md shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
