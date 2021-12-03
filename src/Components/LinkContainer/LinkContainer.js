import {
  ChainIcon,
  CoinLinkContainer,
  IconContainer,
  SiteLink,
  TabsIcon
} from './LinkContainer.styles';

export const LinkContainer = ({ urlLink, extraIcon = false }) => {
  const cleanUrlString = (url) => {
    const checkLastString =
      url && url[url?.length - 1] === '/' ? url?.slice(0, -1) : url;
    return checkLastString?.replace(/^https?\:\/\//i, '');
  };
  return (
    <CoinLinkContainer extraIcon={extraIcon}>
      <IconContainer>
        <ChainIcon extraIcon={extraIcon} />
      </IconContainer>
      <SiteLink href={urlLink}>{cleanUrlString(urlLink)}</SiteLink>
      {extraIcon ? (
        <IconContainer>
          <TabsIcon />
        </IconContainer>
      ) : null}
    </CoinLinkContainer>
  );
};
