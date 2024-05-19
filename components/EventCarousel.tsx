'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { motion } from "framer-motion";


const image1 = "https://utfs.io/f/8f36b7f9-0dae-4ed9-8db0-5be939715a38-2sjelo.png"
const image2 = "https://utfs.io/f/8a93c2a2-94f1-481c-a4b3-99c495a0a34f-num2da.png"
const image3 = "https://utfs.io/f/7be9c3ec-7350-4c05-8a7d-f8816a563f27-jpzw4q.png"
const image4 = "https://utfs.io/f/1eb8bb15-8867-44e0-87d7-724d25ebbfe0-1ysjf7.png"


const EventCarousel = () => {
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
            className="embla h-full" ref={emblaRef}>
            <div className="embla__container h-full">
                <div className="embla__slide">
                    <Eventone />
                </div>
                <div className="embla__slide">
                    <Eventtwo />
                </div>
                <div className="embla__slide">
                    <Eventthree />
                </div>
                <div className="embla__slide">
                    <Eventfour />
                </div>
            </div>
        </motion.div>
    )
}

export default EventCarousel

function OtherInfo() {
    return (
        <div className='flex flex-col gap-8 m-6'>
            <h1 className='font-bold text-4xl'>Event Name</h1>
            <div className='w-fit flex flex-row gap-2 items-center justify-center font-semibold text-xl'>
                <MapPin />
                <p>Location</p>
            </div>
        </div>
    )
}

function Eventone() {
    return (
        <div className='relative h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105'>
            <Image
                src={image1}
                alt="NextUI Fruit Image with Zoom"
                width={800}
                height={600}
                className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 left-0'>
                <OtherInfo />
            </div>
        </div>
    )
}
function Eventtwo() {
    return (
        <div className='relative h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105'>
            <Image
                src={image2}
                alt="NextUI Fruit Image with Zoom"
                width={800}
                height={600}
                className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 left-0'>
                <OtherInfo />
            </div>
        </div>
    )
}
function Eventthree() {
    return (
        <div className='relative h-full flex items-center justify-center  transition-transform duration-300 ease-in-out hover:scale-105'>
            <Image
                src={image3}
                alt="NextUI Fruit Image with Zoom"
                width={800}
                height={600}
                className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 left-0'>
                <OtherInfo />
            </div>
        </div>
    )
}
function Eventfour() {
    return (
        <div className='relative h-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105'>
            <Image
                src={image4}
                alt="NextUI Fruit Image with Zoom"
                width={800}
                height={600}
                className='h-full w-full object-cover'
            />
            <div className='absolute bottom-0 left-0'>
                <OtherInfo />
            </div>
        </div>
    )
}
