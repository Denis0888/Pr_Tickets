import { useDispatch } from "react-redux"
import { toggleS7, toggleRedWings, toggleVictory, fetchTickets } from "../../../store/airTickets"


export default function Firms() {

  const dispatch = useDispatch()

  const victory = () => {
    dispatch(toggleVictory())
    dispatch(fetchTickets())
  }
  const redWings = () => {
    dispatch(toggleRedWings())
    dispatch(fetchTickets())
  }
  const s7 = () => {
    dispatch(toggleS7())
    dispatch(fetchTickets())
  }

  return (
    <div className='selection firms'>

      <h2>Компании</h2>

      <form className='firms-form'>
        <label htmlFor="myCheckbox">
          <input type="checkbox" name='firm' defaultChecked onChange={victory} />
          <span>Победа</span>
        </label>
        <label htmlFor="myCheckbox">
          <input type="checkbox" name='firm' defaultChecked onChange={redWings}/>
          <span>Red Wings</span>
        </label>
        <label htmlFor="myCheckbox">
          <input type="checkbox" name='firm' defaultChecked onChange={s7}/>
          <span>S7 Airlines</span>
        </label>
      </form>

    </div>
  )
}

