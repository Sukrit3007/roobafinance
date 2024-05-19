'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { motion } from "framer-motion";


const image1 = "https://utfs.io/f/855aa975-7cf9-40a2-a577-7e5ad73d203b-gcufup.png"
const image2 = "https://utfs.io/f/8a93c2a2-94f1-481c-a4b3-99c495a0a34f-num2da.png"
const image3 = "https://utfs.io/f/265cdad3-c73e-440b-b5e1-cb1a27044177-e4paqt.png"
const image4 = "https://utfs.io/f/1eb8bb15-8867-44e0-87d7-724d25ebbfe0-1ysjf7.png"


const CollectionCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 1200, stopOnInteraction: false })])

  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="embla h-full" ref={emblaRef}
    >
      <div className="embla__container relative h-full">
        <div className="embla__slide ">
          <OtherInfo/>
          <Eventone />
        </div>
        <div className="embla__slide">
          <OtherInfo/>
          <Eventtwo />
        </div>
        <div className="embla__slide">
          <OtherInfo/>
          <Eventthree />
        </div>
        <div className="embla__slide">
          <OtherInfo/>
          <Eventfour />
        </div>
      </div>
    </motion.div>
  )
}

export default CollectionCarousel

function OtherInfo() {
  return (
    <div className='flex flex-col gap-2 '>
      <h1 className='font-bold text-4xl'>Lunar Palace:</h1>
      <div className='w-fit flex items-center justify-center font-semibold text-xl'>
        <p>{"(ft. Kanye west)"}</p>
      </div>
    </div>
  )
}

function Eventone() {
  return (
    <div className=' h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-95'>
      <Image
        src={image1}
        alt="NextUI Fruit Image with Zoom"
        width={800}
        height={600}
        className='h-full w-full object-cover'
      />
    </div>
  )
}
function Eventtwo() {
  return (
    <div className='relative h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-95'>
      <Image
        src={image2}
        alt="NextUI Fruit Image with Zoom"
        width={800}
        height={600}
        className='h-full w-full object-cover'
      />
    </div>
  )
}
function Eventthree() {
  return (
    <div className='relative h-full flex items-center justify-center  transition-transform duration-300 ease-in-out hover:scale-95'>
      <Image
        src={image3}
        alt="NextUI Fruit Image with Zoom"
        width={800}
        height={600}
        className='h-full w-full object-cover'
      />
    </div>
  )
}
function Eventfour() {
  return (
    <div className='relative h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-95'>
      <Image
        src={image4}
        alt="NextUI Fruit Image with Zoom"
        width={800}
        height={600}
        className='h-full w-full object-cover'
      />
    </div>
  )
}
