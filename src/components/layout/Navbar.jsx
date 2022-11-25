import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import pubImg from '../../../public/MOES.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.list}>
        <Link to="/"> <img src={pubImg} id={styles.icon} /></Link>
          <li className={styles.item}><Link to="/Cardapio">Cardápio</Link></li>
          <li className={styles.item}><Link to="/pedido">Pedido</Link></li>
          <li className={styles.item}><Link to="/Sobre">Sobre</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;