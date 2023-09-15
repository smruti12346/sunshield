import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = {
  udyam: [
    { src: "/assets/images/certificates/udyam/4.jpg" }  ],
  rcmc: [{ src: "/assets/images/certificates/rcmc/4.jpg" }],
  
  export: [{ src: "/assets/images/certificates/export/4.jpg" }],
 
  
};
const name = {
  rcmc: "RCMC Certificate - APEDA",
  export: "Exporter Certificate",
  udyam: "Udyam Certificate",
 
};
const additionalImages = [
  { src: "/assets/images/certificates/dgft.jpg", name: "DGFT" },
  { src: "/assets/images/certificates/logo5.png", name: "APEDA"},
  { src: "/assets/images/certificates/fssai.png", name: "FSSAI"},
  { src: "/assets/images/certificates/UDYAM AADHAR.png",name: "UDYAM AADHAR"},
  { src: "/assets/images/certificates/logo3.jpg", name: "GST"},
  { src: "/assets/images/certificates/spice.png", name: "SPICE BOARD"},
  { src: "/assets/images/certificates/msme.png", name: "MSME"},
  { src: "/assets/images/certificates/fieo.jpg", name: "FIEO"},
  // Add more images as needed
];

const Certificates = () => {
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState(images);
  const handleOpen = (event, img) => {
    event.preventDefault();
    setOpen(true);
    setImg((prevState) => {
      return prevState[img];
    });
  };
  const handleClose = () => {
    setOpen(false);
    setImg(images);
  };
  return (
    <div>
      <Hero name="Certifications" />
      
      <section style={{background:"aliceblue"}}>
        <div className="container py-5">
          <div className="row">
            {additionalImages.map((item, index) => (
              <div className="col-md-3 mt-2" key={index}>
                <div className="card" style={{ minHeight: "auto" }}>
                  <div className="card-body" style={{ border: "2px solid green",}}>
                    <div style={{ position: "relative" , }}>
                      <Image
                        src={item.src}
                        width={500}
                        height={500}
                        alt="image"
                        className="img-fluid"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <div
                        className="image-name"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          
                          padding: "5px",
                          textAlign: "center",
                        }}
                      >
                      </div>
                      <div style={{
                        marginTop:"10px",
                         textAlign: "center", fontWeight:"800"
                        }}> <i  >{item.name}</i></div>
                       
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
// <section style={{ backgroundColor:"aliceblue" }}>
//         <div className="container py-5">
//           <div className="row">
//             {Object.keys(images).map((item, index) => (
//               <div
//                 className="col-md-4 mt-2"
//                 key={index}
//               >
//                 <div
//                   className="card"
//                   style={{ minHeight: "auto" }}
//                 >
//                   <div className="card-body">
//                     <Link
//                       href="#"
//                       onClick={(event) => handleOpen(event, `${item}`)}
//                     >
//                       <Image
//                         src={`/assets/images/certificates/${item}/4.jpg`}
//                         width={500}
//                         height={500}
//                         alt="image"
//                         className="img-fluid"
//                         style={{width: "100%" , height: "auto"}}
//                       />
//                       <h5 className="text-center mt-2">
//                         <i>{name[item]}</i>
//                       </h5>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Lightbox
//             open={open}
//             close={() => handleClose()}
//             slides={img}
//             carousel={{
//               finite: true,
//             }}
//           />
//         </div>
//       </section>