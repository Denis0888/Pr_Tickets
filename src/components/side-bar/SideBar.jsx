import Firms from "./panels/Firms"
import Transfers from "./panels/Transfers"
import '../../style/side-bar.css'


export default function SideBar() {
  return (
    <div className="side-bar">
      <Transfers />
      <Firms />
    </div>
  )
}
