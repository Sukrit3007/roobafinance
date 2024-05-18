import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import Autoplay from 'embla-carousel-autoplay'

const CollectiblesCarousal = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 1200, stopOnInteraction: false })])
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <h1>Collectibles</h1>
            </div>
            <div className="embla2" ref={emblaRef}>
                <div className="embla2__container">
                    <div className="embla2__slide"><CollectiblesCards /></div>
                    <div className="embla2__slide"><CollectiblesCards /></div>
                    <div className="embla2__slide"><CollectiblesCards /></div>
                    <div className="embla2__slide"><CollectiblesCards /></div>
                </div>
            </div>

        </div>
    )
}

export default CollectiblesCarousal


function CollectiblesCards() {
    const image = "https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNvFXO~pk7or-HdDZZqILty5OF1WJsJD8UwtOrZz4vS~BC45s3gthFjPMJZD0cOI60myLJBe8lRflvEI8bI6GbEYzSV-IFZKcFTM7pI2twTwPtoqbwigcQxD5UaUvVa0F4okJOiuc~ZmChfb54WPYhHnHouQBosINwZfuXXq4~5CukmHb1h7iqUKUL-tYT9xc0RAiMqxbwjMjWSIgaF~TyrmotRhD~mg2AO0Ldx81FXxp2oOE9kHsXVzrFf2H6mlREDT17eHApYI~XPRVidKrWz1g3~uEccCw5QMOb9byAA8RpmyAe8Cmu9W3y2PlaLw3ECAIdfYI5A8Ir6qa8nm3g__"
    return (
        <Card className="py-2 px-2 bg-[#B9A0FF] cursor-pointer text-black transition-transform duration-300 ease-in-out hover:scale-95">
            <div className="overflow-visible py-0 flex flex-col gap-2">
                <div className='flex flex-row items-center justify-between'>
                    <Chip className='bg-black text-[6px] max-h-[10px] max-w-fit'>2024</Chip>
                    <p className='text-[10px]'>By <span className='font-semibold'>Pablo</span></p>
                </div>
                <div className='flex flex-col gap-1 items-start justify-center'>
                    <div className='w-full text-center'>
                        <h4 className="font-normal text-xs">Collectible Name</h4>
                    </div>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full"
                        src={image}
                        width={200}
                    />
                </div>
            </div>
        </Card>
    )
}