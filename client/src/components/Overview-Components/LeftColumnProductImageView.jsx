/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BiFullscreen } from 'react-icons/bi';

function LeftColumnProductImageView({ selectedStyle, fullscreenToggle, setFullscreenToggle }) {
  // Conditional Rendering
  let renderMainImages;
  if (selectedStyle.photos) {
    renderMainImages = selectedStyle.photos.map((photo, idx) => (
      <MainImages key={idx} idx={idx} photoUrl={photo.url} altText={selectedStyle.name} />
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

  function handleFullscreen() {
    setFullscreenToggle(!fullscreenToggle);
  }

  return (
    // TODO: add mouseover zoom for carousel
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

function MainImages({ photoUrl, altText, idx }) {
  return (
    <div className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
      <img src={photoUrl} className="d-block w-100" alt={altText} />
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
