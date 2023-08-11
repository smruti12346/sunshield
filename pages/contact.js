import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validationSchema = Yup.object().shape({
  name1: Yup
  .string()
  .trim()
  .required('*Name is required')
  .min(3, '*Name must be at least 3 characters')
  .max(50, '*Name can be at most 50 characters'),
  email:Yup
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
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true); // Set loading state to true
      const response = await axios.post(
        'https://sunshield.thecbdworld.org/wp-json/contact-form-7/v1/contact-forms/163/feedback',
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

      <section className="contact-us padding-tb">
        <div className="container">
          <div className="row no-gutters section-wrapper">
            <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-sm-12">
                  <div className="main-addres">
                    <div className="contact-title">
                      <h4 style={{ color: "#fff" }}>Main Office Address</h4>
                    </div>
                    <div className="contact-body">
                      <ul>
                        <li>
                          <h6>Location :</h6>
                          <p>
                            Plot No:-340, 2nd floor K Mansion, Block K-5, Gautam
                            Nagar, Opp. Near BMC Office,
                            Bhubaneshwar-751014,Odisha
                          </p>
                        </li>
                        <li>
                          <h6>Phone Number :</h6>
                          <p>+98-985-985-98</p>
                        </li>
                        <li>
                          <h6>Email Address :</h6>
                          <a href="#">info@sunshieldexim.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-area">
                <div className="contact-title">
                  <h4>Kindly Fillup Your Details - We will get back to you!</h4>
                </div>
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
                      className="comment-form"
                    >
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
                  <div className="col-md-12">
                    <Field
                      as="textarea"
                      id="comment-reply"
                      name="yourMessage"
                      rows="9"
                      placeholder="Type Here Your Comment"
                    />
                    <ErrorMessage name="yourMessage" component="div" className="error" style={{color:'red'}}/>
                  </div>
                 
                  <button type="submit"  disabled={isLoading}>
                    <div className="custom-btn">
                    {isLoading ? (
                        <i className="fas fa-spinner fa-spin"></i> // Show loading spinner
                    ) : (
                      <React.Fragment>
                      <span>Submit Message</span>
                      <i className="fas fa-angle-double-right"></i>
                    </React.Fragment>
                    )}
                    </div>
                  </button>
                    </Form>
                  
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
