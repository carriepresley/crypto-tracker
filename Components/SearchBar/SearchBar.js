import styles from  "./SearchBar.module.css";
import {Container, Row, Col} from "react-bootstrap";

const SearchBar = ({...rest}) => {
    return (
        <>
        <Container>
        <Col>
        <Row>
        <h1 className = {styles.title}>CRYPTO TRACKER</h1>
        
        </Row>
        <Row>
        <div className={styles.coin_container}>
        <div className = {styles.coin_search}>
        
        
            <input className = {styles.coin_input} {...rest}/>
            
        </div>
        </div>
        </Row>
</Col>
        </Container>
       </>
    )
}

export default SearchBar
