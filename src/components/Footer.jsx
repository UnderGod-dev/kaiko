import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
import { GiWaves } from "react-icons/gi";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mx-4 pb-10 mt-16">
      <div className="relative max-w-[300px] md:max-w-screen-sm mx-auto ">
        <Image
          src={"/phone.webp"}
          alt="dash"
          height={200}
          width={200}
          className="object-center size-full rounded-br-3xl md:rounded-b-none"
        />
      </div>
      <div className="bg-black mx-2 lg:mx-20 rounded-3xl">
        <footer className="rounded-3xl p-4 flex flex-col border-2 border-white/15 text-center gap-4 items-center bg-white/10 space-y-8">
          <nav className="flex flex-col items-center md:flex-row  md:justify-between gap-4 w-full">
            <div className="space-y-2">
              <div className="flex items-center gap-4 justify-center">
                <div className="size-14 bg-teal-400 rounded-lg text-5xl text-black flex justify-center items-center">
                  <GiWaves />
                </div>
                <Link href={"/"} className="font-bold text-xl">
                  KAIKO
                </Link>
              </div>
              <p className="text-sm">
                Developed by{" "}
                <Link
                  href={"https://adekunle-omega.vercel.app/"}
                  className="text-green"
                >
                  Adekunle
                </Link>
              </p>
              <p className="text-sm">
                Designed by{" "}
                <Link
                  href={"https://templates.gola.io/"}
                  className="text-green"
                >
                  Gola Templates
                </Link>
              </p>
            </div>
            <div className="flex gap-2 text-4xl">
              <Link href={"https://x.com/talk2hardeq"}>
                <BsTwitter className="border-2 p-1.5 rounded border-white/15" />
              </Link>
              <Link href={"https://instagram.com/talk2hardeq"}>
                <BsInstagram className="border-2 p-1.5 rounded border-white/15" />
              </Link>
              <Link href={"/"}>
                <BsLinkedin className="border-2 p-1.5 rounded border-white/15" />
              </Link>
              <Link href={"https://github.com/UnderGod-dev"}>
                <BsGithub className="border-2 p-1.5 rounded border-white/15" />
              </Link>
            </div>
          </nav>
          <div className="p-4 w-full">
            <div className="grid md:grid-cols-2  md:text-start gap-8 md:justify-between">
              <div className=" flex flex-col">
                <h3 className="text-white/75 font-semibold text-center pb-4">
                  PAGES
                </h3>
                <ul className="space-y-2 w-fit mx-auto text-white/70">
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/"}>Features</Link>
                  </li>
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/"}>Support</Link>
                  </li>
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="md:text-start space-y-4 w-fit mx-auto text-white/70">
                {" "}
                <h3 className="text-white/75 font-semibold">PAGES</h3>
                <ul className="space-y-2">
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/"}>Blog</Link>
                  </li>
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/pricing"}>Pricing</Link>
                  </li>
                  <li className="hover:text-white transition-colors ease-linear">
                    <Link href={"/"}>Changelog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-white/75 font-semibold">DOWNLOAD</h3>
            <div className="space-y-2 lg:space-y-0 lg:flex gap-4">
              <div className="bg-white/15 border-2 border-white/15 rounded p-2 flex items-center gap-2">
                <FaAppStore className="text-2xl" />{" "}
                <span className="text-xs">
                  GET IT ON <br />{" "}
                  <b className="text-base lg:text-lg">AppStore</b>
                </span>
              </div>
              <div className="bg-white/15 border-2 border-white/15 rounded p-2 flex items-center gap-2 h-full">
                <IoLogoGooglePlaystore className="text-2xl" />{" "}
                <span className="text-xs">
                  GET IT ON <br />{" "}
                  <b className="text-base lg:text-lg">PlayStore</b>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
