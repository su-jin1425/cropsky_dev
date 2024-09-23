import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import Image from 'next/image';
import section_two_img from '@/public/images/rooms/section_two_img.png';
import curve from '@/public/images/rooms/Curve.svg';
import Reveal from '@/components/General/Reveal';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import RevealCover, { ImageDiv } from '@/components/General/Image-Reveal';
import useIsMobile from '@/libs/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const text = useRef<HTMLParagraphElement | null>(null);
  const imageOne = useRef<HTMLHeadingElement | null>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (isMobile) return;
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(title.current, { y: -100 }, 0);
      tl.to(text.current, { y: -70 }, 0);
      tl.to(imageOne.current, { y: -80 }, 0);
    });

    return () => context.revert();
  }, [isMobile]);

  return (
    <Wrapper ref={container}>
      <Inner>
        <Year ref={imageOne}>
          <Image src={star} alt="star" />
          <span>CropSky</span>
        </Year>
        <FlexTextCtn>
          <h2 ref={title}>
            <Reveal>
            Envisioning Our Future: A Leader in Innovation, Sustainability, and Agricultural Excellence.
            </Reveal>
          </h2>
          <p ref={text}>
            <Reveal textDelay={0.5} slideDelay={0.5}>
            Leverage advanced LiDAR technology to create high-resolution 3D maps of agricultural fields, providing comprehensive terrain analysis. These detailed maps enable smarter field planning, optimized resource management, and enhanced operational efficiency for improved agricultural outcomes.
            </Reveal>
          </p>
        </FlexTextCtn>
        <AbsoluteImage>
          <Image src={curve} alt="curve" />
        </AbsoluteImage>
        <h2>
          <Reveal textDelay={0.75} slideDelay={0.75}>
          Field Mapping & Topography Insights
          </Reveal>
        </h2>
        <div className='container'>
          <RevealCover />
          <ImageDiv>
            <Image src={section_two_img} alt="section_two_img" quality={100} />
          </ImageDiv>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.div`
  width: 100%;
  padding: 10em 0 0;
  background-color: var(--bg-color);

  @media (min-width: 200px) and (max-width: 767px) {
    padding: 5em 0 0 0;
  }

  position: relative;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2:nth-child(4) {
    color: var(--text-color-secondary, #fcd043);
    font-family: var(--font-primary);
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: capitalize;
    margin: 3em 0 2em;
  }


  .container {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    width: 95%;
    h2:nth-child(4) {
      font-size: 1.25rem;
    }

    .container {
      width: 100%;
      object-fit: cover;
      height: 26.721rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2:nth-child(4) {
      font-size: 1.25rem;
      text-transform: capitalize;
    }
  }
`;

const FlexTextCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6em;

  color: var(--text-color-primary, #fffcf6);
  h2 {
    font-weight: 400;
    font-family: var(--font-secondary);
    font-size: 3.125rem;
    line-height: 3.75rem;
    letter-spacing: 0.09375rem;
    flex: 1.7;
  }

  p {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    opacity: 0.8;
    flex: 1;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    flex-direction: column;
    gap: 2.5em;

    h2 {
      font-size: 1.875rem;
      line-height: 1.875rem;
      letter-spacing: 0.05625rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;

    h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.075rem;
      width: 60%;
      margin-right: auto;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
      width: 45%;
      margin-left: auto;
    }
  }
`;

const AbsoluteImage = styled.div`
  position: absolute;
  left: 0;
  top: 40%;
  z-index: 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 50%;
  }
`;

const Year = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #727271;
  border-radius: 99px;
  gap: 1.5em;
  padding: 0 1.5em;
  width: auto;
  margin-bottom: 5em;

  span {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-xxl);
    text-transform: capitalize;
    color: var(--text-color-primary);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    padding: 1rem;
    height: 3.125rem;
    margin-bottom: 2.5rem;
    span {
      font-size: 1rem;
    }
  }
`;
