import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div>
      <div className="relative w-full h-[1000px]">
        <Image
          src="/bg.avif"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-95"
        />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full sm:w-1/2 pr-10 flex justify-center">
          <h1 className="text-white text-2xl sm:text-5xl font-thin text-center px-4 sm:px-0">
            Top Programming Blogs to Read in 2024
            <p className="mt-9 text-4xl">
              As we step into 2024, the world of programming continues to evolve rapidly, making it essential for developers to stay informed. Whether you are looking to level up your coding skills or explore new technologies, these blogs provide invaluable insights to keep you ahead in your programming journey.
            </p>
          </h1>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-green-600">
            {/* First Post */}
            <div className="py-40 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-black text-xl">CATEGORY</span>
                <span className="mt-1 text-green-600 text-lg">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-5xl font-medium text-green-600 title-font mb-2">
                Top 10 Blog Platforms for Software Developers in 2023
                </h2>
                <p className="leading-relaxed text-3xl text-black">
                As a software developer, starting a technical blog is an excellent way to share your knowledge, insights, and experiences with other developers and the broader community. But with so many blogging platforms available, it can be challenging to decide which one to choose. In this article, we’ll take a look at ...
                </p>
                <a
                  href="https://medium.com/@philipbcase/top-10-blog-platforms-of-software-developers-in-2023-a49e1b76d97f" 
                  className="text-green-600 inline-flex items-center mt-4 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Second Post */}
            <div className="py-40 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-black text-xl">CATEGORY</span>
                <span className="mt-1 text-green-600 text-lg">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-5xl font-medium text-green-600 title-font mb-2">
                10 Open Source Blogging Platforms for Developers
                </h2>
                <p className="leading-relaxed text-3xl text-black">
                Mainstream blogging platforms like WordPress, Blogger, Tumblr, etc. aren’t designed for hackers. They’re encumbered by features developers just don’t need or want. And, out of the box, the popular blogging platforms certainly lack a ...
                </p>
                <a
                  href="https://www.webfx.com/blog/web-design/open-source-blogging-platforms-for-developers/" 
                  className="text-green-600 inline-flex items-center mt-4 text-xl"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Third Post */}
            <div className="py-40 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-black text-xl">CATEGORY</span>
                <span className="text-lg text-green-600">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-5xl font-medium text-green-600 title-font mb-2">
                13 Programming Blogs and Websites to Improve Your Coding Skills!
                </h2>
                <p className="leading-relaxed text-3xl text-black">
                To ensure that you remain up to date on standards and protocols, and even more so in the field of coding, it is important to track developments in your field. Programmers of all specialities can easily benefit from keeping track of the new developments & following industry-leading blogs and websites ...
                </p>
                <a
                  href="https://blog.bit.ai/programming-blogs-and-websites/" 
                  className="text-green-600 inline-flex items-center mt-4 text-xl"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
