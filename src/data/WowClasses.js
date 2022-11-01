import shaman from '../assets/iconWow/shaman1.png';
import hunter from '../assets/iconWow/hunter1.png';
import dk from '../assets/iconWow/dk1.png';
import warlock from '../assets/iconWow/warlock1.png';
import druid from '../assets/iconWow/druid1.png';
import warrior from '../assets/iconWow/warrior1.png';
import mage from '../assets/iconWow/mage1.png';
import paladin from '../assets/iconWow/paladin1.png';
import priest from '../assets/iconWow/priest1.png';
import rogue from '../assets/iconWow/rogue1.png';
import selem from '../assets/iconWow/selem.png';
import senh from '../assets/iconWow/senh.png';
import sresto from '../assets/iconWow/sresto.png';
import hbm from '../assets/iconWow/hbm.png';
import hmm from '../assets/iconWow/hmm.png';
import hsurvival from '../assets/iconWow/hsurvival.png';
import dkblood from '../assets/iconWow/dkblood.png';
import dkfrost from '../assets/iconWow/dkfrost.png';
import dkunholy from '../assets/iconWow/dkunholy.png';
import waffli from '../assets/iconWow/waffli.png';
import wdemo from '../assets/iconWow/wdemo.png';
import wdestru from '../assets/iconWow/wdestru.png';
import dbalance from '../assets/iconWow/dbalance.png';
import dferal from '../assets/iconWow/dferal.png';
import dguardian from '../assets/iconWow/dguardian.png';
import drestoration from '../assets/iconWow/drestoration.png';
import wfury from '../assets/iconWow/wfury.png';
import warms from '../assets/iconWow/warms.png';
import wprotection from '../assets/iconWow/wprotection.png';
import marcane from '../assets/iconWow/marcane.png';
import mfire from '../assets/iconWow/mfire.png';
import mfrost from '../assets/iconWow/mfrost.png';
import pholy from '../assets/iconWow/pholy.png';
import pprotection from '../assets/iconWow/pprotection.png';
import pretribution from '../assets/iconWow/pretribution.png';
import prholy from '../assets/iconWow/prholy.png';
import prshadow from '../assets/iconWow/prshadow.png';
import prdp from '../assets/iconWow/prdp.png';
import rassa from '../assets/iconWow/rassa.png';
import rsub from '../assets/iconWow/rsub.png';
import rcombat from '../assets/iconWow/rcombat.png';

export const data = [
  {
    "name": "Shaman",
    "img": shaman,
    "spec": [
      {
        "name":"Enhancement",
        "img": senh,
        "open": "close"
      },
      {
        "name":"Elemental",
        "img": selem,
        "open": "open"
      },
      {
        "name":"Restoration",
        "img": sresto,
        "open": "open" 
      }
    ]
  },
  {
    "name": "Hunter",
    "img": hunter,
    "spec": [
      {
        "name":"Beast Master",
        "img": hbm,
        "open": "close" 
      },
      {
        "name":"Marksmanship",
        "img": hmm,
        "open": "open" 
      },
      {
        "name":"Survival",
        "img": hsurvival,
        "open": "open" 
      }
    ]
  },
  {
    "name": "Death Knight",
    "img": dk,
    "spec": [
      {
        "name":"Frost",
        "img": dkfrost,
        "open": "open" 
        },
      {
        "name":"Unholy",
        "img": dkunholy,
        "open": "open" 
      },
      {
        "name":"Blood",
        "img": dkblood,
        "open": "close" 
      }
    ]
  },
  {
    "name": "Warlock",
    "img": warlock,
    "spec": [
      {
        "name":"Affliction",
        "img": waffli,
        "open": "open" 
      },
      {
        "name":"Demonology",
        "img": wdemo,
        "open": "open" 
      },
      {
        "name":"Destruction",
        "img": wdestru,
        "open": "open" 
      }
    ]
  },
  {
    "name": "Druid",
    "img": druid,
    "spec": [
      {
        "name":"Feral",
        "img": dferal,
        "open": "open" 
      },
      {
        "name":"Guardian",
        "img": dguardian,
        "open": "close" 
      },
      {
        "name":"Balance",
        "img": dbalance,
        "open": "open" 
      },
      {
        "name":"Restoration",
        "img": drestoration,
        "open": "open" 
      }
    ]
  },
  {
    "name": "Warrior",
    "img": warrior,
    "spec": [
      {
        "name":"Arms",
        "img": warms,
        "open": "open" 
      },
      {
        "name":"Fury",
        "img": wfury,
        "open": "open" 
      },
      {
        "name":"Protection",
        "img": wprotection,
        "open": "close" 
      }
    ]
  },
  {
    "name": "Mage",
    "img": mage,
    "spec": [
      {
        "name":"Arcane",
        "img": marcane,
        "open": "open" 
      },
      {
        "name":"Fire",
        "img": mfire,
        "open": "open" 
      },
      {
        "name":"Frost",
        "img": mfrost,
        "open": "close" 
      }
    ]
  },
  {
    "name": "Paladin",
    "img": paladin,
    "spec": [
      {
        "name":"Protection",
        "img": pprotection,
        "open": "close" 
      },
      {
        "name":"Holy",
        "img": pholy,
        "open": "open" 
      },
      {
        "name":"Retribution",
        "img": pretribution,
        "open": "close" 
      }
    ]
  },
  {
    "name": "Priest",
    "img": priest,
    "spec": [
      {
        "name":"Discipline",
        "img": prdp,
        "open": "open" 
      },
      {
        "name":"Shadow",
        "img": prshadow,
        "open": "open" 
      },
      {
        "name":"Holy",
        "img": prholy,
        "open": "open" 
      }
    ]
  },
  {
    "name": "Rogue",
    "img": rogue,
    "spec": [
      {
        "name":"Assassination",
        "img": rassa,
        "open": "open" 
      },
      {
        "name":"Combat",
        "img": rcombat,
        "open": "open"
      },
      {
        "name":"Subtlety",
        "img": rsub,
        "open": "open" 
      }
    ]
  }
]