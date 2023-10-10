import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Link from "next/link";
import React from "react";

const images = {
  udyam: [{ src: "/assets/images/certificates/udyam/4.jpg" }],
  rcmc: [{ src: "/assets/images/certificates/rcmc/4.jpg" }],

  export: [{ src: "/assets/images/certificates/export/4.jpg" }],
};

export function CertificateProduct(props) {
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState("");
  const handleOpen = (event, image) => {
    event.preventDefault();
    setOpen(true);
    // setImg((prevState) => {
    //   return prevState[img];
    // });
    setImg(JSON.parse(image));
    const val = JSON.stringify(image);
    const new_val = JSON.parse(val);
    console.log('img', new_val[0]);
  };
  const handleClose = () => {
    setOpen(false);
    setImg(images);
  };
  return (
    <>
      <div className="productList">
        <div
          key={props.id}
          className="productCard"
        >
          <Link
            href="#"
            onClick={(event) => handleOpen(event, `${props.boxImg}`)}
          >
            <img
              src={props.image}
              alt="product-img"
              className="productImage"
            ></img>
            <div className="productCard__content">
              <h3 className="productName">{props.name}</h3>
            </div>
          </Link>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => handleClose()}
        slides={img}
        carousel={{
          finite: true,
        }}
      />
    </>
  );
}
