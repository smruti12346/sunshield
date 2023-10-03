import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';

function Popup() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  useEffect(() => {
    const loginPopup = document.querySelector(".login-popup");
    const close = document.querySelector(".close");

    function showPopup() {
      const timeLimit = 2; // seconds
      let i = 0;
      const timer = setInterval(function () {
        i++;
        if (i === timeLimit) {
          clearInterval(timer);
          loginPopup.classList.add("show");
        }
      }, 1000);
    }

    window.addEventListener("load", function () {
      showPopup();
    });

    close.addEventListener("click", function () {
      loginPopup.classList.remove("show");
    });

    return () => {
      window.removeEventListener("load", showPopup);
      close.removeEventListener("click", () => {});
    };
  }, []);

  const initialValues = {
    name1: '',
    email: '',
    phone: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true); // Set loading state to true

      const response = await axios.post(
        'https://api.sunshieldexim.com/wp-json/contact-form-7/v1/contact-forms/922/feedback',
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log('API response:', response);

      resetForm();
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
        setIsLoading(false); // Set loading state to false after success
        const loginPopup = document.querySelector(".login-popup");
        if (loginPopup) {
          loginPopup.classList.remove("show");
        }
      }, 2000);
    } catch (error) {
      console.error('API error:', error);
      setIsLoading(false); // Set loading state to false in case of an error
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name1) {
      errors.name1 = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    }

    return errors;
  };

  return (
    <div className="login-popup">
      <div className="box">
        <div className="img-area">
          <div className="img"></div>
        </div>
        <div className="form">
          <div className="close">×</div>
          <h1 className="text-center">Get A Quote</h1>
          <p className="pop-para">
            Fill up the details below, our executive will get back to you
            shortly!
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            <Form method="post">
              <div className="form-group">
                <Field
                  type="text"
                  name="name1"
                  placeholder="Full Name"
                  className="form-control"
                />
                <ErrorMessage name="name1" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  className="form-control"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error"
                />
              </div>
              <p className="pop-para1">
                Note-<span style={{ color: 'red' }}>*</span>Our Executive will
                call you to discuss your requirements.
              </p>
              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          </Formik>
          {showSuccessMessage && (
            <div className="success-message" style={{color:"green"}}>Sent successfully</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
