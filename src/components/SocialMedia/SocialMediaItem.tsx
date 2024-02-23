import React from "react";

interface SocialMediaItemProps {
  image: string;
  altText: string;
  label: string;
  count: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  image,
  altText,
  label,
  count,
}) => {
  return (
    <div
      className="d-flex flex-column gap-1 align-items-center"
      style={{ minWidth: "40px" }}
    >
      <img src={image} alt={altText} height={32} />
      <p className="mb-0 social-media-label">{label}</p>
      <p className="mb-0 social-media-count">{count}</p>
    </div>
  );
};

export default SocialMediaItem;
