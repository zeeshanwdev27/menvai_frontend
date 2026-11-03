import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function Category_Section() {
  // `id` must match the folder name in /products/<id>/... (same ids used in Men_Section)
  const categoryData = [
    { id: "socks", img: "/Categories/socks.png", title: "SHOP SOCKS" },
    { id: "tanktop", img: "/Categories/tanktop.png", title: "SHOP TANKTOP" },
    { id: "underwear", img: "/Categories/underwear.png", title: "SHOP UNDERWEAR" },
  ];

  return (
    <div className="flex justify-center w-full px-5 lg:px-14 pb-14 mt-5">
      <Carousel opts={{ align: "start" }} className="w-full overflow-hidden">
        <CarouselContent>
          {categoryData.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Link to={`/collections/mens?category=${item.id}`}>
                  <Card className="overflow-hidden rounded-none shadow-none border-none transition py-0 gap-2">
                    {/* Category Image */}
                    <div className="w-full aspect-[3/4] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover cursor-pointer top-0 left-0 hover:opacity-90"
                      />
                    </div>

                    {/* Category Title */}
                    <CardContent className="px-0">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-md font-bold truncate">
                          {item.title}
                        </h2>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Category_Section;