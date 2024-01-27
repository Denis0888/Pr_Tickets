import '../../style/header.css'
import Logo from '/logo.svg'

export default function Header() {
    return (
        <header className='header'>
            <img src={ Logo } />
            <h1>Поиск авиабилетов</h1>
        </header>
    )
}


