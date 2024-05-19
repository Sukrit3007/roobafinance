'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { OtherInfo } from './CollectionCarousel'

const images = [
    "https://utfs.io/f/8f36b7f9-0dae-4ed9-8db0-5be939715a38-2sjelo.png",
    "https://utfs.io/f/8a93c2a2-94f1-481c-a4b3-99c495a0a34f-num2da.png",
    "https://utfs.io/f/7be9c3ec-7350-4c05-8a7d-f8816a563f27-jpzw4q.png",
    "https://utfs.io/f/1eb8bb15-8867-44e0-87d7-724d25ebbfe0-1ysjf7.png"
]

const EventCarousel = () => {
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
                    <div className="embla__slide relative" key={index}>
                        <div className='invisible'>
                            <OtherInfo/>
                        </div>
                        <Event image={image} />
                        <div className='absolute bottom-0 left-0'>
                            <EvenNameInfo />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

const Event = ({ image }: any) => (
    <div className="relative h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-95">
        <Image
            src={image}
            alt="Event Image"
            width={800}
            height={600}
            className="h-full w-full object-cover"
        />
    </div>
)

const EvenNameInfo = () => (
    <div className="flex flex-col gap-8 m-6">
        <h1 className="font-bold text-4xl">Event Name</h1>
        <div className="w-fit flex flex-row gap-2 items-center justify-center font-semibold text-xl">
            <MapPin />
            <p>Location</p>
        </div>
    </div>
)

export default EventCarousel
