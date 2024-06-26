import React, { useEffect } from "react";
import NavbarTopBarPreview from "./partials/Navbar";
import "remixicon/fonts/remixicon.css";

const Cart = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    setTimeout(scrollToTop, 0);
  }, []);

  return (
    <>
      <NavbarTopBarPreview />
      <main className="w-full py-10 bg-[#ffffff]">
        {/* product's details */}

        <div className="pixel px-7 lg:px-60">
          <div className="Products_detail mt-20 border-t-2 border-b-2 py-10">
            {/* mobile devices */}
            <div className="mobile_div lg:hidden">
              <div className="mobile picture lg:hidden mx-auto lg:mx-0 overflow-hidden size-60">
                <img
                  className="w-full rounded-md h-full object-cover"
                  src="https://dl.dropboxusercontent.com/scl/fi/h8w1ll35noxj6or3mvyja/1.JPG?rlkey=w2eshhb4fhmylsatnjvfmjpur&st=a8ow0ffv&dl=0"
                  alt=""
                />
              </div>
              <div className="p_image_details_ w-full">
                <div className="p_name_ruppes mt-10 lg:mt-0 flex items-center justify-between">
                  <div className="p_name">
                    <h1 className="font-inter text-[22px] font-medium text-[#000000]">
                      Product Name
                    </h1>
                    <h3 className="font-inter text-[18px] text-[#000000]">
                      14 inch, 4 mm
                    </h3>
                  </div>
                  <h1 className="p_ruppess font-inter text-[22px] font-medium text-[#000000]">
                    ₹1,348.00/-
                  </h1>
                </div>
                <div className="p_quantity_remove-btn mt-5 flex items-center justify-between py-2">
                  <select className="outline-none bg-white text-[22px] font-medium">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                  </select>
                  <h1 className="text-red-600 font-medium">Remove</h1>
                </div>
              </div>
            </div>
            {/* laptop devices */}
            <div className="pc_div hidden lg:flex items-center justify-between">
              <div className="picture overflow-hidden w-[300px]">
                <img
                  className="w-full rounded-md h-full object-cover"
                  src="https://dl.dropboxusercontent.com/scl/fi/h8w1ll35noxj6or3mvyja/1.JPG?rlkey=w2eshhb4fhmylsatnjvfmjpur&st=a8ow0ffv&dl=0"
                  alt=""
                />
              </div>
              <div className="p_name">
                <h1 className="font-inter text-[32px] font-medium text-[#000000]">
                  Product Name
                </h1>
                <h3 className="font-inter text-[16px] text-[#000000]">
                  14 inch, 4 mm
                </h3>
              </div>
              <select className="outline-none text-[22px] font-medium">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
              <div className="p_price_remove-btn flex flex-col items-end">
                <h1 className="font-inter text-[22px] font-medium text-[#000000]">
                  ₹1,348.00/-
                </h1>
              </div>
            </div>
            <h1 className="text-red-600 hidden lg:flex float-right font-medium">
              Remove
            </h1>
          </div>

          <div className="Products_detail mt-5 border-b-2 py-10">
            {/* mobile devices */}
            <div className="mobile_div lg:hidden">
              <div className="mobile picture lg:hidden mx-auto lg:mx-0 overflow-hidden size-60 bg-slate-200 ">
                <img
                  className="w-full rounded-md h-full object-cover"
                  src="https://dl.dropboxusercontent.com/scl/fi/h8w1ll35noxj6or3mvyja/1.JPG?rlkey=w2eshhb4fhmylsatnjvfmjpur&st=a8ow0ffv&dl=0"
                  alt=""
                />
              </div>
              <div className="p_image_details_ w-full">
                <div className="p_name_ruppes mt-10 lg:mt-0 flex items-center justify-between">
                  <div className="p_name">
                    <h1 className="font-inter text-[22px] font-medium text-[#000000]">
                      Product Name
                    </h1>
                    <h3 className="font-inter text-[18px] text-[#000000]">
                      14 inch, 4 mm
                    </h3>
                  </div>
                  <h1 className="p_ruppess font-inter text-[22px] font-medium text-[#000000]">
                    ₹1,348.00/-
                  </h1>
                </div>
                <div className="p_quantity_remove-btn mt-5 flex items-center justify-between py-2">
                  <select className="outline-none bg-white text-[22px] font-medium">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                  </select>
                  <h1 className="text-red-600 font-medium">Remove</h1>
                </div>
              </div>
            </div>
            {/* laptop devices */}
            <div className="pc_div hidden lg:flex items-center justify-between">
              <div className="picture overflow-hidden w-[300px] bg-slate-200 ">
                <img
                  className="w-full rounded-md h-full object-cover"
                  src="https://dl.dropboxusercontent.com/scl/fi/h8w1ll35noxj6or3mvyja/1.JPG?rlkey=w2eshhb4fhmylsatnjvfmjpur&st=a8ow0ffv&dl=0"
                  alt=""
                />
              </div>
              <div className="p_name">
                <h1 className="font-inter text-[32px] font-medium text-[#000000]">
                  Product Name
                </h1>
                <h3 className="font-inter text-[16px] text-[#000000]">
                  14 inch, 4 mm
                </h3>
              </div>
              <select className="outline-none text-[22px] font-medium">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
              <div className="p_price_remove-btn flex flex-col items-end">
                <h1 className="font-inter text-[22px] font-medium text-[#000000]">
                  ₹1,348.00/-
                </h1>
              </div>
            </div>
            <h1 className="text-red-600 pb-5 hidden lg:inline-block float-right font-medium">
              Remove
            </h1>
          </div>
        </div>

        {/* free stand */}

        <div className="stand"></div>
        <div className="free_stand w-full px-7 lg:px-60 border-b-2 py-4 flex items-center justify-between lg:justify-center ml-12 lg:gap-3">
          <h1 className="font-inter text-[22px] font-medium text-[#000000]">
            Free Easel Stand
          </h1>
          <img
            className=" size-16"
            src="https://www.theartconnect.in/cdn/shop/products/BuyWoodenEasel_CanvasStand4inchesOnlineinIndia-TheArtConnect_933fd692-d56e-496b-a562-341eb6b8d4ba.jpg?v=1632237831"
            alt=""
          />
        </div>

        {/* shipping details */}

        <div className="shipping_details px-7 lg:px-60 py-5 lg:py-10 bg-[#f3f3f3] border-b-2">
          <h1 className="text-center font-inter text-[22px] lg:text-[27px] font-medium text-[#000000]">
            Shipping Details
          </h1>
          <form action="" className="mt-7">
            <input
              className="w-full outline-none border-[1.5px] rounded-[8px] py-2 px-5 lg:py-4 placeholder:text-[#696969] placeholder:font-medium border-black"
              type="text"
              placeholder="Full name"
            />
            <div className="email_pincode lg:flex lg:gap-3">
              <input
                className="lg:w-[70%] w-full outline-none border-[1.5px] rounded-[8px] py-2 px-5 lg:py-4 placeholder:text-[#696969] placeholder:font-medium border-black mt-3"
                type="email"
                placeholder="E-Mail"
              />
              <input
                className="lg:w-[30%] w-full outline-none border-[1.5px] rounded-[8px] py-2 px-5 lg:py-4 placeholder:text-[#696969] placeholder:font-medium border-black mt-3"
                type="number"
                placeholder="Pin code"
              />
            </div>
            <textarea
              className="w-full outline-none border-[1.5px] resize-none rounded-[8px] pt-2 pb-10 px-5 lg:py-4 lg:pb-20 placeholder:text-[#696969] placeholder:font-medium border-black mt-3"
              placeholder="Address"
            ></textarea>
          </form>
        </div>

        {/* total and checkout */}

        <div className="total px-7 lg:px-60 mt-10">
          <div className="subtotal flex items-center justify-between">
            <h1 className="font-inter text-[18px] text-[#000000]">Subtotal</h1>
            <h1 className="font-inter text-[15px] text-[#000000]">
              ₹1,348.00/-
            </h1>
          </div>
          <div className="shipping flex mt-1 items-center justify-between">
            <h1 className="font-inter text-[18px] text-[#000000]">Shipping</h1>
            <h1 className="font-inter text-[15px] text-[#000000]">₹50.00/-</h1>
          </div>
          <div className="total mt-10 flex items-end justify-between">
            <h1 className="font-inter text-[32px] font-semibold text-[#000000]">
              Total
            </h1>
            <div className="discount_total flex flex-col items-end">
              <h1 className="font-inter text-[15px] text-[#00B132]">
                Your Savings: ₹300.00/-
              </h1>
              <h1 className="font-inter mt-3 text-[22px] font-medium text-[#000000]">
                ₹1,399.00/-
              </h1>
            </div>
          </div>
          <div className="checkout mt-10 flex gap-2 items-center justify-end">
            <button className="border-[1.5px] text-[15px] inline-block lg:text-[18px] px-6 hover:bg-black hover:text-white active:bg-black active:text-white duration-300 lg:px-6 font-semibold py-2 rounded-full border-[#000000]">
              Check out
            </button>
            <i className="ri-whatsapp-fill text-[28px]"></i>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
