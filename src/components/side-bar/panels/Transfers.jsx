import { useDispatch } from "react-redux"
import { fetchTickets, connectionAmount } from "../../../store/airTickets"

export default function Transfers() {
  const dispatch = useDispatch()

  const connection0 = () => {
    dispatch(connectionAmount("connectionAmount=0"))
    dispatch(fetchTickets())
  }
  const connection1 = () => {
    dispatch(connectionAmount("connectionAmount=1"))
    dispatch(fetchTickets())
  }
  const connection2 = () => {
    dispatch(connectionAmount("connectionAmount=2"))
    dispatch(fetchTickets())
  }
  const connection3 = () => {
    dispatch(connectionAmount("connectionAmount=3"))
    dispatch(fetchTickets())
  }

  return (
    <div className='selection transfers'>

      <h2>Количество пересадок</h2>

      <form className='transfers-form'>
        <label htmlFor="myCheckbox">
          <input type="radio" name='transfer' onChange={connection0}/>
          <span>Без пересадок</span>
        </label>
        <label htmlFor="myCheckbox">
          <input type="radio" name='transfer' onChange={connection1}/>
          <span>1 пересадка</span>
        </label>
        <label htmlFor="myCheckbox">
          <input type="radio" name='transfer' onChange={connection2}/>
          <span>2 пересадка</span>
        </label>
        <label htmlFor="myCheckbox">
          <input type="radio" name='transfer' onChange={connection3}/>
          <span>3 пересадка</span>
        </label>
      </form>

    </div>
  )
}
