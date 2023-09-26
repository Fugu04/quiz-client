import React from "react";
import styles from './Header.module.scss';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className={ styles.header}>
           {/* <img src="" alt="logo" /> */}
           <Link to="/">Fugu</Link>
           <ul className={ styles.menu}>
              <ll><Link className="text-white" href="">Тапсырмалар</Link></ll>
              <ll><Link className="text-white" to="/create">Кітапхана</Link></ll>
              <ll><Link className="text-white" href="">Біз туралы</Link></ll>
              <ll><Link className=" border px-5 py-1 text-white" href="">Кіру</Link></ll>
              <ll><Link className="px-5 py-1.5 text-white bg-gradient-to-r bg-emerald-800 bg-emerald-950" href="">Тіркелу</Link></ll>
            </ul>
        </header>
    );
}