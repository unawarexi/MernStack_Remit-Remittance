import React, { useState, useEffect } from "react";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone from "../assets/phone.png";
import HeroImage from "../assets/hero.png";
import MainHeroImage from "../assets/MainHeroImage.jpg";
import sub1 from "../assets/sub1.png";
import sub2 from "../assets/sub2.png";
import card1 from "../assets/card1-removebg-preview.png";
import card2 from "../assets/card2-removebg-preview.png";
import cluster from "../assets/cluster.png";
import { Link } from "react-router-dom";
import { BiMoney } from "react-icons/bi";

interface YourComponentProps {
  MainHeroImage: string;
  cluster: string;
  card1: string;
  card2: string;
  sub1: string;
  sub2: string;
}

const Hero: React.FC<YourComponentProps> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <section className={`body-font relative text-gray-600`}>
        <div className="">
          <div className={isMobile ? "" : "relative"}>
            <img
              className={`  w-full object-cover object-center lg:h-[100vh] ${isMobile ? " h-[100%] " : ""}`}
              src={MainHeroImage}
              alt="step"
            />
            {/* {======== main div text and images ================} */}
            <div
              className={`absolute inset-0 items-center justify-center  ${isMobile ? "  bg-black bg-opacity-50" : " bg-black bg-opacity-50"}  p-6`}
            >
              {/* {----------------- only text div -----------------} */}
              <div className="mt-6 text-center text-white">
                <h2 className="mb-4 text-lg font-bold md:text-5xl lg:mt-10 lg:text-7xl">
                  Cross Border Payments
                </h2>
                <p className="mb-4 text-[10px] font-semibold md:text-lg lg:text-lg ">
                  Gets Easier!!! Designed specially for cross border
                  transactions!
                </p>
                <Link
                  to="/remittance"
                  type="submit"
                  className="container m-6 mx-auto flex w-full items-center justify-center  gap-x-2 rounded-md bg-blue-400 px-4 py-2 text-center text-[10px]
                   font-semibold text-white hover:bg-blue-600 md:text-base lg:w-[30%]  lg:py-4  lg:text-lg"
                >
                  <BiMoney className="items-center justify-center text-base lg:text-lg" />
                  Provide Payment Details
                </Link>
              </div>
              {/* {==================== div between both image divs =================} */}
              <div
                className={`flex w-full flex-col items-center justify-between gap-x-10 lg:flex-row  ${isMobile ? "static" : "absolute"}`}
              >
                {/* {----------------------------------------} */}
                {!isMobile && (
                  <>
                    <div className="m-10 flex w-[50%] flex-col items-start justify-start ">
                      <img
                        src={cluster}
                        alt="blue debit"
                        className=" shrink-fade w-[60%] rounded-md object-cover"
                      />
                      <div className=" flex w-full lg:-mt-20 ">
                        <img
                          src={card1}
                          alt="gold debit"
                          className="bounce-landing w-[50%] rounded-md object-cover"
                        />
                        <img
                          src={card2}
                          alt="gold debit"
                          className="bounce-up w-[50%] rounded-md object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex h-[40%] w-[40%] flex-col items-center justify-center gap-y-8 ">
                      <img
                        src={sub1}
                        alt="mobile log"
                        className="w-[40%] rounded-md object-cover"
                      />
                      <img
                        src={sub2}
                        alt="desktop log"
                        className="w-[40%] rounded-md object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isMobile && (
        <div className=" m-10 mx-auto my-20 flex w-[70%] flex-col items-start justify-start  ">
          <img
            src={cluster}
            alt="blue debit"
            className="shrink-fade w-[60%] rounded-md object-cover"
          />
          <div className="-ml-10 -mt-10 flex">
            <img
              src={card1}
              alt="gold debit"
              className=" bounce-landing w-[60%] rounded-md object-cover"
            />
            <img
              src={card2}
              alt="gold debit"
              className="bounce-up w-[60%] rounded-md object-cover "
            />
          </div>
        </div>
      )}
      <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[54.9vh] md:flex-row md:gap-0 lg:h-[94.9vh] lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
        <div className="sm:w-full md:w-3/6">
          <h1 className="mx-auto mb-8  w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
            Recieve international payments the smart way
          </h1>
          <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
            Take Control of Your business Finances Anytime, Anywhere with Nordea
            Remittance. Designed specially for cross border transactions!
          </p>
          <StoreLinks type={BtnTypes.Standard} />
        </div>
        <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
          <img
            className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-96"
            src={Phone}
            alt="Kobodrop app frame"
          />
          <img
            className="hidden rounded-2xl xl:flex"
            src={HeroImage}
            alt="A woman happily using Kobodrop"
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
