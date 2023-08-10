import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name1: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  yourMessage: Yup.string().required('Comment is required'),
});



const Contact = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
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

      // Reset the form
      resetForm();
    } catch (error) {
      // Handle error if needed
      console.error('Error:', error);
    }
  };

 
  return (
    <div>
      <section class="inner-header bg-green">
        <div class="container-fluid p-0">
          <Image
          alt="profile"
            src="/assets/images/header/profile.jpg"
            class="img-fullwidth"
            width={1200}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div class="section-content">
          <div class="row">
            <div class="col-sm-12">
              <ol class="breadcrumb white mt-10 text-center">
                <li>
                  <Link href="/">
                    <i class="fa fa-home"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">Home</Link> /{" "}
                </li>
                <li class="active"> Contact Us /</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us padding-tb">
        <div class="container">
          <div class="row no-gutters section-wrapper">
            <div class="col-lg-4">
              <div class="row no-gutters">
                <div class="col-sm-12">
                  <div class="main-addres">
                    <div class="contact-title">
                      <h4 style={{ color: "#fff" }}>Main Office Address</h4>
                    </div>
                    <div class="contact-body">
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
            <div class="col-lg-8">
              <div class="contact-area">
                <div class="contact-title">
                  <h4>Send Us a Message</h4>
                </div>
                <div
                  id="respond"
                  class="comment-respond"
                >
                  <div class="add-comment">
                  <Formik
      initialValues={{
        name1: '',
        email: '',
        phone: '',
        yourMessage: '',
        wpCommentCookiesConsent: false,
        ID:"12"
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
                
                    <Form
                      action="#"
                      method="post"
                      id="commentform"
                      class="comment-form"
                    >
                    <div className="col-md-12">
                    <Field type="text" name="name1" placeholder="Name" />
                    <ErrorMessage name="name1" component="div" className="error" />
                    </div>
                    <div className="col-md-12">
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                  <div className="col-md-12">
                    <Field type="text" name="phone" placeholder="Phone" />
                    <ErrorMessage name="phone" component="div" className="error" />
                  </div>
                  <div className="col-md-12">
                    <Field
                      as="textarea"
                      id="comment-reply"
                      name="yourMessage"
                      rows="9"
                      placeholder="Type Here Your Comment"
                    />
                    <ErrorMessage name="yourMessage" component="div" className="error" />
                  </div>
                  <p className="comment-form-cookies-consent">
                    <Field type="checkbox" name="wpCommentCookiesConsent" />
                    <label htmlFor="wpCommentCookiesConsent">
                      Save my name, email, and website in this browser for the next time.
                    </label>
                  </p>
                  <button type="submit">
                    <div className="custom-btn">
                      <span>Submit Message</span>
                      <i className="fas fa-angle-double-right"></i>
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
