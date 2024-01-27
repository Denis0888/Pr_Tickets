import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchTickets, parametersSorting } from "../../../store/airTickets"


export default function Sorting() {

  const [active, setActive] = useState([true, false, false])

  const dispatch = useDispatch()

  const price = () => {
    dispatch(parametersSorting('price.thousand'))
    setActive([true, false, false])
    dispatch(fetchTickets())
  }
  const time = () => {
    dispatch(parametersSorting('duration.hours'))
    setActive([false, true, false])
    dispatch(fetchTickets())
  }
  const transfers = () => {
    dispatch(parametersSorting('connectionAmount'))
    setActive([false, false, true])
    dispatch(fetchTickets())
  }

  return (
    <div className='sorting'>
      <h2 className={active[0] ? 'select active' : 'select'} onClick={price}>Самый дешевый</h2>
      <h2 className={active[1] ? 'select active' : 'select'} onClick={time}>Самый быстрый</h2>
      <h2 className={active[2] ? 'select active' : 'select'} onClick={transfers}>Самый оптимальный</h2>
    </div>
  )
}
