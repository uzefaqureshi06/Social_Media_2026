import { useState } from "react";
import { Search, PenSquare } from "lucide-react";
import Avatar from "./Avatar";
import { messages, PURPLE } from "../assets/data";

export default function RightSidebar() {
  const [tab, setTab] = useState("Primary");

  return (
    <aside className="hidden xl:block space-y-4 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto [scrollbar-width:none]">
      <div className="bg-white rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-[15px]">Messages</h2>
          <PenSquare size={18} />
        </div>

        <div className="flex items-center gap-3 bg-[#efedf5] rounded-full px-4 h-12 mb-4">
          <Search size={18} className="text-gray-600" />
          <input
            placeholder="Search messages"
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
          />
        </div>

        <div className="flex border-b-2 border-gray-100 mb-4 text-sm">
          {["Primary", "General", "Requests(7)"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 pb-2 -mb-0.5 border-b-2 font-medium ${
                tab === t
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent"
              } ${t.startsWith("Requests") ? "text-[#6c4fd9]" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {messages.map((m) => (
            <li key={m.name} className="flex items-center gap-3">
              <Avatar n={m.img} online={m.online} />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{m.name}</p>
                <p className="text-xs text-gray-400 truncate">{m.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-gray-400 font-medium mb-2 px-1">Requests</h3>
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <Avatar n={64} />
            <div>
              <p className="text-sm font-semibold">Hajia Bintu</p>
              <p className="text-sm text-gray-400">8 mutual friends</p>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <button
              className="flex-1 text-white text-sm font-medium h-10 rounded-full"
              style={{ background: PURPLE }}
            >
              Accept
            </button>
            <button className="flex-1 text-sm font-medium h-10 rounded-full bg-gray-100">
              Decline
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
