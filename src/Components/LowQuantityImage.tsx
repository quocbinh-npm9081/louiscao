import React from "react";

interface ILowQualityImageProps {
  lowQualityImage: string;
  imageDetails: {
    width: number;
    height: string | number;
  };
}
const LowQuantityImage: React.FC<ILowQualityImageProps> = ({
  lowQualityImage,
  imageDetails,
}) => {
  return (
    <img
      width={imageDetails.width}
      height={imageDetails.height}
      src={`${lowQualityImage}`}
      alt="Image"
    />
  );
};

export default LowQuantityImage;
