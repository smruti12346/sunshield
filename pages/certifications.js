import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = {
  roc: [{ src: "/assets/images/certificates/roc/1.jpg" }],
  rc: [{ src: "/assets/images/certificates/rc/1.jpg" }],
  osic: [{ src: "/assets/images/certificates/osic/1.jpg" }],
  udyam: [
    { src: "/assets/images/certificates/udyam/1.jpg" },
    { src: "/assets/images/certificates/udyam/2.jpg" },
  ],
  iso: [{ src: "/assets/images/certificates/iso/1.jpg" }],
};
const name = {
  roc: "REGISTRATION CERTIFICATE ROC Sunshield Energy",
  rc: "Udyog aadhar RC",
  osic: "OSIC",
  udyam: "Udyam",
  iso: "ISO Certificate",
};
const Certifications = () => {
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
      <section>
        <div className="container py-5">
          <div className="row">
            {Object.keys(images).map((item, index) => (
              <div
                className="col-md-4 mt-2"
                key={index}
              >
                <div
                  className="card"
                  style={{ minHeight: "570px" }}
                >
                  <div className="card-body">
                    <Link
                      href="#"
                      onClick={(event) => handleOpen(event, `${item}`)}
                    >
                      <Image
                        src={`/assets/images/certificates/${item}/1.jpg`}
                        width={500}
                        height={500}
                        alt="image"
                        className="img-fluid"
                      />
                      <h5 className="text-center mt-2">
                        <i>{name[item]}</i>
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Lightbox
            open={open}
            close={() => handleClose()}
            slides={img}
            carousel={{
              finite: true,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Certifications;
