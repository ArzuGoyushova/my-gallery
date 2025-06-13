const About = () => {
  return (
    <section id="about" className="w-screen h-screen flex flex-col">
      {/* Wall */}
      <div className="flex-2 h-[65%] bg-gradient-to-b from-[#fbe0c3] to-[#f0b98a] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-[#5a3825] drop-shadow-md">
          About Me 📖
        </h1>
      </div>

      {/* Floor */}
      <div className="flex-1 h-[35%] relative bg-gradient-to-t from-[#c47442] to-[#e6a86c] shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default About;
