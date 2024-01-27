
export default function Ticket({ id, price, from_to, time, duration, logo, connectionAmount }) {
    return (
        <div className='ticket' id={ id }>

            <div className='column'>
                <span className='price'>{ price.thousand } {price.hundred} P</span>
                <span className='info'>{ from_to }</span>
                <span>{ time }</span>
            </div>

            <div className='column'>
                <span className='info'>В пути</span>
                <span>{duration.hours} ч {duration.minuts} мин</span>
            </div>

            <div className='column'>
                <img src={logo} alt="" className='firm-logo' />
                <span className='info'>Пересадки</span>
                <span>{connectionAmount} пересадка</span>
            </div>

        </div>
    )
}
