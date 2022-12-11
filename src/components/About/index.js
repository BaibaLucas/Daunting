import React from 'react';

import eyes from '../../assets/images/dauntingtlk2.png';



const About = () => {

  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__container__title'>
          <h1>about us</h1>
        </div>
        <div className='about__container__illustration'>
          <img className='about__container__illustration__Img' alt="eyes illustration" src={eyes} />
        </div>
        <div className='about__container__desc'>
          <div className='about__container__desc_p'>
            Daunting est une guilde semi-hardcore fondée par des joueurs de World Of Warcraft courant 2022.
          </div>
          <div className='about__container__desc_p'>
            Nous sommes présent sur le serveur Sulfuron(Eu) côté Horde, nous avons pour objectif de clean le contenu proposé par Blizzard lors de l'extension Wotlk Classic.
          </div>
          <div className='about__container__desc_p'>
            Pour ce faire, nous avons décidé de créer un roster 25 joueurs afin de braver les défis proposés lors de cette aventure Wotlk Classic.
          </div>
          <div className='about__container__desc_p'>
            Actuellement nous sommes orientés PVE cependant nous ne sommes pas fermés vers une eventuelle orientation PvP.
          </div>
          <div className='about__container__desc_p'>
            Nous recherchons actuellement des membres désirant s'investir et s'intégrer au sein de notre guilde pour agrandir notre famille. Que vous ayez envie de rejoindre notre roster PvE, intégrer une futur équipe PvP ou encore jouer avec vos amis, alors vous êtes les bienvenues.
          </div>
        </div>
      </div>
      <div className="about__footer">
          Copyright © Daunting. All right reserved.
      </div>
    </div>
  )

};


export default About;