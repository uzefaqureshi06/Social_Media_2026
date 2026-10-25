import Avatar from "./Avatar";
import { notifications } from "../assets/data";
 
export default function NotificationsPanel() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 space-y-4 w-full">
      {notifications.map((n, i) => (
        <div key={i} className="flex items-start gap-3">
          <Avatar n={n.img} />
          <div className="text-sm min-w-0">
            <p className="text-gray-800 leading-snug">
              <b className="font-semibold">{n.name}</b>
              {n.extra && <> <b className="font-semibold">{n.extra}</b></>} {n.text}
            </p>
            <p className="text-[11px] text-gray-400 uppercase mt-0.5">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}