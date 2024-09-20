import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import p1 from "@/public/logos/product1.svg";
import p2 from "@/public/logos/product2.svg";
import p3 from "@/public/logos/product3.svg";
import p4 from "@/public/logos/product4.svg";
import p5 from "@/public/logos/product5.svg";
import p6 from "@/public/logos/product6.svg";

const Solutions = () => {
  return (
    <div className="container min-h-screen flex flex-col pb-12">
      <div className="flex-grow px-4">
        <h1 className="max-w-screen text-2xl font-bold md:text-4xl lg:leading-[1.1] text-center">
          Solutions
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {/*big card 1 */}
          <WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                Data Extraction
              </h2>
              <p className="mt-2 text-left text-base text-black">
                Dynamically fills questions based on documents uploaded
              </p>
            </div>
            <Image
              src={p1}
              width={310}
              height={310}
              alt="linear demo image"
              className="object-contain rounded-2xl"
            />
          </WobbleCard>

          {/*small cards */}
          <WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px]">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              Data Architecture
            </h2>
            <p className="mt-2 text-left text-base text-black">
              Creates an extensive database of all relevant data for a
              user-friendly experience.
            </p>
            <Image
              src={p2}
              width={290}
              height={290}
              alt="linear demo image"
              className="mt-4 object-contain rounded-2xl"
            />
          </WobbleCard>

          {/*small card 2 */}
          <WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px]">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              AI Powered
            </h2>
            <p className="mt-1 text-left text-base text-black">
              Leveraging advanced machine learning algorithms trained using
              extensive datasets for precise reporting.
            </p>
            <Image
              src={p3}
              width={350}
              height={350}
              alt="linear demo image"
              className="mt-8 object-contain rounded-2xl"
            />
          </WobbleCard>

          {/* Small cards */}
          <WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px]">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              Customisable BRSR Report
            </h2>
            <p className="mt-2 text-left text-base text-black">
              Create a fully customisable report that can be readily submitted
              for compliance.
            </p>
            <Image
              src={p4}
              width={190}
              height={190}
              alt="linear demo image"
              className="mt-4 object-contain rounded-2xl"
            />
          </WobbleCard>

          {/*small card 2 */}
          <WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px]">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              Audit & Verification
            </h2>
            <p className="mt-2 text-left text-base text-black">
              Auditable and verifiable outputs to boost confidence in the
              accuracy of ESG reports.
            </p>
            <Image
              src={p5}
              width={180}
              height={180}
              alt="linear demo image"
              className="mt-4 object-contain rounded-2xl"
            />
          </WobbleCard>

          {/* big card */}
          <WobbleCard containerClassName="h-full bg-pink-800 min-h-[300px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                Business Insight
              </h2>
              <p className="mt-2 text-left text-base text-black">
                Analyze vast datasets to identify emerging trends and risks for
                informed strategic decision-making.
              </p>
            </div>
            <Image
              src={p6}
              width={330}
              height={330}
              alt="linear demo image"
              className="mt-4 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
