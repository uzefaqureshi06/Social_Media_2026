import { X } from "lucide-react";
import { ProfileCard, NavList } from "./LeftSidebar";
import { PURPLE } from "../assets/data";

export default function MobileDrawer({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 max-w-[85%] bg-[#f2f0f9] p-4 space-y-4 overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Close menu"><X size={22} /></button>
        </div>
        <ProfileCard />
        <NavList onPick={onClose} />
        <button className="w-full text-white font-medium h-12 rounded-full" style={{ background: PURPLE }}>
          Create Post
        </button>
      </div>
    </div>
  );
}