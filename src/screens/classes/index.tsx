import { ClassesDesktop } from "./screens/classes";
import { ClassesMobile } from "./screens/classesMobile";


export function Classes () {
  return(
    <div>
      <div className="hidden lg:block">
        <ClassesDesktop/>
      </div>
      <div className="block lg:hidden">
        <ClassesMobile/>
      </div>
    </div>
  )

}