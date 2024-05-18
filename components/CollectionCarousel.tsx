'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { motion } from "framer-motion";


const image1 = "https://s3-alpha-sig.figma.com/img/a915/2b99/f3b1d5c5a3d9ca34145cba9ad898fa50?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MGH9aISNAMGm5ruAxysEu8zg9qfYpJxi-Lo4jLK7qsmW9phkxjrwMxxF5IBGDQ~2uLABpqJfdpaQaPvykaxIePpm4yUc7nM8UN5e3BULMwgVS-29Ul-Pa~gfREcBrA1wjc7A4~jw4gOZVGKqWuFWzneOvxoTBJufjw7XA4y8j4C6DLVK63YRFS0CS7ybTdYY0F01w6iUvZvAu44HLyeTfMe3sAnk1j24VYW50cW1-T2St7s-qx2HY53Mt0UBRjtQvONRCR7dTKgaU0IMrSvaVNwmUeUw4xPpV0Rwz1FTMWjlmne0jo0v5FPDy3~27vri-xRYqsWD~fN2NAW8kpBRkw__"
const image2 = "https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNvFXO~pk7or-HdDZZqILty5OF1WJsJD8UwtOrZz4vS~BC45s3gthFjPMJZD0cOI60myLJBe8lRflvEI8bI6GbEYzSV-IFZKcFTM7pI2twTwPtoqbwigcQxD5UaUvVa0F4okJOiuc~ZmChfb54WPYhHnHouQBosINwZfuXXq4~5CukmHb1h7iqUKUL-tYT9xc0RAiMqxbwjMjWSIgaF~TyrmotRhD~mg2AO0Ldx81FXxp2oOE9kHsXVzrFf2H6mlREDT17eHApYI~XPRVidKrWz1g3~uEccCw5QMOb9byAA8RpmyAe8Cmu9W3y2PlaLw3ECAIdfYI5A8Ir6qa8nm3g__"
const image3 = "https://s3-alpha-sig.figma.com/img/7530/a73c/a76d3c01ae0aa065ff590a38a6599180?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPGwv3EY7drPOBxPvjJCWNE1SkEMHCieC0uiyGCaQbZUgA23D6bEJOjaU3fzIyyKNWkkYX8Io-jiXFfa8eSgXYr4glIVJNOHMZIdwuplifoXD1lti9ueaBNL5wJOW2lKr8xON3SkdYs1Jxu6ny6CTX3~hdCOlddS3iSqaKJ4RayCDC7-Z-0~MCy47afcClNe2broa5HjKdwTYYP2xLNm2EHDmMZ-XhiOCBZblBR9~YFFy9gxfRA0KcsShzHHHr83nng-UigY7738egkowyuheAnKp0BjCHtd5GX---FrX3FkS44Jh4Vj0nB7ZfyB8~zlt8yc80l8rMuWRgoMYgn12w__"
const image4 = "https://s3-alpha-sig.figma.com/img/162c/fe4e/e0e893f3f2438ff89d9770ba7e1099a6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVg9vZUozlu002ZHHmIBJrMLkndNs4X7gi307jZiMUeGXPH5s4FaQmaSGBpklJ-l8-1-kNDXr8t1~IqB7D6TsZ06ThJs348Lfy6-KAeATO9olM0yUHvJ-5D9PeNe3AdLWzsrOWwLx~Hw9CJkDTbjgAd6d1O-pk60Ggyka5l8oQG5zghI~vAwVkBQ05-ONtimx2HMOFC~sjgDxfJxKWXCAUMcW-zNlo5qTkqzErgmy~fKTFCVfHOvF8l6Fn-pPMI0sPLbVYWmgFys01ywzFVju2si4ZmsTa7Mcdo5~oq5BrfpjE1qvmNzDhRHlL2RVbSm6xL0mqlkpAqspelDHoERHA__"


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

export default CollectionCarousel

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
