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
    <section className='relative min-h-screen w-full py-10 pl-8 flex flex-col items-start justify-between gap-4'>
      <BrandLogo />

      <div className='grow relative h-full w-full flex flex-col gap-12 items-start'>
        {/* BACKGROUND */}
        <BackgroundText activeTab={activeTab} />

        {/* MAIN CAROUSEL */}
        <div className='absolute top-0 z-10 h-full w-full flex items-center justify-center'>
          <div className='h-full flex items-end'>
            {activeTab === 'events' ? (
              <CarouselWrapper>
                <EventCarousel />
              </CarouselWrapper>
            ) : (
              <CarouselWrapper>
                <CollectionCarousel />
              </CarouselWrapper>
            )}
          </div>
        </div>
      </div>

      <TabsButton activeTab={activeTab} setActiveTab={setActiveTab} />
    </section>
  );
}

export default Hero;

const BackgroundText = ({ activeTab }:any) => (
  <>
    <h1 className='font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl opacity-25'>ASTR<br />IX</h1>
    {activeTab === 'events' && (
      <h1 className='font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl opacity-25'>EVE<br />NTS <br/></h1>
    )}
    {activeTab === 'collection' && (
      <h1 className='font-bold text-6xl md:text-7xl lg:text-9xl opacity-25'>COLL<br />ECTI<br />BLE</h1>
    )}
  </>
);

const CarouselWrapper = ({ children }:any) => (
  <div className='relative h-full flex items-end'>
    {children}
  </div>
);

const BrandLogo = () => (
  <div className='flex flex-row items-center justify-start'>
    <Image src="/Branding.svg" alt='logo' width={80} height={80} className='object-contain' />
    <Image src="/Logo.svg" alt='logo' width={180} height={180} className='object-contain' />
  </div>
);

const TabsButton = ({ activeTab, setActiveTab }:any) => (
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
);
