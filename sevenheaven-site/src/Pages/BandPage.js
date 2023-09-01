import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './BandPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import ImageCard from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';

function BandPage() {
  const isDesktop = isBrowser || isTablet
  const bgColor = 'rgba(0,0,0,0.5)'
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src='bg/0.jpg' alt='background' />
      </div>
      <div className='subPageContent'>
        <Header text='Die Band' fontSize={isDesktop ? '300%' : '200%'} paddingBottom='0' />
        <div className='portraits'>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Lucas Schlierf<div className='subText'>Leadgesang</div></>} img='band/Lucas.jpg'/>
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Luisa Loher<div className='subText'>Leadgesang</div></>} img='band/Luisa.jpg'/>
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Florian Döhr<div className='subText'>Leadgitarre</div></>} img='band/Florian.jpg'/>
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Leo Hellerer<div className='subText'>Rhythmusgitarre + Bass</div></>} img='band/Leo.jpg'/>
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Julian Höflmaier<div className='subText'>Bass + Gesang</div></>} img='band/Julian.jpg'/>
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Daniel Bopp<div className='subText'>Schlagzeug + Gesang</div></>} img='band/Daniel.jpg'/>
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Jakob Friederich<div className='subText'>Piano + Gesang</div></>} img='band/Jakob.jpg'/>
          </div>
        </div>
        <div style={{paddingBottom: 30}} />
        <BackToMainPage backgroundColor='darkred'/>
        <div style={{ paddingBottom: '10vh' }} />
        <PageFooter />
      </div>
    </>
  )
}

export default BandPage