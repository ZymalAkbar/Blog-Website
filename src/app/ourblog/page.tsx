import React from 'react';

const blogPosts = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuA81c_MDxWrp_1lacylwz1riSW_xCdsia31e4CZTqwMwOahNGT12fcnBZ_2COdEK4psc",
    title: "Python For Data Science",
    date: "November 23, 2024",
    link: "https://hackr.io/blog/python-for-data-science"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "React Tutorials and Courses",
    date: "November 24, 2024",
    link: "https://hackr.io/tutorials/learn-react"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_i9vlQ4W7Ss618OsG9v4m0bDZx1ihfD9AMqNGhx2MMjI_D6mJAysECFt4A8ajW1h5qE",
    title: "Handling Forms in Next.js",
    date: "November 25, 2024",
    link: "https://www.freecodecamp.org/news/handling-forms-nextjs-server-actions-zod/"
  },
  {
    image: "https://t3.ftcdn.net/jpg/09/60/09/86/360_F_960098626_9JqLcELxpSm1DazUybCBql4eGv2LK6ds.jpg",
    title: "How to Create a Meme Generator Using HTML Canvas",
    date: "November 26, 2024",
    link: "https://www.freecodecamp.org/news/create-meme-generator-using-html-canvas/"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    title: "How to Benchmark Your Code in C#",
    date: "November 27, 2024",
    link: "https://www.freecodecamp.org/news/how-to-benchmark-your-code-in-csharp/"
  },
  {
    image: "https://media.istockphoto.com/id/1448124439/vector/web-development-programming-and-code-testing-ui-concept-with-laptop-displaying-futuristic.jpg?s=612x612&w=0&k=20&c=CXBA4DexowbvWEsyIBbiwc37h15N7fyeSpXUXGQpCpU=",
    title: "Create a Full Stack Spotify Clone with Flutter",
    date: "November 28, 2024",
    link: "https://www.freecodecamp.org/news/create-a-full-stack-spotify-clone-with-flutter/"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwPjaWt73Wn7tKsmAvPZ_UjStHX1DTEtNaA&s",
    title: "How to Build a Flexible API with Feature Flags Using Open Source Tools",
    date: "November 29, 2024",
    link: "https://www.freecodecamp.org/news/build-a-flexible-api-with-feature-flags-using-open-source-tools/"
  },
  {
    image: "https://www.shutterstock.com/image-vector/blue-abstract-matrix-vortex-technology-260nw-2409309121.jpg",
    title: "How to Simplify Your Git Commands with Git Aliases",
    date: "November 30, 2024",
    link: "https://www.freecodecamp.org/news/how-to-simplify-your-git-commands-with-git-aliases/"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d5fq9PThy9cPQ3Uz0dl_3F7DsZTu2buTLA&s",
    title: "What Happens When You Visit a Website? How the Web Works Explained",
    date: "December 1, 2024",
    link: "https://www.freecodecamp.org/news/what-happens-when-you-visit-a-website/"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgsALGqjiSU7yu9X7mN1xZq3_nfztPnFheQ&s",
    title: "What is Cloud Computing? A Guide for Beginners",
    date: "December 2, 2024",
    link: "https://www.freecodecamp.org/news/cloud-computing-guide-for-beginners/"
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    title: "Build Your Own RAG Chatbot with JavaScript!",
    date: "December 3, 2024",
    link: "https://www.freecodecamp.org/news/build-your-own-rag-chatbot-with-javascript/"
  },
  {
    image: "https://png.pngtree.com/thumb_back/fw800/background/20230930/pngtree-web-development-concept-programming-and-coding-illustrated-in-3d-image_13511770.png",
    title: "How to Use LangChain and GPT to Analyze Multiple Documents",
    date: "December 4, 2024",
    link: "https://www.freecodecamp.org/news/how-to-use-langchain-and-gpt-to-analyze-multiple-documents/"
  }
];

const OurBlogPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 p-6 container mx-auto">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="w-full h-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            alt={post.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
            src={post.image}
          />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-green-600">{post.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{post.date}</p>
            <a
              href={post.link}
              className="mt-4 inline-block text-green-600 hover:text-blue-700"
            >
              Visit Blog
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurBlogPage;
