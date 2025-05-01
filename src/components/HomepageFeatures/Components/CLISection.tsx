const CLISection = () => {
  return (
    <div className="bg-gray-100 dark:bg-componentDarkMode">
      <div className="section-mobile sectionA mx-auto flex max-w-screen-3xl flex-col-reverse place-items-center justify-between gap-5 bg-gray-100 px-8 py-8 lg:flex-row lg:py-20">
        <div className="shadow-l my-10 max-w-full bg-transparent 4xl:w-[60%]">
          <img
            src="/case-study/videos/unilogs-platform.gif"
            alt="CLI demonstration"
            className="w-full object-cover"
          />
        </div>
        <div className="flex-grow text-left">
          <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
            One Command to Observability
          </h1>
          <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
            Deploy a production-ready, TB-scale log platform on AWS with a
            single command - from zero to insights in minutes, not weeks
          </p>
        </div>
      </div>
    </div>
  );
};

export default CLISection;
