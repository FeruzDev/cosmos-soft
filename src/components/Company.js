import React from 'react';

const Company = () => {
    return (
        <div className="company main-background ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>О компании</h1>
                        <p>
                            Мы занимаемся созданием порталов и корпоративных сайтов, разрабатываем интернет-магазины и
                            информационные порталы, а так же проектируем индивидуальные решения, обслуживающие задачи
                            вашего бизнеса.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="rectangle">
                            <img src="/img/racet.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;