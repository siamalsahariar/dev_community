// app/about/page.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import "../../../styles/globals.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About DEV - DEV Community";
  }, []);
  return (
    <>
      <main id="main-content">
        <div className="about-area about-layout">
          <div className="about-card text-styles">
            <h1 className="fs-3xl s:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 mt-0">
              About DEV
            </h1>
            <p>
              DEV is a community of software developers getting together to help
              one another out&#46; The software industry relies on collaboration
              and networked learning&#46; We provide a place for that to
              happen&#46;
            </p>
            <p>
              DEV is built on <a href="https://forem.com">Forem</a>&#58; open
              source software designed to empower communities&#46; Because our
              application is
              <a href="https://github.com/forem"> open source</a>&#44; you can
              inspect every little detail of the code&#44; or chip in yourself!
              Forem is available for anyone interested in creating similar
              communities in any niche or passion&#46; Visit our meta Forem&#44;
              <a href="https://forem.dev"> forem&#46;dev</a> for more
              information&#46;
            </p>
            <p>
              We believe in transparency and adding value to the ecosystem&#46;
              We hope you enjoy poking around and participating!
            </p>
            <h2>
              <a href="#leadership"></a>
              <strong>Leadership</strong>
            </h2>
            <p>
              <a
                href="https://res.cloudinary.com/practicaldev/image/fetch/s--c4zTsjvv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/practicaldev/image/fetch/s--S2Ud7coR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0r746whbdtl8uvs98uah.JPG"
                className="article-body-image"
              >
                <Image
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--c4zTsjvv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://res.cloudinary.com/practicaldev/image/fetch/s--S2Ud7coR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0r746whbdtl8uvs98uah.JPG"
                  alt="Alt Text"
                  loading="lazy"
                  height={336}
                  width={800}
                />
              </a>
            </p>
            <p>
              DEV is led by Forem&#39;s co-founders
              <a href="https://dev.to/ben"> Ben Halpern</a>&#44;
              <a href="https://dev.to/jess"> Jess Lee</a>&#44; and
              <a href="https://dev.to/peter"> Peter Frank</a>{" "}
              (&#34;PB&J&#34;)&#46;
            </p>
            <h2>
              <a href="#team"></a>
              <strong>Team</strong>
            </h2>
            <p>
              <a
                href="https://res.cloudinary.com/practicaldev/image/fetch/s--1H4xukwb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://assets.website-files.com/61e789727a4d7f65c21aa463/6463924cfc348162ad0bc401_Forem-StaffZoomImage-2%2520%281%29-p-1080.jpg"
                className="article-body-image"
              >
                <Image
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--1H4xukwb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://assets.website-files.com/61e789727a4d7f65c21aa463/6463924cfc348162ad0bc401_Forem-StaffZoomImage-2%2520%281%29-p-1080.jpg"
                  alt="Zoom team photo"
                  loading="lazy"
                  height={1201}
                  width={1200}
                />
              </a>
            </p>
            <p>
              Our team is distributed around the world&#46; We have no
              office&#44; but we come together online each day to build
              community and improve the software careers of millions&#46;
            </p>
            <p>Happy coding ❤️</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
