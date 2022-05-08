import React, {memo} from 'react';
import styles from './search.module.css'

const Search = memo((props) => {
    return (
        <ul className={styles.search}>
            <span className={styles.search_logo}>
                <i className="fa-brands fa-youtube"></i>
            </span>
            Youtube
            <input className={styles.search_input} type="text" placeholder=' Search...'></input>

            <span className={styles.serch_button}>
                <button className="fa-solid fa-magnifying-glass"></button>
            </span>
        </ul>
    );
});

export default Search;