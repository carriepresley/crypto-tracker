import styles from "./Coins.module.css";

import { Container, Row, Col } from "react-bootstrap";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Container>
      <div className={styles.coin_container}>
        <a href="https://coinmarketcap.com/coins/">
          <Row>
            <div className={styles.coin_row}>
              <Col>
                <div className={styles.coin}>
                  <img src={image} alt={name} className={styles.coin_image} />
                  <h1 className={styles.coin_h1}>{name}</h1>
                  <p className={styles.coin_symbol}>{symbol}</p>
                </div>
              </Col>
              <Col>
                <div className={styles.coin_data}>
                  <p className={styles.coin_price}>${price.toFixed(2)}</p>
                </div>
              </Col>
              <Col>
                <div className={styles.price_change}>
                  {priceChange < 0 ? (
                    <p className={styles.coin_percent_red}>
                      {priceChange.toFixed(2)}%
                    </p>
                  ) : (
                    <p className={styles.coin_percent_green}>
                      {priceChange.toFixed(2)}%
                    </p>
                  )}
                </div>
              </Col>
            </div>
          </Row>
        </a>
      </div>
    </Container>
  );
};

export default Coins;
