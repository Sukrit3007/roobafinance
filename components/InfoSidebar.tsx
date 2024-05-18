'use client'

import React from 'react';
import { Button } from '@nextui-org/button';
import { MapPin, AlarmClock } from 'lucide-react';
import ArtistLineup from './ArtistLineup';
import qrcode from '../public/qrcode.png';
import Image from 'next/image';


const InfoSidebar = () => {
    return (
        <div className='h-full w-full flex flex-col items-start justify-between gap-20 py-10 pl-10'>
            {/* heading */}
            <div className='w-full'>
                <div className='max-w-[70%]'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Explore Your First Event</h1>
                </div>
            </div>

            <div className='w-full flex flex-col gap-6'>
                <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl'>Event Name</h1>
                <div className='flex flex-row flex-wrap gap-4 font-semibold text-base md:text-lg lg:text-xl'>
                    <div className='w-fit flex flex-row gap-2 items-center justify-center'>
                        <MapPin />
                        <p>Venue</p>
                    </div>
                    <div className='w-fit flex flex-row  gap-2 items-center justify-center'>
                        <AlarmClock />
                        <p>04/3/2024 @19:00</p>
                    </div>
                </div>
                <div className='max-w-[70%]'>
                    <p className='font-semibold text-sm lg:text-base'>
                        Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
                    </p>
                </div>
                <ArtistLineup />
            </div>

            <div className='w-full'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div>
                        <Image
                            height={120}
                            width={120}
                            src={qrcode}
                            alt='NextUI Album Cover'
                        />
                    </div>
                    <div className='flex items-end justify-start lg:justify-end pr-8'>
                        <Button
                            radius='full'
                            className='bg-[#FFCA5F] text-black font-bold text-base lg:text-xl font-lexend'
                        >
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoSidebar;
