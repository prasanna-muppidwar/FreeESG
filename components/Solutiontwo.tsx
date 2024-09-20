import { BarChartBig, FileStack, Leaf } from "lucide-react";

const SolutionPawan = () => {
  return (
    <div className="container relative pt-36 pb-36">
      <div className="pb-10 flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Our Services
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Empowering Sustainable Growth through Robust Ethical Standards and
          Compliance
        </p>
      </div>
      <div className="!pt-0 grid grid-cols-1  gap-4 sm:grid-cols-2 md:gap-x-20 gap-x-10 gap-y-10 md:grid-cols-9">
        <div className=" col-span-6   rounded-lg border-2 border-green-400 bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-green-500 w-min rounded-lg mb-4">
              <Leaf color="background" />
            </div>
            <h1 className="font-semibold"> ESG Compliance Solutions</h1>
            <p className=" text-muted-foreground ">
              Our ESG Compliance Solutions are designed to simplify the
              reporting process and ensure compliance with regulatory standards.
            </p>
          </div>
        </div>
        <div className="col-span-6   rounded-lg border-2 border-green-400 bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-green-500 w-min rounded-lg mb-4">
              <BarChartBig color="background" />
            </div>
            <h1 className="font-semibold">
              {" "}
              Stakeholder Engagement Strategies
            </h1>
            <p className=" text-muted-foreground ">
              Build trust and collaboration with stakeholders through
              transparent and accurate ESG reporting.
            </p>
          </div>
        </div>
        <div className="col-span-6  rounded-lg border-2 border-green-400 bg-background shadow-md  md:shadow-xl xl:col-span-3">
          <div className="p-4  w-full h-full z-[2]">
            <div className="p-2 bg-green-500 w-min rounded-lg mb-4">
              <FileStack color="background" />
            </div>
            <h1 className="font-semibold">Policy Influence and Advocacy</h1>
            <p className=" text-muted-foreground ">
              Influence policy and regulations by providing policymakers and
              regulators with valuable data insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPawan;
