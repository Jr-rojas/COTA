import BakersfieldImg from '../img/bakersfield-CA.jpg';
import LosAngelesImg from '../img/Los_Angeles-CA.jpg';
import LasVegasImg from '../img/Las_Vegas-NV.jpg';
import DenverImg from '../img/Denver-CO.jpg';
import FresnoImg from '../img/Fresno.jpg';
import CoachellaImg from '../img/Coachella.jpg';
import AlbuquerqueImg from '../img/Albuquerque.jpg';
import GlassboroImg from '../img/glassboro.jpeg';
import PhoenixImg from '../img/phoenix.jpg';
import RenoImg from '../img/reno.jpg';
import ThousandOaksImg from '../img/ThousandOaks.png';
import OgdenUTImg from '../img/ogden.webp';
import WaukeganILImg from '../img/waukegan.jpg';
import SacramentoImg from '../img/sacramento.jpg';
import SeattleImg from '../img/seattle_wa.jpg'
import laPastor from '../img/leadPastor.jpg'


export const CHURCHES = [
    {
      id: 0,
      name: "COTA - Los Angeles",
      city: "Los Angeles",
      state: "California",
      address: "6408 Whittier Blvd. Los Angeles, CA 90022",
      image: LosAngelesImg,
      leadPastorImg:laPastor,
      pastorName:["John Doe", "Steve Smith"],
      mainService: [
        {
          day: "Domingo",
          time: "10:00 AM"
        },
        {
            day: "Miercoles",
            time: "6:00 PM"
          }
      ]
    },
    {
        id:1,
        name: "COTA - Bakersfield",
        city: "Bakersfield",
        state: "California",
        address: "1030 Niles St. Bakersfield, CA 93305",
        image: BakersfieldImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "10:00 AM"
          },
          {
            day: "Martes",
            time: "6:00 PM"
          }
        ]
      },
      {
        id: 2,
        name: "COTA - Las Vegas",
        city: "Las Vegas",
        state: "Nevada",
        address: "15 North Mojave Rd. Las Vegas, NV 89101",
        image: LasVegasImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "12:00 AM"
          },
          {
            day: "Miercoles",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 3,
        name: "COTA - Denver",
        city: "Denver",
        state: "Colorado",
        address: "3870 Niagara St. Denver, CO 80207",
        image: DenverImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "6:00 PM"
          },
        ]
      },
      {
        id: 4,
        name: "COTA - Fresno",
        city: "Fresno",
        state: "California",
        address: "1441 E Belmont Ave. Fresno, CA  93701",
        image: FresnoImg,
        mainService: [
          {
            day: "Domingo",
            time: "10:00 AM"
          },
          {
            day: "Miercoles",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 5,
        name: "COTA - Coachella",
        city: "Coachella",
        state: "California",
        address: "53891 Amethyst Ct. Coachella, CA  92236",
        image: CoachellaImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "6:00 PM"
          },
          {
            day: "Miercoles",
            time: "8:00 PM"
          }
        ]
      },
      {
        id: 6,
        name: "COTA - Albuquerque",
        city: "Albuquerque",
        state: "New Mexico",
        address: "3717 Fourth St NW. Albuquerque, NM  87107",
        image: AlbuquerqueImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "7:00 PM"
          },
          {
            day: "Miercoles",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 7,
        name: "COTA - Glassboro NJ",
        city: "Glassboro",
        state: "New Jersey",
        address: "275 E High St. Glassboro, NJ 08028",
        image: GlassboroImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "10:00 AM"
          }
        ]
      },
      {
        id: 8,
        name: "COTA - Phoenix",
        city: "Phoenix",
        state: "Arizona",
        address: "3106 N 35th Ave Unit 1. Phoenix, AZ  85019",
        image: PhoenixImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "5:00 PM"
          }
        ]
      },
      {
        id: 9,
        name: "COTA - Reno",
        city: "Reno",
        state: "Nevada",
        address: "2660 Wrondel Way. Reno, NV  89502",
        image: RenoImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 10,
        name: "COTA - Thousand Oaks",
        city: "Thousand Oaks",
        state: "California",
        address: "TBA",
        image: ThousandOaksImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "6:00 PM"
          }
        ]
      },
      {
        id: 11,
        name: "COTA - Ogden UT",
        city: "Ogden",
        state: "Utha",
        address: "3021 Lincoln Ave. Ogden, UT 84401",
        image: OgdenUTImg,
        mainService: [
          {
            day: "Domingo",
            time: "10:00 AM"
          },
          {
            day: "Miercoles",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 12,
        name: "COTA - Waukegan IL",
        city: "Waukegan",
        state: "Illinois",
        address: "900 S Lincoln Ave. Waukegan, IL  60085",
        image: WaukeganILImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "Domingo",
            time: "11:00 AM"
          },
          {
            day: "Miercoles",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 13,
        name: "COTA - Sacramento",
        city: "Sacramento",
        state: "California",
        address: "TBA",
        image: SacramentoImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "TBA",
            time: ""
          }
        ]
      },
      {
        id: 14,
        name: "COTA - Seattle",
        city: "Seattle",
        state: "Washinton",
        address: "TBA",
        image: SeattleImg,
        leadPastorImg:laPastor,
        pastorName:["John Doe", "Steve Smith"],
        mainService: [
          {
            day: "TBA",
            time: ""
          }
        ]
      }
];