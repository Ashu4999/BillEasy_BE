const axios = require('axios');

const apiEndpoint = 'http://localhost:7000/user'; // Replace with your API endpoint

// Example data to send in each request
const dataList = [
    {
        "name": "Monti Gummory",
        "email": "mgummory0@geocities.jp",
        "password": "Test@123"
    },
    {
        "name": "Mariya Rubinowicz",
        "email": "mrubinowicz1@redcross.org",
        "password": "Test@123"
    },
    {
        "name": "Gareth Skune",
        "email": "gskune2@sohu.com",
        "password": "Test@123"
    },
    {
        "name": "Saree Bishell",
        "email": "sbishell3@odnoklassniki.ru",
        "password": "Test@123"
    },
    {
        "name": "Hayley Lude",
        "email": "hlude4@w3.org",
        "password": "Test@123"
    },
    {
        "name": "Jasper Jolliffe",
        "email": "jjolliffe5@netvibes.com",
        "password": "Test@123"
    },
    {
        "name": "Richardo Turnock",
        "email": "rturnock6@wikipedia.org",
        "password": "Test@123"
    },
    {
        "name": "Jens Tamlett",
        "email": "jtamlett7@statcounter.com",
        "password": "Test@123"
    },
    {
        "name": "Gertrudis Kernes",
        "email": "gkernes8@bizjournals.com",
        "password": "Test@123"
    },
    {
        "name": "Kelvin Barstow",
        "email": "kbarstow9@shareasale.com",
        "password": "Test@123"
    },
    {
        "name": "Marcello Brockelsby",
        "email": "mbrockelsbya@wisc.edu",
        "password": "Test@123"
    },
    {
        "name": "Joyous Welfare",
        "email": "jwelfareb@bloglovin.com",
        "password": "Test@123"
    },
    {
        "name": "Niko Skudder",
        "email": "nskudderc@ed.gov",
        "password": "Test@123"
    },
    {
        "name": "Madeline Grishankov",
        "email": "mgrishankovd@parallels.com",
        "password": "Test@123"
    },
    {
        "name": "Newton Kwietek",
        "email": "nkwieteke@dropbox.com",
        "password": "Test@123"
    },
    {
        "name": "Mariya Abercromby",
        "email": "mabercrombyf@artisteer.com",
        "password": "Test@123"
    },
    {
        "name": "Noah Preston",
        "email": "nprestong@seattletimes.com",
        "password": "Test@123"
    },
    {
        "name": "Hilda Liffey",
        "email": "hliffeyh@cam.ac.uk",
        "password": "Test@123"
    },
    {
        "name": "Liza Jaumet",
        "email": "ljaumeti@moonfruit.com",
        "password": "Test@123"
    },
    {
        "name": "Dukey Englishby",
        "email": "denglishbyj@homestead.com",
        "password": "Test@123"
    },
    {
        "name": "Arlena Crossdale",
        "email": "acrossdalek@amazon.co.jp",
        "password": "Test@123"
    },
    {
        "name": "Leticia Daintith",
        "email": "ldaintithl@istockphoto.com",
        "password": "Test@123"
    },
    {
        "name": "Theo Guidera",
        "email": "tguideram@pinterest.com",
        "password": "Test@123"
    },
    {
        "name": "Moss Allison",
        "email": "mallisonn@microsoft.com",
        "password": "Test@123"
    },
    {
        "name": "Briana Delgua",
        "email": "bdelguao@weebly.com",
        "password": "Test@123"
    },
    {
        "name": "Leshia Hadingham",
        "email": "lhadinghamp@csmonitor.com",
        "password": "Test@123"
    },
    {
        "name": "Winni Cramond",
        "email": "wcramondq@senate.gov",
        "password": "Test@123"
    },
    {
        "name": "Flin Thomke",
        "email": "fthomker@bloomberg.com",
        "password": "Test@123"
    },
    {
        "name": "Reiko Londors",
        "email": "rlondorss@apache.org",
        "password": "Test@123"
    },
    {
        "name": "Stirling Andrzejowski",
        "email": "sandrzejowskit@live.com",
        "password": "Test@123"
    },
    {
        "name": "Randi Baccas",
        "email": "rbaccasu@sciencedirect.com",
        "password": "Test@123"
    },
    {
        "name": "Allix Myton",
        "email": "amytonv@nasa.gov",
        "password": "Test@123"
    },
    {
        "name": "Jarred Flute",
        "email": "jflutew@usnews.com",
        "password": "Test@123"
    },
    {
        "name": "Gherardo Middlehurst",
        "email": "gmiddlehurstx@hhs.gov",
        "password": "Test@123"
    },
    {
        "name": "Erinn Stormonth",
        "email": "estormonthy@loc.gov",
        "password": "Test@123"
    },
    {
        "name": "Zilvia Marden",
        "email": "zmardenz@yahoo.com",
        "password": "Test@123"
    },
    {
        "name": "Oates Ord",
        "email": "oord10@wp.com",
        "password": "Test@123"
    },
    {
        "name": "Forbes Malin",
        "email": "fmalin11@about.me",
        "password": "Test@123"
    },
    {
        "name": "Rhetta Sheilds",
        "email": "rsheilds12@mapy.cz",
        "password": "Test@123"
    },
    {
        "name": "Rosina Wiltshear",
        "email": "rwiltshear13@bbc.co.uk",
        "password": "Test@123"
    },
    {
        "name": "Lazare Piller",
        "email": "lpiller14@biblegateway.com",
        "password": "Test@123"
    },
    {
        "name": "Lanni Paulus",
        "email": "lpaulus15@newyorker.com",
        "password": "Test@123"
    },
    {
        "name": "Casey Flippelli",
        "email": "cflippelli16@eepurl.com",
        "password": "Test@123"
    },
    {
        "name": "Candi Colles",
        "email": "ccolles17@china.com.cn",
        "password": "Test@123"
    },
    {
        "name": "Sauncho Hyndes",
        "email": "shyndes18@w3.org",
        "password": "Test@123"
    },
    {
        "name": "Annadiane Liven",
        "email": "aliven19@pen.io",
        "password": "Test@123"
    },
    {
        "name": "Lenette Fratson",
        "email": "lfratson1a@naver.com",
        "password": "Test@123"
    },
    {
        "name": "Haleigh Tellenbrok",
        "email": "htellenbrok1b@ft.com",
        "password": "Test@123"
    },
    {
        "name": "Donielle Redsall",
        "email": "dredsall1c@icq.com",
        "password": "Test@123"
    },
    {
        "name": "Nichole Kinsey",
        "email": "nkinsey1d@hatena.ne.jp",
        "password": "Test@123"
    },
    {
        "name": "Bob Copas",
        "email": "bcopas1e@infoseek.co.jp",
        "password": "Test@123"
    },
    {
        "name": "Micky Sharpin",
        "email": "msharpin1f@dailymotion.com",
        "password": "Test@123"
    },
    {
        "name": "Marrilee Charnick",
        "email": "mcharnick1g@google.ca",
        "password": "Test@123"
    },
    {
        "name": "Yasmeen Niave",
        "email": "yniave1h@state.gov",
        "password": "Test@123"
    },
    {
        "name": "Ingrid Whatling",
        "email": "iwhatling1i@ifeng.com",
        "password": "Test@123"
    },
    {
        "name": "Ellsworth Slograve",
        "email": "eslograve1j@discovery.com",
        "password": "Test@123"
    },
    {
        "name": "Kristo McDoual",
        "email": "kmcdoual1k@google.ru",
        "password": "Test@123"
    },
    {
        "name": "Gonzalo Battyll",
        "email": "gbattyll1l@blogspot.com",
        "password": "Test@123"
    },
    {
        "name": "Ricard Kayne",
        "email": "rkayne1m@booking.com",
        "password": "Test@123"
    },
    {
        "name": "Ollie Bilbrey",
        "email": "obilbrey1n@dell.com",
        "password": "Test@123"
    },
    {
        "name": "Alice Blindmann",
        "email": "ablindmann1o@upenn.edu",
        "password": "Test@123"
    },
    {
        "name": "Drew Ellcock",
        "email": "dellcock1p@123-reg.co.uk",
        "password": "Test@123"
    },
    {
        "name": "Reta Swain",
        "email": "rswain1q@microsoft.com",
        "password": "Test@123"
    },
    {
        "name": "Quentin Tosdevin",
        "email": "qtosdevin1r@vk.com",
        "password": "Test@123"
    },
    {
        "name": "Ennis Basso",
        "email": "ebasso1s@drupal.org",
        "password": "Test@123"
    },
    {
        "name": "Enrica Crielly",
        "email": "ecrielly1t@plala.or.jp",
        "password": "Test@123"
    },
    {
        "name": "Kaitlynn Coupe",
        "email": "kcoupe1u@examiner.com",
        "password": "Test@123"
    },
    {
        "name": "Zorah Ubanks",
        "email": "zubanks1v@reference.com",
        "password": "Test@123"
    },
    {
        "name": "Agnese Sapson",
        "email": "asapson1w@yahoo.com",
        "password": "Test@123"
    },
    {
        "name": "Lanita Prout",
        "email": "lprout1x@furl.net",
        "password": "Test@123"
    },
    {
        "name": "Ceciley Hilldrup",
        "email": "chilldrup1y@jugem.jp",
        "password": "Test@123"
    },
    {
        "name": "Maryanne Marchbank",
        "email": "mmarchbank1z@xinhuanet.com",
        "password": "Test@123"
    },
    {
        "name": "Cheri Attwater",
        "email": "cattwater20@goodreads.com",
        "password": "Test@123"
    },
    {
        "name": "Orin Devigne",
        "email": "odevigne21@acquirethisname.com",
        "password": "Test@123"
    },
    {
        "name": "Gordon Hentzeler",
        "email": "ghentzeler22@artisteer.com",
        "password": "Test@123"
    },
    {
        "name": "Reagan Porkiss",
        "email": "rporkiss23@google.de",
        "password": "Test@123"
    },
    {
        "name": "Oran Kohlert",
        "email": "okohlert24@webs.com",
        "password": "Test@123"
    },
    {
        "name": "Joe Demaine",
        "email": "jdemaine25@si.edu",
        "password": "Test@123"
    },
    {
        "name": "Robbyn Comolli",
        "email": "rcomolli26@admin.ch",
        "password": "Test@123"
    },
    {
        "name": "Dolorita Carthy",
        "email": "dcarthy27@t-online.de",
        "password": "Test@123"
    },
    {
        "name": "Margi Grealey",
        "email": "mgrealey28@economist.com",
        "password": "Test@123"
    },
    {
        "name": "Sloan Bentje",
        "email": "sbentje29@epa.gov",
        "password": "Test@123"
    },
    {
        "name": "Nance Sonschein",
        "email": "nsonschein2a@cdbaby.com",
        "password": "Test@123"
    },
    {
        "name": "Alexi Rockhall",
        "email": "arockhall2b@cdbaby.com",
        "password": "Test@123"
    },
    {
        "name": "Koral Eyrl",
        "email": "keyrl2c@wunderground.com",
        "password": "Test@123"
    },
    {
        "name": "Hube Orcott",
        "email": "horcott2d@hud.gov",
        "password": "Test@123"
    },
    {
        "name": "Huntley Honniebal",
        "email": "hhonniebal2e@bigcartel.com",
        "password": "Test@123"
    },
    {
        "name": "Sukey Cottill",
        "email": "scottill2f@google.com",
        "password": "Test@123"
    },
    {
        "name": "Verna Downham",
        "email": "vdownham2g@samsung.com",
        "password": "Test@123"
    },
    {
        "name": "Mariejeanne Bromwich",
        "email": "mbromwich2h@moonfruit.com",
        "password": "Test@123"
    },
    {
        "name": "Sena Axon",
        "email": "saxon2i@berkeley.edu",
        "password": "Test@123"
    },
    {
        "name": "Collie McWhirter",
        "email": "cmcwhirter2j@mit.edu",
        "password": "Test@123"
    },
    {
        "name": "Korry Rozzier",
        "email": "krozzier2k@ow.ly",
        "password": "Test@123"
    },
    {
        "name": "Alyss Peres",
        "email": "aperes2l@nbcnews.com",
        "password": "Test@123"
    },
    {
        "name": "Darb Timberlake",
        "email": "dtimberlake2m@tmall.com",
        "password": "Test@123"
    },
    {
        "name": "Brittany Fant",
        "email": "bfant2n@ox.ac.uk",
        "password": "Test@123"
    },
    {
        "name": "Shae De Coursey",
        "email": "sde2o@barnesandnoble.com",
        "password": "Test@123"
    },
    {
        "name": "Bryana Weth",
        "email": "bweth2p@merriam-webster.com",
        "password": "Test@123"
    },
    {
        "name": "Linus Hulbert",
        "email": "lhulbert2q@ft.com",
        "password": "Test@123"
    },
    {
        "name": "Durward Shailer",
        "email": "dshailer2r@imageshack.us",
        "password": "Test@123"
    }
];

// Function to send a POST request
const postData = async (data) => {
    try {
        const response = await axios.post(apiEndpoint, data);
        console.log('Data created successfully:', response.data);
    } catch (error) {
        console.error('Error creating data:', error.message);
    }
};

// Main function to handle multiple requests
const sendRequests = async () => {
    const requests = dataList.map(data => postData(data));
    await Promise.all(requests);
    console.log('All requests completed');
};

// Run the main function
sendRequests();
