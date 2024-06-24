import Header from "./Header";
import About from "./About";
import Products from "./Products";
import Tdt from "./Tdt";
import Follow from "./Follow";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <div className=" w-full mx-auto overflow-hidden">
        <Header />
        <section id="home" className=" relative">
          {/* <-------Mobile--------> */}
          <div className="lg:hidden bg-gradient-to-b from-black to-[#080D28] ">
            <div className="flex justify-center items-center flex-col gap-1 lg:hidden py-8 ">
              <h2 className=" text-white font-extralight font-inter text-2xl">
                Shree
              </h2>
              <h1 className="text-white font-roboto text-4xl">Crafteria</h1>
              <h3 className="pt-6 text-white font-mon font-extralight tracking-[4px] text-lg ">
                Craft Of Divine
              </h3>
            </div>
            <img className=" w-full mx-auto pb-4" src="mobile.png" />
          </div>
          {/* <-------Dekstop--------> */}
          <img
            className=" w-full object-cover hidden lg:block"
            src="hero.png"
          />
          <div className="space-y-1 hidden lg:block lg:absolute left-[10%] top-1/2 -translate-y-1/2 z-20">
            <h2 className=" text-white font-extralight font-inter lg:text-6xl xl:text-7xl">
              Shree
            </h2>
            <h1 className="text-white font-roboto lg:text-8xl xl:text-9xl">
              Crafteria
            </h1>
            <h3 className="pt-7 text-white font-mon lg:tracking-[4px] lg:text-2xl xl:text-3xl font-extralight">
              Craft Of Divine
            </h3>
          </div>
        </section>
        <About />
        <Products />
        <Tdt />
        <Follow />
        <Footer />
      </div>
    </>
  );
};

export default Hero;
