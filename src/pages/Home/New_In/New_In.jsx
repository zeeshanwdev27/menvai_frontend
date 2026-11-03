import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/Cart/CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import Overlay_Drawer from "../../Overlay_Drawer/Overlay_Drawer";

function New_In() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch()

    const [cardActive, setCardActive] = useState(false);
    const [cardData, setCardData] = useState({});



const crouselData = [
  // MEN'S SOCKS
  {
    front_img: "/products/socks/blacksock.jpg",
    back_img: "/products/socks/blacksock.jpg",
    product_data: ["Essential Crew Socks", "Regular Fit", "Black"],
    product_price: 14,
    product_rating: "4.5",
  },
  {
    front_img: "/products/socks/whitesock.jpg",
    back_img: "/products/socks/whitesock.jpg",
    product_data: ["Premium Crew Socks", "Regular Fit", "White"],
    product_price: 14,
    product_rating: "4.7",
  },

  // MEN'S TANK TOPS
  {
    front_img: "/products/tanktop/blacktanktop.jpg",
    back_img: "/products/tanktop/blacktanktop.jpg",
    product_data: ["Essential Tank Top", "Regular Fit", "Black"],
    product_price: 35,
    product_rating: "4.6",
  },
  {
    front_img: "/products/tanktop/browntanktop.jpg",
    back_img: "/products/tanktop/browntanktop.jpg",
    product_data: ["Ribbed Tank Top", "Slim Fit", "Brown"],
    product_price: 35,
    product_rating: "4.4",
  },

  // MEN'S UNDERWEAR
  {
    front_img: "/products/underwear/grayvshape.jpg",
    back_img: "/products/underwear/grayvshape.jpg",
    product_data: ["Essential V-Shape Briefs", "Regular Fit", "Gray"],
    product_price: 20,
    product_rating: "4.5",
  },
  {
    front_img: "/products/underwear/grayboxer.jpg",
    back_img: "/products/underwear/grayboxer.jpg",
    product_data: ["Classic Boxer Briefs", "Comfort Fit", "Gray"],
    product_price: 25,
    product_rating: "4.3",
  },
  {
    front_img: "/products/underwear/blackboxer.jpg",
    back_img: "/products/underwear/blackboxer.jpg",
    product_data: ["Classic Boxer Briefs", "Comfort Fit", "Black"],
    product_price: 25,
    product_rating: "4.6",
  },
  {
    front_img: "/products/underwear/whiteboxer.jpg",
    back_img: "/products/underwear/whiteboxer.jpg",
    product_data: ["Classic Boxer Briefs", "Comfort Fit", "White"],
    product_price: 20,
    product_rating: "4.4",
  },

  // MEN'S TANK TOPS
  {
    front_img: "/products/tanktop/yellowtanktop.jpg",
    back_img: "/products/tanktop/yellowtanktop.jpg",
    product_data: ["Essential Tank Top", "Regular Fit", "Yellow"],
    product_price: 35,
    product_rating: "4.5",
  },
  {
    front_img: "/products/tanktop/greentanktop.jpg",
    back_img: "/products/tanktop/greentanktop.jpg",
    product_data: ["Essential Tank Top", "Regular Fit", "Green"],
    product_price: 35,
    product_rating: "4.7",
  },
];


  const visibleSlides = 4;
  const maxIndex = crouselData.length - visibleSlides;

  const handlePrev = () => {
    if (currentIndex > 0) {
      prevRef.current?.click();
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      nextRef.current?.click();
      setCurrentIndex((prev) => prev + 1);
    }
  };


  return (
    <>
      <div className="flex justify-between w-full px-5 lg:px-20 pb-5 pt-[40px]">

        <div className="flex gap-7 justify-between lg:justify-center items-center w-full lg:w-auto">
          <h1 className="text-2xl font-bold">NEW IN</h1>
          <Link
            to="collections/mens"
            className="text-md underline relative top-[2px] font-bold hover:text-gray-700"
          >
            View All
          </Link>
        </div>

        <div className="hidden lg:flex gap-5 mr-5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`border rounded-full p-1 ${
              currentIndex === 0
                ? "bg-gray-100 text-black"
                : "bg-black text-white"
            }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`border rounded-full p-1 ${
              currentIndex === maxIndex
                ? "bg-gray-100 text-black"
                : "bg-black text-white"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>


      {/* Crousel */}
      <div className="flex justify-center w-full px-5 lg:px-14 pb-14">
        <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
          <CarouselContent>
            {crouselData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <div className="p-1">
                  <Card 
                  onClick={() => {
                if (window.innerWidth < 1024) {
                  setCardData(item);
                  setCardActive(true);
                }
              }}
                  className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2 ">
                    
                    {/* Product Image */}
                    <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden group">
                      <img
                        src={item.front_img}
                        alt={item.product_data[0]}
                        className="w-full h-full object-cover group-hover:opacity-0 transition duration-500 absolute top-0 left-0"
                      />
                      <img
                        src={item.back_img}
                        alt={`${item.product_data[0]} back`}
                        className="hidden lg:block w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500 absolute top-0 left-0"
                      />

                      {/* Size Button Overlay */}
                      <div className="hidden lg:grid absolute bottom-0 left-0 w-full bg-gray-50 p-3  grid-cols-4 gap-2 opacity-0 
                      group-hover:opacity-100 transition duration-400">
                        {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                          <button key={size}
                          onClick={()=> dispatch(addToCart({
                            id: nanoid(),
                            image: item.front_img,
                            title: item.product_data[0],
                            size: size,
                            sizeType: item.product_data[1],
                            color: item.product_data[2],
                            price: item.product_price,
                            unitPrice: item.product_price,
                            quantity: 1,
                          }))}
                          className="cursor-pointer px-0 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-black hover:text-white transition"
                          >
                            {size}
                          </button>
                          ))}
                      </div>


                      <div>

                      </div>
                      
                    </div>

                    {/* Product Info */}
                    <CardContent className="flex justify-between px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-md lg:text-sm font-semibold truncate">
                          {item.product_data[0]}
                        </h2>
                        <p className="text-sm text-gray-500">
                          {item.product_data[1]}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.product_data[2]}
                        </p>
                        {/* Price & Rating */}
                        <p className="text-sm font-bold">
                          US${item.product_price}
                        </p>
                      </div>

                      <div>
                        <span className="text-[13px] font-bold ">
                          {item.product_rating}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious ref={prevRef} className="sr-only" />
          <CarouselNext ref={nextRef} className="sr-only" />
        </Carousel>
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

export default New_In;
