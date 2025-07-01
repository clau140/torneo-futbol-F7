const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
     {/*
     <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/fondoHome.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video> 
      */}


      <div className="flex flex-col items-center justify-center h-full text-white bg-black/60">
        <h1 className="text-5xl font-bold mb-4">UEFA Champions FRIG</h1>
       
      </div>
    </div>
  );
};

export default Home;

