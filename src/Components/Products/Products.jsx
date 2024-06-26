import React, { useEffect, useState } from "react";
import NavbarTopBarPreview from "./partials/Navbar";

const Products = () => {
  const [details] = useState([
    {
      id: 1,
      ProductName: "Shivji - ma parvati",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/h8w1ll35noxj6or3mvyja/1.JPG?rlkey=w2eshhb4fhmylsatnjvfmjpur&st=a8ow0ffv&dl=0",
    },
    {
      id: 2,
      ProductName: "Radha Krishna",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/59adi78e39tuaw7ie6tb8/WhatsApp-Image-2024-06-24-at-18.29.52_275802eb.jpg?rlkey=hrz4zcuojer0hwfrhn7fha7vp&st=4e79bw42&dl=0",
    },
    {
      id: 3,
      ProductName: "Jai Ganesh",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/ib0bozhamzm0bfldwxpss/WhatsApp-Image-2024-06-24-at-18.29.52_275802eb.jpg?rlkey=sarph8t1wg2amaup3ce8cz4eh&st=qgiadn0m&dl=0",
    },
    {
      id: 4,
      ProductName: "Gautam Budhha",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/jm6zpyi706dsr2jgi1j4d/1.jpg?rlkey=31dxytj7kbzzsnyrbsu4uxz45&st=lcdxbqm5&dl=0",
    },
    {
      id: 5,
      ProductName: "Shiv Ganga",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/givpk4xk2duxjtlmzpt28/1.jpg?rlkey=5yl3cougqpdbjsvr3r39vjljc&st=014k3sdo&dl=0",
    },
    {
      id: 6,
      ProductName: "Sankat Mochan Hanuman",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/tkm3z4sr6igtg0wecawg5/1.jpg?rlkey=od305p74w4j49ihbzdlpbooph&st=9rmsat4y&dl=0",
    },
    {
      id: 7,
      ProductName: "Mahakal",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/rya2yq4aq1xw9qkefhpyk/1.jpg?rlkey=2yc7eiekm5x3mtxc4f03m5g4m&st=w62mq2yv&dl=0",
    },
    {
      id: 8,
      ProductName: "Universe Time",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/a96we4h0krc7wip7tpvox/1.jpg?rlkey=g2b0ymda55xz3xny0gu7f6iun&st=clu5drh4&dl=0",
    },
    {
      id: 9,
      ProductName: "Shree Ganesh",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/17bso0z3f1xfgrb1mtyrv/1.JPG?rlkey=ad3p3zjagw1e4yv86nj25cw0p&st=uals5u7j&dl=0",
    },
    {
      id: 10,
      ProductName: "Red - Blue Rangoli",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/yp06yr3actgcq87my3z0i/1.JPG?rlkey=hjww06jjtrjxjo62ej1n5n60a&st=lpqtudwc&dl=0",
    },
    {
      id: 11,
      ProductName: "Yellow - Sky Blue Rangoli",
      MDFSize1: "Select None",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      FirstImage:
        "https://dl.dropboxusercontent.com/scl/fi/h9wxq44zost6361dp8dad/1.JPG?rlkey=0z2rqy5k8rl2yttwwv3yg8y47&st=2v33atnp&dl=0",
    },
  ]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    setTimeout(scrollToTop, 0);
  }, []);

  return (
    <>
      <NavbarTopBarPreview />
      <div className="products w-full px-4 lg:px-20">
        {details.map((prod) => (
          <div className="product mt-24 mb-10 lg:my-24 lg:mb-10" key={prod.ProductName}>
            <div className="P_image mt-5 w-full overflow-hidden h-[15rem] lg:h-[40rem]">
              <img
                className="w-full h-full rounded-[20px] object-cover object-center"
                src={prod.FirstImage}
                alt={prod.ProductName}
              />
            </div>
            <div className="Product_details flex justify-between items-end mt-3 lg:mt-5">
              <div className="left_side">
                <h1 className="text-[20px] lg:text-[28px] font-inter font-medium">
                  {prod.ProductName}
                </h1>
                <h1 className="text-[15px] lg:text-[17px] font-inter font-medium tracking-tight">
                  Size: 12 inch, 4 mm
                </h1>
                <select
                  className="select-blue mt-4 lg:mt-6 outline-none font-inter tracking-tight bg-[#f2f2f2] py-3 px-1  rounded-[10px]"
                  name=""
                  id=""
                >
                  <option className="font-inter font-medium" value="">
                    More size
                  </option>
                  <option value="">{prod.MDFSize1}</option>
                  <option value="">{prod.MDFSize2}</option>
                </select>
              </div>
              <div className="right_side flex flex-col items-end justify-center">
                <h1 className="text-[16px] lg:text-[21px] font-inter font-medium line-through text-[#747373]">
                  {prod.PriceLineThrough}
                </h1>
                <h1 className="text-[20px] lg:text-[28px] mt-1 font-inter font-medium">
                  {prod.OriginalPrice}
                </h1>
                <button className="border-[1.5px] px-4 text-[13px] hover:bg-black hover:text-white active:bg-black active:text-white duration-300 lg:text-[18px] mt-3 lg:mt-6 lg:px-6 font-semibold py-3 rounded-full border-[#000000]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
