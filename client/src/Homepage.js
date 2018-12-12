import React from 'react';
import Band from './Band';
import Album from './Album';
import Navbar from './Navbar';

const getBands = () => {
    const bandArray = [
    { 
      "id": 1,
      "name": "Bloc Party",
      "members": [
          "Kele Okereke",
          "Russell Lissack",
          "Justin Harris",
          "Louise Bartle"
      ],
      "genre": "Indie Rock",
      "albums": [
          {
              "title": "Silent Alarm",
              "year": 2005,
              "tracks": 13,
              "songs": [
                  "Like Eating Glass",
                  "Helicopter",
                  "Positive Tension",
                  "Banquet",
                  "Blue Light",
                  "She's Hearing Voices",
                  "This Modern Love",
                  "Pioneers",
                  "Price of Gas",
                  "So Here We Are",
                  "Luno",
                  "Plans",
                  "Compliments"
              ]
          },
          {
              "title": "A Weekend in the City",
              "year": 2007,
              "tracks": 12,
              "songs": [
                  "Song for Clay (Disappear Here)",
                  "Hunting for Witches",
                  "Waiting for the 7.18",
                  "The Prayer",
                  "Uniform",
                  "On",
                  "Where Is Home?",
                  "Kreuzberg",
                  "I Still Remember",
                  "Flux",
                  "Sunday",
                  "SRXT"
              ]
          }
      ],
      "url": "https://open.spotify.com/artist/3MM8mtgFzaEJsqbjZBSsHJ"
    },
    {   
        "id": 2,
        "name": "Arctic Monkeys",
        "members": [
            "Alex Turner",
            "Matt Helders",
            "Jamie Cook",
            "Nick O'Malley"
        ],
        "genre": "Indie Rock",
        "albums": [
            {
                "title": "Whatever People Say I Am, That's What I'm Not",
                "year": 2005,
                "tracks": 13,
                "songs": [
                  "The View from the Afternoon",
                  "I Bet You Look Good on the Dancefloor",
                  "Fake Tales of San Francisco",
                  "Dancing Shoes",
                  "You Probably Couldn't See for the Lights But You Were Staring Straight at Me",
                  "Still Take You Home",
                  "Riot Van",
                  "Red Light Indicates Doors Are Secured",
                  "Mardy Bum",
                  "Perhaps Vampires Is a Bit Strong But...",
                  "When the Sun Goes Down",
                  "From the Ritz to the Rubble",
                  "A Certain Romance"
              ]
          },
          {
              "title": "Favourite Worst Nightmare",
              "year": 2007,
              "tracks": 12,
              "songs": [
                  "Brianstorm",
                  "Teddy Picker",
                  "D Is For Dangerous",
                  "Balaclava",
                  "Fluorescent Adolescent",
                  "Only Ones Who Know",
                  "Do Me a Favour",
                  "This House Is a Circus",
                  "If You Were There, Beware",
                  "The Bad Thing",
                  "Old Yellow Bricks",
                  "505"
              ]
          }
        ],
        "url": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
    },
    {  
      "id": 3,
      "name":"Justice",
      "members": [
          "Gaspard Augé",
          "Xavier de Rosnay"
      ],
      "genre": "French House",
      "albums": [
       {
           "title": "Cross",
           "year": 2007,
           "tracks": 12,
           "songs": [
               "Genesis",
               "Let There Be Light",
               "D.A.N.C.E.",
               "Newjack",
               "Phantom",
               "Phantom pt. II",
               "Valentine",
               "The Party",
               "DVNO",
               "Stress",
               "Waters of Nazareth",
               "One Minute To Midnight"
           ]
       },
       {
           "title": "Audio, Video, Disco",
           "year": 2011,
           "tracks": 11,
           "songs": [
               "Horsepower",
               "Civilzation",
               "Ohio",
               "Canon - Primo",
               "Canon",
               "On'n'On",
               "Brainvision",
               "Parade",
               "New Lands",
               "Helix",
               "Audio, Video, Disco"
           ]
        }
      ],
      "url": "https://open.spotify.com/artist/1gR0gsQYfi6joyO1dlp76N"
   },
   {
      "id": 4,
      "name":"Booka Shade",
      "members": [
           "Walter Merziger",
           "Arno Kammermeier"
      ],
       "genre": "Tech House",
       "albums": [
        {
          "title": "Movements",
          "year": 2006,
          "tracks": 12,
          "songs": [
              "Night Falls",
              "Body Language (Interpretation)",
              "Paper Moon",
              "The Birds And The Beats / At The Window",
              "Darko",
              "Pong Pang",
              "Mandarine Girl (Album Version)",
              "Take A Ride",
              "Wasting Time",
              "In White Rooms",
              "Hallelujah USA",
              "Lost High"
          ]
        },
        {
          "title": "More!",
          "year": 2010,
          "tracks": 11,
          "songs": [
              "Havanna Sex Dwarf",
              "Donut (Interpretation)",
              "Regenerate",
              "The Door",
              "Teenage Spaceman",
              "Divine",
              "Scaramanga",
              "L.A.tely",
              "Bad Love",
              "No Difference",
              "This Is Not The Time"
          ]
        }
      ],
      "url": "https://open.spotify.com/artist/2CKaDZ1Yo8YnWega9IeUzB"
    }
  ];
  return bandArray.map(band => {
      return(
          <div className="band-panel">
            <Band
                name={band.name}
                genre={band.genre}
                url={band.url}
            />
            <Album album={band.albums[0]} />
          </div>
      )
  })
}

const Homepage = () => {
    return(
        <div>
            <Navbar />
            {getBands()}
        </div>
    )
}

// console.log(bandArray)
export default Homepage;