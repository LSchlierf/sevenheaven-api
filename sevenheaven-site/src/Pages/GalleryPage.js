import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './GalleryPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import ImageCard from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';
import AudioPlayer from '../Components/AudioPlayer';

function GalleryPage() {
  const isDesktop = isBrowser || isTablet
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src='bg/0.jpg' alt='background' />
      </div>
      <div className='subPageContent'>
        <Header text='Galerie' fontSize={isDesktop ? '350%' : '200%'} paddingBottom='0' />
        <Header text='Videos' fontSize={isDesktop ? '200%' : '150%'} sub paddingBottom='5vw' />
        <div className='contentContainer-3'>
          <ImageCard text={<>Major Tom<br />JuHa Neuried - März 2023</>} fontSize='medium' version='video' vid='https://www.youtube.com/embed/dQw4w9WgXcQ?si=xWIxTEDuoBNsi3nL' />
          <ImageCard text={<>Disney Medley<br />40 Jahre Westpark - Juli 2023</>} fontSize='medium' version='video' vid='https://www.youtube.com/embed/wpV-gGA4PSk?si=9QYx_u2Yh5CwOTVh' />
          <ImageCard text={<>Irgendwie, Irgendwo, Irgendwann<br />Musikalisches Weinfest - Mai 2023</>} fontSize='medium' version='video' />
          <ImageCard text={<>Alles Neu<br />40 Jahre westpark - Juli 2023</>} fontSize='medium' version='video' />
          <ImageCard text={<>Timewarp<br />Musikalisches Weinfest - Mai 2023</>} fontSize='medium' version='video' />
        </div>
        <Header text='Fotos' fontSize={isDesktop ? '200%' : '150%'} sub paddingBottom='5vw' />
        <div className='contentContainer-3'>
          <ImageCard text='40 Jahre Westpark' backgroundColor='darkred' fontSize='medium' />
          <ImageCard text='Musikalisches Weinfest 2023' backgroundColor='darkred' fontSize='medium' />
          <ImageCard text='JuHa Neuried 2023' backgroundColor='darkred' fontSize='medium' />
        </div>
        <Header text='Studio' fontSize={isDesktop ? '200%' : '150%'} sub paddingBottom='5vw' />
        <div className='audioWrapper'>
          <AudioPlayer title="Don't stop believing" src='audio/dontstopbelieving.mp3' />
        </div>
        <BackToMainPage />
        <div style={{ paddingBottom: '10vh' }} />
        <PageFooter />
      </div>
    </>
  )
}

export default GalleryPage