'use client'

import Image from 'next/image'
import React from 'react'

import { motion } from "framer-motion";

const TextImage = () => {
    const image1 = "https://s3-alpha-sig.figma.com/img/5fab/bbdb/1d37ef86881d32f0c3bec87ecbcca9f4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyWyoOM0zVAvmhMq5vrtueT9MlC998ztV4jxTQY9cfqrNPMRgdflind~wM~JATLhwSvf1D3BFAk0D1bSPXVI4j4n72A7ABgdB74ZKDGS-MZcPK2COGEr9rEBLhWxhcIzkvOs3LUczkq~jDBJ9TCxFscsW6~mqoi4OgJwqAeHAKZlbnSLFZnx2hCQcBneQxyeAEU0y9KekverPhtCL5lvhdgw7ZHs-XXAP~lONVi1XQjJhxwV3DAQqUoXjJQcVjvfPdp82C3eNQrpnobZDt7m-Qcs0sgvYRrhfd3Dz3AulHCNE9aa2H4zkwnSXQd8D5iQSatuKYUXxUZPFHbFIb50Lw__"
    const image2 = "https://s3-alpha-sig.figma.com/img/bed0/4b5a/e1984a8462eeff3dc2378c85affa6354?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PQld~Pn7DaPMPkI~87UdNcN4szVU6fwYDj-PN3UV74yxwxCB3LKkEIjFWF2Un8kMOd9ap9QSmLCeJ6pmwBs5nnqOA7-vGtyQQSFVambHHFXbxzODH4AJ8bvORjgtnSAHWhEABbSwWKQGfZizIc8Bzlc1RR4hZP~1fLc6BTUCXgq~HGQpGaSNocKNim2ABMJp1uNXNwPSBIxxcPaqyY64vr6QTjv9fhBWmQMXObdgcBhbB3u28PqhoA4FpCrFe5oqpR1Rk5CpFCAyEo1WbywU30SCpbNGfYHegjIg2p4eMl6b6lASm9wDFjzSnh6rdk1kx0OHW1gfhvV9j9xqvUzylw__"
    const image3 = "https://s3-alpha-sig.figma.com/img/bbb5/7fb3/3d2205e62315f682f817e087b18f4592?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aq6ye5GrSiLyambzZBA-Pn6Py5yGY1pZTJuyzm~AV1Ju-YMAB62ifqmZGDIy38vkXw3ZO33MZGMVOLKJSqO2gRc-B2xi7B9SXiP74Fk~XWrMpm-F7PywoY1IOZdGKV5JAQ1E7U2zQJ1xwVAqQNW1~4Ygzk4mMttuusbVtUF6EHNZim1bM5~qRQT5CFB-UEksVfHY0DMbYo4bnmjvzl2kwjPKiU6JsIVlKgt48bq2L52y~JFToHMyrSXIQXq6tb8-sq1-BC1ZuuvIFdhANylDWHzWmAUItxoqzfcZx65kMGvK~jFUqNKfLrmvRpiHXOQmw9P55a35NpZ3aRAaZ8mhKg__"
    const image4 = "https://s3-alpha-sig.figma.com/img/ca88/17d4/272b9fb2bfc1a7c4d9836c948c56bbe1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JaZtjpoe4RyJZLu7McuNVJz-HJZN4EIJsWMKaJCp-PvRbeFBcfNZ1IMoyb~4gy8ef3qZaTPmil9hVR6g4n-aEFd97BAa8Yf6IMFl7GHNPNJu-NwhTvBihdRXq48hV2V31h-nqgpiKbL7yJK6CrBzzdQmZgCWYgrNgnGL3Sgq2cwNhN1T9t7cqtHPUpCXMR0M4lr7Nez4f-maQ2Ue-cN7vocf5B5uMjWGCcDQeCho3g2R3pDIllEWv8E2V0reMvZTeu-tR7gGRAj~N-XkUi3rxXQUZRKxXf71qRBFY30vm2eo~pS5NrcKigTCwsK3z4kcBpvPxBCP2F0~3Ny5ItMvvA__"
    const image5 = "https://s3-alpha-sig.figma.com/img/6cad/a043/9a28947130d18035479e85cbd37f1801?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4haBaj8kb29CIWNn-pBfpACVkwG6enX5Mumi7iRi5IuBr-hv8zZ-oCNraxHNGpPn87NDZpsSyhmGUzVrrSpZmEc24zdy7FHDmRY0lKqD4R4qfUNFGM2z~Upg~Bq9bwbwNffRLaZoeD37bb-aaS7b0i8Tu9uchFmhasR-2NbMR4vp~qc8Tm3kvwySIZTeVU9UNOTDutWxOeDDbAjMvvRj39aDN66-m3vcQ6PWQbhjjLvHJfAAnux2cgYSA-Tn0dx0jrqw2D9sD~e34n4~jqDm2TPkC2F-N5rl-FJCaV0rr9WwBJsaou-gVzo-pyTdizrgjcrgxWkqPCXb1wnPsMa3g__"
    const image6 = "https://s3-alpha-sig.figma.com/img/dfb6/fca5/028762c6cc2e7f92cfec38d0aadca12f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZflRBl8m~eyo6VsJX3yF5CZmZP~Ssp6MY8gekVAI-t4ZhXriqupqT3BPXTtOme3EIaBA-SEI3tX6xGqtLIL4BKV0k6P3Xpx8A66AK4fO3q4e~MeIkpAr4qCBGMmvoKWpuHnZZFJ-EnUkOa1Csh1VB7DwtHpI2VG-iVu2ey1-Ee3CZ8KFFBcboETmSA39t8B9l4iUTQ0Mc7YvRWiwliJmQMUybJN1aEtEn-4fJNisJx~BfOXg4kB~x8rmGt9p0wf6HT5UkH6ocKlKgKZkD6QC1exb39~mtPt7rDQkCMlNhsvzjOpAUT4vZTbckErqMtl3L5C-3NJAGKHn~l1Iuk71Q__"
    const image7 = "https://s3-alpha-sig.figma.com/img/cb44/4927/d9f566847d00acdc934ab2c9cc771e4f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UQ4UYfIJCv0Rrw-c1vm6iFm95mny933c0YYv~m7uQkTgvEvcl~iPPrEDqLVrV~IEzwgLsvLQbWDyETX-2YuPqHG6JnWWgxtihb3CKQuyNZBoDKVs70HXdLu-JiBMFMBIcMPIDVZfZoDyhNHYB5q6I2UcXJRB9SiRpBuPjsECqSDh8Bl4zPqQPrwPTla8vAf-HMyn3fuxlCsueoT2v72jDA2fmXhziDMtW9kuwRLnXfXIgM0icwcSRKtuU4tKcIuMsSOeEFC7uQ4ogjMp~rO~F3nFJByrh2v2KNL6U67HcP8jbOh49NcRuU1cNuDTqjESS4WQaUP4c7w2uhDpAaLbWg__"
    const image8 = "https://s3-alpha-sig.figma.com/img/afb6/2745/a36819a8f0354ceedfccfa4d6a1c484e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R~B9k8sfQiyL4Dpraqm1M2AEnlahYq-CrwylDZFRENy8KZ0kxxUubqMy1n7Oi0-KWRh1i2pNH4Qcu~~zxptRFxAC1BY6ilQ8BFeklkmiPettcULRZkoxdYQshMkFjDy-2h8YRtFgb0flfXweXGZqylbeezuw~uMTIPfzeXVxb6fkKo~ft~f3R90v2Hr39vA8A52bxov-YU9yBKZdXpltIeBJI0OjQs46ryAtJZP8mJjsrMlqSOAtEoCSQ9rMlB7xHI8nwFgGiGccGvJ7Zyz4vVC0MRYW~eTyLOvNtpGmkRqnU5mnT4El5Byasv-6yK3kCLpJFK60tHWkeiZdpU~OCg__"

  return (
    <div className='bg-[#FFF4DF] w-full h-full m-auto max-w-5xl md:py-10 py-4 md:px-6 px-4 flex flex-col gap-8 text-3xl md:text-6xl font-normal tracking-tight'>
            {/* Line 1 */}
            <div className='flex flex-row gap-2 text-black overflow-y-hidden'>
                <div className='flex-shrink-0'>
                    <h1>WE </h1>
                </div>
                <div className=''>
                    <div className='flex-shrink-0'>
                        <Image
                            src={image1}
                            alt='image'
                            width={500}
                            height={1000}
                            className='h-[40px] md:h-[64px] w-[370px] object-none '
                        />
                    </div>
                </div>
                <motion.div
                    animate={{
                        x: [-100, 0, -100],
                    }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                    className='bg-[#FFF4DF] flex-shrink-0'
                >
                    <h1> ORGANIZE THE </h1>
                </motion.div>
            </div>

            {/* LINE 2 */}
            <div className='flex flex-row gap-2 text-black  overflow-y-hidden '>
                <div className='flex-shrink-0'>
                    <h1> CONNECTION </h1>
                </div>
                <div className=''>
                    <div className='flex-shrink-0'>
                        <Image
                            src={image2}
                            alt='image'
                            width={500}
                            height={500}
                            className='h-[40px] md:h-[64px] w-[530px] object-none object-bottom '
                        />
                    </div>
                </div>
                <motion.div
                    animate={{
                        x: [-100, 0, -100]
                    }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
                    className='bg-[#FFF4DF] grow'/>

            </div>

            {/* LINE 3 */}
            <div className='flex flex-row gap-2 text-black  overflow-y-hidden'>
                <div className=''>
                    <div className='flex-shrink-0'>
                        <Image
                            src={image3}
                            alt='image'
                            width={500}
                            height={500}
                            className='h-[40px] md:h-[64px] w-[340px] object-none  '
                        />
                    </div>
                </div>
                <motion.div
                    animate={{
                        x: [0, -100, 0]
                    }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, }}
                    className='bg-[#FFF4DF] flex flex-row'
                >
                    <div className=''>
                        <h1> BETWEEN </h1>
                    </div>
                    <div className=''>
                        <div className='flex-shrink-0'>
                            <Image
                                src={image4}
                                alt='image'
                                width={500}
                                height={500}
                                className='h-[40px] md:h-[64px] w-[160px] object-none '
                            />
                        </div>
                    </div>
                    <div className=''>
                        <h1> MUSIC </h1>
                    </div>
                </motion.div>
            </div>

            {/* LINE 4 */}
            <div className='flex flex-row gap-2 text-black  overflow-y-hidden '>
                <div className=''>
                    <h1> ARTIST </h1>
                </div>
                <div className=''>
                    <div className='flex-shrink-0'>
                        <Image
                            src={image5}
                            alt='image'
                            width={500}
                            height={500}
                            className='h-[40px] md:h-[64px] w-[290px] object-none  '
                        />
                    </div>
                </div>
                <motion.div
                    animate={{
                        x: [-100, 0, -100]
                    }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, }}
                    className='bg-[#FFF4DF] flex flex-row'
                >
                    <div className=''>
                        <h1> CULTURE </h1>
                    </div>
                        <div className=''>
                            <Image
                                src={image6}
                                alt='image'
                                width={500}
                                height={500}
                                className='h-[40px] md:h-[64px] w-[300px] object-none  '
                            />
                        </div>
                    </motion.div>
            </div>

            {/* LINE 5 */}
            <div className='flex flex-row  gap-2 text-black  overflow-y-hidden'>
                <div className='h-[24px] md:h-[30px] lg:h-[60px]'>
                    <div className='flex-shrink-0'>
                        <Image
                            src={image7}
                            alt='image'
                            width={500}
                            height={500}
                            className='h-[40px] md:h-[64px] w-[220px] object-none  object-center'
                        />
                    </div>
                </div>

                <motion.div
                    animate={{
                        x: [-100, 0, -100]
                    }}
                    transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, }}
                    className='bg-[#FFF4DF] flex flex-row'
                >
                    <h1> ART </h1>

                    <div className=''>
                        <div className='flex-shrink-0'>
                            <Image
                                src={image8}
                                alt='image'
                                width={500}
                                height={500}
                                className='h-[40px] md:h-[64px] w-[151px] object-none  object-center-bottom '
                            />
                        </div>
                    </div>
                    <h1> &amp;COLLECTIONS </h1>

                </motion.div>
            </div>
        </div>
  )
}

export default TextImage
