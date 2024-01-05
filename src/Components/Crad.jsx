import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { PiOrangeSlice } from "react-icons/pi";
import {motion } from "framer-motion"


const Crad = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scaleX:1.2}} dragElastic={0.5} dragTransition={
      {bounceStiffness:60,
      bounceDamping:10}
    }>
        <div className='w-60 h-64 flex-shrink-0 bg-black rounded-[20px] text-white flex flex-col relative overflow-hidden px-7 py-2 '>
        <LuFileSpreadsheet style={{ fontSize: '2em', color: 'yellow' }}/> 
           <p className='text-sm mt-5 font-semibold leading-tight '>
            {data.description}</p> 

          <div className='flex justify-between mt-2 '>
            <h4> {data.fileSize} </h4>
            <a className='cursor-pointer hover:text-purple-600'> 
            {data.isDownload ? <IoMdDownload /> : <IoCloseOutline />}
             </a>
          </div>

           <div className={`absolute bottom-0 ${data.footer.footcolor === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'} w-full h-8 left-0 px-6 font-bold`} >{data.footer.isFooter ? data.footer.title : <PiOrangeSlice /> }</div>
        </div>
    </motion.div>
  )
}

export default Crad
 