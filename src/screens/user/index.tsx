import { UserProfile } from "./profile";
import { ProfileMobile } from "./profileMobile";

export function Profile () {
  return(
    <div>
      <div className="z-100 hidden lg:block">
        <UserProfile/>
      </div>
      <div className="block lg:hidden">
        <ProfileMobile/>
      </div>
    </div>
  )
}