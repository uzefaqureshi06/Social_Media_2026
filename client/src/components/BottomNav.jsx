import { NavLink } from "react-router-dom";
import { nav } from "../assets/data";

const items = ["Home", "Explore", "Notifications", "Message", "Bookmarks"];

export default function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-gray-100 flex justify-around py-2.5">
      {nav
        .filter((n) => items.includes(n.label))
        .map(({ label, path, icon: Icon, badge }) => (
          <NavLink
            key={label}
            to={path}
            end={path === "/"}
            aria-label={label}
            className="relative p-1.5"
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={22}
                  className={isActive ? "text-[#6c4fd9]" : "text-gray-400"}
                />
                {badge && (
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
    </nav>
  );
}
