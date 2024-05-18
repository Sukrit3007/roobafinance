'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';


import CollectionCarousel from './CollectionCarousel';
import EventCarousel from './EventCarousel';
import useTabStore from '@/lib/store';


const Hero: React.FC = () => {
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <section className='relative h-screen w-full py-10 pl-8 flex flex-col items-start justify-between gap-4'>
      <BrandLogo />

      <div className='relative h-full w-full flex flex-col gap-12 items-start justify-between '>
        <h1 className='font-bold text-6xl md:text-7xl lg:text-9xl opacity-25'>ASTR<br />IX</h1>
        <h1 className='font-bold text-6xl md:text-7xl lg:text-9xl opacity-25'>COLL<br />ECTI<br />BLE</h1>
        <div className='absolute top-0 z-10 h-full w-full flex items-center justify-center'>
          <div className='h-[80%]'>
            {activeTab === 'events' && <EventCarousel/>}
            {activeTab === 'collection' && <CollectionCarousel />}
          </div>
        </div>
      </div>

      <TabsButton/>
    </section>
  );
}

export default Hero;

function BrandLogo() {
  return (
    <div className='flex flex-row items-center justify-start'>
      <Image src="/Branding.svg" alt='logo' width={80} height={80} className='object-contain' />
      <Image src="/Logo.svg" alt='logo' width={180} height={180} className='object-contain' />
    </div>
  )
}

function TabsButton() {
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <div className="flex space-x-3 bg-[#282B30] p-1 rounded-full">
      <Button
        className={`px-4 py-2 rounded-full ${activeTab === 'events' ? 'bg-[#484E56] text-white' : 'bg-[#282B30] text-gray-400'}`}
        onClick={() => setActiveTab('events')}
      >
        Events
      </Button>
      <Button
        
        className={`px-4 py-2 rounded-full ${activeTab === 'collection' ? 'bg-[#484E56] text-white' : 'bg-[#282B30] text-gray-400'}`}
        onClick={() => setActiveTab('collection')}
      >
        Collections
      </Button>
    </div>
  )
}