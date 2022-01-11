import React, { useEffect, useState } from 'react';
import {
  Description,
  DescriptionInfoContainer,
  ReadMore
} from './DescriptionInfo.styles';

export const DescriptionInfo = (props) => {
  const [showText, setShowText] = useState(true);

  let text = `${props.text.slice(0, 251)}...`;
  if (!showText) text = props.text;
  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <DescriptionInfoContainer>
      <Description dangerouslySetInnerHTML={{ __html: text }}></Description>
      <ReadMore onClick={handleClick}>
        {showText ? 'Read more' : 'Read less'}
      </ReadMore>
    </DescriptionInfoContainer>
  );
};
