import React from "react";
import { Link } from "react-router-dom";
export default function Links() {
    return (
        <div>

            <ul>
                 <li><Link to= "/particles">Prticles js</Link></li>
                <li> <Link to="/Api">Api Component</Link></li>
                <li> <Link to="/addtocart">Add to Cart Container</Link></li>
                <li> <Link to="/hackernews">Haacker News</Link></li>
                <li> <Link to="/images" >Images</Link></li>
            </ul>
        </div>
    )
}