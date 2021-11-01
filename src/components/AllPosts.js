// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bgcolor min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive mb-12 text-center">_helloBlog.js</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative shadow leading-snug bg-white
                      hover:border-l-8 hover:border-green-400 hover:animate-fade"
                  key={index}
                >
                  <img
                    className="w-full h-full object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                </span>
                <div
                    className="uppercase pt-4 flow-root static pr-4 pb-4 flex"
                  >
                    <h2
                      className="text-center text-white	text-md font-bold px-1 py-2 thirdColorBG"
                    >
                      {post.title}
                    </h2>
                  </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}