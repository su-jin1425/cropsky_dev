import PageTransition from '@/components/General/Page-Transition';
import { Header, RoomBanner, SectionThree, SectionTwo } from '@/components/UI';

const Mission = () => {
  return (
    <div>
      <Header />
      <RoomBanner />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default PageTransition(Mission);
