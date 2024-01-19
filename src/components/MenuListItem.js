import { BiSolidUser } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";


export default function MenuListItem( {data} ) {
  return (<>
      {
        data?.map(day => (
          <div className="w-[700px] h-auto flex flex-row bg-[#ecf3f5]">
            <div className="w-[700px] h-auto flex flex-row bg-[#ecf3f5]" style={{height: day?.data?.length > 0 ? 'auto' : '100px'}}>
              <div className="w-[40px] h-100% flex flex-row items-center relative" style={{background: day.orderable ? '#7cae5c' : '#9aa9b3'}}>
                <div className="grow-1 text-white text-[24px] -rotate-90 ">
                  {day?.date}
                </div>
                {
                  day.orderable ? 
                    <BsBoxArrowUpRight className="absolute bottom-0 mb-1 p-1 w-full h-7 text-white"/>
                    : <></>
                }
              </div>
              <div className="grow-[1] h-100% flex flex-col">
                {
                  day?.data?.length == 0 ? 
                    <div className="grow-[1] h-full">
                      <div className="w-100% h-full flex flex-row p-[24px] gap-[12px] items-center">
                        <div className="grow-1 h-100% text-[#6c767d] text-left text-[20px]">No service this day!</div>
                      </div>
                    </div>
                    :
                  day?.data?.map(subdata => (
                    <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px] border-b-4 border-[#d6dee2]">
                      <div className="grow-1 h-auto flex text-left flex-row gap-[36px] items-center justify-between">
                        <div className="grow-1 h-auto text-[#606b72] text-left font-bold text-[20px]">
                          {subdata?.title}
                        </div>
                        {
                        subdata?.price > 0 ?
                          <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
                            <div className="grow-1 h-auto text-center text-[#6c767d]">
                              {subdata?.price}$
                            </div>
                            <button className="flex flex-row grow-1 h-auto bg-[#9aa9b3] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                              <BiSolidUser />
                              {subdata?.orders}
                            </button>
                            <input className="w-[20px] h-[20px]" type='checkbox' value={subdata?.history} disabled={!day?.orderable} />
                          </div>
                        : <></>
                      }
                      </div>
                      {
                        subdata?.data?.map(content => (
                          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
                            <div className="grow-1 h-auto text-[#6c767d] text-left text-[20px]">{content?.description}</div>
                            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
                              <div className="grow-1 h-auto text-center text-[#6c767d]">
                                {content?.price}$
                              </div>
                              <button className="flex flex-row grow-1 h-auto bg-[#9aa9b3] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                                <BiSolidUser />
                                {content?.orders}
                              </button>
                              <input className="w-[20px] h-[20px]" type='checkbox' value={content?.history} disabled={!day?.orderable} />
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }


    {/* <div className="w-[700px] h-[100px] flex flex-row bg-[#ecf3f5]">
      <div className="w-[40px] h-100% bg-[#9aa9b3] flex flex-row items-center relative">
        <div className="grow-1 text-white text-[24px] -rotate-90 ">
          Tue
        </div>
      </div>

      <div className="grow-[1] h-full">
        <div className="w-100% h-full flex flex-row p-[24px] gap-[12px] items-center">
          <div className="grow-1 h-100% text-[#6c767d] text-left text-[20px]">No service this day!</div>
        </div>
      </div>
    </div>

    <div className="w-[700px] h-auto flex flex-row bg-[#ecf3f5]">
      <div className="w-[40px] h-100% bg-[#9aa9b3] flex flex-row items-center relative">
        <div className="absolute grow-1 text-white text-[24px] -rotate-90 ">
          Wed
        </div>
      </div>

      <div className="grow-[1] h-100% flex flex-col">
        <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px]">
          <div className="w-100% grow-auto text-[#606b72] text-left font-bold text-[20px]">
            Fish(so juicy sweat)
          </div>
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left text-[20px]">Description - Fish(so juicy sweat)</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                3.60$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#9aa9b3] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                4
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
        </div>

        <div className="w-100% h-[2px] bg-[#d6dee2]" />

        <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px]">
          <div className="w-100% grow-auto text-[#606b72] text-left font-bold text-[20px]">
            Innards
          </div>
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left text-[20px]">Innards #v1</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                3.60$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#9aa9b3] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                2
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left text-[20px]">Innards #v2</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                3.60$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#9aa9b3] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                3
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
        </div>

        <div className="w-100% h-[2px] bg-[#d6dee2]" />

        <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px]">
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left font-bold text-[20px]">Combined Dish</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                5.60$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#9aa9b3] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                1
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-[700px] h-auto flex flex-row bg-[#ecf3f5]">
      <div className="w-[40px] h-100% bg-[#7cae5c] flex flex-row items-center relative">
        <div className="grow-1 text-white text-[24px] -rotate-90 ">
          Thu
        </div>
        <BsBoxArrowUpRight className="absolute bottom-0 mb-1 p-1 w-full h-7 text-white"/>
      </div>

      <div className="grow-[1] h-100% flex flex-col">
        <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px]">
          <div className="w-100% grow-auto text-[#606b72] text-left font-bold text-[20px]">
            Limbs
          </div>
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left text-[20px]">Description - Limbs</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                3.25$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#7cae5c] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                1
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
        </div>

        <div className="w-100% h-[2px] bg-[#d6dee2]" />

        <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px]">
          <div className="w-100% grow-auto text-[#606b72] text-left font-bold text-[20px]">
            Fish(so juicy sweat)
          </div>
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left text-[20px]">Description - Fish(so juicy sweat)</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                3.60$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#7cae5c] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                42
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
        </div>

        <div className="w-100% h-[2px] bg-[#d6dee2]" />

        <div className="w-100% grow-1 flex flex-col p-[24px] gap-[12px]">
          <div className="w-100% grow-auto flex flex-row items-center justify-between gap-[12px]">
            <div className="grow-1 h-auto text-[#6c767d] text-left font-bold text-[20px]">Combined Dish</div>
            <div className="grow-1 h-auto flex flex-row gap-[36px] items-center">
              <div className="grow-1 h-auto text-center text-[#6c767d]">
                15.60$
              </div>
              <button className="flex flex-row grow-1 h-auto bg-[#7cae5c] items-center gap-[4px] text-white rounded-[60px] pl-[12px] pt-[4px] pb-[4px] pr-[12px]">
                <BiSolidUser />
                11
              </button>
              <input className="w-[20px] h-[20px]" type='checkbox' />
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </>)
}