"use client"
import React, { useState } from 'react'
import * as moment from 'moment';
import Header from '@/components/Header';

export default function MenuList() {

  const [menuList, setMenuList] = useState([{
    title: "Week #03",
    startDate: "2024-01-15", 
    endDate: "2024-01-19",
    editable: true,
  }, {
    title: "Week #04",
    startDate: "2024-01-22", 
    endDate: "2024-01-26",
    editable: true,
  }, {
    title: "Week #05",
    startDate: "2024-01-29", 
    endDate: "2024-02-02",
    editable: false,
  }, {
    title: "Week #06",
    startDate: "2024-02-05", 
    endDate: "2024-02-09",
    editable: false,
  }, {
    title: "Week #07",
    startDate: "2024-02-12", 
    endDate: "2024-02-16",
    editable: false,
  }]);


  return (
    <div>
      <main className="relative">
        <Header />
        <div className="absolute w-full h-10 bg-[#606b72] top-30 z-0" />

        <code className="flex flex-row justify-center">
          <div className="relative">
            <div className="min-w-[1400px] w-auto h-auto flex flex-col justify-between gap-[24px] pt-[32px] pl-[60px] pr-[60px] pb-[32px] bg-white">
              <div className="text-[32px] font-bold text-[#5f6b72]">
                List of weeks
              </div>
              <div className="w-[100%] flex flex-wrap">
                {
                  menuList.map(item => (
                    <div className="w-1/4 h-[200px] p-[5px]">
                      <div
                        className='w-full h-full flex items-center justify-center text-[20px] hover:border-solid hover:border-[4px] hover:border-[#5f6b72]'
                        style={{
                          background: item.editable ? "#7cae5c" : "#ecf2f5",
                          color: item.editable ? 'white' : '#5f6b72',
                        }}
                      >
                        <span className="text-center self-center">
                          {item.title} <br/> {`${moment(new Date(item.startDate)).format('MM.DD.')} - ${moment(new Date(item.endDate)).format('MM.DD.')}`}
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </code>
      </main>
    </div>
  );
}