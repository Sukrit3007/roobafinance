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
            className='h-screen w-full flex flex-col items-center justify-between  py-10 pl-16'
        >
            {/* heading */}
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='w-full'
            >
                <div className='max-w-[70%]'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Explore Your First Event</h1>
                </div>
            </motion.div>

            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                {activeTab === 'events' && <EventName />}
                {activeTab === 'collection' && <MetaLives />}
            </motion.div>

            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className='w-full'
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
        <div className='grid lg:grid-cols-2 gap-6'>
            <div>
                {activeTab === 'events' && <Image
                    height={120}
                    width={120}
                    src={qrcode}
                    alt='NextUI Album Cover'
                />}
                {activeTab === 'collection' && null}

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
    )
}
