import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { api_url } from "@/Auth";
import { url } from "@/Auth";
import FormDialog from "@/components/FormDialog";
import { useState } from "react";
import Link from "next/link";
import React from "react";


const SolarSystem = () => {

    return (
        <React.Fragment>

            <section class="inner-header bg-green ">
                <div class="container-fluid p-0">
                    <Image
                        alt="profile"
                        src="/assets/images/header/profile.jpg"
                        class="img-fullwidth  "
                        width={1200}
                        height={300}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div class="section-content">
                    <div class="row1">
                        <div class="col-sm-121">
                            <ol class="breadcrumb white mt-10 text-center">
                                <li>
                                    <Link href="/">
                                        <i class="fa fa-home"></i>&nbsp;
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">&nbsp;Home&nbsp;</Link> /{" "}
                                </li>
                                <li class="active">&nbsp; Products &nbsp; / </li>
                                <li class="active">&nbsp;Engineering Products &nbsp; / </li>
                                <li class="active"> &nbsp;Solar Systems &nbsp; /</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 sticky-widget ">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className='text-center mt-5 mb-4'>Solar System</h2>
                                    Tap into the sun&#39;s power and brighten the future with our cutting-edge solar solution.
                                    With dependability and efficiency, our wide range of premium solar products has been
                                    engineered to meet global demands. Our solar products comply with the strictest
                                    international standards and certifications, guaranteeing dependable, clean, effective,
                                    and sustainable solutions.
                                </div>
                                <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="listing">
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            </div>
                            <div className="container">
                            <div className="row">
                            <div className="col-md-12">
                            <h3 className="text-center mt-3">Solar street lighting system</h3>
                            </div>
                            
                            <div className="col-md-12">
                            <p className="text-justify">Solar street lighting system uses the photovoltaic technology

                            convert the sunlight into DC electricity through solar cells. to Solar street lighting system is ideal for street lighting in remote villages. The system is provided with battery storage backup sufficient to operate the light for 10-12 hours daily with lead acid bettery or lithium ferrophosphate (LiFePo,) bettery. The system is provided with automatic ON/OFF for dusk to dawn operation and overcharge / deep discharge prevention cut-off with LED indicators</p>
                            <div className="row">
                            <div className="col-md-6">
                            <ul>
                            <li>No requirement of electricity</li>
                            <li>Easy to install</li>
                            <li> Simple to operate and low maintenance cost</li>
                            </ul></div>
                            <div className="col-md-6">
                            <ul>
                            <li>Keeps the Environment Clean and Green.</li>
                            <li> AUTO Operated</li>
                            
                            </ul></div>
                            </div>
                            </div>
                           
                            <div className="col-md-6 mt-5 ">
                            <img src="/assets/images/project/solar-led-street-light.jpg" alt="" />
                            </div>
                            <div className="col-md-6 mt-5">
                            <img src="/assets/images/project/sls2.webp" alt="" />
                            </div>
                            
                            </div>
                       
                            </div>
                        
                           
                        </div>
                        <div className="col-lg-3 col-12 sticky-widget">
                            <div className="sidebar-widget">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
export default SolarSystem;
