import {
  ChainIcon,
  CoinLinkContainer,
  IconContainer,
  SiteLink,
  TabsIcon
} from './LinkContainer.styles';

interface LinkContainerProps {
  urlLink: string;
  extraIcon: boolean;
}

export const LinkContainer = ({
  urlLink,
  extraIcon = false
}: LinkContainerProps) => {
  const cleanUrlString = (url: string) => {
    const checkLastString =
      url && url[url.length - 1] === '/' ? url.slice(0, -1) : url;
    return `www.${checkLastString.replace(/^https?\:\/\//i, '')}`;
  };
  return (
    <CoinLinkContainer extraIcon={extraIcon}>
      <IconContainer>
        <ChainIcon extraIcon={extraIcon} />
      </IconContainer>
      <SiteLink href={urlLink}>{cleanUrlString(urlLink)}</SiteLink>
      {extraIcon && (
        <IconContainer>
          <TabsIcon />
        </IconContainer>
      )}
    </CoinLinkContainer>
  );
};
