import { useDispatch } from "react-redux"
import { useEffect } from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import SideBar from "./components/side-bar/SideBar"
import { fetchTickets } from "./store/airTickets"


function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])
  
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

export default App
