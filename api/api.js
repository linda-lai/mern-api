// DEPENDENCIES
const express = require('express') // returns a function
const Joi = require('joi'); // returns a class

// APP AND ENVIRONMENT VARIABLES
const app = express()
const port = process.env.PORT || 5000 ;

// 'DATABASE'
const bandsList =
[
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
]

// MIDDLEWARE required to get access the body of an HTTP request
app.use(express.json());

// GET REQUESTS
app.get('/', (req, res) => {
  return res.send('Hello world! Welcome to the  API');
});

app.get('/bands', (req, res) => {
  return res.send(bandsList);
});

app.get('/bands/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params
  const band = bandsList.find(band => band.id === parseInt(id));
  if (!band) {
    // 200 - success, 300 - redirect, 400 - client error, 500 - server error
    res.status(404).send('Band not found!')
  }
  return res.send(band);
});

// POST REQUESTS
app.post('/bands', (req, res) => {
  const { id, name, members, genre, albums, url } = req.body;
  const band = { id, name, members, genre, albums, url };

  const { error } = validateBand(req.body)

  if (error) return res.status(400).send(error.details[0].message);

  const newBand = {
    id: req.body.id,
    name: req.body.name,
    members: band.members = req.body.members,
    genre: band.genre = req.body.genre,
    albums: band.albums = req.body.albums,
    url: band.url = req.body.url
  }

  bandsList.push(newBand);
  return res.send(newBand);
});

// PUT REQUESTS
app.put('/bands/:id', (req, res) => {
  const { id } = req.params
  const band = bandsList.find(band => band.id === parseInt(id));
  if (!band) {
    res.status(404).send('Band not found!')
  }
  const { error } = validateBand(req.body);
  if (error) return res.send(400).send(error.details[0].message);

  // const updateBand = {
  //   id: req.body.id,
  //   name: req.body.name,
  //   members: band.members = req.body.members,
  //   genre: band.genre = req.body.genre,
  //   albums: band.albums = req.body.albums,
  //   url: band.url = req.body.url
  // }

  const updateId = req.body.id;
  band.id = updateId;
  const updateName = req.body.name;
  band.name = updateName;
  const updateMembers = req.body.members;
  band.members = updateMembers
  const updateGenre = req.body.genre;
  band.genre = updateGenre;
  const updateAlbums = req.body.albums;
  band.albums = updateAlbums
  const updateUrl = req.body.url;
  band.url = updateUrl;

  res.send(band);

});

// DELETE REQUESTS
app.delete('/bands/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const band = bandsList.find(band => band.id === id);
  if (!band) {
    return res.status(404).send('Band not found!')
  }
  const index = bandsList.indexOf(band);
  bandsList.splice(index, 1);
  return res.send(bandsList)
});

// VALIDATION
function validateBand(band) {
  const schema = {
    id: Joi.number().required(),
    name: Joi.string().min(2).required(),
    members: Joi.array().required(),
    genre: Joi.string().required(),
    albums: Joi.array().required(),
    url: Joi.string().required()
  };
  return Joi.validate(band, schema);
}

// PORT
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})