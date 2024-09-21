import PageTransition from '@/components/General/PageTransition';
import InitialCover from '@/components/General/Preloader';
import {
  AboutUs,
  Banner,
  BestApartment,
  Header,
  OurFacilities,
  OurGallery,
  Rooms,
} from '@/components/UI';
import Head from 'next/head';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Head>
        <title>CropSky</title>
        <meta
          name="description"
          content="CropSky, an emerging startup in the pre-incubation phase, is pioneering the future of agriculture with cutting-edge drone technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <Banner />
        <AboutUs />
        <Rooms />
        <OurFacilities />
        <BestApartment />
        <OurGallery />
      </Main>
    </>
  );
};

export default PageTransition(Home);

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--bg-color);
`;
