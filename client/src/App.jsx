import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import MobileDrawer from "./components/MobileDrawer";
import BottomNav from "./components/BottomNav";
import PlaceholderPage from "./components/PlaceholderPage";
import './App.css'
export default function App() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#f2f0f9] text-gray-800"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Navbar onMenu={() => setDrawer(true)} />
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />

      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 grid gap-5 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_255px] pb-24 lg:pb-6">
        <LeftSidebar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/notifications" element={<Feed showNotifications />} />
          <Route
            path="/explore"
            element={<PlaceholderPage title="Explore" />}
          />
          <Route
            path="/messages"
            element={<PlaceholderPage title="Messages" />}
          />
          <Route
            path="/bookmarks"
            element={<PlaceholderPage title="Bookmarks" />}
          />
          <Route
            path="/analytics"
            element={<PlaceholderPage title="Analytics" />}
          />
          <Route path="/theme" element={<PlaceholderPage title="Theme" />} />
          <Route
            path="/settings"
            element={<PlaceholderPage title="Settings" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <RightSidebar />
      </div>

      <BottomNav />
    </div>
  );
}
