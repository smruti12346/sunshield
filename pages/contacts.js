import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoMail} from 'react-icons/io'
const validationSchema = Yup.object().shape({
    name1: Yup
        .string()
        .trim()
        .required('*Name is required')
        .min(3, '*Name must be at least 3 characters')
        .max(50, '*Name can be at most 50 characters'),
    email: Yup
        .string()
        .trim()
        .required('*Email is required')
        .email('*Invalid email format')
        .max(100, '*Email can be at most 100 characters'),
    phone: Yup
        .string()
        .trim()
        .required('*Mobile number is required')
        .matches(/^[0-9]+$/, '*Mobile number must contain only digits')
        .min(10, '*Mobile number must be at least 10 digits')
        .max(15, '*Mobile number can be at most 15 digits'),

    yourMessage: Yup.string()
        .trim()
        .min(5, '*Text must be at least 5 characters')
        .max(500, '*Text can be at most 500 characters'),
});




const Contact = () => {
    const backgroundImageUrl = 'url("../assets/images/banner/world.png")';
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (values, { resetForm }) => {
        try {
            setIsLoading(true); // Set loading state to true
            const response = await axios.post(
                'https://api.sunshieldexim.com/wp-json/contact-form-7/v1/contact-forms/12/feedback',
                values,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        // "Content-Type": "application/json",
                    },
                }

            );
            // Handle response if needed
            console.log('Response:', response.data);
            setIsLoading(false); // Set loading state back to false
            // Reset the form
            resetForm();

            // Display a success popup
            toast.success('Submitted Successfully', {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (error) {
            // Handle error if needed
            console.error('Error:', error);
            setIsLoading(false); // Set loading state back to false in case of error
        }
    };


    return (
        <div>
            <ToastContainer />
            <section className="inner-header bg-green">
                <div className="container-fluid p-0">
                    <Image
                        alt="profile"
                        src="/assets/images/header/profile.jpg"
                        className="img-fullwidth"
                        width={1200}
                        height={300}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>

                <div className="section-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <ol className="breadcrumb white mt-10 text-center">
                                <li>
                                    <Link href="/">
                                        <i className="fa fa-home"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">Home</Link> /{" "}
                                </li>
                                <li className="active"> Contact Us /</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us padding-tb"  style={{
                position: "relative", 
                backgroundImage: "url(/assets/images/footer/bg-image.jpg)",
                backgroundPosition: "center bottom",
                overflow: "hidden",
               
                             
                // backgroundColor: "rgba(0, 0, 0, 0.9)",
                
              }} >
                <div className="container" style={{
                    // position: "absolute",
                    // top: 0,
                    // left: 0,
                    // width: "100%",
                    // height: "100%",
                    
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                    // backgroundColor:"rgba(76,175,80,.4)",
                   
                    // backgroundColor:"rgba(139,195,74,.5)",
                    marginBottom:"30px",
                    
                  }} >
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-addres">
                                <div className="contact-title">
                                    <h4 style={{ color: "black", textAlign: "center" ,fontSize:"49px" }}>Get In Touch</h4>
                                </div>
                                <div className="contact-body">
                                    <ul>
                                    <li>
                                            <h6 style={{ color: "black", textAlign: "center",fontSize:"14px" }}>  Phone Number :9938150304</h6>

                                        </li>
                                        <li>
                                      <h6 style={{ color: "black", textAlign: "center",fontSize:"14px" }}>Email Address : <a href="#" style={{ color: "black !important", textAlign: "center" }}>info@sunshieldexim.com</a></h6>

                                        </li>
                                        <li>
                                            <h6 style={{ color: "black", textAlign: "center",fontSize:"14px" }}>Location :  Plot No:-340, 2nd floor K Mansion, Block K-5, Gautam
                                                Nagar, Opp. Near BMC Office,
                                                Bhubaneshwar-751014,Odisha</h6>

                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container"  style={{
                    marginBottom:"30px",
                    
                  }} >
                    <div className="row">
                        <div className="col-md-12">
                           
                            <h6 style={{ color: "black", textAlign: "center",fontSize:"20px",marginTop:"138px" }}>Kindly fillup your details - We will get back to you!</h6>
                        </div>
                    </div>
                </div>
               <div className="container">
               <div
                  id="respond"
                  className="comment-respond"
                >
                <div className="add-comment">
                <Formik
      initialValues={{
        name1: '',
        email: '',
        phone: '',
        yourMessage: '',
        ID:"12"
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
    <Form
                      action="#"
                      method="post"
                      id="commentform"
                    //   className="comment-form"
                    >
                    
               <div className="row">
               
                    <div className="col-md-6">
                    
                    
                    <div className="col-md-12">
                    <Field type="text" name="name1" placeholder="Name*" />
                    <ErrorMessage name="name1" component="div" className="error formErr" style={{color:'red'}} />
                    </div>
                    <div className="col-md-12">
                    <Field type="email" name="email" placeholder="Email*" />
                    <ErrorMessage name="email" component="div" className="error" style={{color:'red'}}/>
                  </div>
                  <div className="col-md-12">
                  <Field type="text" name="phone" placeholder="Phone*" />
                  <ErrorMessage name="phone" component="div" className="error" style={{color:'red'}} />
                </div>
                    
                    </div>
                    <div className="col-md-6">
                    <div className="col-md-12">
                    <Field
                    style={{marginTop:'10px'}}
                      as="textarea"
                      id="comment-reply"
                      name="yourMessage"
                      rows="6"
                      placeholder="Type Here Your Comment"
                    />
                    <ErrorMessage name="yourMessage" component="div" className="error" style={{color:'red'}}/>
                  </div>
                    
                    </div>
                    
                    <button type="submit"  disabled={isLoading} style={{margin:"0 auto", color:"red"}}>
                    <div className="custom-btn">
                    {isLoading ? (
                        <i className="fas fa-spinner fa-spin"></i> // Show loading spinner
                    ) : (
                      <React.Fragment>
                      <span>Submit</span>
                      <i className="fas fa-angle-double-right"></i>
                    </React.Fragment>
                    )}
                    </div>
                  </button>
                    
                    
                    
                    
                    
                
                
                </div>
                </Form>
    
    
    
    </Formik>
                
                
                </div>
               
               </div>
               </div>
            </section>
        </div>
    );
};

export default Contact;
