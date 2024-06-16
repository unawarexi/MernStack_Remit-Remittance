import React, { ReactNode, useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import bg1 from "../assets/bg1.jpg";

interface FormContainerProps {
  children: ReactNode;
  step: number;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, step }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bgImage, setBgImage] = useState(window.innerWidth >= 1024 ? bg1 : bg);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setBgImage(window.innerWidth >= 1024 ? bg1 : bg);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <img
        src={bgImage}
        alt="nordea background"
        className="h-full w-full object-cover"
      />

      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-center rounded-br-md rounded-tr-md bg-black bg-opacity-50 p-4 lg:w-[70%] lg:p-8">
        <div className="mb-8 grid grid-flow-row items-center justify-center text-white md:mx-auto md:text-center">
          <h1 className="mt-10 text-2xl font-bold md:mt-2 md:text-4xl">
            Provide Payment Account
          </h1>
          <p className="mt-4 text-sm md:p-4 md:text-2xl lg:text-lg">
            Please ensure account details are correct! and take the benefits of
            our online banking facilities.
          </p>
        </div>

        <div className="mx-auto mb-8 flex w-full items-center justify-center gap-x-10 rounded-lg bg-white p-2 text-center text-[10px] text-blue-500 shadow-lg md:w-[80%] md:gap-x-20 md:text-base lg:text-base">
          {[1, 2, 3, 4].map((index) => (
            <p
              key={index}
              className={
                index === step
                  ? "h-full w-auto items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 "
                  : ""
              }
            >
              Step {index}
            </p>
          ))}
        </div>

        {children}
      </div>
    </div>
  );
};

export default FormContainer;
