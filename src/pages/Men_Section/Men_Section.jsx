import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import Overlay_Drawer from "../Overlay_Drawer/Overlay_Drawer";

// Category carousel items. `id` must match the folder name in /products/<id>/...
const categories = [
  { id: "all", label: "VIEW ALL", img: "/productcategory/allproducts.jfif" },
  { id: "tanktop", label: "SHOP TANK-TOP", img: "/productcategory/tanktop.jfif" },
  { id: "underwear", label: "SHOP UNDERWEAR", img: "/productcategory/underwear.jfif" },
  { id: "socks", label: "SHOP SOCKS", img: "/productcategory/socks.jfif" },
];

const allProducts = [
  {
    front_img: "/products/socks/blacksock.jpg",
    back_img: "/products/socks/blacksock.jpg",
    product_data: ["Collegiate Hoodie", "Oversized Fit", "Heavy Blue"],
    product_price: 60,
    product_rating: "4.9",
  },
  {
    front_img: "/products/socks/brownsock.jpg",
    back_img: "/products/socks/brownsock.jpg",
    product_data: ["Power T-Shirt", "Oversized Fit", "Charcoal Core Marl/Sets Red"],
    product_price: 36,
    product_rating: "4.8",
  },
  {
    front_img: "/products/socks/graysock.jpg",
    back_img: "/products/socks/graysock.jpg",
    product_data: ["Olde English T-Shirt", "Oversized Fit", "Soft White"],
    product_price: 38,
    product_rating: "4.9",
  },
  {
    front_img: "/products/socks/redsock.jpg",
    back_img: "/products/socks/redsock.jpg",
    product_data: ["Power Cut Off Tank", "Oversized Fit", "Black/Conditioning Red"],
    product_price: 30,
    product_rating: "4.4",
  },
  {
    front_img: "/products/socks/whitesock.jpg",
    back_img: "/products/socks/whitesock.jpg",
    product_data: ["Geo Seamless T-Shirt", "Slim Fit", "Soul Brown"],
    product_price: 75,
    product_rating: "4.9",
  },
  {
    front_img: "/products/underwear/blackboxer.jpg",
    back_img: "/products/underwear/blackboxer.jpg",
    product_data: ["Power Washed T-Shirt", "Oversized Fit", "GS Medium Gray"],
    product_price: 40,
    product_rating: "4.4",
  },
  {
    front_img: "/products/underwear/blackvshape.jpg",
    back_img: "/products/underwear/blackvshape.jpg",
    product_data: ["Straight Leg Pumper Pants", "Oversized Fit", "Black"],
    product_price: 45,
    product_rating: "5",
  },
  {
    front_img: "/products/underwear/grayboxer.jpg",
    back_img: "/products/underwear/grayboxer.jpg",
    product_data: ["Power Washed Jogger", "Oversized Fit", "GS Strength Green"],
    product_price: 56,
    product_rating: "5",
  },
  {
    front_img: "/products/underwear/grayvshape.jpg",
    back_img: "/products/underwear/grayvshape.jpg",
    product_data: ["Straight Leg Pumper Pants", "Oversized Fit", "Black"],
    product_price: 75,
    product_rating: "5",
  },
  {
    front_img: "/products/underwear/whiteboxer.jpg",
    back_img: "/products/underwear/whiteboxer.jpg",
    product_data: ["Crest Straight Leg Joggers", "Regular", "Brown"],
    product_price: 55,
    product_rating: "4.3",
  },
  {
    front_img: "/products/underwear/whitevshape.jpg",
    back_img: "/products/underwear/whitevshape.jpg",
    product_data: ["Straight Leg Pumper Pants", "oversized fit", "Spiced Brown"],
    product_price: 75,
    product_rating: "5",
  },
  {
    front_img: "/products/tanktop/blacktanktop.jpg",
    back_img: "/products/tanktop/blacktanktop.jpg",
    product_data: ["Lifting Essentials Straight Leg Pants", "Regular Fit", "Black"],
    product_price: 75,
    product_rating: "4.7",
  },
  {
    front_img: "/products/tanktop/browntanktop.jpg",
    back_img: "/products/tanktop/browntanktop.jpg",
    product_data: ["Global Lifting Oversized Joggers", "Oversized Fsit", "Deep Petrol Blue"],
    product_price: 70,
    product_rating: "5",
  },
  {
    front_img: "/products/tanktop/greentanktop.jpg",
    back_img: "/products/tanktop/greentanktop.jpg",
    product_data: ["Global Lifting Oversized Joggers", "Oversized Fsit", "Deep Petrol Blue"],
    product_price: 70,
    product_rating: "5",
  },
  {
    front_img: "/products/tanktop/redtanktop.jpg",
    back_img: "/products/tanktop/redtanktop.jpg",
    product_data: ["Global Lifting Oversized Joggers", "Oversized Fsit", "Deep Petrol Blue"],
    product_price: 70,
    product_rating: "5",
  },
  {
    front_img: "/products/tanktop/whitetanktop.jpg",
    back_img: "/products/tanktop/whitetanktop.jpg",
    product_data: ["Global Lifting Oversized Joggers", "Oversized Fsit", "Deep Petrol Blue"],
    product_price: 70,
    product_rating: "5",
  },
  {
    front_img: "/products/tanktop/yellowtanktop.jpg",
    back_img: "/products/tanktop/yellowtanktop.jpg",
    product_data: ["Global Lifting Oversized Joggers", "Oversized Fsit", "Deep Petrol Blue"],
    product_price: 70,
    product_rating: "5",
  },
];

