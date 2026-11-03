import React from "react";
import { Separator } from "@/components/ui/separator";

function Detail_Section() {
  return (
    <div className="w-full px-5 lg:px-14 pt-2 lg:pt-10 pb-20">
      <Separator className="w-full" />

      <div className="mt-10 flex flex-col gap-7 lg:gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl lg:text-3xl font-bold mb-1">
            MEN'S EVERYDAY ESSENTIALS
          </h1>
          <p className="text-[14px]">
            At MENVIA, we believe everyday essentials should feel as good as
            they look. From comfortable men's underwear and everyday socks
            to versatile tank tops, our collection is designed to bring
            comfort, confidence, and simplicity to your daily routine.
          </p>
          <p className="text-[14px]">
            We focus on the essentials you reach for every day. Thoughtful
            designs, comfortable fits, and timeless styles come together
            to make getting dressed feel effortless.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl lg:text-2xl font-bold mb-1">
            COMFORT STARTS WITH THE BASICS
          </h1>
          <p className="text-[14px]">
            The foundation of every great outfit starts with what you wear
            underneath. That's why MENVIA brings together men's essentials
            designed around everyday comfort and effortless style.
          </p>
          <p className="text-[14px]">
            Discover our collection of <b>men's underwear</b>, made for
            comfortable everyday wear, <b>men's socks</b> that keep you
            comfortable throughout the day, and <b>men's tank tops</b>
            that are easy to wear on their own or layer with your favorite
            outfits.
          </p>
          <p className="text-[14px]">
            Whether you're heading out, relaxing at home, or getting ready
            for the day, our essentials are made to fit naturally into
            your lifestyle.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl lg:text-2xl font-bold mb-1">
            MADE FOR EVERYDAY LIFE
          </h1>
          <p className="text-[14px]">
            Your everyday essentials should never be an afterthought.
            From your first step in the morning to the end of a long day,
            MENVIA is here to make comfort part of everything you do.
          </p>
          <p className="text-[14px]">
            Our men's collection brings together versatile <b>socks</b>,
            comfortable <b>underwear</b>, and essential <b>tank tops</b>
            that work across different moments of your day. Simple,
            functional, and easy to style — exactly how everyday clothing
            should be.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl lg:text-2xl font-bold mb-1">
            MORE THAN JUST THE BASICS
          </h1>
          <p className="text-[14px]">
            MENVIA is built around a simple idea: the things you wear
            every day deserve more attention. We believe confidence
            starts with feeling comfortable in what you wear, even when
            no one else sees it.
          </p>
          <p className="text-[15px] text-gray-800">
            From everyday socks to comfortable underwear and versatile
            tank tops, discover men's essentials that keep things simple.
            <b> MENVIA — Made for Every Day.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail_Section;
