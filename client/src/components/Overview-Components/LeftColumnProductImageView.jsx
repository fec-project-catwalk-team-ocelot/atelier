/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BiFullscreen } from 'react-icons/bi';

function LeftColumnProductImageView({ selectedStyle, fullscreenToggle, setFullscreenToggle }) {
  let renderMainImages;
  const [zoom, setZoom] = useState(false);

  function handleFullscreen() {
    setFullscreenToggle(!fullscreenToggle);
  }

  if (selectedStyle.photos) {
    renderMainImages = selectedStyle.photos.map((photo, idx) => (
      <MainImages
        key={idx}
        idx={idx}
        photoUrl={photo.url}
        altText={selectedStyle.name}
        setFullscreenToggle={setFullscreenToggle}
        fullscreenToggle={fullscreenToggle}
        zoom={zoom}
        setZoom={setZoom}
      />
    ));
  } else {
    renderMainImages = '';
  }

  let renderMainThumbnails;
  if (selectedStyle.photos) {
    renderMainThumbnails = selectedStyle.photos.map((photo, idx) => (
      <MainThumbnails
        key={idx}
        idx={idx}
        photoUrl={photo.thumbnail_url}
        altText={selectedStyle.name}
      />
    ));
  } else {
    renderMainThumbnails = '';
  }

  return (
    // FIXME: on expanded view, thumbnails become icons
    <div className={`${fullscreenToggle ? 'col-lg-12 showFullscreen h-100 g-0' : 'col-lg-8'}`}>
      <div id="mainImage" className="carousel slide carousel-fade bg-light" data-bs-interval="false">
        <div id="mainImageInner" className="carousel-inner">
          {renderMainImages}
        </div>
        <button type="button" className={`fullscreen-icon ${zoom ? 'd-none' : ''}`} onClick={handleFullscreen}>
          <BiFullscreen size="2em" />
        </button>
        <div className={`${zoom ? 'd-none' : ''}`}>
          <div className="carousel-indicators d-flex flex-column justify-content-start ">
            {renderMainThumbnails}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mainImage" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainImage" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Render Functions

function MainImages(props) {
  const {
    photoUrl, altText, idx, setFullscreenToggle, fullscreenToggle, setZoom, zoom,
  } = props;

  function handleFullscreen() {
    setFullscreenToggle(!fullscreenToggle);
  }

  function handleZoom(e) {
    setZoom(!zoom);
    if (fullscreenToggle) {
      e.target.style.transform = '';
    }
  }

  function getMouseLocation(e) {
    const posX = e.clientX; // 1 - 1680
    const posY = e.clientY - 79; // 1 - 835, account for navbar size
    const winX = e.target.offsetWidth; // 1692
    const winY = e.target.offsetHeight; // 834
    const picX = e.target.naturalWidth * 2.5; // 668
    const picY = e.target.naturalHeight * 2.5; // 1002

    const renderY = ((posY / winY) - 0.5) * (picY / 2);
    const renderX = ((posX / winX) - 0.5) * (picX / 2);
    e.target.style.transform = `translate(${renderX}px, ${renderY}px) scale(2.5)`;
  }

  return (
    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
      <img
        onClick={fullscreenToggle ? handleZoom : handleFullscreen}
        src={photoUrl}
        className={`d-block w-100 ${zoom ? 'zoomed' : ''}`}
        alt={altText}
        onMouseMove={zoom ? getMouseLocation : () => {}}
      />
    </div>
  );
}

function MainThumbnails({ photoUrl, altText, idx }) {
  return (
    <img
      src={photoUrl}
      className="d-block w-100"
      alt={altText}
      data-bs-target="#mainImage"
      data-bs-slide-to={idx}
      aria-label={`Slide ${idx + 1}`}
      className={`my-3 ${idx === 0 ? 'active' : ''}`}
      aria-current={`${idx === 0 ? 'true' : ''}`}
    />
  );
}

export default LeftColumnProductImageView;
