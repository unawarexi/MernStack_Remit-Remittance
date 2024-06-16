import { useEffect } from "react";
import confirmed from "../assets/confirmed.png";
import error from "../assets/error.png";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp } from "../animation/Animation";

export const Success: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        {...fadeInUp}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-lg"
      >
        <div className="w-[40%] rounded-lg bg-white p-8">
          <img src={confirmed} alt="error png" className="h-full w-full" />
          <p className="text-4xl font-bold text-lime-500">Success</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Error: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        {...fadeInUp}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-lg"
      >
        <div className="w-[80%] items-center justify-center rounded-lg bg-white p-8 text-center lg:w-[40%] ">
          <img src={error} alt="error png" className="h-full w-full" />
          <p className="text-md font-bold text-red-500 lg:text-4xl">
            Error Submitting
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
