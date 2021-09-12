/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BiFullscreen } from 'react-icons/bi';

function LeftColumnProductImageView({ selectedStyle, fullscreenToggle, setFullscreenToggle }) {
  let renderMainImages;

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
        handleFullscreen={handleFullscreen}
        fullscreenToggle={fullscreenToggle}
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
    // TODO: click image in fullscreen view will zoom 2.5x
    // TODO: in zoom mode, image should pan with mouse
    // TODO: mouse icon should be '-',no arrows or indicators
    // FIXME: on expanded view, thumbnails become icons
    <div className={`${fullscreenToggle ? 'col-lg-12 showFullscreen' : 'col-lg-8'}`}>
      <div id="mainImage" className="carousel slide carousel-fade bg-light" data-interval="false" data-keyboard="true">
        <div className="carousel-inner">
          {renderMainImages}
        </div>
        <button type="button" className="fullscreen-icon" onClick={handleFullscreen}>
          <BiFullscreen size="2em" />
        </button>
        <div className="carousel-indicators d-flex flex-column justify-content-start">
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
  );
}

// Helper Render Functions

function MainImages({ photoUrl, altText, idx, handleFullscreen, fullscreenToggle }) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState([]);
  function handleZoom() {
    setZoom(!zoom);
  }

  function getMouseLocation(e) {
    // need to get the mouse location on the image hover
    setPosition([Number(e.clientX), Number(e.clientY)]);
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
