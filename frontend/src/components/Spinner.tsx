import React from "react";
import { BallTriangle, Rings } from "react-loader-spinner";
import { AnimatePresence, motion } from "framer-motion";
import { smoothPopIn } from "../animation/Animation";

export const FormSpinner: React.FC = () => {
  return (
    <section className="body-font flex h-[700px] items-center justify-center text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <BallTriangle
          visible={true}
          height={192}
          width={192}
          color="#6366F1"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div className="mt-8 w-full text-center">
          <h1 className="title-font mb-4 flex justify-center text-3xl font-medium text-gray-900 sm:text-4xl">
            please wait...
          </h1>
        </div>
      </div>
    </section>
  );
};

export const SubmitSpinner: React.FC<{ visible: boolean }> = ({ visible }) => {
  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        {...smoothPopIn}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-lg"
      >
        <div className="container mx-auto flex flex-col items-center justify-center">
          <Rings
            visible={true}
            height={192}
            width={192}
            color="#6366F1"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <div className="mt-8 w-full text-center lg:w-2/3">
            <p className="title-font text-md mb-4 flex justify-center font-medium text-white  lg:text-4xl">
              Submitting Remittance! Loading...
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
