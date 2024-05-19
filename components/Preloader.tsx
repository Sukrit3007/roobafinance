'use client'

import TextImage from '@/components/TextImage'
import Image from 'next/image'
import React from 'react'

import { motion, spring } from "framer-motion";

const Preloader = () => {
  return (
    <div className='h-screen w-screen bg-transparent'>
      <motion.div
        initial={{
          opacity: 1, y:0
        }}
        animate={{
          opacity:1, y:-1000, 
        }}
        transition={{ duration: 2, delay: 2, type:spring }}
        className='relative h-screen w-screen bg-[#FFF4DF] flex items-center justify-center p-12'
      >
      <div className='absolute top-0 left-0 px-8 py-16 hidden lg:inline'>
        <BrandLogo />
      </div>
      <div>
        <TextImage />
      </div>
    </motion.div>
  </div >
  )
}

export default Preloader

function BrandLogo() {
  return (
    <div className='flex flex-row gap-4 items-center justify-start w-fit'>

      <div>
        <Image
          src='/Logo2.svg'
          alt='icon'
          width={50}
          height={50}
        />
      </div>
      <div>
        <Image
          src='/Branding2.svg'
          alt='icon'
          width={130}
          height={30}
        />
      </div>
    </div>
  )
}