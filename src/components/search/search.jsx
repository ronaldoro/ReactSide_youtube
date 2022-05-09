import React, { useRef } from 'react';
import styles from './search.module.css'


const Search = (props) => {
    const intputRef = useRef();

    const handleClick = () => {
        console.log("testet");
    };

    return (
        <form className={styles.search}>
            <span className={styles.search_logo}>
                <i className="fa-brands fa-youtube"></i>
            </span>
            Youtube

            <input ref={intputRef} className={styles.search_input} type="search" placeholder=' Search...'></input>

            <span className={styles.serch_button}>
                <button className="fa-solid fa-magnifying-glass" type="submit" onClick={handleClick}></button>
            </span>
        </form>
    );
};

export default Search;