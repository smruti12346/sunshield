// components/ImageModal.js
import React from 'react';

const ImageModal = ({ isOpen, onClose, imageSrc, imageName }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal">
      <div className="image-modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={imageSrc} alt={imageName} />
      </div>
    </div>
  );
};

export default ImageModal;
