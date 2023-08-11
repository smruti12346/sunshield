import React, { useEffect,useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  first: Yup
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
export default function FormDialog(props) {
  const handleClose = () => {
    setOpen(false);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
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

      // Reset the form
      resetForm();
      setIsLoading(false); // Set loading state back to false
      handleClose();
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
  const handleClickOpen = () => {
    setOpen(true);
  };

 
  useEffect(() => {
    props.inc > 0 ? setOpen(true) : setOpen(false);
  }, [props.inc]);
 
  return (
    <div>
    <ToastContainer />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle className="mt-4">Product</DialogTitle> */}
        <DialogContent>
          <div>
            <div>
              <div class="contact-area">
                <div class="contact-title">
                  <h4>{props.name}</h4>
                </div>
                <div class="crs">
                <a role="button" tabindex="0" aria-label="Close" href="#" class="dialog-close-button dialog-lightbox-close-button" onClick={handleClose}><i class="fas fa-times"></i></a>
                </div>
                <div
                  id="respond"
                  class="comment-respond"
                >
                  <div class="add-comment">
                  <Formik
                  initialValues={{
                    first: '',
                    email: '',
                    phone: '',
                    pname:`${props.name}`,
                    yourMessage: '',
                    wpCommentCookiesConsent: false,
                    ID:" 163"
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                <Form>
                <div className="col-md-12">
                  <Field type="text" name="first" placeholder="Name" />
                  <ErrorMessage name="first" component="div" className="error" style={{color:'red'}} />
                </div>
                <div className="col-md-12">
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" className="error" style={{color:'red'}} />
                </div>
                <div className="col-md-12">
                  <Field type="text" name="phone" placeholder="Phone" />
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
                  <ErrorMessage name="yourMessage" component="div" className="error" style={{color:'red'}} />
                </div>
                <p className="comment-form-cookies-consent">
                  <Field type="checkbox" name="wpCommentCookiesConsent" />
                  <label htmlFor="wpCommentCookiesConsent">
                    Save my name, email, and website in this browser for the next time.
                  </label>
                </p>
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
        </DialogContent>
        
      </Dialog>
    </div>
  );
}










// import { useEffect, useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };
// export default function FormDialog(props) {
//  const [open, setOpen] = useState(false);

// const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
// useFormik({
//   initialValues,
//   validationSchema: signUpSchema,
//   onSubmit: (values, action) => {
//     console.log(
//       "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
//       values
//     );
//     action.resetForm();
//   },
// });
// console.log(
// "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
// errors
// );


  
//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//       >
//         {/* <DialogTitle className="mt-4">Product</DialogTitle> */}
//         <DialogContent>
//           <div>
//             <div>
//               <div class="contact-area">
//                 <div class="contact-title">
//                   <h4>{props.name}</h4>
//                 </div>
//                 <div class="crs">
//                 <a role="button" tabindex="0" aria-label="Close" href="#" class="dialog-close-button dialog-lightbox-close-button" onClick={handleClose}><i class="fas fa-times"></i></a>
//                 </div>
//                 <div
//                   id="respond"
//                   class="comment-respond"
//                 >
//                   <div class="add-comment">
                  
//                 <form
//                       action="#"
//                       method="post"
//                       id="commentform"
//                       class="comment-form row"
//                       onSubmit={handleSubmit}
                    
                      
//                     >
//                     <div className="col-md-12">
//                     <Field
//                     name="first"
//                     type="text"
//                     value={form.first}
//                     placeholder="Name"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.name && touched.name ? (
//                     <p className="form-error">{errors.name}</p>
//                   ) : null}
//                     </div>
                    
//                     <ErrorMessage name="first" component="div" className="error" />
//                     <div className="col-md-12">
//                     <Field
//                         name="email"
//                         type="text"
//                         value={form.email}
//                         placeholder="Email"
//                         onChange={handleInputChange}
//                       />
//                     </div>
                      
//                       <ErrorMessage name="email" component="div" className="error" />
//                       <div className="col-md-12">
//                       <Field
//                         name="phone"
//                         type="text"
//                         value={form.phone}
//                         placeholder="Phone"
//                         onChange={handleInputChange}
//                       />
//                       </div>
//                       <ErrorMessage name="phone" component="div" className="error" />
//                       <div className="col-md-12">
//                       <textarea
//                         id="comment-reply"
//                         value={form.comment}
//                         name="yourMessage"
//                         rows="5"
//                         placeholder="Type Here Your Comment"
//                         onChange={handleInputChange}
//                       ></textarea>
// </div>
//                       <Field
//               type="hidden"
//               name="pname"
//               value={form.pname}
             
//             />

//             <Field
//               type="hidden"
//               name="ID"
//               value={form.productId}
             
//             />
//             <div className="col-md-12">
//                       <p class="comment-form-cookies-consent">
//                       <Field
//                           id="wp-comment-cookies-consent"
//                           name="wp-comment-cookies-consent"
//                           type="checkbox"
//                           value="yes"
//                         />
                       
//                         <label for="wp-comment-cookies-consent">
//                           Save my name, email, and website in this browser for
//                           the next time.
//                         </label>
//                       </p>
//                       </div>
//                       <div className="col-md-12">
//                       <button type="submit"   onClick={handleSubmit}>
//                         <div class="custom-btn">
//                           <span>Submit</span>
//                           <i class="fas fa-angle-double-right"></i>
//                         </div>
//                       </button>
//                       </div>
//                     </form>
               
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </DialogContent>
        
//       </Dialog>
//     </div>
//   );
// }







