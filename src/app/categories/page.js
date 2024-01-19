"use client"
import React from 'react'
import Header from '@/components/Header';
import { BsFillPencilFill, BsXLg } from "react-icons/bs";

export default function Categories() {

  return (
    <div>
      <main className="relative">
        <Header />
        <div className="absolute w-full h-10 bg-[#5f6b72] top-30 z-0" />

        <code className="flex flex-row justify-center">
          <div className="relative">
            <div className="min-w-[1400px] h-auto flex flex-col justify-between gap-[24px] pt-[32px] pl-[60px] pr-[60px] pb-[32px] bg-white">
              <div className="flex flex-row justify-between items-baseline">
                <div className="text-[32px] font-bold text-[#5f6b72]">
                  List of categories
                </div>
                <div className="grow-auto flex flex-row justify-between items-baseline gap-[12px] text-[24px] font-bold text-[#d99047]">
                  <img src="ic_dish.png" className="w-[32px] h-[32px]" />
                  CREATE CATEGORY
                </div>
              </div>
              <div className="flex flex-row justify-between items-baseline text-[20px] text-[#9aa9b3]">
                <div className="flex-1">Title</div>
                <div className="mr-[176px]">Actions</div>
              </div>
              <div className="w-full flex flex-row gap-[20px] justify-between items-baseline border-b-2 border-[#9aa9b3] pr-[48px]">
                <div className="flex-1 text-[#9aa9b3] text-[28px]">Meat</div>
                <div className="grow-auto flex flex-row gap-[12px] items-baseline">
                  <BsFillPencilFill />
                  <div className="text-[#5f6b72] text-[24px]">Edit</div>
                </div>
                <div className="grow-auto flex flex-row gap-[12px] items-baseline">
                  <BsXLg />
                  <div className="text-[#5f6b72] text-[24px]">Delete</div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-[20px] justify-between items-baseline border-b-2 border-[#9aa9b3] pr-[48px]">
                <div className="flex-1 text-[#9aa9b3] text-[28px]">Vegetarian</div>
                <div className="grow-auto flex flex-row gap-[12px] items-baseline">
                  <BsFillPencilFill />
                  <div className="text-[#5f6b72] text-[24px]">Edit</div>
                </div>
                <div className="grow-auto flex flex-row gap-[12px] items-baseline">
                  <BsXLg />
                  <div className="text-[#5f6b72] text-[24px]">Delete</div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-[20px] justify-between items-baseline border-b-2 border-[#9aa9b3] pr-[48px]">
                <div className="flex-1 text-[#9aa9b3] text-[28px]">Others</div>
                <div className="grow-auto flex flex-row gap-[12px] items-baseline">
                  <BsFillPencilFill />
                  <div className="text-[#5f6b72] text-[24px]">Edit</div>
                </div>
                <div className="grow-auto flex flex-row gap-[12px] items-baseline">
                  <BsXLg />
                  <div className="text-[#5f6b72] text-[24px]">Delete</div>
                </div>
              </div>
            </div>
          </div>
        </code>
      </main>
    </div>
  );
}