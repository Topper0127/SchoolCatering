"use client"
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header';

import MenuListItem from '@/components/MenuListItem';

export default function MenuList() {

  const convertDateToString = (date) => {
    var data = new Date(date);
    var dayOfWeek = data.toString().split(' ')[0];
    var month = data.getMonth() + 1;
    var day = data.getDate();
    return (`${dayOfWeek.toString()} ${day.toString()}.${month.toString()}.`);
  }

  const [dayTitle, setDayTitle] = useState('');
  const [curWeekData, setCurWeekData] = useState({
    startDate: new Date('2024-01-16'),
    endDate: new Date('2024-01-20'),
    data: [{
      date: 'Mon',
      orderable: false,
      data: [{
        title:'Tasty Worms',
        price: -1,
        orders: 0,
        history: false,
        data: [{
          description: 'Description - Tasty Worms',
          price: 3.8,
          orders: 12,
          history: true
        }]
      }, {
        title: 'Braaaaaaiiinnzz',
        data: [{
          description: 'Description - Brainz',
          price: 3.6,
          orders: 6,
          history: false
        }]
      }]
    }, {
      date: 'Tue',
      orderable: false,
      data: []
    }, {
      date: 'Wed',
      orderable: true,
      data: [{
        title:'Fish(no juicy sweat)',
        price: -1,
        orders: 0,
        history: false,
        data: [{
          description: 'Description - Fish',
          price: 3.6,
          orders: 4,
          history: false
        }]
      }, {
        title: 'Innards',
        price: -1,
        orders: 0,
        history: false,
        data: [{
          description: 'Innards #v1',
          price: 2.76,
          orders: 2,
          history: false
        }, {
          description: 'Innards #v2',
          price: 2.76,
          orders: 3,
          history: false
        }]
      }, {
        title: 'Combined Dish',
        price: 15.6,
        orders: 7,
        history: false,
        data: []
      }]
    }, {
      date: 'Thu',
      orderable: true,
      data: [{
        title:'Limbs',
        price: -1,
        orders: 7,
        history: false,
        data: [{
          description: 'Description - Limbs',
          price: 3.25,
          orders: 7,
          history: false
        }]
      }, {
        title: 'Fish',
        price: -1,
        orders: 2,
        history: false,
        data: [{
          description: 'Description - Fish',
          price: 2.76,
          orders: 2,
          history: false
        }]
      }, {
        title: 'Combined dish',
        price: 15.6,
        orders: 11,
        history: true
      }]
    }]
  });

  useEffect(() => {
    setDayTitle(convertDateToString(curWeekData?.startDate) + ' - ' + convertDateToString(curWeekData?.endDate));
  }, [curWeekData]);

  return (
    <div>
      <main className="relative">
        <Header />
        <div className="absolute w-full h-10 bg-[#606b72] top-30 z-0" />

        <code className="flex flex-row justify-center">
          <div className="relative">
            <div className="flex flex-col bg-white">
              <div className="flex flex-row">
                <div className="relative">
                  <div className="absolute w-[40px] h-full right-0 z-0 curweekbg" />
                  <div className="relative grow-auto p-8 flex flex-col gap-4 z-10">
                    <div className="grow-auto flex flex-col gap-0 justify-between items-center bg-gradient">
                      <div className="grow-auto text-[32px] font-bold text-[#606b72]">
                        Current week
                      </div>
                      <div className="grow-auto text-[20px] text-[#acbdc7]">
                        {dayTitle}
                      </div>
                    </div>
                    <MenuListItem data={curWeekData?.data} />
                  </div>
                </div>
                <div className="bg-gray border-[1px] border-[#d2d8dc]" />
                <div className="relative grow-auto p-8 flex flex-col gap-4 z-10">
                    <div className="grow-auto flex flex-col gap-0 justify-between items-center bg-gradient">
                      <div className="grow-auto text-[32px] font-bold text-[#606b72]">
                        Next week
                      </div>
                      <div className="grow-auto text-[20px] text-[#acbdc7]">
                        {dayTitle}
                      </div>
                    </div>
                    <MenuListItem data={curWeekData?.data} />
                </div>
              </div>
              <div className="flex flex-row gap-6 justify-space items-center pl-8 pb-8">
                <div className="w-8 h-8 bg-[#7cae5c]" />
                <div className="w-auto h-auto text-[#636e74] text-[18px]">
                  Available
                </div>
                <div className="w-8 h-8 bg-[#9aa9b3]" />
                <div className="w-auto h-auto text-[#636e74] text-[18px]">
                  Unavailable for order
                </div>
                <div className="w-8 h-8 bg-[#d98f41]" />
                <div className="w-auto h-auto text-[#636e74] text-[18px]">
                  Your order is being offer to others
                </div>
              </div>
            </div>
          </div>
        </code>
      </main>
    </div>
  );
}