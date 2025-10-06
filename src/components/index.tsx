import { Header } from "./header"
import { HeaderMobile } from "./headerMobile"

export function HeaderExport () {
  return (
    <div>
      <div className="hidden lg:block">
        <Header/>
      </div>
      <div className="lg:hidden block">
        <HeaderMobile/>
      </div>
    </div>
  )
}