import React, { CSSProperties } from 'react';
import Img from 'gatsby-image';

interface CompatibleImgProps {
  alt?: string;
  childImageSharp?: any;
  image: any;
  imageStyle?: CSSProperties;
}

export const CompatibleImg: React.FC<CompatibleImgProps> = ({ alt = '', childImageSharp, image, imageStyle }) => {

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid}  alt={alt} loading="eager" />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}