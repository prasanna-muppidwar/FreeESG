"use client";
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";
import { AccordionDemo } from "@/components/Accordian";
import SolutionPawan from "@/components/Solutiontwo";
import checkUserSession from "@/lib/useSession";

function Page() {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <Solutions />
      <SolutionPawan />
      <AccordionDemo />
      <Footer />
    </div>
  );
}

export default Page;
