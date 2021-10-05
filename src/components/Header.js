import React from "react";
function Header(props){

    return(
        <div>
          
            <div className="add-to-cart">    
            <h1 >Home Component</h1>
            <div>
            <span className="add-to-cart-icon">{props.cardData.length}</span>
                <img  src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3047-thumb.png" alt="Imge not found" />
            </div>
               
            </div>
            </div>
    )
}
export default Header;