// "/products/socks/blacksock.jpg" -> "socks"
const getCategory = (item) => item.front_img.split("/")[2];

function Men_Section() {
  const dispatch = useDispatch();
  const [cardActive, setCardActive] = useState(false);
  const [cardData, setCardData] = useState({});
  // Category lives in the URL: /collections/mens?category=socks (no param = all products)
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const setActiveCategory = (id) =>
    id === "all" ? setSearchParams({}) : setSearchParams({ category: id });

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((item) => getCategory(item) === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* First Row */}
      <div className="flex flex-col gap-10 lg:gap-15 px-5 lg:px-10 mt-19 md:mt-19 lg:mt-0 py-7">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] lg:text-[44px] font-bold truncate">
            LAST CHANCE TO BUY
          </h1>

          <p className="text-md lg:text-xl text-gray-800 leading-snug text-balance max-w-[65rem]">
            Great everyday style starts with the right essentials. Discover
            MENVIA's collection of men's socks, comfortable underwear, and
            versatile tank tops, thoughtfully designed to keep you feeling
            comfortable and confident every day.
          </p>
        </div>

        <div className="w-full">
          <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
            <CarouselContent>
              {categories.map((cat) => (
                <CarouselItem
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/6 cursor-pointer"
                >
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Category Image */}
                    <div className="w-full aspect-[3/3.7] overflow-hidden">
                      <img
                        src={cat.img}
                        alt={cat.label}
                        className={`w-full h-full object-cover hover:opacity-90 ${
                          activeCategory === cat.id ? "ring-2 ring-black" : ""
                        }`}
                      />
                    </div>

                    {/* Category Label */}
                    <CardContent className="px-0">
                      <h2
                        className={`text-[13px] font-bold truncate ${
                          activeCategory === cat.id ? "underline" : ""
                        }`}
                      >
                        {cat.label}
                      </h2>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex gap-12 w-full px-5 lg:px-10 py-8 mb-19">
        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full overflow-hidden">
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-gray-500">No products found.</p>
          )}

          {filteredProducts.map((item) => (
            <Card
              key={item.front_img}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setCardData(item);
                  setCardActive(true);
                }
              }}
              className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/3.7] overflow-hidden group">
                <img
                  src={item.front_img}
                  alt={`${item.product_data[0]}_front`}
                  className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
                />
                <img
                  src={item.back_img}
                  alt={`${item.product_data[0]}_back`}
                  className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
                />

                {/* Size Button Overlay */}
                <div
                  className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3 grid-cols-4 gap-2 opacity-0 
                group-hover:opacity-100 transition duration-400"
                >
                  {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: nanoid(),
                            image: item.front_img,
                            title: item.product_data[0],
                            size: size,
                            sizeType: item.product_data[1],
                            color: item.product_data[2],
                            price: item.product_price,
                            unitPrice: item.product_price,
                            quantity: 1,
                          })
                        )
                      }
                      className="cursor-pointer px-0 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-black hover:text-white transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="flex justify-between px-0">
                <div className="flex flex-col gap-0.3">
                  <h2 className="text-md lg:text-sm font-semibold truncate">
                    {item.product_data[0]}
                  </h2>
                  <p className="text-sm text-gray-500">{item.product_data[1]}</p>
                  <p className="text-sm text-gray-500">{item.product_data[2]}</p>
                  {/* Price */}
                  <p className="text-sm font-bold">${item.product_price}</p>
                </div>

                <div>
                  <span className="text-[13px] font-bold">
                    ★{item.product_rating}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {cardActive && (
        <Overlay_Drawer
          cardActive={cardActive}
          setCardActive={setCardActive}
          cardData={cardData}
          setCardData={setCardData}
        />
      )}
    </>
  );
}

export default Men_Section;