import React from 'react'
import XMark from './svg/XMark'
import ChatGPTLogo from './svg/ChatGPTLogo'
import PencilSquare from './svg/PencilSquare'

function Sidebar() {
  return (
    <div className='flex w-full h-full text-white'>
    <div className='w-[400px] flex flex-col justify-between h-full bg-black pt-3 pl-3 pr-4'>
        <div className='flex justify-between items-center px-2'>
            <div className='flex items-center gap-3'>
                <div className='h-8 w-8 bg-white border border-solid border-white center-element rounded-full'>
                <ChatGPTLogo color="black"/>
                </div>
                <span className='font-bold text-xs'>
                New Chat
                </span>
            </div>

            <div>
                <PencilSquare/>
            </div>
        </div>


        <div className=' h-full w-full bg-white my-4'>

        </div>

        <div className='w-full h-10 mb-4 flex items-center gap-3'>
            <div className=' w-10 h-10 center-element border-2 border-solid rounded-full text-lg font-bold'>A</div>
            <div className='font-bold text-xs'>Anup Alone</div>
        </div>
    </div>
    <div className='bg-black opacity-15 w-full pt-3 pl-3'>
        <button  className='text-white border-2 border-solid border-white font-bold cursor-pointer'>
            <XMark/>
        </button>
    </div>
    </div>
  )
}

export default Sidebar