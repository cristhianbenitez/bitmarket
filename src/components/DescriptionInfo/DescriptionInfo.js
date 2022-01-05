import {
  Description,
  DescriptionInfoContainer
} from './DescriptionInfo.styles';

export const DescriptionInfo = (props) => {
  return (
    <DescriptionInfoContainer>
      <div>
        <Description
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></Description>
      </div>
    </DescriptionInfoContainer>
  );
};
