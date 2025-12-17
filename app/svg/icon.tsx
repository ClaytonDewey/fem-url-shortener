import {
  IconFacebook,
  IconGraph,
  IconGuage,
  IconIllustration,
  IconInstagram,
  IconLogo,
  IconPens,
  IconPinterest,
  IconTwitter,
} from '.';

const Icon = ({ name }) => {
  switch (name) {
    case 'facebook':
      return <IconFacebook />;
    case 'graph':
      return <IconGraph />;
    case 'guage':
      return <IconGuage />;
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
