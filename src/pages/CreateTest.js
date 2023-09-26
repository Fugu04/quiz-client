import React from "react";
import styles from './CreateTest.module.scss'

export default function CreateTest(){
  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();
    return (  
      <section>
        <select name="" id="">
	<option value="1">1</option>
	<option value="2">2</option>
</select>

<div className={ styles.select} >
	<div className={ styles.select__header}>
		<span className={ styles.select__current}>Value 1</span>
		<div className={ styles.select__icon}>&times;</div>
	</div>

	<div className={styles.select__body}>
		<div className= {styles.select__item}>Value 1</div>
		<div className= {styles.select__item}>Value 2</div>
		<div className= {styles.select__item}>Value 3</div>
		<div className= {styles.select__item}>Value 4</div>
		<div className= {styles.select__item}>Value 5</div>
	</div>
</div>
    </section> 
    );
}