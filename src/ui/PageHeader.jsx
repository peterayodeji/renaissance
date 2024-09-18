import { useScreenLessThan } from '../hooks/useScreenLessThan';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

function PageHeader() {
  const isMobile = useScreenLessThan(1024);

  return (
    <>
      {!isMobile && <DesktopHeader />}
      {isMobile && <MobileHeader />}
    </>
  );
}

export default PageHeader;
