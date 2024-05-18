'use client'

import React from 'react'
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import CollectiblesCarousal from './CollectiblesCarousal';
import { motion } from "framer-motion";

const Metalives = () => {
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
            className='w-full flex flex-col gap-6'
        >
            <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='font-extrabold text-3xl md:text-4xl lg:text-6xl'
            >
                Meta Lives
            </motion.h1>
            <motion.div  
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='w-fit font-semibold text-lg md:text-xl lg:text-2xl'
            >
                <p>Live in Astrix</p>
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
            className='w-full flex flex-row flex-wrap items-center justify-start gap-4'
            >
                <div>
                    <AvatarGroup isBordered>
                        <Avatar src="https://s3-alpha-sig.figma.com/img/4e19/8777/91b3a067100d25b408b983b1f73c7bd3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGbbknVtgurfLlxPZJPDoCIO1hhx2BlIUVdDbBfRmN46a3KnUOEzVN27Uqx9jSAu4F12LBkhK11oNHR6k9ilN6d7dPXyzy98GsKBgb0qZzWP3opBBMkdqJvunnR1okVAi3BihQLPzQuBJqCxNNKKS8fIBJyc7SvNjc~OGTml9Gl31x4nE4iO3vmJ0IeFiTB7XYeetR4CNiSCKYTCUwsKAVlPSVGbEeVHl4~PqBvOAVyv~A2JnUT7iLzMQJjnR~JRApWe6hr1abTvkqnvkr3HqMYkasCT9Xn3SWq72nNqvKRk~LubpuJaHHMe~dZpmpyd3qF7-ZORF4yk0oLxF77zAA__" />
                        <Avatar src="https://s3-alpha-sig.figma.com/img/36c6/4db5/7c277ee0fba8cbe9f3689274a18e8d7a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iroeekKH1gnbXuU9UeXMKJz4FxGU1-Q8Tb-hEODoBVfg48NAnnXMky~BdMRdMOtJ1tLyhMl66P0Mkyie3txbaVQwmJzgg4YzZo53fW8mYkgFArmpzLIYnDICGEay-RpJRVsTfs0DSjqG3YlN5dII7KyZXM9SVoVP2yktNlC6aIKHYF7fV8yjEDrJ3YH9IXhrogNPdilY1F4zUeI~ZPrSF0WKmpZxoDUQKHqL1t~s9o7WFJnJ~N1smWWk~nhcLG2oIaDzje~oHydrw5rIMAGW4z6mGEsBj4~3wu0dtZNaKI~tzD9hW0wcyU0nEpsRPOVnOkjUV4MUUkOt4mv~w14LPA__" />
                        <Avatar src="https://s3-alpha-sig.figma.com/img/a513/a6cb/eac00ac344058cf2cbecf291000536a2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOCb1PA34CWak9vfU635Y2jZcZc9tclcHBIYP8s3Vv~ZRMCjdqVgdpPt6C50q5W6h-R4FEJ6BjKBkL4-K6qTucn7hWmhSSJi~~dre1FyuEdk5uB9VSkfPaoT2fiJT0bmZPOnHW0KyrmIMGe~mcHpGrWLB7r6N7fvWCOQZdu-nYRPB6W0~ZDTNuGfSRS4Mj-Rl-W3IosSTKb7l7IOcBV8wRK1n1gGi5eI5wK6e~JU4ZA0kLx2aYoEkGrEuKd1cohqZ4QSE0diDUB6EWTTsVxxy9Myvxu3~nCdzIZ~chw4lglHBbijLwbvg6YLjkxFeTrfG3H~eo4fBFdHUrD1R-86~w__" />
                        <Avatar src="https://s3-alpha-sig.figma.com/img/a513/a6cb/eac00ac344058cf2cbecf291000536a2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOCb1PA34CWak9vfU635Y2jZcZc9tclcHBIYP8s3Vv~ZRMCjdqVgdpPt6C50q5W6h-R4FEJ6BjKBkL4-K6qTucn7hWmhSSJi~~dre1FyuEdk5uB9VSkfPaoT2fiJT0bmZPOnHW0KyrmIMGe~mcHpGrWLB7r6N7fvWCOQZdu-nYRPB6W0~ZDTNuGfSRS4Mj-Rl-W3IosSTKb7l7IOcBV8wRK1n1gGi5eI5wK6e~JU4ZA0kLx2aYoEkGrEuKd1cohqZ4QSE0diDUB6EWTTsVxxy9Myvxu3~nCdzIZ~chw4lglHBbijLwbvg6YLjkxFeTrfG3H~eo4fBFdHUrD1R-86~w__" />
                        <Avatar src="https://s3-alpha-sig.figma.com/img/36c6/4db5/7c277ee0fba8cbe9f3689274a18e8d7a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iroeekKH1gnbXuU9UeXMKJz4FxGU1-Q8Tb-hEODoBVfg48NAnnXMky~BdMRdMOtJ1tLyhMl66P0Mkyie3txbaVQwmJzgg4YzZo53fW8mYkgFArmpzLIYnDICGEay-RpJRVsTfs0DSjqG3YlN5dII7KyZXM9SVoVP2yktNlC6aIKHYF7fV8yjEDrJ3YH9IXhrogNPdilY1F4zUeI~ZPrSF0WKmpZxoDUQKHqL1t~s9o7WFJnJ~N1smWWk~nhcLG2oIaDzje~oHydrw5rIMAGW4z6mGEsBj4~3wu0dtZNaKI~tzD9hW0wcyU0nEpsRPOVnOkjUV4MUUkOt4mv~w14LPA__" />
                    </AvatarGroup>
                </div>
                <div className='w-fit font-normal text-base md:text-lg lg:text-xl'>
                    <p>22k people interested</p>
                </div>
            </motion.div>
            <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            >
            <CollectiblesCarousal />
            </motion.div>
        </motion.div>
    )
}

export default Metalives
