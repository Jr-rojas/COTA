
const CHURCHES = [
    {
      id: 0,
      churchName: "COTA-Los-Angeles",
      city: "Los Angeles",
      state: "California",
      address: "6408 Whittier Blvd. Los Angeles, CA 90022",
      image: "cota-los-angeles.jpg",
      leadPastor: {
        name: ["Erasmo", "Elvira Solis"], 
        image: "PastorErasmo.jpg"
      },
      coPastor: {
        name: ["Noe", "Aloina Perez"], 
        image: "PastorNoe.jpeg"
      },
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
        churchName: "COTA-Bakersfield",
        city: "Bakersfield",
        state: "California",
        address: "1030 Niles St. Bakersfield, CA 93305",
        image: "cota-bakersfield.jpg",
        leadPastor: {
          name: ["Joran", "Elizabeth Ortega"], 
          image: "PastorJoran.jpeg"
        },
        coPastor: {
          name: ["Ociel", "Kenia Ortega"], 
          image:"PastorOciel.jpg"
        },
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
        churchName: "COTA-Las-Vegas",
        city: "Las Vegas",
        state: "Nevada",
        address: "15 North Mojave Rd. Las Vegas, NV 89101",
        image: "cota-las-vegas.jpg",
        leadPastor: {
          name: ["Samuel", "Elizabeth De La Rosa"], 
          image: "PastorSamuel.jpeg"
        },
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
        churchName: "COTA-Denver",
        city: "Denver",
        state: "Colorado",
        address: "3870 Niagara St. Denver, CO 80207",
        image: "cota-denver.jpg",
        leadPastor: {
          name: ["Gerardo", "Edith Ortega"], 
          image: "PastorGerardo.jpeg"
        },
        mainService: [
          {
            day: "Domingo",
            time: "6:00 PM"
          },
        ]
      },
      {
        id: 4,
        churchName: "COTA-Fresno",
        city: "Fresno",
        state: "California",
        address: "1441 E Belmont Ave. Fresno, CA  93701",
        image: "cota-fresno.jpg",
        leadPastor: {
          name: ["Porfirio", "Sarah Dominguez"], 
          image: "PastorPorfirio.jpeg"
        },
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
        churchName: "COTA-Coachella",
        city: "Coachella",
        state: "California",
        address: "53891 Amethyst Ct. Coachella, CA  92236",
        image: "cota-coachella.jpg",
        leadPastor: {
          name: ["Werclyn", "Oralia Aguilar"], 
          image: "PastorWerclyn.jpeg"
        },
        coPastor: {
          name: ["Werclyn Jr. Aguilar"], 
          image:"PastorWerclynJr.jpeg"
        },
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
        churchName: "COTA-Albuquerque",
        city: "Albuquerque",
        state: "New Mexico",
        address: "3717 Fourth St NW. Albuquerque, NM  87107",
        image: "cota-Albuquerque.jpg",
        leadPastor: {
          name: ["Leoncio", "Aracely Solis"], 
          image: "PastorLeoncio.jpg"
        },
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
        churchName: "COTA-Glassboro-NJ",
        city: "Glassboro",
        state: "New Jersey",
        address: "275 E High St. Glassboro, NJ 08028",
        image: "cota-glassboro.jpeg",
        leadPastor: {
          name: ["Fidel Solis"], 
          image: "PastorFidelJr.jpeg"
        },
        mainService: [
          {
            day: "Domingo",
            time: "11:00 AM"
          }
        ]
      },
      {
        id: 8,
        churchName: "COTA-Phoenix",
        city: "Phoenix",
        state: "Arizona",
        address: "3106 N 35th Ave Unit 1. Phoenix, AZ  85019",
        image: "cota-phoenix.jpg",
        leadPastor: {
          name: ["Fidel", "Karina Solis"], 
          image: "PastorFidel.jpeg"
        },
        mainService: [
          {
            day: "Domingo",
            time: "5:00 PM"
          }
        ]
      },
      {
        id: 9,
        churchName: "COTA-Reno",
        city: "Reno",
        state: "Nevada",
        address: "2660 Wrondel Way. Reno, NV  89502",
        image: "cota-reno.jpg",
        leadPastor: {
          name: ["Eliel", "Delfina Solis"], 
          image: "PastorEliel.jpeg"
        },
        mainService: [
          {
            day: "Domingo",
            time: "7:00 PM"
          }
        ]
      },
      {
        id: 10,
        churchName: "COTA-Thousand-Oaks",
        city: "Thousand Oaks",
        state: "California",
        address: "TBA",
        image: "cota-thousand-oaks.png",
        leadPastor: {
          name: ["Agustin Espindola"], 
          image: "PastorAgustin.jpeg"
        },
        mainService: [
          {
            day: "Domingo",
            time: "6:00 PM"
          }
        ]
      },
      {
        id: 11,
        churchName: "COTA-Ogden-UT",
        city: "Ogden",
        state: "Utha",
        address: "3021 Lincoln Ave. Ogden, UT 84401",
        image: "cota-ogden.webp",
        leadPastor: {
          name: ["Alvaro Rojas"], 
          image: "PastorAlvaro.jpeg"
        },
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
        churchName: "COTA-Waukegan-IL",
        city: "Waukegan",
        state: "Illinois",
        address: "900 S Lincoln Ave. Waukegan, IL  60085",
        image: "cota-waukegan.jpg",
        leadPastor: {
          name: ["Rodolfo", "Becky Alvarez"], 
          image: "PastorRodolfo.jpeg"
        },
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
        churchName: "COTA-Sacramento",
        city: "Sacramento",
        state: "California",
        address: "TBA",
        image: "cota-sacramento.jpg",
        leadPastor: {
          name: ["Meliton", "Lizbeth Perez"], 
          image: "PastorMeliton.jpeg"
        },
        mainService: [
          {
            day: "TBA",
            time: ""
          }
        ]
      },
      {
        id: 14,
        churchName: "COTA-Seattle",
        city: "Seattle",
        state: "Washinton",
        address: "TBA",
        image: "cota-seattle.jpg",
        leadPastor: {
          name: ["Jersain", "Angeles Rojas"], 
          image: "PastorJersain.jpeg"
        },
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
      }
];

export default CHURCHES