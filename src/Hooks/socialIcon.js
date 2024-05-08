import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Twitter from '../assets/icons/twitter.svg';
import Whatsapp from '../assets/icons/whatsapp.svg';

const useSocialIcon = (social) => {
  switch (social) {
    case 'facebook':
      return Facebook;
    case 'instagram':
      return Instagram;
    case 'linkedin':
      return Linkedin;
    case 'twitter':
      return Twitter;
    case 'whatsapp':
      return Whatsapp;
    default:
      return null;
  }
};

export default useSocialIcon;
