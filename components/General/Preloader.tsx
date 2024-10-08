import styled from 'styled-components';
// import { motion, useInView } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Image from 'next/image';
import banner_img from '@/public/images/banner_img.png';
import bg from '@/public/images/best_apartment/bg.png';
import big_banner from '@/public/images/rooms/big_banner.png';
import section_two_img from '@/public/images/rooms/section_two_img.png';
import restaurant_img_1 from '@/public/images/restaurant/restaurant_img_1.png';
import restaurant_img_4 from '@/public/images/restaurant/restaurant_img_4.png';
import gsap from 'gsap';

const imageList = [
  banner_img,
  bg,
  big_banner,
  section_two_img,
  restaurant_img_1,
  restaurant_img_4,
  banner_img,
];

const Preloader = () => {
  const overlayTextOneRef = useRef(null);
  const overlayTextTwoRef = useRef(null);
  const overlayTextThreeRef = useRef(null);
  const overlayTextOneCtnRef = useRef(null);
  const overlayTextTwoCtnRef = useRef(null);
  const overlayTextThreeCtnRef = useRef(null);
  const overlayRef = useRef<HTMLDivElement | any>(null);
  const loaderRef = useRef<HTMLDivElement | any>(null);
  const imagesRef = useRef<any>([]);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(
        [
          overlayTextOneRef.current,
          overlayTextTwoRef.current,
          overlayTextThreeRef.current,
        ],
        {
          yPercent: 100,
          ease: 'power4.inOut',
          stagger: {
            amount: 0.5,
          },
          duration: 1.5,
        }
      );

      gsap.to(
        [
          overlayTextOneCtnRef.current,
          overlayTextTwoCtnRef.current,
          overlayTextThreeCtnRef.current,
        ],
        {
          duration: 1.5,
          clipPath: 'polygon(0 0,100% 0,100% 100%, 0 100%)',
          ease: 'power4.inOut',
          stagger: {
            amount: 0.5,
          },
        }
      );

      overlayRef.current.addEventListener('click', () => {
        gsap.to(
          [
            overlayTextOneRef.current,
            overlayTextTwoRef.current,
            overlayTextThreeRef.current,
          ],
          {
            yPercent: -100,
            ease: 'power4.inOut',
            stagger: {
              amount: 0.5,
            },
            duration: 1.5,
          }
        );

        gsap.to(
          [
            overlayTextOneCtnRef.current,
            overlayTextTwoCtnRef.current,
            overlayTextThreeCtnRef.current,
          ],
          {
            clipPath: 'polygon(0 85%,100% 85%,100% 100%, 0 100%)',
            ease: 'power4.inOut',
            stagger: {
              amount: 0.5,
            },
            duration: 1.5,
          }
        );

        gsap.to(overlayRef.current, {
          duration: 2,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          ease: 'power4.inOut',
        });

        gsap.to(imagesRef.current, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
          ease: 'power4.inOut',
          duration: 2,
          stagger: {
            amount: 1.5,
          },
          delay: -1.4,
        });

        gsap.to(loaderRef.current, {
          duration: 2,
          clipPath: 'polygon(0 0,100% 0, 100% 0,0 0)',
          ease: 'power4.inOut',
          delay: 0.4,
        });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <PreloaderCtn>
      <Loader ref={loaderRef}>
        {imageList.map((image, i) => (
          <ImageCtn key={i} ref={(ref) => (imagesRef.current[i] = ref)}>
            <Image src={image} alt="image" fill priority={true} />
          </ImageCtn>
        ))}
      </Loader>
      <Overlay ref={overlayRef}>
        <Col>
          <div ref={overlayTextOneCtnRef}>
            <h2 ref={overlayTextOneRef}>Empowering farmers with </h2>
          </div>
          <div ref={overlayTextTwoCtnRef}>
            <h2 ref={overlayTextTwoRef}>precision from above.</h2>
          </div>
        </Col>
        <Col>
          <div ref={overlayTextThreeCtnRef}>
            <h2 ref={overlayTextThreeRef}>
            Touch here to keep going.
            </h2>
          </div>
        </Col>
      </Overlay>
    </PreloaderCtn>
  );
};

export default Preloader;

export const PreloaderCtn = styled.div`
  font-family: var(--font-primary);
  font-size: 16px;
  overflow: hidden;
  width: 100vw;
  height: auto;
  position: fixed;
  z-index: 20;
`;

export const Loader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  z-index: 20;
  transition: clip-path 1s ease;
`;

export const ImageCtn = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 20;
  overflow: hidden; /* Add overflow hidden to hide any overflowing content */
  transition: clip-path 0.5s ease; /* Add transition for smooth animation */

  /* Initial clip-path setting to hide the image */
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 1.5s ease; /* Add transition for smooth image scaling */
    transform-origin: center; /* Set the transform origin to the center for scaling effect */
  }
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #313f38;
  color: #fcd043;
  z-index: 20;
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;

  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

export const Col = styled.div`
  width: 100%;
  div {
    margin: 0;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    font-size: 40px;
    text-transform: uppercase;
    line-height: 1;
  }

  &:last-of-type {
    display: flex;
    align-self: flex-end;
    width: 50%;
    div {
      font-size: 24px;
      h2 {
        text-align: right;
      }
      h2 span {
        color: #1b3b36;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      font-size: 20px;
    }

    &:last-of-type {
      width: 100%;
    }
  }
`;
