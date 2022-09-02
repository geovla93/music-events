function Hero() {
  return (
    <div className="relative mb-10 flex h-[300px] w-full flex-col items-center justify-center bg-black bg-[url('/images/showcase.jpg')] bg-center bg-no-repeat text-center text-white after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/70 after:content-['']">
      <h1 className="z-20 text-4xl">Welcome To The Party!</h1>
      <h2 className="z-20">Find the hottest DJ events</h2>
    </div>
  );
}

export default Hero;
