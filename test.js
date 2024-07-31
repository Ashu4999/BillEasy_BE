const axios = require('axios');

// const apiEndpoint = 'http://localhost:7000/users'; 
const apiEndpoint = 'http://localhost:7000/tickets';
let bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1vbnRpIEd1bW1vcnkiLCJpZCI6ImQ1MDk4NzEwLTNkODYtNGI3ZC05ZTEwLTRmYWE4NGI5MTk1ZiIsImlhdCI6MTcyMjQ1NzQwNCwiZXhwIjoxNzIyNDU3NzA0fQ.G_68CcUsfWTu00CUpn75yIMzp6dda_GhiT8ZgDJolz8";

// Example data to send in each request
// const dataList = [
//     {
//         "name": "Monti Gummory",
//         "email": "mgummory0@geocities.jp",
//         "password": "Test@123"
//     },
//     {
//         "name": "Mariya Rubinowicz",
//         "email": "mrubinowicz1@redcross.org",
//         "password": "Test@123"
//     },
//     {
//         "name": "Gareth Skune",
//         "email": "gskune2@sohu.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Saree Bishell",
//         "email": "sbishell3@odnoklassniki.ru",
//         "password": "Test@123"
//     },
//     {
//         "name": "Hayley Lude",
//         "email": "hlude4@w3.org",
//         "password": "Test@123"
//     },
//     {
//         "name": "Jasper Jolliffe",
//         "email": "jjolliffe5@netvibes.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Richardo Turnock",
//         "email": "rturnock6@wikipedia.org",
//         "password": "Test@123"
//     },
//     {
//         "name": "Jens Tamlett",
//         "email": "jtamlett7@statcounter.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Gertrudis Kernes",
//         "email": "gkernes8@bizjournals.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Kelvin Barstow",
//         "email": "kbarstow9@shareasale.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Marcello Brockelsby",
//         "email": "mbrockelsbya@wisc.edu",
//         "password": "Test@123"
//     },
//     {
//         "name": "Joyous Welfare",
//         "email": "jwelfareb@bloglovin.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Niko Skudder",
//         "email": "nskudderc@ed.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Madeline Grishankov",
//         "email": "mgrishankovd@parallels.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Newton Kwietek",
//         "email": "nkwieteke@dropbox.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Mariya Abercromby",
//         "email": "mabercrombyf@artisteer.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Noah Preston",
//         "email": "nprestong@seattletimes.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Hilda Liffey",
//         "email": "hliffeyh@cam.ac.uk",
//         "password": "Test@123"
//     },
//     {
//         "name": "Liza Jaumet",
//         "email": "ljaumeti@moonfruit.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Dukey Englishby",
//         "email": "denglishbyj@homestead.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Arlena Crossdale",
//         "email": "acrossdalek@amazon.co.jp",
//         "password": "Test@123"
//     },
//     {
//         "name": "Leticia Daintith",
//         "email": "ldaintithl@istockphoto.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Theo Guidera",
//         "email": "tguideram@pinterest.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Moss Allison",
//         "email": "mallisonn@microsoft.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Briana Delgua",
//         "email": "bdelguao@weebly.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Leshia Hadingham",
//         "email": "lhadinghamp@csmonitor.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Winni Cramond",
//         "email": "wcramondq@senate.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Flin Thomke",
//         "email": "fthomker@bloomberg.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Reiko Londors",
//         "email": "rlondorss@apache.org",
//         "password": "Test@123"
//     },
//     {
//         "name": "Stirling Andrzejowski",
//         "email": "sandrzejowskit@live.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Randi Baccas",
//         "email": "rbaccasu@sciencedirect.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Allix Myton",
//         "email": "amytonv@nasa.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Jarred Flute",
//         "email": "jflutew@usnews.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Gherardo Middlehurst",
//         "email": "gmiddlehurstx@hhs.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Erinn Stormonth",
//         "email": "estormonthy@loc.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Zilvia Marden",
//         "email": "zmardenz@yahoo.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Oates Ord",
//         "email": "oord10@wp.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Forbes Malin",
//         "email": "fmalin11@about.me",
//         "password": "Test@123"
//     },
//     {
//         "name": "Rhetta Sheilds",
//         "email": "rsheilds12@mapy.cz",
//         "password": "Test@123"
//     },
//     {
//         "name": "Rosina Wiltshear",
//         "email": "rwiltshear13@bbc.co.uk",
//         "password": "Test@123"
//     },
//     {
//         "name": "Lazare Piller",
//         "email": "lpiller14@biblegateway.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Lanni Paulus",
//         "email": "lpaulus15@newyorker.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Casey Flippelli",
//         "email": "cflippelli16@eepurl.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Candi Colles",
//         "email": "ccolles17@china.com.cn",
//         "password": "Test@123"
//     },
//     {
//         "name": "Sauncho Hyndes",
//         "email": "shyndes18@w3.org",
//         "password": "Test@123"
//     },
//     {
//         "name": "Annadiane Liven",
//         "email": "aliven19@pen.io",
//         "password": "Test@123"
//     },
//     {
//         "name": "Lenette Fratson",
//         "email": "lfratson1a@naver.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Haleigh Tellenbrok",
//         "email": "htellenbrok1b@ft.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Donielle Redsall",
//         "email": "dredsall1c@icq.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Nichole Kinsey",
//         "email": "nkinsey1d@hatena.ne.jp",
//         "password": "Test@123"
//     },
//     {
//         "name": "Bob Copas",
//         "email": "bcopas1e@infoseek.co.jp",
//         "password": "Test@123"
//     },
//     {
//         "name": "Micky Sharpin",
//         "email": "msharpin1f@dailymotion.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Marrilee Charnick",
//         "email": "mcharnick1g@google.ca",
//         "password": "Test@123"
//     },
//     {
//         "name": "Yasmeen Niave",
//         "email": "yniave1h@state.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Ingrid Whatling",
//         "email": "iwhatling1i@ifeng.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Ellsworth Slograve",
//         "email": "eslograve1j@discovery.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Kristo McDoual",
//         "email": "kmcdoual1k@google.ru",
//         "password": "Test@123"
//     },
//     {
//         "name": "Gonzalo Battyll",
//         "email": "gbattyll1l@blogspot.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Ricard Kayne",
//         "email": "rkayne1m@booking.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Ollie Bilbrey",
//         "email": "obilbrey1n@dell.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Alice Blindmann",
//         "email": "ablindmann1o@upenn.edu",
//         "password": "Test@123"
//     },
//     {
//         "name": "Drew Ellcock",
//         "email": "dellcock1p@123-reg.co.uk",
//         "password": "Test@123"
//     },
//     {
//         "name": "Reta Swain",
//         "email": "rswain1q@microsoft.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Quentin Tosdevin",
//         "email": "qtosdevin1r@vk.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Ennis Basso",
//         "email": "ebasso1s@drupal.org",
//         "password": "Test@123"
//     },
//     {
//         "name": "Enrica Crielly",
//         "email": "ecrielly1t@plala.or.jp",
//         "password": "Test@123"
//     },
//     {
//         "name": "Kaitlynn Coupe",
//         "email": "kcoupe1u@examiner.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Zorah Ubanks",
//         "email": "zubanks1v@reference.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Agnese Sapson",
//         "email": "asapson1w@yahoo.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Lanita Prout",
//         "email": "lprout1x@furl.net",
//         "password": "Test@123"
//     },
//     {
//         "name": "Ceciley Hilldrup",
//         "email": "chilldrup1y@jugem.jp",
//         "password": "Test@123"
//     },
//     {
//         "name": "Maryanne Marchbank",
//         "email": "mmarchbank1z@xinhuanet.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Cheri Attwater",
//         "email": "cattwater20@goodreads.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Orin Devigne",
//         "email": "odevigne21@acquirethisname.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Gordon Hentzeler",
//         "email": "ghentzeler22@artisteer.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Reagan Porkiss",
//         "email": "rporkiss23@google.de",
//         "password": "Test@123"
//     },
//     {
//         "name": "Oran Kohlert",
//         "email": "okohlert24@webs.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Joe Demaine",
//         "email": "jdemaine25@si.edu",
//         "password": "Test@123"
//     },
//     {
//         "name": "Robbyn Comolli",
//         "email": "rcomolli26@admin.ch",
//         "password": "Test@123"
//     },
//     {
//         "name": "Dolorita Carthy",
//         "email": "dcarthy27@t-online.de",
//         "password": "Test@123"
//     },
//     {
//         "name": "Margi Grealey",
//         "email": "mgrealey28@economist.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Sloan Bentje",
//         "email": "sbentje29@epa.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Nance Sonschein",
//         "email": "nsonschein2a@cdbaby.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Alexi Rockhall",
//         "email": "arockhall2b@cdbaby.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Koral Eyrl",
//         "email": "keyrl2c@wunderground.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Hube Orcott",
//         "email": "horcott2d@hud.gov",
//         "password": "Test@123"
//     },
//     {
//         "name": "Huntley Honniebal",
//         "email": "hhonniebal2e@bigcartel.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Sukey Cottill",
//         "email": "scottill2f@google.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Verna Downham",
//         "email": "vdownham2g@samsung.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Mariejeanne Bromwich",
//         "email": "mbromwich2h@moonfruit.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Sena Axon",
//         "email": "saxon2i@berkeley.edu",
//         "password": "Test@123"
//     },
//     {
//         "name": "Collie McWhirter",
//         "email": "cmcwhirter2j@mit.edu",
//         "password": "Test@123"
//     },
//     {
//         "name": "Korry Rozzier",
//         "email": "krozzier2k@ow.ly",
//         "password": "Test@123"
//     },
//     {
//         "name": "Alyss Peres",
//         "email": "aperes2l@nbcnews.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Darb Timberlake",
//         "email": "dtimberlake2m@tmall.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Brittany Fant",
//         "email": "bfant2n@ox.ac.uk",
//         "password": "Test@123"
//     },
//     {
//         "name": "Shae De Coursey",
//         "email": "sde2o@barnesandnoble.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Bryana Weth",
//         "email": "bweth2p@merriam-webster.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Linus Hulbert",
//         "email": "lhulbert2q@ft.com",
//         "password": "Test@123"
//     },
//     {
//         "name": "Durward Shailer",
//         "email": "dshailer2r@imageshack.us",
//         "password": "Test@123"
//     }
// ];

