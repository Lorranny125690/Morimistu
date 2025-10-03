import { StudentDesktop } from "./screens/student";
import { StudentList } from "./screens/studentMobile";

export function Student () {
  return(
    <div>
      <div className="hidden lg:block">
        <StudentDesktop />
      </div>
      <div className="block lg:hidden">
        <StudentList/>
      </div>
    </div>
  )

}