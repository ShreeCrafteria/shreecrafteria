import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className=" bg-[#0C0C0C]">
        <div className=" container mx-auto px-6 py-16 lg:py-32 xl:py-36 max-w-[1300px] w-full">
          <div className=" w-full flex flex-col-reverse justify-center items-center gap-8 lg:flex-row lg:justify-between lg:gap-24">
            <img
              className="max-w-[400px] xl:max-w-[600px] w-full"
              src="shreelogo.png"
            />
            <div className=" space-y-4 text-white xl:space-y-7">
              <h1 className=" text-4xl text-center lg:text-5xl font-roboto tracking-wider">
                About
              </h1>
              <h2 className=" text-center lg:text-left font-inter tracking-wider">
                Welcome to Shree Crafteria, where creativity meets tradition!
                Explore our exquisite lippan art pieces, meticulously crafted to
                add an enchanting touch to any space. Elevate your décor with
                our unique blend of heritage and modern aesthetics
              </h2>
              <h2 className=" text-center lg:text-left font-inter tracking-wider">
                Our handcrafted pieces blend tradition with innovation, bringing
                a touch of cultural elegance to your modern space. Discover the
                beauty of lippan artistry with us
              </h2>
              <h2 className=" text-center lg:text-left font-inter tracking-wider">
                Lippan art is a traditional form of decorative wall mural found
                in the Kutch region of Gujarat, India. It involves creating
                intricate patterns using a mixture of mud and camel dung,
                adorned with mirrors and colorful embellishments. It's not only
                visually striking but also serves cultural and spiritual
                significance in the local communities.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
