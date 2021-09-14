/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BiFullscreen } from 'react-icons/bi';
import RenderMainImages from './RenderMainImages.jsx';

function LeftColumnProductImageView({ selectedStyle, fullscreenToggle, setFullscreenToggle }) {
  let renderMainImages;
  const [zoom, setZoom] = useState(false);

  function handleFullscreen() {
    setFullscreenToggle(!fullscreenToggle);
  }

  if (selectedStyle.photos) {
    renderMainImages = selectedStyle.photos.map((photo, idx) => (
      <RenderMainImages
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

  let renderMainIndicators;
  if (selectedStyle.photos) {
    renderMainIndicators = selectedStyle.photos.map((photo, idx) => (
      <MainIndicators
        key={idx}
        idx={idx}
      />
    ));
  } else {
    renderMainIndicators = '';
  }

  return (
    <div className={`${fullscreenToggle ? 'col-lg-12 showFullscreen h-100 g-0' : 'col-lg-8'}`}>
      <div id="mainImage" className="carousel slide carousel-fade bg-light" data-bs-interval="false">
        <div id="mainImageInner" className="carousel-inner">
          {renderMainImages}
        </div>
        <button type="button" className={`fullscreen-icon ${zoom ? 'd-none' : ''}`} onClick={handleFullscreen}>
          <BiFullscreen size="2em" />
        </button>
        <div className={`${zoom ? 'd-none' : ''}`}>
          <div className={`carousel-indicators ${fullscreenToggle ? 'fullscreenView' : 'normalView d-flex flex-column justify-content-start'}`}>
            {fullscreenToggle ? renderMainIndicators : renderMainThumbnails}
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

function MainIndicators({ photoUrl, altText, idx }) {
  return (
    <button
      type="button"
      data-bs-target="#mainImage"
      data-bs-slide-to={idx}
      className={`my-3 ${idx === 0 ? 'active' : ''}`}
      aria-current={`${idx === 0 ? 'true' : ''}`}
    />
  );
}

export default LeftColumnProductImageView;
