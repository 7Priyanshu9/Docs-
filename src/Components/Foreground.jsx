import React, { useRef } from 'react'
import Crad from './Crad'

const Foreground = () => {


    const ref = useRef(null);
    const data = [{
        description :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam",
        fileSize: '50 mb',
        isDownload : true,
        footer: {
            isFooter:false,
            title: "Lorem ipsum dolor sit amet. ",
            footcolor: 'yellow',
        },
    },
    {
        description :" Indian Cricket team",
        fileSize: '50 mb',
        isDownload : true,
        footer: {
            isFooter:true,
            title: "Lorem ipsum dolor sit amet. ",
            footcolor: '#',
        },
    },
     {
        description :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam",
        fileSize: '50 mb',
        isDownload : true,
        footer: {
            isFooter:false,
            title: "Lorem ipsum dolor sit amet. ",
            footcolor: 'yellow',
        },
    }]

  return (
    <div ref={ref} className='z-[3] w-full h-full fixed top-10 left-10
    flex gap-6 flex-wrap '>
       {
        data.map((items,index)=>(
            <Crad data= {items}
            reference = {ref}/>
        ))
       }
    </div>
  )
}

export default Foreground
