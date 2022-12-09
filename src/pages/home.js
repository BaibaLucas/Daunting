import React from 'react';

import Section from '../components/Section';

import DauntingEyes from '../assets/images/dauntingtlk2.png'
import Guild from '../assets/images/sartha3D.png';
import Ulduar from '../assets/images/ulduar.jpg';


const Home = () => {

  return (
    <div className='home'>
      <Section 
        section={
          {
            title:"daunting",
            subtitle:"EU-Sulfuron PVP",
            image:DauntingEyes,
            size: "60%",
            maxWidth: "1000px"
          } 
        }
        subSection={
          {
            title: "Phase 1 CLEAN",
            image: Guild,
            size: "40%"
          }
        }
        />
        <Section 
        section={
          {
            title:"Daunting recrutement",
            content:"La guilde Daunting est une communauté de joueurs semi-HC axée sur la collaboration et le partage. Nous cherchons à offrir une expérience positive à chaque membre et nous nous efforçons de construire un environnement amical et inclusif. Nous sommes déterminés à atteindre des objectifs ambitieux tout en offrant des directives et des conseils à nos membres. Nous recherchons des joueurs motivés qui sont prêts à s’engager et à contribuer à notre communauté. Nous offrons des raids réguliers ainsi que des activités sociales. Nous recherchons des joueurs qui cherchent à partager leurs connaissances et leurs expériences avec les autres, ainsi qu’à apprendre de leurs pairs.",
            image: Ulduar,
            size: "100%",

          } 
        }
        />
    </div>
  )

};

export default Home;