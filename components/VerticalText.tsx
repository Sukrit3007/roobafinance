'use client'

import { korna_one } from '@/config/fonts'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const VerticalText = () => {
  return (
    <div className={cn("relative h-screen p-2 flex overflow-y-hidden  bg-[#B9A0FF] text-black font-normal korna_one", korna_one.className)} style={{ writingMode: 'vertical-lr' }}>
      <div className="py-12 animate-marquee whitespace-nowrap ">
        <span className="text-3xl mx-2">Event : Oasis Bus tour , JLN Stadium , Delhi </span>
        <span className="text-7xl mx-2 ">*</span>
        <span className="text-3xl mx-2">Collection Live : Meta Lives , live on astrix</span>
        <span className="text-7xl mx-2 ">*</span>
      </div>

      <div className="absolute top-0 py-12 animate-marquee2  whitespace-nowrap">
        <span className="text-3xl mx-2">Event : Oasis Bus tour , JLN Stadium , Delhi </span>
        <span className="text-7xl mx-2 ">*</span>
        <span className="text-xl mx-2">Collection Live : Meta Lives , live on astrix</span>
        <span className="text-7xl mx-2">*</span>
      </div>
    </div>

  )
}

export default VerticalText
