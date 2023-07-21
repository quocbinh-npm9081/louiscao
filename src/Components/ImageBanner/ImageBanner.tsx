import React from "react";

interface IImageProps {
  src: string;
  fallback: string;
  type?: string;
  alt: string;
}

const Image: React.FC<IImageProps> = ({
  src,
  fallback,
  type = "image/webp",
  alt,
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
