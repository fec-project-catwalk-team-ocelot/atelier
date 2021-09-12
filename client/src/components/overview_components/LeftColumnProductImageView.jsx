import React from 'react';

function LeftColumnProductImageView(props) {
  const { selectedStyle } = props;

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

  return (
    <div className="col-lg-8">
      <div id="mainImageIndicators" className="carousel slide carousel-fade bg-light" data-bs-ride="carousel" data-interval="5000">
        <div className="carousel-inner">
        {/* TODO: implement expanded view and collapsed view */}
        {/* TODO: add a zoom feature on photos */}
          {renderMainImages}
        </div>
        <div className="carousel-indicators d-inline-flex flex-column mb-1">
          {renderMainThumbnails}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainImageIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainImageIndicators" data-bs-slide="next">
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
      data-bs-target="#mainImageIndicators"
      data-bs-slide-to={idx}
      aria-label={`Slide ${idx + 1}`}
      className={`my-3 ${idx === 0 ? 'active' : ''}`}
      aria-current={`${idx === 0 ? 'true' : ''}`}
    />
  );
}

export default LeftColumnProductImageView;
