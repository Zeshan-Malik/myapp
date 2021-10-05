import React from "react";
function Home(props){
    return(
        <div> 
            <div className="cart-wraper">
                <div className= "image-wraper item ">
                    <img src = "https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg" alt="Img not found"/>
                </div>
                <div className= "text-wraper item ">
                    <span>Company : iphone </span> <br />
                    <span>Price : $1000</span>
                </div>
                <div className= "btn-wraper item ">
                    <button onClick= {()=>props.addToCartHandler({price:1000, name:"iphone"})} >Add to Cart</button>
                    <button style={{marginLeft:"10px"}} onClick= {()=>props.removeFromCartHandler()} >Remove Item</button>
                </div>
            </div>
            </div>
    )
}
export default Home;