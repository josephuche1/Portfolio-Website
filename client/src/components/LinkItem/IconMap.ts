import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

export const IconMap: { [key: string]:  React.ElementType} = {
    "github.com": GitHubIcon ,
    "linkedin.com": LinkedInIcon ,
    "instagram.com": InstagramIcon ,
    "facebook.com": FacebookIcon ,
    "youtube.com": YouTubeIcon ,
    "mailto": EmailIcon ,
    "twitter.com": XIcon,
}