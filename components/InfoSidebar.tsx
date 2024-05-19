'use client'

import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { motion } from 'framer-motion';
import useTabStore from '@/lib/store';
import qrcode from '../public/qrcode.png';
import EventName from './EventName';
import MetaLives from './MetaLives';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const InfoSidebar = () => {
  const { activeTab } = useTabStore();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      className='relative min-h-screen w-full py-10 pl-8 md:pl-12 lg:pl-16 xl:pl-20 flex flex-col items-start justify-start gap-16'
    >
      <SectionHeading />
      <ContentSection activeTab={activeTab} />
      <BottomSection activeTab={activeTab} />
    </motion.div>
  );
};

export default InfoSidebar;

const SectionHeading = () => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='basis-1/4 h-full w-full'>
    <div className='max-w-[70%]'>
      <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Explore Your First Event</h1>
    </div>
  </motion.div>
);

const ContentSection = ({ activeTab }:any) => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='shrink h-full flex items-center' style={{ flex: '2 1 auto' }}>
    {activeTab === 'events' && <EventName />}
    {activeTab === 'collection' && <MetaLives />}
  </motion.div>
);

const BottomSection = ({ activeTab }:any) => (
  <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className='abs h-full w-full'>
    <ButtonAndQr activeTab={activeTab} />
  </motion.div>
);

const ButtonAndQr = ({ activeTab }:any) => (
  <div className='h-full flex flex-row flex-wrap gap-4 items-end justify-between'>
    <div>
      {activeTab === 'events' && <QrCodeImage />}
    </div>
    <JoinWaitlistButton />
  </div>
);

const QrCodeImage = () => (
  <Image height={100} width={100} src={qrcode} alt='qr' />
);

const JoinWaitlistButton = () => (
  <div className='flex items-end justify-end pr-8'>
    <Button size='lg' radius='full' className='bg-[#FFCA5F] text-black font-bold font-lexend'>
      Join Waitlist
    </Button>
  </div>
);
