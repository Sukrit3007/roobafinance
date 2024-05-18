'use client'
import React from 'react'
import VerticalText from './VerticalText'
import { Tabs, Tab } from "@nextui-org/tabs";
import Image from 'next/image';
import MainCarousel from './MainCarousel';

const MainBlock = () => {
  return (
      <section className='relative h-screen w-full py-10 pl-8 flex flex-col items-start justify-between gap-4'>
        <div className='flex flex-row items-center justify-start'>
          <Image
            src="/Branding.svg"
            alt='logo'
            width={80}
            height={80}
            className='object-contain'
          />
          <Image
            src="/Logo.svg"
            alt='logo'
            width={180}
            height={180}
            className='object-contain'
            />
        </div>

        <div className='relative h-full w-full flex flex-col gap-12 items-start justify-between '>
          <h1 className='font-bold text-6xl md:text-7xl lg:text-9xl opacity-25'>
            ASTR<br />IX
          </h1>
          <h1 className='font-bold text-6xl md:text-7xl lg:text-9xl opacity-25'>
            COLL<br />ECTI<br />BLE
          </h1>
          <div className='absolute top-0 z-10 h-full w-full '>
            <MainCarousel/>
          </div>
        </div>

        <div>
          <Tabs color='default' size='lg' aria-label="Tabs colors" radius="full" className='font-semibold'>
            <Tab key="events" title="Events" />
            <Tab key="collection" title="Collection" />
          </Tabs>
        </div>
      </section> 
  )
}

export default MainBlock
