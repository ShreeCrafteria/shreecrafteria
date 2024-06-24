import Marquee from "react-fast-marquee";
const Tdt = () => {
  return (
    <>
      <section id="tdt" className="bg-[#06081B] relative">
        <div className=" container mx-auto px-6 pt-10 lg:pt-0 max-w-[1300px] w-full lg:translate-y-20">
          <h1 className=" text-center text-[#CB6200] st pb-8 text-4xl lg:text-7xl tracking-wide font-rubik">
            The Divine Truth
          </h1>
          <div className=" max-w-[600px] xl:max-w-[800px] w-full text-white flex flex-col justify-center items-center lg:justify-start lg:items-start gap-8">
            <p className=" text-center lg:text-left font-roboto xl:text-xl">
              Dive into the mystical world of Hindu history on our YouTube
              channel. Join us for captivating stories of gods and goddesses
              that inspire and enlighten.
            </p>
            <div className="flex items-center gap-3 lg:gap-6">
              <a href="/">
                <img
                  className="max-w-[40px] lg:max-w-[100px]"
                  src="YouTube.svg"
                />
              </a>
              <a href="/">
                <img
                  className="max-w-[40px] lg:max-w-[100px]"
                  src="Instagram.svg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end items-end">
          <img
            className="w-full max-w-[1000px] bottom-0 lg:translate-x-[20%] pt-3 "
            src="krishna.png"
          />
        </div>
        <div className="absolute bottom-2 lg:bottom-4">
          <Marquee>
            <div className="flex justify-center items-center gap-10 w-full">
              <a
                target="_blank"
                href="https://youtu.be/oZiXFipbXNM?si=dHI7KkkTf4J6aFVl"
              >
                <img
                  className="max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v1.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/AQa3nEMb5P4?si=9WvPpNNAH_0r5QwM"
              >
                <img
                  className="max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v2.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/VfqFNT6xVKw?si=nDE-IR1yxzf0oCWE"
              >
                <img
                  className="max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v3.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/k5yKRhfh4Q0?si=H2BKKcupbn2Wkpv4"
              >
                <img
                  className=" max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v4.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/v1TzaVusYsA?si=2H3L1rzgrKXElrEC"
              >
                <img
                  className=" max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v5.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/lKQyGE_vo8I?si=94ZaqfI6BxK2KrZB"
              >
                <img
                  className=" max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v6.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/fAtnJslWO_Y?si=dofZCmsyUwZB1W3k"
              >
                <img
                  className=" max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v7.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/TfbS33aIxZU?si=8VrCNjXxwAMYFWym"
              >
                <img
                  className="max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v8.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/5durnSPyfH0?si=gO3wVp_qpuyqVEZI"
              >
                <img
                  className="max-w-[200px] lg:max-w-[300px] w-full"
                  src="/Tdt/v9.png"
                />
              </a>
              <a
                target="_blank"
                href="https://youtu.be/mS-duBHbuMk?si=t7t3_ouhnpZwV2S0"
              >
                <img
                  className="max-w-[200px] lg:max-w-[300px] w-full mr-10"
                  src="/Tdt/v10.png"
                />
              </a>
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};
export default Tdt;
