import styles from  "./SearchBar.module.css";

const SearchBar = ({...rest}) => {
    return (
<div className = {styles.heading}>
        <h1>Crypto Tracker</h1>
        <div className = {styles.coin_search}>
            <input className = {styles.coin_input} {...rest}/>
        </div>
        </div>
    )
}

export default SearchBar
