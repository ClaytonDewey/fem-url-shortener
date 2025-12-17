import {
  IconFacebook,
  IconGauge,
  IconGraph,
  IconIllustration,
  IconInstagram,
  IconLogo,
  IconPens,
  IconPinterest,
  IconTwitter,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'facebook':
      return <IconFacebook />;
    case 'graph':
      return <IconGraph />;
    case 'gauge':
      return <IconGauge />;
    case 'illustration':
      return <IconIllustration />;
    case 'instagram':
      return <IconInstagram />;
    case 'logo':
      return <IconLogo />;
    case 'pens':
      return <IconPens />;
    case 'pinterest':
      return <IconPinterest />;
    case 'twitter':
      return <IconTwitter />;
    default:
      return <IconLogo />;
  }
};

export default Icon;
