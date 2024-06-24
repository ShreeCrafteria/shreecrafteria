import React from "react";

import { Link } from "react-router-dom"

const Products = () => {
  return (
    <>
      <section id="products" className="bg-[#151515]">
        <div className=" container mx-auto px-6 py-16 max-w-[1300px] w-full">
          <div className="bg-black p-8 flex w-full flex-col gap-8 justify-center items-center lg:gap-16">
            <h1 className=" text-white text-2xl lg:text-4xl">Our Products</h1>
            <div className=" w-full grid mx-auto justify-center items-center lg:grid-cols-2 gap-5">
              <div className=" w-full space-y-2">
                <img
                  className="max-w-[400px] lg:max-w-[550px] xl:max-w-[595px] lg:min-h-[570px] xl:min-h-[725px] w-full"
                  src="/Products/radhakrishna.png"
                />
                <h2 className=" text-white font-rob font-semibold">
                  Radha - <span className="text-[#6B6B6B]">Krishna</span>
                </h2>
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-5">
                <div className=" w-full space-y-2">
                  <img
                    className="max-w-[400px] lg:max-w-[650px] w-full min-h-[200px] rounded-[9px]"
                    src="/Products/ganpatibapa.png"
                  />
                  <h2 className=" text-white font-rob font-semibold">
                    Jai <span className="text-[#6B6B6B]">Ganesh</span>
                  </h2>
                </div>
                <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5 xl:gap-10">
                  <div className=" w-full space-y-2">
                    <img
                      className="max-w-[400px] lg:max-w-[550px] w-full h-full"
                      src="/Products/gautambuddh.png"
                    />
                    <h2 className=" text-white font-rob font-semibold">
                      Gautam <span className="text-[#6B6B6B]">Buddha</span>
                    </h2>
                  </div>
                  <div className=" w-full space-y-2">
                    <img
                      className="max-w-[400px] lg:max-w-[550px] w-full"
                      src="/Products/redblue.png"
                    />
                    <h2 className=" text-white font-rob font-semibold">
                      Red-Blue <span className="text-[#6B6B6B]">Rangoli</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*<-------- Mobile ---------> */}

            <Link className="bg-white px-7 py-3 rounded-full font-inter" to="/products">
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
