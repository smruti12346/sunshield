import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name1: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  yourMessage: Yup.string().required('Comment is required'),
});

const CommentForm = () => {
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
    <Formik
      initialValues={{
        name1: '',
        email: '',
        phone: '',
        yourMessage: '',
        wpCommentCookiesConsent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
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
  );
};

export default CommentForm;
