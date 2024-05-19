'use client'

import { AlarmClock, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const EventName = () => {
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
      className='h-full w-full flex flex-col gap-6'>

      <motion.h1
        variants={FADE_UP_ANIMATION_VARIANTS}
        className='font-extrabold text-2xl md:text-4xl lg:text-5xl'
      >
        Event Name
      </motion.h1>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className='flex flex-row flex-wrap gap-4 font-semibold text-base md:text-lg lg:text-xl'
      >
        <div className='w-fit flex flex-row gap-2 items-center justify-center'>
          <MapPin /><p>Venue</p>
        </div>
        <div className='w-fit flex flex-row  gap-2 items-center justify-center'>
          <AlarmClock /><p>04/3/2024 @19:00</p>
        </div>
      </motion.div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className='max-w-[70%]'
      >
        <p className='font-semibold text-sm lg:text-base'>
          Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
        </p>
      </motion.div>
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className='w-full pr-6'
      >
        <ArtistLineup />
      </motion.div>
    </motion.div>
  )
}

export default EventName


function ArtistLineup() {
  const artist1 = 'https://utfs.io/f/394e0e8f-f474-4268-bc93-5171b153336a-ehi7y0.png'
  const artist2 = 'https://utfs.io/f/52bd3601-1e3a-4197-951e-1a6be60044e6-vblxq6.png'
  const artist3 = 'https://utfs.io/f/99622a5f-c99b-43a1-bc3b-4fbf95a9fd41-wzr09f.png'
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='font-bold text-2xl'>Artist Lineup</h1>
      <div className='relative flex items-center justify-center '>

        <div className='w-fit flex items-center justify-center -mr-2'>
          <Image
            src={artist1}
            alt='artist'
            width={150}
            height={150}
            className='object-none aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-105'
          />
        </div>
        <div className='w-fit flex items-center justify-center z-10'>
          <Image
            src={artist2}
            alt='artist'
            width={200}
            height={200}
            className='object-cover aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-105'
          />
        </div>
        <div className='w-fit flex items-center justify-center -ml-2'>
          <Image
            src={artist3}
            alt='artist'
            width={150}
            height={150}
            className='object-cover aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-105'
          />
        </div>
      </div>

    </div>
  )
}


