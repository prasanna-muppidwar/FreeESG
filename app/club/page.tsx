"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import RootLayout from '../Dashboard/layout'; 
import Sidebar from "../Dashboard/layout/sidebar/Sidebar";

function Page() {

  return (
    <div className='flex h-[65vh]'>
      <RootLayout>
        <div className='flex justify-center items-center w-[75vw] h-[65vh] '>
          <Image src={'/coming-soon.png'} height={150} width={150} alt='coming soon' />
        </div>
    </RootLayout>
    </div>
  );
}

export default Page;
