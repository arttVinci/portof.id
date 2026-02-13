import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import type { ProfileItem } from "../../../types/ui.types";

interface Props {
  data: ProfileItem | null;
}

export default function ProfileHeader({ data }: Props) {
  if (!data) {
    return (
      <div className="pt-12 pb-4 px-5 text-center border-b border-zinc-700 animate-pulse">
        <div className="w-22 h-22 mx-auto rounded-full bg-zinc-800 mb-3" />
        <div className="h-4 w-32 mx-auto bg-zinc-800 mb-2 rounded" />
        <div className="h-3 w-48 mx-auto bg-zinc-800 rounded" />
      </div>
    );
  }

  return (
    <div className="pt-12 pb-4 px-5 text-center border-b border-zinc-700 font-sans">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-22 h-22 mb-3 mx-auto rounded-full overflow-hidden border border-blue-100"
      >
        <img
          src="/images/profile3.jpg"
          alt="Putra Rizky"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-center gap-1 mb-1">
          <h1 className="text-xl font-semibold text-gray-300">
            {data.fullName}
          </h1>
          <MdVerified className="w-4 h-4 text-blue-400 mt-1" />
        </div>
        <p className="text-gray-400 text-xs mb-4">@{data.username}</p>

        <p className="text-gray-400 text-sm max-w-md mx-auto font-mono tracking-wide">
          Full Stack Dev | Tech Enthusiast | Clean Code
        </p>
      </motion.div>
    </div>
  );
}
