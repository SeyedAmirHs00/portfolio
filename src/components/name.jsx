import { transform } from "framer-motion";
import { motion } from "framer-motion";

export default function Name() {
  return (
    <div className="flex text-7xl font-bold gap-3 relative">
      <motion.div
        className="text-blue-500"
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        A
      </motion.div>
      <motion.div
        className="text-red-500"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        M
      </motion.div>
        <motion.div
          className="text-yellow-500"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1}}
        > I</motion.div>
      <motion.div
        className="text-green-500"
        initial={{ y: 3 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity,  delay: 1.5}}
      >
        R
      </motion.div>
      <div className="absolute text-lg right-0 bottom-0 text-sky-500 bg-white leading-3">
        Hosseini
      </div>
      <div className="absolute text-lg left-0 bottom-0 text-sky-500 bg-white leading-3">Seyed</div>
    </div>
  );
}
