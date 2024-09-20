import Image from "next/image";
import { Button } from "./ui/buttons";
import Link from "next/link";
import useAuth from "@/lib/useAuth";

const Hero = () => {
  const user = useAuth();

  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* ======= */}
            {/* HEADER  */}
            {/* ======= */}
            <h1 className="title-font font-bold sm:text-5xl text-4xl mb-4 text-black">
              Welcome To FreeESG
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Embracing sustainable practices marks the dawn of a transformative
              era for environmental stewardship and responsible
            </p>
            <div className="flex justify-center">
              {/* ======= */}
              {/* BUTTONS */}
              {/* ======= */}
              <Link href={user ? "/report" : "/login"}>
                <Button size="lg" variant="green">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="ghost">
                See how it works &rarr;
              </Button>
            </div>
          </div>
          {/* =========== */}
          {/* HERO IMAGE */}
          {/* ========== */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={700}
              height={500}
              src="/hero1.png"
            />
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* OUR PRODUCT SECTION  */}
      {/* ==================== */}
      <section
        id="product"
        className="text-gray-400 body-font flex justify-center items-center"
      >
        <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="hidden md:block object-cover object-center rounded"
              alt="product"
              src="/product.svg"
              width={400}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
            {/* ======= */}
            {/* HEADER  */}
            {/* ======= */}
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-black">
              Komply: Our ESG Compliance Product
            </h1>
            {/* ======= */}
            {/* CONTENT */}
            {/* ======= */}
            <p className="mb-8 leading-relaxed text-justify text-black">
              Welcome to FreeESG's comprehensive ESG Compliance Reporting Solution
              – your gateway to effortless Environmental, Social, and Governance
              (ESG) compliance and sustainability excellence. Our cutting-edge
              software is meticulously designed to simplify the complexities of
              ESG reporting for organizations of all sizes. FreeESG ensures a
              seamless experience for our clients by dynamically filling ESG
              reports based on uploaded documents. Say goodbye to the headaches
              of data complexity and evolving reporting standards – our solution
              addresses these pain points head-on, allowing you to focus on what
              truly matters: making a positive impact. What sets FreeESG apart is
              our dedication to not just meet regulatory standards, but exceed
              them. Our technological tools provide auditable and verifiable
              outputs, instilling confidence in the accuracy of your ESG
              reports. With FreeESG by your side, your organisation not only meets
              compliance standards but also leads the way towards a more
              sustainable future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
