import Image from 'next/image'
import React from 'react'



const ArtistLineup = () => {
  const artist1 = 'https://s3-alpha-sig.figma.com/img/83e4/cf13/2a9680acaa7b9a4e257fe0c4a8a68d4f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ro~5NcuQYEvTajiYjCHUYKTBXhaI4pWgl79LWra7KfXArpMmuy-gLKG3Zlp-X-MkCjAyqEW5yCg2EKJ-6FHnckzT-F8hMFomRitE8wzLC3BC5iafcFCGTehxr8GOPjOb0YD6hXtRENg7QaInl4t4xumeJOhsstrlMiv7lwPy5TiRmSTGwTfjFyi9SIEl0OTGmK27aQTvCc~7uzxo6ussEbchXCiuhDUu7befA~2t6ViF1~VJoPhDtYs5rlKHDeUO0bqNuh~XXt5~52ayKI4IXazuLc9LrWqPbmNMw0FqcuiPEN8-lGSGHf2RmXp70zNmFfwHPLU6EOZZLQpzj7fZHQ__'
  const artist2 = 'https://s3-alpha-sig.figma.com/img/6aa2/8717/802c592e7915f9458ed0eccbd85f560b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eSobVZPzipw6aqx~2~nmz5zfkiGKuBhjNfEUvt06m-mAz~iuUmXSv51iFOPS2U~HkFZPcsoMv2qcjdH6zi5aqDVoXcgFtFxmEkKdXCs4EGzwheb-dq89k677kMjAF-4igHpefKSDdL6OvyirQ8XzwbKjU9PlAQ6ZQAUMVm0PlNvbUs9XTCeg~v69ki142P4OlOk3n~T264qQjZ1yltvL6MK5K0qMU3TpxuGmOCP3G9i-lEpAg~VMmTaWriN2rrkJi2WRR11fE4FUTa2SC3Fs1OJL5qxNDBRKLHiaPp~MTIFBWEBzlBsq3uwc8BaVOg3g~nilwu7-ho7wBpw7Fl6mig__'
  const artist3 = 'https://s3-alpha-sig.figma.com/img/dc5a/7843/593d34d04c8695561a6bc810b4c012c4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OvJG6zxXSDMHaTxKWM~KRexMTBdBb1n-XtsZTSIRY2v4g1vTk-f4d-STUbyrF7RlGijqLlDQ9GEliquW1jPm9ZJq1~8ffUD-RLILaCXKuHEtTQcdScF08SSDcIpxCnhjvyiqb4GbE37ehGAhkTccXxDt1Ozom-yp8N6LVS4Y97qcqYS5OZG86WHsvAFiMysNYyj1VdpwQ1FYuJIRq~EUTLxLYRpj04zgUYXy3mma0l5TOx1OHPG8e9JtIm8G75puiEwdHjzxdQ6LQn1D2NyJIqcBHmv-SxHeu1X8xVhavtA-2gYtHeKRVyldL8P5GIjm5fTstCHEooYwP5XwxMsT~g__'
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='font-bold text-2xl'>Artist Lineup</h1>
      <div className='relative grid grid-cols-3 items-center'>
        <div className='relative'>
          <Image
            src={artist2}
            alt='artist'
            width={160}
            height={160}
            className='object-cover aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-110'
            
          />
        </div>
        <div className='relative z-10 -mx-10'>
          <Image
            src={artist1}
            alt='artist'
            width={200}
            height={200}
            className='object-cover aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-110'
          />
        </div>
        <div className='relative -ml-10'>
          <Image
            src={artist3}
            alt='artist'
            width={160}
            height={160}
            className='object-cover aspect-square rounded-xl transition-transform duration-300 ease-in-out hover:scale-110'
          />
        </div>
      </div>

    </div>
  )
}

export default ArtistLineup
