import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordian";

export function AccordionDemo() {
  return (
    <div className="container relative">
      <h1 className="flex text-2xl font-bold md:text-4xl bg-white">FAQ'S</h1>
      <Accordion type="single" collapsible className="w-[98%] mb-[4%]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Does the system run on premises or cloud?</AccordionTrigger>
          <AccordionContent>
           We offer three deployment options:
             <br /> 
              &#9642; FreeESG Cloud (Secure Azure Server Hosting)
             <br />
              &#9642; Private Cloud (Hosted on any private cloud service used by the customer)
             <br />
              &#9642; On-Premise Deployment
           </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can the system integrate with in-house systems (e.g., ERP, CRM)?  </AccordionTrigger>
          <AccordionContent>
            Yes, FreeESG Solutions has APIs that enable seamless integration with in-house systems such as ERP systems (e.g., SAP, Oracle) and CRM platforms. We recommend API integration for efficient calculation and tracking of high volumes of ESG data.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What formats of data can be bulk uploaded on the platform?</AccordionTrigger>
          <AccordionContent>
             You can upload ESG data in various formats, including Excel, Google Sheets, PDF, PPT, DOCX, images, and audio recordings.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Does the platform support peer comparison? </AccordionTrigger>
          <AccordionContent>
            Yes, our platform enables peer comparison by analyzing ESG reports from top companies. It provides industry-specific sustainability performance insights and compares your data with industry averages and competitors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What kind of analytics does the platform offer?  </AccordionTrigger>
          <AccordionContent>
            Our platform provides in-depth analytics that can be used to enhance advisory services. These analytics include detailed performance metrics, trend analysis, and actionable insights tailored to improve sustainability strategies and decision-making processes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
