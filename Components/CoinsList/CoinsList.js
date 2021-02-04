import Coins from "../Coins/Coins"

export default function CoinsList({filteredCoins}){
    return(
<>
    {filteredCoins.map(coin=>{
       return(
        <Coins
            key ={coin.id}
            name= {coin.name}
            id={coin.id}
            price = {coin.current_price}
            symbol = {coin.symbol}
            marketcap = {coin.market_cap}
            image = {coin.image}
            volume = {coin.total_volume}
            priceChange = {coin.price_change_percentage_24h}/>    

       )
        
        
    }
    )
    }
    </>
    )
    
}