const dataList = [
    {
        "title": "Phantasm",
        "description": "Stress fracture, left foot",
        "type": "conference",
        "venue": "Pune",
        "status": "in-progress",
        "priority": "low",
        "dueDate": "2024-10-01T05:34:11Z"
    },
    {
        "title": "Barrens, The",
        "description": "Displaced oblique fracture of shaft of left ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
        "type": "conference",
        "venue": "Mumbai",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-10-09T23:48:58Z"
    },
    {
        "title": "100 Bloody Acres",
        "description": "Unspecified acquired deformity of limb and hand",
        "type": "sports",
        "venue": "Delhi",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-08-21T14:05:55Z"
    },
    {
        "title": "Certified Copy (Copie conforme)",
        "description": "Adverse effect of monoamine-oxidase-inhibitor antidepressants",
        "type": "conference",
        "venue": "Banglore",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-08-15T22:37:57Z"
    },
    {
        "title": "JÃ¶nssonligan spelar hÃ¶gt",
        "description": "Passenger on bus injured in collision with pedestrian or animal in nontraffic accident, subsequent encounter",
        "type": "concert",
        "venue": "Delhi",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-10-18T23:21:00Z"
    },
    {
        "title": "Evangelion: 1.0 You Are (Not) Alone (Evangerion shin gekijÃ´ban: Jo)",
        "description": "Capsular glaucoma with pseudoexfoliation of lens, unspecified eye, moderate stage",
        "type": "conference",
        "venue": "Pune",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-08-18T21:47:34Z"
    },
    {
        "title": "Whiteout",
        "description": "Thiamine deficiency",
        "type": "concert",
        "venue": "Banglore",
        "status": "closed",
        "priority": "low",
        "dueDate": "2024-08-15T14:49:55Z"
    },
    {
        "title": "Project X",
        "description": "Adverse effect of expectorants, subsequent encounter",
        "type": "sports",
        "venue": "Mumbai",
        "status": "closed",
        "priority": "low",
        "dueDate": "2024-09-19T07:08:17Z"
    },
    {
        "title": "Bhutto",
        "description": "Displaced comminuted fracture of shaft of radius, left arm, subsequent encounter for closed fracture with nonunion",
        "type": "concert",
        "venue": "Pune",
        "status": "open",
        "priority": "high",
        "dueDate": "2024-08-25T19:02:33Z"
    },
    {
        "title": "Disney Princess Collection: Jasmine's Enchanted Tales: Jasmine's Wish",
        "description": "Poisoning by antiasthmatics, undetermined, initial encounter",
        "type": "sports",
        "venue": "Banglore",
        "status": "open",
        "priority": "medium",
        "dueDate": "2024-10-10T09:02:47Z"
    },
    {
        "title": "Landscape Suicide",
        "description": "Recurrent dislocation, left knee",
        "type": "conference",
        "venue": "Banglore",
        "status": "closed",
        "priority": "high",
        "dueDate": "2024-08-27T11:36:39Z"
    },
    {
        "title": "Laterna, ftoheia kai garyfallo",
        "description": "Pressure ulcer of unspecified heel, stage 2",
        "type": "concert",
        "venue": "Delhi",
        "status": "closed",
        "priority": "high",
        "dueDate": "2024-09-05T10:15:51Z"
    },
    {
        "title": "Manic",
        "description": "Enteropathic arthropathies, multiple sites",
        "type": "conference",
        "venue": "Pune",
        "status": "in-progress",
        "priority": "low",
        "dueDate": "2024-09-05T14:26:22Z"
    },
    {
        "title": "Secuestrados (Kidnapped)",
        "description": "Person on outside of car injured in collision with sport utility vehicle in traffic accident",
        "type": "concert",
        "venue": "Pune",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-10-22T03:41:39Z"
    },
    {
        "title": "She's So Lovely",
        "description": "Displaced fracture of posterior column [ilioischial] of left acetabulum, initial encounter for open fracture",
        "type": "sports",
        "venue": "Pune",
        "status": "closed",
        "priority": "high",
        "dueDate": "2024-10-22T20:47:53Z"
    },
    {
        "title": "Trainer on the Beach 2",
        "description": "Nasal congestion",
        "type": "sports",
        "venue": "Banglore",
        "status": "in-progress",
        "priority": "high",
        "dueDate": "2024-08-27T17:43:35Z"
    },
    {
        "title": "City Zero",
        "description": "Carcinoma in situ of other specified digestive organs",
        "type": "conference",
        "venue": "Pune",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-10-22T20:03:54Z"
    },
    {
        "title": "Ocean's Thirteen",
        "description": "Displaced fracture of distal phalanx of left little finger",
        "type": "sports",
        "venue": "Pune",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-08-22T02:11:21Z"
    },
    {
        "title": "Angel's Egg (Tenshi no tamago)",
        "description": "Complete traumatic amputation at knee level, unspecified lower leg, sequela",
        "type": "sports",
        "venue": "Pune",
        "status": "open",
        "priority": "high",
        "dueDate": "2024-10-23T10:42:52Z"
    },
    {
        "title": "Incredible Shrinking Woman, The",
        "description": "Puncture wound with foreign body of unspecified toe(s) without damage to nail, sequela",
        "type": "conference",
        "venue": "Banglore",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-09-19T19:00:22Z"
    },
    {
        "title": "Man Apart, A",
        "description": "Blister (nonthermal) of toe",
        "type": "sports",
        "venue": "Banglore",
        "status": "in-progress",
        "priority": "low",
        "dueDate": "2024-09-05T06:57:21Z"
    },
    {
        "title": "Paperhouse",
        "description": "Maternal care for anti-D [Rh] antibodies, second trimester, fetus 1",
        "type": "concert",
        "venue": "Pune",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-08-20T18:56:15Z"
    },
    {
        "title": "Replicant",
        "description": "Other superficial bite of breast",
        "type": "sports",
        "venue": "Banglore",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-09-12T23:24:29Z"
    },
    {
        "title": "Mindwalk",
        "description": "Other intraoperative and postprocedural complications of skin and subcutaneous tissue",
        "type": "conference",
        "venue": "Delhi",
        "status": "in-progress",
        "priority": "high",
        "dueDate": "2024-09-05T22:40:12Z"
    },
    {
        "title": "Distance",
        "description": "Abscess of tendon sheath, left ankle and foot",
        "type": "conference",
        "venue": "Mumbai",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-10-02T18:51:34Z"
    },
    {
        "title": "Grass Harp, The",
        "description": "Puncture wound with foreign body of finger without damage to nail",
        "type": "concert",
        "venue": "Delhi",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-09-28T22:38:25Z"
    },
    {
        "title": "No Such Thing",
        "description": "Toxic effect of fiberglass, accidental (unintentional), initial encounter",
        "type": "concert",
        "venue": "Mumbai",
        "status": "closed",
        "priority": "low",
        "dueDate": "2024-09-14T16:12:05Z"
    },
    {
        "title": "Lloyds of London",
        "description": "Systemic lupus erythematosus, unspecified",
        "type": "sports",
        "venue": "Mumbai",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-10-25T14:44:49Z"
    },
    {
        "title": "Timerider: The Adventure of Lyle Swann",
        "description": "Other biomechanical lesions of pelvic region",
        "type": "sports",
        "venue": "Delhi",
        "status": "closed",
        "priority": "high",
        "dueDate": "2024-10-03T18:41:55Z"
    },
    {
        "title": "Upstream Color",
        "description": "Torus fracture of lower end of unspecified humerus, subsequent encounter for fracture with delayed healing",
        "type": "conference",
        "venue": "Delhi",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-10-15T06:44:13Z"
    },
    {
        "title": "Asterix at the Olympic Games (AstÃ©rix aux jeux olympiques)",
        "description": "Unspecified motorcycle rider injured in collision with other nonmotor vehicle in traffic accident, sequela",
        "type": "conference",
        "venue": "Mumbai",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-08-20T01:27:48Z"
    },
    {
        "title": "Grandma's Boy",
        "description": "Stress fracture, left shoulder, subsequent encounter for fracture with delayed healing",
        "type": "sports",
        "venue": "Banglore",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-08-22T05:29:47Z"
    },
    {
        "title": "You Are God (Jestes Bogiem)",
        "description": "Poisoning by iron and its compounds, intentional self-harm, initial encounter",
        "type": "concert",
        "venue": "Delhi",
        "status": "in-progress",
        "priority": "low",
        "dueDate": "2024-10-20T02:38:29Z"
    },
    {
        "title": "Black Friday",
        "description": "Nondisplaced fracture of olecranon process without intraarticular extension of unspecified ulna, subsequent encounter for open fracture type I or II with malunion",
        "type": "conference",
        "venue": "Banglore",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-10-13T19:30:22Z"
    },
    {
        "title": "Mary Stevens M.D.",
        "description": "Driver of heavy transport vehicle injured in collision with heavy transport vehicle or bus in nontraffic accident, sequela",
        "type": "concert",
        "venue": "Mumbai",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-10-09T13:27:10Z"
    },
    {
        "title": "Horton Hears a Who!",
        "description": "Radiohumeral (joint) sprain of unspecified elbow, initial encounter",
        "type": "sports",
        "venue": "Banglore",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-09-02T01:10:31Z"
    },
    {
        "title": "Design for Scandal",
        "description": "Displaced fracture of proximal phalanx of left little finger",
        "type": "concert",
        "venue": "Pune",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-09-25T21:07:20Z"
    },
    {
        "title": "My Own Private Idaho",
        "description": "Calcification and ossification of muscles associated with burns, forearm",
        "type": "sports",
        "venue": "Banglore",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-10-05T10:49:53Z"
    },
    {
        "title": "Premature Burial, The",
        "description": "Fracture of corpus cavernosum penis",
        "type": "sports",
        "venue": "Banglore",
        "status": "closed",
        "priority": "medium",
        "dueDate": "2024-10-10T07:50:00Z"
    },
    {
        "title": "Fastest Gun Alive, The",
        "description": "Maternal care for other (suspected) fetal abnormality and damage, fetus 1",
        "type": "sports",
        "venue": "Banglore",
        "status": "open",
        "priority": "medium",
        "dueDate": "2024-08-28T05:56:54Z"
    },
    {
        "title": "Last Stop for Paul",
        "description": "Nondisplaced spiral fracture of shaft of humerus, left arm, initial encounter for closed fracture",
        "type": "sports",
        "venue": "Banglore",
        "status": "closed",
        "priority": "high",
        "dueDate": "2024-10-14T05:41:20Z"
    },
    {
        "title": "Double Suicide (ShinjÃ»: Ten no amijima)",
        "description": "Subluxation and dislocation of C2/C3 cervical vertebrae",
        "type": "conference",
        "venue": "Pune",
        "status": "in-progress",
        "priority": "low",
        "dueDate": "2024-08-15T13:31:53Z"
    },
    {
        "title": "Home of the Brave",
        "description": "Maternal care for disproportion due to hydrocephalic fetus",
        "type": "concert",
        "venue": "Delhi",
        "status": "in-progress",
        "priority": "low",
        "dueDate": "2024-09-17T05:55:42Z"
    },
    {
        "title": "Body Bags",
        "description": "Pathological fracture in neoplastic disease, right tibia",
        "type": "sports",
        "venue": "Mumbai",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-09-25T19:49:36Z"
    },
    {
        "title": "Exit Wounds",
        "description": "Laceration without foreign body of toe without damage to nail",
        "type": "concert",
        "venue": "Banglore",
        "status": "open",
        "priority": "high",
        "dueDate": "2024-10-18T14:25:48Z"
    },
    {
        "title": "Steel Trap, The",
        "description": "Displaced fracture of lateral condyle of unspecified humerus, subsequent encounter for fracture with routine healing",
        "type": "concert",
        "venue": "Delhi",
        "status": "in-progress",
        "priority": "medium",
        "dueDate": "2024-09-10T22:01:32Z"
    },
    {
        "title": "Dinoshark",
        "description": "Driver of pick-up truck or van injured in collision with other motor vehicles in traffic accident, sequela",
        "type": "sports",
        "venue": "Banglore",
        "status": "open",
        "priority": "medium",
        "dueDate": "2024-08-21T17:54:42Z"
    },
    {
        "title": "The Land Unknown",
        "description": "Nondisplaced fracture of distal phalanx of left thumb, subsequent encounter for fracture with nonunion",
        "type": "sports",
        "venue": "Banglore",
        "status": "open",
        "priority": "low",
        "dueDate": "2024-09-22T04:24:21Z"
    },
    {
        "title": "Spirit: Stallion of the Cimarron",
        "description": "Poisoning by, adverse effect of and underdosing of anticoagulants",
        "type": "conference",
        "venue": "Pune",
        "status": "in-progress",
        "priority": "high",
        "dueDate": "2024-10-12T18:19:21Z"
    }
];

// Function to send a POST request
const postData = async (data) => {
    try {
        const response = await axios.post(apiEndpoint, data, 
            {
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json'
            }
        }
        );
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
