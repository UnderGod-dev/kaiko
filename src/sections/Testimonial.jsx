"use client";
import Image from "next/image";
import pic1 from "../../public/usersAvatar/braids.webp";
import pic2 from "../../public/usersAvatar/gee.webp";
import pic3 from "../../public/usersAvatar/grey.webp";
import pic4 from "../../public/usersAvatar/hijab.webp";
import pic5 from "../../public/usersAvatar/red.webp";
import { FaQuoteRight } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Testimonial = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef(null);
  const bottomRef = useRef(null);
  const cardRef = useRef([]);

  useGSAP(() => {
    gsap.from(headerRef.current.children, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    cardRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.1,
      });
    });
  });
  useGSAP(() => {
    gsap.from(bottomRef.current.children, {
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  const img = [pic1, pic2, pic3, pic4, pic5];
  const usersTestimonial = [
    {
      header: "Life-changing Financial Management",
      comment:
        "Kaiko revolutionized how I manage money. It's intuitive, secure, and saved me hours of stress. Now, I have full control over my finances. Highly recommend!",
      avater: pic1,
      name: "Olatunji Ifeoma",
      position: "Designer",
    },
    {
      header: "Seamless Banking Integration",
      comment:
        "Kaiko's integration with 30+ banks made my life easier. I can access all accounts from one place, track spending effortlessly, and stay on top of my finances hassle-free.",
      avater: pic2,
      name: "Habeeb Neyoh",
      position: "DevOps",
    },
    {
      header: "Effortless Contract Management",
      comment:
        "Managing contracts was a headache until I found Kaiko. Now, I can organize, track deadlines, and receive reminders seamlessly. It's simplified my workload.",
      avater: pic3,
      name: "Nicole Adam",
      position: "CTO",
    },
  ];
  return (
    <section className="my-20 space-y-12">
      <div
        className="flex flex-col items-center gap-4 text-center"
        ref={headerRef}
      >
        <h3 className="uppercase text-green font-semibold">Testimonials</h3>
        <h2 className="text-4xl font-[550] capitalize max-w-sm my-4">
          Customer Success Stories
        </h2>
        <div className="flex items-center pl-[3rem]">
          {img.map((image, id) => (
            <div className={`size-12 `} key={id}>
              <Image
                src={image}
                className="rounded-full object-cover w-full h-full"
                style={{ marginLeft: id !== 0 ? `${id * -0.75}rem` : 0 }}
                alt={`Avatar ${id}`}
              />
            </div>
          ))}
        </div>
        <small className="text-white/75 text-base pt-4">
          Rated{" "}
          <span className="text-black  bg-green p-2 rounded"> 4.9/5.0</span> by
          over 100.000+ users
        </small>
      </div>
      <div className="">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {usersTestimonial.map((testimonial, id) => (
            <div
              className="bg-muted"
              key={id}
              ref={(el) => (cardRef.current[id] = el)}
            >
              <div className="card-border border-2 border-white/15 p-8 flex flex-col gap-4 justify-center bg-mutedELight h-full">
                <FaQuoteRight className="bg-green text-black p-2 text-2xl rounded" />
                <h2 className="font-semibold text-2xl">{testimonial.header}</h2>
                <p className="text-white/65 leading-5">{testimonial.comment}</p>
                <div className="flex gap-2 items-center">
                  <div className={`size-12`}>
                    <Image
                      src={testimonial.avater}
                      className={`rounded-full object-cover w-full h-full`}
                      alt={`Avatar ${id}`}
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-semibold">
                    <span className="text-white text-lg">
                      {testimonial.name}
                    </span>
                    <small>{testimonial.position}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col justify-center mx-auto gap-4 "
        ref={bottomRef}
      >
        <div className="flex justify-center -mt-20">
          <Image
            src={"/trustpilot.svg"}
            height={280}
            width={280}
            className="object-center size-[200px] lg:size-[280px]"
          />
        </div>

        <div className="flex justify-center -mt-10">
          <Image
            src={"/stars-5.svg"}
            height={150}
            width={150}
            className=" object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
