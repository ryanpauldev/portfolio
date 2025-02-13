import Project from "./Project";
import { FaGithub, FaChrome } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex h-max min-h-screen w-full items-center justify-center bg-primary text-text"
    >
      {/* Container */}
      <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center text-center">
        <h2 className="mt-4 inline pb-8 text-4xl font-bold text-text lg:text-6xl">
          Portfolio
        </h2>

        {/* Projects Grid */}
        <div className="mx-14 grid grid-cols-1 gap-16 py-8 text-center md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
          <Project
            image="gabbys_goats.png"
            description="Fundraising Platform"
            techStack="React, Typescript, Tailwind, Stripe"
            buttons={[
              {
                name: "Website",
                image: TbWorldWww,
                link: "https://gabbys-goats.vercel.app/",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/ryanpauldev/gabbys_goats",
              },
            ]}
          >
            Gabby's Goats
          </Project>
          <Project
            image="gabbys_goats.png"
            description="Fundraising Platform"
            techStack="React, Typescript, Tailwind, Stripe"
            buttons={[
              {
                name: "Website",
                image: TbWorldWww,
                link: "https://gabbys-goats.vercel.app/",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/ryanpauldev/gabbys_goats",
              },
            ]}
          >
            Gabby's Goats
          </Project>
          <Project
            image="gabbys_goats.png"
            description="Fundraising Platform"
            techStack="React, Typescript, Tailwind, Stripe"
            buttons={[
              {
                name: "Website",
                image: TbWorldWww,
                link: "https://gabbys-goats.vercel.app/",
              },
              {
                name: "GitHub",
                image: FaGithub,
                link: "https://github.com/ryanpauldev/gabbys_goats",
              },
            ]}
          >
            Gabby's Goats
          </Project>

        </div>
      </div>
    </section>
  );
}
