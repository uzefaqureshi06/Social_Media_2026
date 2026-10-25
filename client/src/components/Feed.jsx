import Stories from "./Stories";
import Composer from "./Composer";
import NotificationsPanel from "./NotificationPanel";
import PostCard from "./PostCard";
 
export default function Feed({ showNotifications = false }) {
  return (
    <main className="min-w-0 space-y-4 relative">
      <Stories />
      <Composer />
      {showNotifications && (
        <div className="lg:absolute lg:left-0 lg:top-[170px] lg:w-[min(398px,100%)] lg:z-20">
          <NotificationsPanel />
        </div>
      )}
      <PostCard />
    </main>
  );
}
 