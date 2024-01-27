import { useSelector } from 'react-redux'
import Ticket from './Ticket'

export default function Tickets() {

  const tickets = useSelector(state => state.tickets.tickets)

  return (
    <div className='tickets'>
      { tickets.map(ticket => <Ticket key={ ticket.id } { ...ticket } />) }
    </div>
  )
}
