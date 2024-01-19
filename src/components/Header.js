import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiLogOut } from "react-icons/bi";

export default function Header () {
  const router = useRouter();

  return (<>
    <div className="w-full h-auto flex flex-row justify-center items-baseline py-3 gap-[32px] bg-[#606b72]">
      <div className="grow-2 h-auto flex flex-col items-end">
        <div className="min-w-[1400px] w-auto h-auto mt-[40px] gap-[80px] flex flex-row items-baseline bg-[#606b72]">
          <Link href="/order" className="grow-auto h-full text-[40px] text-white font-bold">
            School Meals
          </Link>
          <div className="grow-auto h-auto flex flex-row gap-[48px] items-baseline justify-between">
            <Link href="/menu" className="grow-auto h-auto text-white text-[20px]">
              Menu
            </Link>
            <Link href="/dishes" className="grow-auto h-auto text-white text-[20px]">
              Dishes
            </Link>
            <Link href="/categories" className="grow-auto h-auto text-white text-[20px]">
              Categories
            </Link>
            <div className="grow-auto h-auto text-white text-[20px]">
              Allergies
            </div>
            <div className="grow-auto h-auto text-white text-[20px]">
              Time Slots
            </div>
            <div className="grow-auto h-auto text-white text-[20px]">
              Costs
            </div>
            <Link href="/finance" className="grow-auto h-auto text-white text-[20px]">
              Finance
            </Link>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row gap-[16px] text-[16px] items-baseline text-right">
          <div className="text-[#a0b0ba]">
            You are logged in as:
          </div>
          <div className="text-[20px] text-white">
            Tom
          </div>
          <div className="text-[16px] text-[#a0b0ba]">
            Balance:
          </div>
          <div className="text-[20px] text-white">
            1217.32 $
          </div>
          <BiLogOut className="text-[#acbdc7] w-6 m-auto h-auto rotate-180" />
        </div>
      </div>
    </div>
  </>);
}