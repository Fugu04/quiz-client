import React from "react";
import styles from './Header.module.scss';

export default function Header(){
    return(
        <header className={ styles.header}>
           {/* <img src="" alt="logo" /> */}
           <span className="font-bold">Fugu</span>
           <ul className={ styles.menu}>
              <ll><a className="text-white" href="">Тапсырмалар</a></ll>
              <ll><a className="text-white" href="">Кітапхана</a></ll>
              <ll><a className="text-white" href="">Біз туралы</a></ll>
              <ll><a className=" border px-5 py-1 text-white" href="">Кіру</a></ll>
              <ll><a className="px-5 py-1.5 text-white bg-gradient-to-r bg-emerald-800 bg-emerald-950" href="">Тіркелу</a></ll>
            </ul>
        </header>
    );
}