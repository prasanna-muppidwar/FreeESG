"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from "../Dashboard/layout/sidebar/Sidebar";
import RootLayout from '../Dashboard/layout';

function Page() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className='flex max-w-[90vw] max-h-[80vh]'>
      <RootLayout>
      <div className='flex justify-center items-center w-[80vw]'>
        <Image src={'/coming-soon.png'} height={150} width={150} alt='coming soon' />
      </div>
      </RootLayout>
    </div>
  );
}

export default Page;
