import BakersfieldImg from '../img/Bakersfield-CA.jpg';
import LosAngelesImg from '../img/Los_Angeles-CA.jpg';
import LasVegasImg from '../img/Las_Vegas-NV.jpg';
import DenverImg from '../img/Denver-CO.jpg';

export const churchLocations = [
    {
      id: 0,
      name: "COTA - Los Angeles",
      city: "Los Angeles",
      state: "California",
      address: "6408 Whittier Blvd. Los Angeles, CA 90022",
      image: LosAngelesImg,
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
        mainService: [
          {
            day: "Domingo",
            time: "6:00 PM"
          },
        ]
      }
 
];
  