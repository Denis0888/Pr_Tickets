import Sorting from './main-component/Sorting'
import Tickets from './main-component/Tickets'
import '../../style/main.css'
import { fetchTickets, loadMore } from '../../store/airTickets'
import { useDispatch } from 'react-redux'

export default function Main() {
  const dispatch = useDispatch()

  const load = () => {
    dispatch(loadMore())
    dispatch(fetchTickets())
  }

  return (
    <div className='main'>
      <Sorting />
      <Tickets />
      <button className='loading' onClick={load}>Загрузить еще билеты</button>
    </div>
  )
}


