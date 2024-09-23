import Image from 'next/image';
import about_us_img_1 from '@/public/images/about_us_img_1.png';
import about_us_img_2 from '@/public/images/about_us_img_2.png';
import about_us_img_3 from '@/public/images/about_us_img_3.png';
import about_us_label from '@/public/images/about_us_label.png';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import RevealCover, { ImageDiv } from '@/components/General/Image-Reveal';
import {
  Inner,
  LHS,
  MainImgCtn,
  Middle,
  RHS,
  SubtitleCtn,
  TitleCtn,
  Wrapper,
} from './styles';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const titleTwo = useRef<HTMLHeadingElement | null>(null);
  const imageOne = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(title.current, { y: -50 }, 0);
      tl.to(titleTwo.current, { y: -20 }, 0);
      tl.to(imageOne.current, { y: -80 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <Wrapper id="about" ref={container}>
      <Inner>
        <LHS ref={imageOne}>
          <RevealCover />
          <ImageDiv>
            <Image src={about_us_img_1} alt="about_us_img_1" quality={100} />
          </ImageDiv>
        </LHS>
        <Middle>
          <TitleCtn>
            <h1 ref={title}>ABOUT</h1>
            <h1 ref={titleTwo}>US</h1>
          </TitleCtn>
          <SubtitleCtn ref={title}>
            <h3>Cutting-edge</h3>
            <p>
            At CropSky, we’re shaping the future of agriculture through advanced drone technology. Our innovative solutions empower farmers with precise, data-driven insights, enabling informed decisions that enhance both productivity and sustainability.
            </p>
          </SubtitleCtn>
        </Middle>
        <RHS>
          <MainImgCtn ref={imageOne}>
            <Image src={about_us_label} alt="about_us_img_2" />
            <div>
              <RevealCover />
              <ImageDiv>
                <Image
                  src={about_us_img_2}
                  alt="about_us_img_2"
                  quality={100}
                />
              </ImageDiv>
            </div>
          </MainImgCtn>
          <Image src={about_us_img_3} alt="about_us_img_3" />
        </RHS>
      </Inner>
    </Wrapper>
  );
};

export default AboutUs;
