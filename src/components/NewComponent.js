import React from "react";
import CartContainer from "../Containers/CartContainer";
import ApiContainer from '../Containers/ApiContainer';
import HackerNewsContainer from "../Containers/HackerNewsContainer";
import ImagesContainer from "../Containers/ImagesContainer"
import Links from "./Links";
import { Route } from "react-router-dom"
import Particleslibrary from "../components/Particleslibrary";
function NewComponent() {
    return (
        <div>
            <Links />
            <Route path="/hackernews" component={HackerNewsContainer} />
            <Route exact path="/images" component={ImagesContainer} />
            <Route exact path="/api" component={ApiContainer} />
            <Route exact path="/addtocart" component={CartContainer} />
            <Route path="/particles" component={Particleslibrary} />


        </div>
    )
}

export default NewComponent