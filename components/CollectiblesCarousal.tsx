import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import Autoplay from 'embla-carousel-autoplay';

const CollectiblesCarousal = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 1200, stopOnInteraction: false })]);

    return (
        <div className='flex flex-col gap-4'>
            <h1>Collectibles</h1>
            <div className="embla2" ref={emblaRef}>
                <div className="embla2__container">
                    {Array(4).fill(null).map((_, index) => (
                        <div key={index} className="embla2__slide">
                            <CollectiblesCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectiblesCarousal;

const CollectiblesCard = () => {
    const image = "https://utfs.io/f/8a93c2a2-94f1-481c-a4b3-99c495a0a34f-num2da.png";

    return (
        <div className='w-full h-full'>
            <Card className="w-fit py-2 px-2 bg-[#B9A0FF] cursor-pointer text-black transition-transform duration-300 ease-in-out hover:scale-95">
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
                            width={150}
                            height={170}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};
