import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone from "../assets/phone.png";
import HeroImage from "../assets/hero.png";
import MainHeroImage from "../assets/heroImage.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <img
            className="mt-12 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-2/3 "
            src={MainHeroImage}
            alt="step"
          />
          <Link
            to="/remittance"
            type="submit"
            className="flex rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Provide Payment Details
          </Link>
        </div>
      </section>

      <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
        <div className="sm:w-full md:w-3/6">
          <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
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
}

export default Hero;
