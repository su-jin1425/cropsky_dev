import Image from 'next/image';
import line from '@/public/images/best_apartment/line.png';
import Reveal from '@/components/General/Reveal';
import { Inner, Wrapper } from './styles';

const BestApartment = () => {
  return (
    <Wrapper>
      <Inner>
        <Reveal>
          <h1 onClick={() => window.open('https://example.com', '_blank')} >
          Extended <br /> Support
          </h1>
        </Reveal>
        <Reveal textDelay={0.5} slideDelay={0.5}>
          <p onClick={() => window.open('https://example.com', '_blank')}>
          Discover our Extended Support services. Click here to explore more.
          </p>
        </Reveal>
        <Image onClick={() => window.open('https://example.com', '_blank')} src={line} alt="line" />
      </Inner>
    </Wrapper>
  );
};

export default BestApartment;

