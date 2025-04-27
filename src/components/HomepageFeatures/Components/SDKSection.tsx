import CodeBlock from "@theme/CodeBlock";
import { useState } from "react";

const usePresenceCodeString = `// BLANK
BLANK
















`;

const useChannelCodeString = `// BLANK
BLANK
















`;

const useUnilogsCodeString = `// BLANK
BLANK
















`;

const SDKSection = () => {
  const [selectedTab, setSelectedTab] = useState("useUnilogs");
  const getCodeString = () => {
    switch (selectedTab) {
      case "usePresence":
        return usePresenceCodeString;
      case "useChannel":
        return useChannelCodeString;
      case "useUnilogs":
        return useUnilogsCodeString;
      default:
        return "usePresence";
    }
  };

  return (
    <div className="sectionB section-mobile mx-auto flex max-w-screen-3xl flex-col items-center justify-between gap-5 bg-white px-8 py-8 lg:flex lg:flex-row lg:py-20">
      <div className="flex-grow py-0">
        <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
          BLANK
        </h1>
        <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
          BLANK:
        </p>
        <ul className="ml-4 list-disc text-lg text-gray-600 dark:text-slate-100">
          <li>BLANK</li>
          <li>BLANK</li>
          <li>BLANK</li>
        </ul>
      </div>
      <div className="my-10 h-full w-full lg:w-[800px] 4xl:w-[60%]">
        <div className="text-baseline hidden flex-row justify-center pb-1 text-center lg:flex">
          <div
            className={`${selectedTab === "useUnilogs" ? "selected" : ""} mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("useUnilogs")}
          >
            BLANK
          </div>
          <div
            className={`${selectedTab === "usePresence" ? "selected" : ""} mx-auto cursor-pointer`}
            onClick={() => setSelectedTab("usePresence")}
          >
            BLANK
          </div>
          <div
            className={`${selectedTab === "useChannel" ? "selected" : ""} mx-auto cursor-pointer hover:border-b-2`}
            onClick={() => setSelectedTab("useChannel")}
          >
            BLANK
          </div>
        </div>
        <CodeBlock
          language="jsx"
          className="shadow-l overflow-auto overflow-x-auto rounded border-2 align-top text-sm shadow-[0_0_10px_grey] dark:shadow-none md:text-base xl:w-[700px]"
        >
          {getCodeString()}
        </CodeBlock>
      </div>
    </div>
  );
};

export default SDKSection;
