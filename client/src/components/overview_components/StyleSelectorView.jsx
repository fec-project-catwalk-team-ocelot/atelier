import React from 'react';

function StyleSelectorView({ productStyles, selectedStyle }) {
  let renderStyleThumbnails;
  if (productStyles.results) {
    renderStyleThumbnails = productStyles.results.map((style, idx) => (
      <StyleThumbnails
        key={idx}
        idx={idx}
        photoUrl={style.photos[0].thumbnail_url}
        altText={style.name}
      />
    ));
  } else {
    renderStyleThumbnails = '';
  }

  return (
    <div>
      {/* Selected Style */}
      <div className="mb-2 text-uppercase">
        <span className="fw-bold">STYLE &gt; </span>
        <span className="">{selectedStyle.name}</span>
      </div>
      {/* Style Thumbnails */}
      <div id="style-thumbnails" className="d-flex flex-wrap col-lg-8">
        {renderStyleThumbnails}
      </div>
    </div>
  );
}

// Render thumbnail helper function
function StyleThumbnails({ photoUrl, altText, idx }) {
  // TODO: add functionality to change state of selected style
  // to reflect changes on main photo
  // TODO: currently selected thumbnail needs checkmark overlay
  return (
    <div className="d-block mb-4">
      <img src={photoUrl} className="" alt={altText} />
    </div>
  );
}

export default StyleSelectorView;
