

import { CertificateProduct } from '@/components/CertificateProduct';
import React , {useState} from 'react';
import Hero from "@/components/Hero";

const contents = [
  {
    id: 1,
    name: "DGFT",
    image: "/assets/images/certificates/dgft.jpg",
    box: [
      { src: `/assets/images/certificates/export/4.jpg` },
     
    ]
  },
  {
    id: 2,
    name: "FIEO",
    image: "/assets/images/certificates/fieo.jpg",
    box: "/assets/images/certificates/export/4.jpg",
  },
  {
    id: 3,
    name: "FSSAI",
    image: "/assets/images/certificates/fssai.png",
    box: [
      { src: `/assets/images/certificates/export/FSSAI.jpg` },
     
    ]
  },
  {
    id: 4,
    name: "UDYAM AADHAR",
    image: "/assets/images/certificates/UDYAM AADHAR.png",
    box: [
      { src: `/assets/images/certificates/export/UDYAM1.jpg` },
      { src: `/assets/images/certificates/export/UDYAM2.jpg` },
    ]
  },
  {
    id: 5,
    name: "GST",
    image: "/assets/images/certificates/logo3.jpg",
    box: [
      { src: `/assets/images/certificates/export/GST_page-0001.jpg` },
      { src: `/assets/images/certificates/export/GST_page-0002.jpg` },
      { src: `/assets/images/certificates/export/GST_page-0003.jpg` },
    ],
  },
  {
    id: 6,
    name: "SPICE BOARD",
    image: "/assets/images/certificates/spice.png",
    box: "/assets/images/certificates/export/4.jpg",
  },
  {
    id: 7,
    name: "MSME",
    image: "/assets/images/certificates/msme.png",
    box: "/assets/images/certificates/export/4.jpg",
  },
  {
    id: 8,
    name: "APEDA",
    image: "/assets/images/certificates/logo5.png",
    box: [
      { src: `/assets/images/certificates/export/RCMC.jpg` },
      { src: `/assets/images/certificates/export/RCMC2.jpg` },
    ]
  },
];

export default function App() {
  const [modalImage, setModalImage] = useState(null);

  // Function to handle image click and display modal
  const handleImageClick = (image) => {
    setModalImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <React.Fragment>
      <Hero name="Certifications" />
      <div className="App">
        {contents.map((contents) => (
          <CertificateProduct
            key={contents.id}
            image={contents.image}
            name={contents.name}
            boxImg={JSON.stringify(contents.box)}
            
          />
        ))}
      </div>
    </React.Fragment>
  );
}

