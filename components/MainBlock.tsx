'use client'
import React from 'react'
import VerticalText from './VerticalText'
import {Tabs, Tab} from "@nextui-org/tabs";
import Image from 'next/image';

const MainBlock = () => {
  return (
    <section className=' h-full py-10 px-8 flex flex-col items-start justify-between gap-4'>
      <div className='flex flex-row'>
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

      <div className='flex flex-col gap-12 items-start justify-between font-bold text-6xl md:text-7xl lg:text-8xl opacity-25'>
        <h1>
          ASTR<br/>IX
        </h1>
        <h1>
          COLL<br/>ECTI<br/>BLE
        </h1>
      </div>

      <div className=' max-h-screen overflow-hidden rotate-90'>
        <VerticalText/>
      </div>
      

      <div>
        <Tabs color='default' size='lg' aria-label="Tabs colors" radius="full" className='font-semibold'>
          <Tab key="events" title="Events"/>
          <Tab key="collection" title="Collection"/>
        </Tabs>
      </div>
    </section>
  )
}

export default MainBlock
