'use client'

import React, { useState } from 'react'

const VerticalText = () => {
  return (
    <div className="relative max-h-screen p-6 flex overflow-y-hidden bg-[#B9A0FF] text-black font-normal " style={{writingMode:'vertical-lr'}}>
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="text-3xl my-2">Event : Oasis Bus tour , JLN Stadium , Delhi </span>
        <span className="text-3xl my-2">*</span>
        <span className="text-3xl my-2">Collection Live : Meta Lives , live on astrix</span>
        <span className="text-3xl my-2">*</span>
      </div>

      <div className="absolute top-0 py-12 animate-marquee2  whitespace-nowrap">
      <span className="text-3xl my-2">Event : Oasis Bus tour , JLN Stadium , Delhi </span>
        <span className="text-3xl my-2">*</span>
        <span className="text-3xl my-2">Collection Live : Meta Lives , live on astrix</span>
        <span className="text-3xl my-2">*</span>
      </div>
    </div>

  )
}

export default VerticalText
