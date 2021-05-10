import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const News = () => {

    
    return (
        <>
            <div>
                <h1 className="container-fluid text-center">NEWS</h1>
            </div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">HUR FARLIGT ÄR DET ATT SNUSA?</h5>
                                <a href="#" className="btn btn-primary mt-2">LÄS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">NU LANSERAS FACTORY BATCH</h5>
                                <a href="#" className="btn btn-primary mt-2">LÄS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">GÖTEBORGS RAPÈ WESTCOAST IPA</h5>
                                <a href="#" className="btn btn-primary mt-2">LÄS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">SOLKLART VINNARE I SMAK TEST</h5>
                                <a href="#" className="btn btn-primary mt-2">LÄS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    );

}

export default News;