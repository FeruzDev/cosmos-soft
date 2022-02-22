import React from 'react';
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>

            <div className="container home-banner">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Космос вовсе не далек</h1>
                    </div>
                    <div className="col-md-4">
                        <img src="/img/logo.png" alt=""/>
                    </div>
                     <div className="col-md-4">
                        <img src="/img/sk.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;