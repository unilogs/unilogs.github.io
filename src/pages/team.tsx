import { useState } from "react";
import Layout from "@theme/Layout";
import Member from "../components/HomepageFeatures/Member";
import useKonamiCode from "../hooks/useKonomaiCode";

const Team = () => {
  const [isKonamiCode, setIsKonamiCode] = useState(false);
  useKonamiCode(() => {
    setIsKonamiCode(true);
    setTimeout(() => {
      setIsKonamiCode(false);
    }, 5000);
  });

  return (
    <Layout>
      <section className="sectionB" id="team">
        <article className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-6 py-20">
          <h2 className="lp-para mb-2 text-center text-3xl font-semibold tracking-wide text-gray-600 dark:text-gray-300">
            Developed by
          </h2>
          <div className="mx-auto flex flex-col gap-2 md:flex-row md:gap-8">
            <Member
              name="Alex Stout"
              image={
                isKonamiCode
                  ? ""
                  : "team/Alex.jpeg"
              }
              location="Phoenix, AZ"
              github=""
              linkedin=""
            />
            <Member
              name="David Park"
              image={
                isKonamiCode
                  ? ""
                  : "team/David.jpg"
              }
              location="San Jose, CA"
              github="https://github.com/davidatlpark"
              linkedin="https://www.linkedin.com/in/davidatlpark/"
            />
            <Member
              name="John Tamer"
              image={
                isKonamiCode
                  ? ""
                  : ""
              }
              location="Waxhaw, NC"
              github=""
              linkedin=""
            />
            <Member
              name="Nathan Gross"
              image={
                isKonamiCode
                  ? ""
                  : "team/Nate.jpeg"
              }
              location="Chicago, IL"
              github=""
              linkedin=""
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Team;
