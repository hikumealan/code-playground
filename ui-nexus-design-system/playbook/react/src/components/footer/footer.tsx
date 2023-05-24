import {
  NexusIcon,
  NexusFooter,
  NexusFooterBottom,
  NexusFooterContent,
  NexusFooterColumn,
  NexusFooterContentTitle,
  NexusFooterLogo
} from '@nexus/react';
import { Link } from 'react-router-dom';
import Logo from '@nexus/core/dist/assets/images/nexus-footer-logo.svg';

const FooterComponent: React.FC = () => (
  <NexusFooter class="nexus-footer-sticky">
    <NexusFooterLogo>
      <Link to="">
        <NexusIcon src={Logo} />
        <span className="nexus-visually-hidden">Home</span>
      </Link>
    </NexusFooterLogo>
    <NexusFooterColumn>
      <NexusFooterContentTitle>
        <p>title</p>
      </NexusFooterContentTitle>
      <NexusFooterContent>
        <Link to="">Amsterdam</Link>
      </NexusFooterContent>
      <NexusFooterContent>
        <Link to="">Dordrecht</Link>
      </NexusFooterContent>
    </NexusFooterColumn>
    <NexusFooterColumn>
      <NexusFooterContentTitle>
        <p>title</p>
      </NexusFooterContentTitle>
      <NexusFooterContent>
        <Link to="">Amsterdam</Link>
      </NexusFooterContent>
      <NexusFooterContent>
        <Link to="">Dordrecht</Link>
      </NexusFooterContent>
      <NexusFooterContent>
        <Link to="">Eindhoven</Link>
      </NexusFooterContent>
    </NexusFooterColumn>
    <NexusFooterBottom>
      <span>Copyright&#169; Ernst & Young, LLC. All rights reserved</span>
    </NexusFooterBottom>
  </NexusFooter>
);

export default FooterComponent;
