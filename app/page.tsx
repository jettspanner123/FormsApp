"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./components/Container";
import TopNavbar from "./components/TopNavbar";
import Division from "./components/Division";
import RevealText from "./components/RevealText";
export default function Home() {
  const [render, setRender] = useState(0);
  return (
    <div className="">
      <BackgroundImage />
      <TopNavbar />
      <Navbar renderDiv={setRender} />
      <MobileNavbar />
      <div className="h-[500vh]  bg-[rgba(0,0,0,0.75)] text-white ">
        <AnimatePresence>
          <Container
            classStyles="bg-[#242424]  rounded-xl border-[0.5px] border-[#777777] backdrop:blur-[12rem] h-[200vh] p-6"
            pageProps={
              <div>
                {render == 0 ? (
                  <Division
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    classStyles=""
                    pageProps={
                      <RevealText
                        classStyles="text-[6rem] text-center rounded-xl py-10 m-6 border-[0.5px] border-white font-semibold"
                        text="Get insights quickly, with Survey Forms"
                      />
                    }
                  />
                ) : (
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Secondary Page
                  </motion.div>
                )}
              </div>
            }
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

const Navbar = ({ renderDiv }: any) => {
  const [activeLink, setActiveLink] = useState(0);
  renderDiv(activeLink);
  const itemList: string[] = ["Home", "Create", "Render", "Contacts", "About"];
  return (
    <div className="fixed md:flex hidden bottom-[2rem]  justify-center items-center w-[100vw] ">
      <motion.nav
        animate={{ y: 0 }}
        initial={{ y: 150 }}
        transition={{ duration: 1.4 }}
        className=" bg-[rgba(0,0,0,0.25)] w-[48rem] rounded-xl  border_it blur_it "
      >
        <ul className="flex justify-center items-center gap-[2rem] p-5 font-bold rounded-xl">
          {itemList.map((item, index) => (
            <li
              className="text-white hover:translate-y-[-2rem] hover:scale-150   text-[1.5rem] cursor-default p-4 hover:bg-white hover:text-black  rounded-xl transition-all duration-500 "
              onClick={() => setActiveLink(index)}
              style={{
                backgroundColor: index == activeLink ? "white" : "",
                color: index == activeLink ? "black" : "",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

import { AiFillHome } from "react-icons/ai";
import { BsFillPatchPlusFill, BsFillEnvelopePaperFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import BackgroundImage from "./components/BackgroundImage";
import Head from "next/head";

const MobileNavbar = () => {
  return (
    <>
      <div className="bg-black border-[0.5px] border-[#777777] rounded-xl w-[90%]  md:hidden text-white blur_it left-[50%] translate-x-[-50%] fixed bottom-6 py-2">
        <ul className="flex justify-around items-center py-4">
          <li>
            <AiFillHome size={40} />
          </li>
          <li>
            <BsFillPatchPlusFill size={40} />
          </li>
          <li>
            <BsFillEnvelopePaperFill size={40} />
          </li>
          <li>
            <GiHamburgerMenu size={40} />
          </li>
        </ul>
      </div>
      <div className="text-center flex justify-center md:hidden  font-bold text-3xl py-6 bg-black text-white relative">
        FormsApp
        <div className="w-[30%] rounded-full h-[5px] bg-white absolute bottom-[1.1rem]"></div>
      </div>
    </>
  );
};
