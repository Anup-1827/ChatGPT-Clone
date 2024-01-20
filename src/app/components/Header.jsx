import BottomThreeBars from '@/app/ui/BottomThreeBars'
import React from 'react'
import PencilSquare from '../ui/PencilSquare'
import ChatGPTLogo from '../ui/ChatGPTLogo'

function Header() {
  return (
    <div className='w-full px-3 flex justify-between items-center h-10 border-b-2 border-mainColor border-solid'>
        <BottomThreeBars/>
        <div> <span className='font-bold'>ChatGPT</span> <span className='text-mainColor'>3.5</span></div>
        <PencilSquare/>
    </div>
  )
}

export default Header