'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { motion } from "framer-motion";


const image1 = "https://s3-alpha-sig.figma.com/img/8c5a/a2af/5b3287578d92581af9cf3e53d33ce032?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~Ol0yJ518IWTCgcbO6NRUrK4mqSAyPEsu0Y~B5RdT~FLBsD2nj0R6oPOVkkrBo~YZLxxVJluYmYhz6NyOdHxIPKarKLM4o3aRSzhkKfLozrVEvmNsH6Tu1b3xEhfAiSGk8OOaFkd8GMFeErLiM9jvXK2mvzkt~JvCBe8doGGHq6lTfCQI64sv9fNjqaIn5ZGOx9TcZ16yCW0XWCwuAykGUmWxp-BeOp9LA8-LToD8w4uwdCOTsbYIvwX0OGIOu-DaLool8lWdvlgwNmmTRRH6cjpr8ID8Y03dRPX0RgbH-TDeRKQ~FwR5olIxHod2yI-44tvAUd5sxD73Ye4l4L-w__"
const image2 = "https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNvFXO~pk7or-HdDZZqILty5OF1WJsJD8UwtOrZz4vS~BC45s3gthFjPMJZD0cOI60myLJBe8lRflvEI8bI6GbEYzSV-IFZKcFTM7pI2twTwPtoqbwigcQxD5UaUvVa0F4okJOiuc~ZmChfb54WPYhHnHouQBosINwZfuXXq4~5CukmHb1h7iqUKUL-tYT9xc0RAiMqxbwjMjWSIgaF~TyrmotRhD~mg2AO0Ldx81FXxp2oOE9kHsXVzrFf2H6mlREDT17eHApYI~XPRVidKrWz1g3~uEccCw5QMOb9byAA8RpmyAe8Cmu9W3y2PlaLw3ECAIdfYI5A8Ir6qa8nm3g__"
const image3 = "https://s3-alpha-sig.figma.com/img/fb8b/2fd2/623295a745f3ba3642df99e02acf9e5e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPXDlNTmEbSeuHsCR3KcAh8aRyNxT58h7OsEIqC7bRi7qf7zTPanq~61ESizjbUBwU12h3~b7UZEisSDUWJ16SOvBja25EdOg2R34HC3A9SYVrUzy0s8~wabTmEEaNh3l8CDjg11HLKNxYp-G5pYcWmGA5WF~FxkTjfFU2Rviha-FbSPbbqOlGmz2F-qDioJa7-n10Ao5UzODMYu~Z9yFj3--H14YNiV6DwxZkWqHEzrAagEtPrmIZMYJutwWaiJWE5jzB60Xx0GJR2FdiaF-Y07NLekxgqsVxqibo9Lw5AEGctkYBInn5-QvKsCTdPfhqAy1H7guQMsd5gsRy4d7A__"
const image4 = "https://s3-alpha-sig.figma.com/img/162c/fe4e/e0e893f3f2438ff89d9770ba7e1099a6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVg9vZUozlu002ZHHmIBJrMLkndNs4X7gi307jZiMUeGXPH5s4FaQmaSGBpklJ-l8-1-kNDXr8t1~IqB7D6TsZ06ThJs348Lfy6-KAeATO9olM0yUHvJ-5D9PeNe3AdLWzsrOWwLx~Hw9CJkDTbjgAd6d1O-pk60Ggyka5l8oQG5zghI~vAwVkBQ05-ONtimx2HMOFC~sjgDxfJxKWXCAUMcW-zNlo5qTkqzErgmy~fKTFCVfHOvF8l6Fn-pPMI0sPLbVYWmgFys01ywzFVju2si4ZmsTa7Mcdo5~oq5BrfpjE1qvmNzDhRHlL2RVbSm6xL0mqlkpAqspelDHoERHA__"


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
