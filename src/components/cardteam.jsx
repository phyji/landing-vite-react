import React from 'react'
import Polygon from '../assets/svg/polygon'
const cardteam = ({children}) => {
  return (
    <>
    <div className='w-[246.65px] h-[329.7px]'>
        <div className='relative overflow-hidden'>
            <div>
            <Polygon />
            </div>
            <div className='absolute top-[-16px] left-[20px] '>
                {children}
            </div>
        </div>
        <div className='font-space text-[#E6E6E6] text-[18px] pl-[5px] w-full mt-[24px]'>
            <h2>
                UI & UX Design
            </h2>
            <div className='font-satoshi text-[14px] mt-[16px] font-thin'>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default cardteam