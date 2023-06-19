import React from 'react'

function Topnav() {
  return (
    <>
        {/* header section start */}
    <div className="box-header">
        <header className="header-section style-2 d-xl-block d-none">
            <div className="header-top">
                <div className="top">
                    <ul className="left">
                        <li>
                            <i className="far fa-clock" />
                             Sun-Fri: 9am-6pm Saterday Closed 
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt" />
                            60/A Soft Road 24th Street, NY 1200
                        </li>
                        <li>
                            <i className="fas fa-headset" />
                            Support@adminenvishare.com
                        </li>
                     </ul>
                    <ul className="right">
                        <li>
                            <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                         <li>
                            <a href="#"><i className="fab fa-facebook" /></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    </div>
      {/* header section ending */}

    </>
  )
}

export default Topnav
