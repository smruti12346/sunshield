import React from 'react'
import Script from 'next/script';
function Popup() {
  return (
    <React.Fragment>
    <Script src="/assets/js/popup.js" />
    <div className="login-popup">
        <div className="box">
          <div className="img-area">
            <div className="img">
            </div>
            
          </div>
          <div className="form">
            <div className="close">×</div>
            <h1 className='text-center'> Get A Quote</h1>
            <p className='pop-para'>Fill up the details below, our executive will get back to you shortly!</p>
            <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" className="form-control" />
            </div>
              <div className="form-group">
                <input type="text" placeholder="Email" className="form-control" />
              </div>
              
              <div className="form-group">
                <input type="text" placeholder="Mobile Number" className="form-control" />
              </div>
              <p className='pop-para1'>Note-<span style={{color:'red'}}>*</span>Our Executive will call you to discuss your requirements.</p>
              <button type="button" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Popup