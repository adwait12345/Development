// Import Libraries
import React from "react";
import "./Skeleton.css";

// Main function
///////////////////////////////////////////////////////////////
/////// This component is used while loading content//////////
/////////////////////////////////////////////////////////////
export default function SkeletonInfo() {
  return (
    <>
      <h3 className="card__header header__title" id="card-title">
        <div className="skeleton skeleton-text skeleton-text__img"></div>
      </h3>
    </>
  );
}
////////////////////////////////////////////////////////////