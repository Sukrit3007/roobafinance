'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  "https://utfs.io/f/313523a0-21fa-4f58-ba40-734a3240d50c-czpezq.png",
  "https://utfs.io/f/edcef2f3-6263-462c-87fb-9ee22d002622-num2da.png",
  "https://utfs.io/f/ef90c5d1-547e-47b3-a5e6-e9a8c7cd1843-e4paqt.png",
  "https://utfs.io/f/283132b4-3bc2-4133-8081-7b90a58780cf-1ysjf7.png",
]

const CollectionCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 1200, stopOnInteraction: false })])

  const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="embla h-full"
      ref={emblaRef}
    >
      <div className="embla__container relative h-full">
        {images.map((image, index) => (
          <div className="embla__slide" key={index}>
            <OtherInfo />
            <Event image={image} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Event = ({ image }: any) => (
  <div className="h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-95">
    <Image
      src={image}
      alt="Event Image"
      width={800}
      height={600}
      className="h-full w-full object-cover"
    />
  </div>
)

export const OtherInfo = () => (
  <div className='flex flex-col gap-2'>
    <h1 className='font-bold text-4xl'>Lunar Palace:</h1>
    <div className='w-fit flex items-center justify-center font-semibold text-xl'>
      <p>{"(ft. Kanye west)"}</p>
    </div>
  </div>
)

export default CollectionCarousel
