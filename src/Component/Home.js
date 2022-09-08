import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
             <h1>This is Home Page </h1>
            <img
                        src='https://cdn.shopify.com/s/files/1/0057/3728/3618/products/53973c_480x.progressive.jpg?v=1609348363'
                        width="520px"
                        alt=""
                    />
                    <img
                        src='https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ironman_480x.progressive.jpg?v=1620318584'
                        width="500px"
                        alt=""
                    />
                    <img
                        src='https://cdn.shopify.com/s/files/1/0057/3728/3618/products/demonslayer_480x.progressive.jpg?v=1628715291'
                        width="500px"
                        alt=""
                    />
            
           
        </div>
    )
}

export default Home