import { SectionHeader } from "@/sections/Features";
import { blogCards, convertToSlug } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsTwitterX } from "react-icons/bs";

const Page = ({ params }) => {
  const { slug } = params;
  const blogPost = blogCards.find((blog) => convertToSlug(blog.h3) === slug);
  const { h6, h3, src, details, id } = blogPost;

  const recentBlogs = blogCards.filter((blog) => blog.id !== id);
  const getRandomBlogs = (blogs, count) => {
    const shuffled = [...blogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomThreeBlogs = getRandomBlogs(recentBlogs, 3);

  //   console.log(slug);
  return (
    <div className="page-padding">
      <div className="max-w-md md:max-w-2xl mx-auto">
        <SectionHeader h6={h6} h1={h3} />
      </div>

      <div className="bg-muted border border-border rounded max-w-2xl mx-auto">
        <div className="bg-mutedELight p-4 ">
          <Image
            src={`/${src}.svg`}
            alt="img"
            height={400}
            width={400}
            className="size-full rounded"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl space-y-4 mt-20">
        {details.map((detail, i) => (
          <React.Fragment key={i}>
            <h3
              className={`${
                i === 0 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
              } font-[550] mb-4`}
            >
              {detail.header}
            </h3>
            {detail.P.map((text, i) => (
              <div key={i} className="space-y-4">
                <p className="text-white/70 text-base md:text-lg">{text}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
        <div className="">
          <h6 className="text-green text-sm text-center font-[500] mt-12">
            SHARE ARTICLE
          </h6>
          <div className="flex gap-2 text-4xl justify-center mt-4">
            <Link href={"https://x.com/talk2hardeq"}>
              <BsTwitterX className="border-2 p-1.5 rounded border-white/15" />
            </Link>
            <Link href={"https://instagram.com/talk2hardeq"}>
              <BsInstagram className="border-2 p-1.5 rounded border-white/15" />
            </Link>
            <Link href={"/"}>
              <BsLinkedin className="border-2 p-1.5 rounded border-white/15" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h3 className="font-[550] text-center text-3xl md:text-4xl">
          Related <span className="text-green">Articles</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {randomThreeBlogs.map(({ h6, h3 }, i) => (
            <React.Fragment key={i}>
              <div
                className={`bg-muted rounded border-border group ${
                  i === 2 ? "md:hidden lg:block" : ""
                }`}
              >
                <div className="bg-mutedELight group-hover:bg-white/5 rounded p-4 size-full 2xl:p-8 space-y-2 transition-all ease-in-out duration-300">
                  <Link href={`/blog/${convertToSlug(h3)}`}>
                    <div className="rounded relative">
                      <Image
                        src={`/blog${i + 1}.svg`}
                        height={300}
                        width={300}
                        alt="blog img"
                        className="size-full rounded group-hover:scale-105 transition-all ease-in-out duration-300"
                      />
                      <span className="border border-border text-sm backdrop-blur-md absolute bottom-4 right-4 rounded p-1 w-fit">
                        Support
                      </span>
                    </div>
                  </Link>

                  <h6 className="text-green text-sm md:text-base">{h6}</h6>
                  <h3 className="text-xl md:text-2xl font-[550]">{h3}</h3>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
