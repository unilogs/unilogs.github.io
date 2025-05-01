import { useState, useEffect } from "react";

const SDKSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="section-mobile mx-auto flex max-w-screen-3xl flex-col-reverse place-items-center justify-between gap-5 bg-white px-8 py-8 dark:bg-gray-800 lg:flex-row lg:py-20">
        <div className="flex-grow text-left">
          <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-5xl">
            Effortless Log Shipping in Minutes
          </h1>
          <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
            Configure and deploy the Unilogs shipper with a simple interactive
            CLI - no complex setup or configuration file editing required
          </p>
        </div>
        <div className="shadow-l my-10 max-w-full bg-transparent 4xl:w-[60%]">
          <div className="mx-auto my-0 w-full rounded-lg shadow-md overflow-hidden">
            <img
              src="/case-study/videos/unilogs-shipper.gif"
              alt="CLI demonstration"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDKSection;