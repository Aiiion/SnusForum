import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const SnusForum = () => {


    return (
        <>
            <div>
                <h1 className="container-fluid text-center">SNUS FORUM</h1>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src="..." alt="Card image cap" />
                            <div className="card-body">
                                <a href="#" ><h5 className="card-title">TILLVERKNING AV SNUS FÖR EGET BRUK</h5></a>
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
                                <a href="#"><h5 className="card-title">BÄSTA SNUS TIPSET!</h5></a>
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
                                <a href="#"><h5 className="card-title">TIPS PÅ HUR DU MATCHAR DITT SNUS MED MAT & DRYCK</h5></a>
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
                                <a href="#"><h5 className="card-title">TOBAKS ODLING</h5></a>
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
                                <a href="#"><h5 className="card-title">ÖVRIGT</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    );

}

export default SnusForum; 