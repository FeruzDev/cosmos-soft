import React from 'react';

const Navbar = () => {
    return (
        <div className="main-navbar">
            <div className="container bg-black">
                <div className="row">
                    <div className="col-md-4">
                        <a href="#!">Услуги</a>
                        <a href="#!">Проекты</a>
                    </div>
                    <div className="col-md-4">
                        <img src="/img/cosmos.png" alt=""/>
                    </div>
                    <div className="col-md-4">
                        <a href="#!">О Нас</a>
                        <a href="#!">Контакты</a>
                        <a href="#!">Uz</a>
                    </div>
                </div>
                <div className="line" />
            </div>
        </div>
    );
};
export default Navbar;