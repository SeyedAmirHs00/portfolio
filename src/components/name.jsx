import { motion } from "framer-motion";
import Amir from "./amir";

export default function Name() {
  return (
    <div className="flex text-7xl font-bold gap-3 relative">
      <Amir />
      <div className="absolute text-lg right-0 bottom-0 text-sky-500 bg-white leading-3">
        Hosseini
      </div>
      <div className="absolute text-lg left-0 bottom-0 text-sky-500 bg-white leading-3">
        Seyed
      </div>
    </div>
  );
}
