import { Notification } from "./screens/notification";
import { NotificationMobile } from "./screens/notificationMobile";

export function StudentNotification () {
  return(
    <div>
      <div className="hidden lg:block">
        <Notification />
      </div>
      <div className="block lg:hidden">
        <NotificationMobile/>
      </div>
    </div>
  )

}