import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section
      id="hero"
      className="text-8xll flex h-lvh scroll-mt-60 flex-col items-center justify-center gap-8 bg-gradient-to-br from-left to-right to-90% p-6 text-2xl sm:flex-col"
    >
      <article className="relative max-w-full px-4 py-8 pb-14 font-sans text-white antialiased md:py-10">
        <div className="mx-auto mb-6 w-full text-center">
          <img
            src="/img/Transparent Logo.png"
            alt="Unilogs Logo"
            className="mx-auto w-[80%] max-w-2xl" // Larger size with max-width
          />
        </div>
        <h1 className="font-main mx-auto mb-2 max-w-4xl text-center text-3xl font-medium leading-[42px] tracking-tighter text-white md:text-4xl md:leading-tight">
          An easy-to-deploy, reliable, and scalable log observability platform
          for distributed applications.
        </h1>
        <div className="mt-5 flex w-full flex-col-reverse items-center justify-center gap-2 p-6 md:flex-row">
          <Link
            className="rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-white antialiased transition hover:scale-110 hover:text-white hover:no-underline sm:text-xl"
            to="/case-study"
          >
            Read Case Study
          </Link>
        </div>
      </article>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
