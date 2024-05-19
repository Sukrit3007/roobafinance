'use client'

import React from 'react';
import qrcode from '../public/qrcode.png';
import Image from 'next/image';
import useTabStore from '@/lib/store';

import EventName from './EventName';
import { Button } from '@nextui-org/button';
import MetaLives from './MetaLives';
import { motion } from "framer-motion";



const InfoSidebar = () => {
    const { activeTab, setActiveTab } = useTabStore();

    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
            className='relative min-h-screen w-full py-10 pl-8 md:pl-12 lg:pl-16 xl:pl-20 flex flex-col items-start justify-start gap-16'
        >
            {/* HEADING */}
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='basis-1/4 h-full w-full '
            >
                <div className='max-w-[70%]'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Explore Your First Event</h1>
                </div>
            </motion.div>

            {/* MIDDLE */}
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='shrink h-full flex items-center'
                style={{ flex: '2 1 auto' }}
            >

                    {activeTab === 'events' && <EventName />}
                    {activeTab === 'collection' && <MetaLives />}


            </motion.div>

            {/* BOTTOM */}
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='abs h-full w-full'
            >
                <ButtonAndQr />
            </motion.div>
        </motion.div>
    );
};

export default InfoSidebar;



function ButtonAndQr() {
    const { activeTab, setActiveTab } = useTabStore();
    return (
        <div className='h-full flex flex-row flex-wrap gap-4 items-end justify-between'>
            <div>
                {activeTab === 'events' && <Image
                    height={100}
                    width={100}
                    src={qrcode}
                    alt='qr'
                />}
                {activeTab === 'collection' && null}

            </div>
            <div className='flex items-end justify-end pr-8'>
                <Button
                    size='lg'
                    radius='full'
                    className='bg-[#FFCA5F] text-black font-bold font-lexend'
                >
                    Join Waitlist
                </Button>
            </div>
        </div>
    )
}
