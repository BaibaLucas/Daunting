import sartharion from '../assets/images/obsidiansanctum.png';
import naxxramas from '../assets/images/naxxramas.png';
import malygos from '../assets/images/malygos.png';

export const data = [
  {
    "name": "Sartharion",
    "img": sartharion,
    "mode": [
      {
        "name": "10",
        "progress": "1/1",
        "clean": true,
        "bonus": "3D",
        "bclean": false
        
      },
      {
        "name": "25",
        "progress": "0/1",
        "clean": false,
        "bonus": "3D",
        "bclean": false,
        
      }
    ]  
  },
  {
    "name": "Naxxramas",
    "img": naxxramas,
    "mode": [
      {
        "name": "10",
        "progress": "15/15",
        "bonus": null,
        "clean": true
      },
      {
        "name": "25",
        "progress": "0/15",
        "bonus": null,
        "clean": false
      }
    ]  
  },
  {
    "name": "Malygos",
    "img": malygos,
    "mode": [
      {
        "name": "10",
        "progress": "1/1",
        "bonus": null,
        "clean": true
      },
      {
        "name": "25",
        "progress": "0/1",
        "bonus": null,
        "clean": false
      }
    ]  
  },
];