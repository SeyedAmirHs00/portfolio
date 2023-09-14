import { motion } from "framer-motion";

export default function Amir() {
  return (
    <>
      <motion.div
        className="text-blue-500"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        A
      </motion.div>
      <motion.div
        className="text-red-500"
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
          repeatDelay: 1,
        }}
      >
        M
      </motion.div>
      <motion.div
        className="text-yellow-500"
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
          repeatDelay: 1,
        }}
      >
        {" "}
        I
      </motion.div>
      <motion.div
        className="text-green-500"
        initial={{ y: 3 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1.5,
          repeatDelay: 1,
        }}
      >
        R
      </motion.div>
    </>
  );
}
