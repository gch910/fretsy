"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Fender Stratocaster",
          description: "This 1965 Stratocaster, in very rare Black finish, is a true find for any collector or Fender enthusiast. It is in all original condition displaying fantastic looking player wear over the majority of the instrument. Pots date to the 16th week of 1965 and pickups date to June 7th, 1965.",
          price: 40000.00,
          year: 1965,
          color: "Black",
          model: "WGL84809",
          amount: 1,
          available: true,
          img: "https://cdn.shopify.com/s/files/1/0255/8659/7968/products/JH-364.jpg?v=1594261163",
          categoryId: 1,
          shopId: 1
        },
        {
          name: "Gibson Custom Les Paul",
          description: "Gibson Custom Shop's 1959 Les Paul Standard Reissue is not just a tribute to the priceless original models -- it's a clone of them. From laser-scanned dimensions to chemically-recreated plastics to color-matched shades of sunburst, every element has been rendered in unbelievable detail. It represents the culmination of decades of work by Custom Shop's expert team -- a tireless quest to bring accuracy and authenticity to the hands of fans. It’s the definition of cool, and it's the best representation of the 1959 Les Paul Standard since the Gibson Custom Shop began making Historic Reissues over twenty-five years ago.",
          price: 6499.00,
          year: 2015,
          color: "Sunburst",
          amount: 1,
          available: true,
          img: "https://cdn.shopify.com/s/files/1/0288/8617/1682/products/90485_1_2000x.jpg?v=1597428307",
          categoryId: 1,
          shopId: 2,
        },
        {
          name: "Martin Acoustic OMC-28E",
          description: "The Martin Standard Series OMC-28E Orchestra Model Acoustic-Electric Guitar blends model-specific sound images using a Martin Gold Plus under-the-saddle transducer to achieve optimum acoustic reproduction. The OM-28 was the first guitar Martin offered with a 14-fret neck. Produced from 1929-1933, the OM-28 is widely considered the original modern flat top steel-string guitar. Differing only in body size from the Martin DC-28E, this Standard Series OMC-28E Orchestra Model is equipped with a cutaway and factory installed Aura VT Enhance electronics. Includes hardshell case.",
          price: 2499.99,
          year: 2018,
          color: "Natural Wood",
          model: "OMC-28E",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--ji_-4M-n--/f_auto,t_supersize/v1552861911/jwvuegzmrim71w639rol.jpg",
          categoryId: 2,
          shopId: 7,
        },
        {
          name: "D'Angelico NYL-5 2003 Honey",
          description: "This 2003 D'Angelico NYL-5 is a stellar instrument.  It is flawless from tip to tale. Played in home environment only.  Always treated with TLC.  It plays, feels, and sounds so jazzy sweet.  German spruce top, maple backs and sides, Kent Armstrong Floating Mini Humbucker, 10 radius neck, 17 lower bout",
          price: 2500.00,
          year: 2003,
          color: "Honey",
          model: "NYL-5",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--9-1yed6E--/f_auto,t_supersize/v1613703718/keful7cupjajw9vmkfpg.jpg",
          categoryId: 3,
          shopId: 3,
        },
        {
          name: "Epiphone ES 339",
          description: "Timeless looks and incredible tone in a compact package. Epiphone\'s Inspired by Gibson ES-339 is designed for those seeking the tone and look of an ES-335, but in a slightly smaller, lighter instrument. The hand-rolled C-shaped mahogany neck reminds players where it all started. A pair of Epiphone Alnico Classic PRO™ humbuckers showcases the versatile Gibson ES™ tone that players have craved for over 60 years. Tuning stability and precise intonation are provided by the Graph Tech® NuBone® nut, Grover® Rotomatic® tuners, and Epiphone\'s exclusive LockTone™ bridge and tailpiece, which also add more sustain to your tone.",
          price: 499.00,
          year: 2015,
          color: "Vintage Sunburst",
          model: "ES-339",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--ZmaAq2C2--/f_auto,t_large/v1612831718/ly6cijmsjbjkcab5y4ul.jpg",
          categoryId: 1,
          shopId: 5,
        },
        {
          name: "PRS Paul Reed Smith Custom 24 Pattern Thin 10 Top",
          description: "This \"Collector\'s\" guitar, the Custom 24 is the quintessential PRS guitar. This iconic instrument was the first model that Paul Reed Smith brought to the public at PRS Guitars' first Winter NAMM show in 1985 and has been a top seller ever since.",
          price: 4510.00,
          year: 2000,
          color: "Faded Whale Blue",
          model: "Custom 24 10-Top",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--zO8T024e--/f_auto,t_large/v1601316716/regbrjcon5c4n2xshvmc.jpg",
          categoryId: 1,
          shopId: 6,
        },
        {
          name: "D'Angelico Excel EXL-1 Throwback Hollowbody Electric Guitar USA",
          description: "The D'Angelico Excel EXL-1 Throwback embodies the legacy of fine archtops. A 17-inch-wide, 3-inch-deep body emanates warm, woody archtop tone propelled by a single floating Seymour Duncan Johnny Smith mini-humbucker.",
          price: 1999.00,
          year: 2003,
          color: "Gold",
          model: "Excel EXL-1",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--CHFAUAlI--/f_auto,t_large/v1614296445/mym3mbklapqjje0w1ri8.jpg",
          categoryId: 3,
          shopId: 3,
        },
        {
          name: "Taylor 612c Natural 1996",
          description: "n/a",
          price: 2291.30,
          year: 1996,
          color: "Natural",
          model: "612c",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--AAWBaJhw--/f_auto,t_large/v1614529544/ucawuflzsi0wbdswlv9b.jpg",
          categoryId: 2,
          shopId: 6,
        },
        {
          name: "Eastman E6OM Orchestra Natural",
          description: "Eastman Orchestra Model guitars feature a slim body that is comfortable to play and provides articulate sound. The E60M features a solid spruce top, solid mahogany back and sides, and a 14-fret mahogany neck. Tasteful appointments include black body binding, rosewood fingerboard and bridge, and chrome open gear tuners. This acoustic guitar is in excellent condition.",
          price: 695.30,
          year: 2010,
          color: "Natural",
          model: "E60M",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--DmXCgO-c--/f_auto,t_large/v1614112686/qftyjjanzrxmbzn9nsrx.jpg",
          categoryId: 2,
          shopId: 7,
        },
        {
          name: "Gibson B-45 12 String 1967 Vintage B45",
          description: "n/a",
          price: 1850.00,
          year: 1967,
          color: "Natural",
          model: "B-45",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--dohHIR-O--/f_auto,t_large/v1611694181/pzabgf2ttbm9mnufmj6o.jpg",
          categoryId: 2,
          shopId: 6,
        },
        {
          name: "Seagull S6 Original Dreadnought",
          description: "Delivering quality and value without compromise, the Seagull S6 Original is the instrument that best represents the Seagull philosophy. The newly updated S6 Original has a refreshingly bolder look with a New Deep Dark Custom Stain on the Wild Cherry Back and Sides/Neck and Headstock and a New Customer Pick Guard. Experience a greater level of quality and value with this phenomenal guitar made in North America.",
          price: 499.00,
          year: 2020,
          color: "Natural",
          model: "S6",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s---ZD4Jap6--/f_auto,t_large/v1553270027/ehwlarakud2fqinhjjzd.jpg",
          categoryId: 2,
          shopId: 7,
        },
        {
          name: "Fender American Performer Jazz Bass",
          description: "Buy with confidence from an authorized Fender dealer. Best In Music has been helping musicians fulfill their goals and dreams for 30 years. This guitar has been unboxed and hung on our showroom floor, but is new with full factory warranty and deluxe gig bag. This beauty is just looking for a good home. Feel free to reach out for more pics and even demo videos of this amazing guitar. Check out our shop for more amazing guitars. We're adding stuff daily. Thanks for checking out our listing and happy playing!",
          price: 1299.99,
          year: 2020,
          color: "Sunburst",
          model: "American Performer Jazz Bass",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--jHq6F4Eh--/f_auto,t_large/v1597705546/nu2xtpb5s9rrhkubjj9b.jpg",
          categoryId: 4,
          shopId: 4,
        },
        {
          name: "Fender Jazz Bass Electric MIJ Fujigen 1995 Olympic White JB Standard",
          description: "Sometimes the simple things are the absolute best. Enter this classic MIJ Fender Jazz Bass. Hailing from the famed Fujigen plant ca. 1995-1996 known for its high quality instruments rivaling and often exceeding Fender USA of the era, this non-export JB plays, sounds and looks awesome. The neck is straight and slim, the action is low and quick. The Olympic white finish has aged creamily and looks amazing against the white pickguard. Fresh set-up and re-string, she's ready to go. ",
          price: 995.00,
          year: 1995,
          color: "Olympic White",
          model: "American Performer Jazz Bass",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--GsSCNzFV--/f_auto,t_large/v1612468796/ddzzietvmkarhrxfw6ws.jpg",
          categoryId: 4,
          shopId: 4,
        },
        {
          name: "Ibanez Studio bass ST824",
          description: "n/a",
          price: 1000.00,
          year: 1980,
          color: "Natural",
          model: "ST824",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--U11s5x_F--/f_auto,t_large/v1613156997/ivksrfiohbdszxpk7fcg.jpg",
          categoryId: 4,
          shopId: 4,
        },
        {
          name: "Fender Princeton Amp 1979 Silverface",
          description: "n/a",
          price: 1199.00,
          year: 1979,
          color: "n/a",
          model: "Princeton",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--bA-CcGlu--/f_auto,t_large/v1613688160/hys485qwejmcem39bas4.jpg",
          categoryId: 6,
          shopId: 5,
        },
        {
          name: "Marshall JVM210C 2x12 100W Guitar Combo",
          description: "All-tube design including 5 x12AX7s, 2 x EL34s (50-watt), or 4 x EL34s (100-watt) 2 totally independent, footswitchable channels - clean/crunch and overdriveEach channel has 3 footswitchable modes - green, orange, and red.",
          price: 2099.00,
          year: 2018,
          color: "n/a",
          model: "JVM210C",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--bA-CcGlu--/f_auto,t_large/v1613688160/hys485qwejmcem39bas4.jpg",
          categoryId: 6,
          shopId: 5,
        },
        {
          name: "Mesa Boogie Fillmore 50 1x12 50-Watt Guitar Combo",
          description: "The MESA/Boogie® Fillmore™ 50™ is designed for players seeking a straight-forward amplifier capable of delivering everything from pristine cleans to warm, vintage gain tones with the ability to dial subtle increments of saturation for the precise amount of gain desired while retaining character and rich harmonic content. It offers players a wide, soft clip to saturated range - MESA's most expressive gain ever. Super responsive, organic and nuanced, guitarists feel at home plugged into the Fillmore 50 whether playing a Rock, Pop, Blues, Country, Reggae or Jazz gig. It's equally appealing to those seeking a great pedal platform.",
          price: 1699.00,
          year: 2018,
          color: "n/a",
          model: "Fillmore 50",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--_kIrdV6i--/f_auto,t_large/v1583975302/dc7139x29up9fbk2ls37.jpg",
          categoryId: 6,
          shopId: 5,
        },
        {
          name: "Vox AC10C1 (731)",
          description: "The AC10 was one of the first amplifiers to bear the VOX name and has long been adored for his ability to achieve rich, articulate tube tone at very manageable volumes. For this reason, the AC10 has become a highly coveted piece of VOX history since it’s discontinuation in 1965. Now, nearly 50 years later, VOX is proud to introduce the AC10C1, a modern take on this classic design. More portable than the AC15 and more powerful than the AC4, the AC10C1 features the classic Top Boost tone circuit that provides an array of classic and modern tones. Now equipped with reverb and a master volume, the AC10C1 is the perfect companion for the home, studio or stage.",
          price: 499.00,
          year: 2021,
          color: "n/a",
          model: "AC10C1",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--9sG9BGBC--/f_auto,t_large/v1611176969/na2gc9jb42emru46kpay.jpg",
          categoryId: 6,
          shopId: 2,
        },
        {
          name: "Fender Chris Stapleton Signature '62 Princeton 1x12 12-Watt Guitar Combo",
          description: "Fenders reissue of the classic 6G2 Princeton circuit with Chris Stapleton's preferences. This 12-watter is a great little amp that can go from clean to mean and everything in between.",
          price: 1800.00,
          year: 2019,
          color: "Brown Vinyl",
          model: "Chris Stapleton Signature '62 Princeton 1x12\"",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--Op1YsU6r--/f_auto,t_large/v1614537447/crzm5pwbgcig8jopr40p.jpg",
          categoryId: 6,
          shopId: 2,
        },
        {
          name: "Two Rock Studio Pro 22",
          description: "n/a",
          price: 2400.00,
          year: 2012,
          color: "n/a",
          model: "Pro 22",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--raSfv6l8--/f_auto,t_large/v1614483637/jjvbrdxvpujallvw4lwg.jpg",
          categoryId: 6,
          shopId: 2,
        },
        {
          name: "Paul Reed Smith Sonzera 20 Black",
          description: "PRS Sonzera 20 amp in excellent condition. Includes foot switch",
          price: 550.00,
          year: 2014,
          color: "n/a",
          model: "Sonzera 20",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--aWHfC_q5--/f_auto,t_large/v1614467233/jljs4wkiojiczwhbd5zt.jpg",
          categoryId: 6,
          shopId: 5,
        },
        {
          name: "Keeley Compressor Plus Compressor",
          description: "The Keeley Compressor is the most popular boutique compressor in the world. With well over 52,000 compressors built in our shop we have an expert understanding of compression, limiting, and sustain. We know what it takes to make an instrument sound like it’s been professionally recorded. We know how to make your guitar jump from the mix.",
          price: 129.00,
          year: null,
          color: "n/a",
          model: "Compressor",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--LT4YRdtS--/f_auto,t_large/v1558378965/bteyfklpv23shhgttbsw.jpg",
          categoryId: 5,
          shopId: 2,
        },
        {
          name: "MXR M133 Micro Amp Guitar or Bass Boost Effect Pedal",
          description: "The MXR M-133 Micro Amplifier Pedal adds a preset amount of gain, using a single control. With a guitar, this lets you boost your signal for lead work, adjust between 2 different guitars with unmatched output (i.e., humbucker to single coils), or it can supply a permanent boost in a long effects chain where signal drop-off is a problem. Power: Single 9-volt battery or Dunlop ECB-003 AC Adapter - Controls: Footswitch toggles amp on/bypass (red LED indicates on) Gain knob adjusts total output volume when the Micro Amp is engaged.",
          price: 63.95,
          year: null,
          color: "Off-White",
          model: "M133 Micro Amp",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--rMF6G8Y5--/f_auto,t_large/v1562890530/v3mtnhxfjkjlnejyh9gf.jpg",
          categoryId: 5,
          shopId: 2,
        },
        {
          name: "Electro-Harmonix Canyon Delay & Looper Pedal",
          description: "Packed with more power than pedals taking up more real estate, the compact Canyon features a collection of awe-inspiring effects. From pristine digital delay to warm and warbly tape echo, reverse and modulated delays, cascading octave delay and shimmer… even an exquisite Deluxe Memory Man emulation. There are ten different effects in all plus a fully featured looper. Internal or external Tap Tempo with tap divide and a chasm full of intuitive secondary knob controls deliver a truly grand experience.",
          price: 151.00,
          year: null,
          color: "White",
          model: "Canyon Delay",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--k0TSdZ4n--/f_auto,t_large/v1531151853/iyxjple7tqqbcmxwizzj.jpg",
          categoryId: 5,
          shopId: 5,
        },
        {
          name: "EarthQuaker Devices Afterneath",
          description: "The Afterneath sounds a lot like it looks – a wizard in a cave in a box. You are the wizard – or sorceress, if you prefer – and the cave is your instrument’s signal, vast, expansive, and magical. Do you go inside? Roll a D20 to proceed!",
          price: 229.00,
          year: null,
          color: "Black",
          model: "Afterneath Otherworldly Reverberation Machine V2",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--HRsvi5Bf--/f_auto,t_large/v1524599315/haihxepxzof6361jlghc.jpg",
          categoryId: 5,
          shopId: 5,
        },
        {
          name: "J. Rockett Archer Ikon Overdrive",
          description: "The Archer Ikon is sort of a 2 in one guitar pedal. It can be used as just a clean boost by turning the gain all the way down. As you introduce gain it will attenuate the clean signal but there is a magical blend in between that you will find. Please experiment!!",
          price: 189.00,
          year: null,
          color: "Gold",
          model: "JRADD",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--SLsIAqVP--/f_auto,t_large/v1593357780/ksfqwwedu7m6cktmp89t.jpg",
          categoryId: 5,
          shopId: 5,
        },
        {
          name: "Fender Chrissie Hynde Signature Telecaster Electric Guitar",
          description: "The Chrissie Hynde Telecaster features an alder body finished in Faded Ice Blue Metallic Road Worn® lacquer, a custom mid-'60s \"C\"-shaped maple neck with a 7.25\" radius fingerboard - exactly matching Chrissie's original, vintage-output Chrissie Hynde Tele pickups and a chrome mirror pickguard—all matching the unmistakable look and feel of Hynde\'s treasured \'65 model.",
          price: 1399.99,
          year: 2017,
          color: "Ice Blue Metallic",
          model: "Chrissie Hynde Signature Telecaster",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--OpRVTceB--/f_auto,t_large/v1610471448/ut8pwoxc896ezjk8lnjo.jpg",
          categoryId: 1,
          shopId: 8,
        },
        {
          name: "Fender Stratocaster 1974 Natural w/ OHSC",
          description: "n/a",
          price: 3699.00,
          year: 1974,
          color: "Natural",
          model: "Stratocaster with 3-Bolt Neck, Maple Fretboard",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s---yda66g7--/f_auto,t_large/v1600461675/auwlgcc0rylbthkxrzbw.jpg",
          categoryId: 1,
          shopId: 6,
        },
        {
          name: "Rickenbacker 330",
          description: "\"Iconic\" is the first word that comes to mind when we see one of these beauties come through the shop. This 330 is finished in classic Fireglo & contain a pair of amazing sounding Hi-Gain single coils. The guitar is in great shape. It has seen some love in the past with some dings along the edges and a spot of discoloration on teh back of the lower bout (see pics). It includes the original hard shell case! ",
          price: 1925.00,
          year: 2009,
          color: "Fireglo",
          model: "330",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--w7ryKrQo--/f_auto,t_large/v1601835966/mmhh13ddz5waff3ndyz4.jpg",
          categoryId: 1,
          shopId: 7,
        },
        {
          name: "Gibson ES-335",
          description: "ES-335 with a unique color and some great looking pieces of figured maple: an ES-335 made in 1999 with a Transparent Brown finish. Built with figured maple top, rims, and back, a slim-profile mahogany neck with a bound rosewood fretboard, 24-3/4\" scale length, 22 frets, two '57 Classic humbuckers, ABR-1 bridge with stopbar tailpiece, and gold hardware.",
          price: 3982.66,
          year: 2001,
          color: "Walnut",
          model: "330",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--F-Hl_-3Z--/f_auto,t_large/v1520267698/dio54cwfsbrebi2y7g6v.jpg",
          categoryId: 1,
          shopId: 7,
        },
        {
          name: "Gibson ES-335 Semi Hollow Electric Guitar in Vintage Burst",
          description: "The Gibson ES-335 DOT is the cornerstone of the Gibson ES line-up. From its inaugural appearance in 1958, the Gibson ES-335 set an unmatched standard. The pearloid dot inlay rosewood ngerboard on a hand-rolled Rounded \"C\" mahogany neck remind players where it all started. Gibson's Calibrated T-Type humbucking pickups are paired with our hand-wired control assembly. The result is that versatile Gibson ES tone that players have craved for over 60 years. Tuning stability and precise intonation are provided by the Vintage Deluxe tuners with Keystone buttons, paired with light weight Aluminum ABR-1 bridge and Stop Bar tailpiece, anchored by steel thumb-wheels and tailpiece studs.",
          price: 2999.00,
          year: 2020,
          color: "Vintage Burst",
          model: "ES-335",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--sa-pICay--/f_auto,t_large/v1613140999/jkuufhecfkbx4kamlncg.jpg",
          categoryId: 1,
          shopId: 8,
        },
        {
          name: "Kremona Rosa Luna RL , Flamenco Guitar",
          description: "This Kremona Flamenco guitar is in mint condition. It’s in perfect playing condition. It’s set up with low fast playing action just like a Flamenco guitar should be. It has a lot of snap & pop, with a beautiful rich, tone, and big projection. It has two strap buttons so you could use a strap with it if you like. It comes with a very nice mint condition Kremona gig bag pictured here. It has a solid European spruce top, with Bulgarian beech wood back & sides. Venetian cutaway. Honduras cedar neck. Indian rosewood fingerboard & bridge. Indian rose wood head stock. Gold tuning pegs with amber buttons. Bone nut & saddle. It has the Fishman Presys active pickup system. Sonicore undersaddle piezo. Built in condensor mic with adjustable trim. ",
          price: 725.00,
          year: 2020,
          color: "Natural",
          model: "Rosa Blanca Flamenco Guitar",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--NlObrRSm--/f_auto,t_large/v1614534085/kxhzi8lbacroqndeztna.jpg",
          categoryId: 2,
          shopId: 8,
        },
        {
          name: "Godin Multiac Grand Concert SA Natural HG \"B-Stock\" Electro-Classical Guitar",
          description: "Up for sale a Godin Multiac Grand Concert SA Natural HG \"B-Stock\" Electro-Classical Guitar w/Bag - #19052123!  We are an Authorized Dealer of Godin Guitars!  This \"B-Stock\" instrument is Brand New in Mint Cosmetic Condition and it comes with the Full Manufacturer's Warranty*.  \"B-Stock\" means that the unit may shows minor signs of wear or has small cosmetic issues.  On this one, there are tiny wood imperfections (darker) on the lower body top (see 13th and 14th pictures), there are slight waves / wood irregularities on the body side, lower body top and body back (see 13th, 19th and 21st pictures) and there are few fine scratches, marks, barely few tiny dents and few other slight finish/wood imperfections here and there (see 13th to 24th pictures), but absolutely nothing major.",
          price: 1489.00,
          year: 2019,
          color: "Natural",
          model: "Multiac Grand Concert Nylon SA",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--P1eQRLA0--/f_auto,t_large/v1612379034/uzbhj96knzo9vawrbvzy.jpg",
          categoryId: 2,
          shopId: 7,
        },
        {
          name: "Fender The Edge Artist Series Signature Stratocaster",
          description: "n/a",
          price: 1699.00,
          year: 2019,
          color: "Black",
          model: "The Edge Artist Series Signature Stratocaster",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--BdOrgEty--/f_auto,t_large/v1614544245/ws51z6pc1kwyrhm7euf4.jpg",
          categoryId: 1,
          shopId: 2,
        },
        {
          name: "Gibson SG Standard",
          description: "2008 Gibson SG Standard, mahogany body. A great guitar in good condition, well cared for over the years.",
          price: 1000.00,
          year: 2008,
          color: "Black",
          model: "SG",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--G1wTWP_s--/f_auto,t_large/v1614539398/ehxqtrr9tkqwmcage2v7.jpg",
          categoryId: 1,
          shopId: 2,
        },
        {
          name: "Paul Reed Smith CE 24",
          description: "Since the dawn of rock and roll, the snap and response that comes from a bolt-on neck guitar has been an essential part of the mix. These attributes have, in turn, become essential to many players trying to tell their story through music.  The CE 24 pairs PRS’s traditional body combination of the mahogany back and maple top with a bolt-on maple neck and rosewood fretboard. The neck sports a Pattern Thin carve and satin nitro finish for a natural, addictive feel. To further maximize the guitar’s inherent tone and clarity, the CE 24 features PRS 85/15 pickups, which Paul designed to have remarkable clarity as well as extended high and low end. The electronics consist of a volume and push/pull tone control with 3-way toggle switch for a total of six classic sounds.",
          price: 1849.00,
          year: 2014,
          color: "Trampas Green",
          model: "CE 24",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--9kJppz4O--/f_auto,t_large/v1560197541/l6v49avahscjks7cmo0i.jpg",
          categoryId: 1,
          shopId: 1,
        },
        {
          name: "Gibson Les Paul Classic Electric Guitar",
          description: "The Gibson Les Paul Classic combines the early 60's style Les Paul model with some functional and time-tested modifications. As expected, the LP Classic is crafted with a mahogany back and maple top coupled with a slim taper mahogany neck and bound, rosewood fingerboard. Burstbucker 61R & 61T zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots which provide choices of coil tapping, phase switching and pure bypassing for functional and versatile sonic variety.",
          price: 1999.00,
          year: 2014,
          color: "Trampas Green",
          model: "CE 24",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--2iqrIQoo--/f_auto,t_large/v1590604674/qlkc840k3xqxggfbqqqd.jpg",
          categoryId: 1,
          shopId: 1,
        },
        {
          name: "Eastman AR805CE Sunburst",
          description: "n/a",
          price: 2400.00,
          year: 2016,
          color: "Sunburst",
          model: "AR805CE",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--l9-XKru8--/f_auto,t_large/v1587943071/usmm9uefigrc0scqoet3.jpg",
          categoryId: 3,
          shopId: 3,
        },
        {
          name: "Hofner 4680 Committee Thinline 1965 Sunburst",
          description: "Here's a 1965 Hofner 4680 Committee Thinline Sunburst finish. Rare & original fully hollow Hofner model. We just did an in-house neck re-set, that couldn't have turned out better!! Playability is now exceptional. Beyond that, no breaks, cracks, repairs. Spruce top, beautiful flamed maple back & sides, bound ebony fingerboard with ornate inlays, 3 knobs, double bound body with marble binding, 2 Staple Pickups, and the clover leaf design on the back! Medium C neck profile, with low action, and good fret life left. The pickups are full, warm, and have wonderful clarity. This is an outstanding instrument from top to bottom...that you don't see everyday! HSC included",
          price: 2950.00,
          year: 1965,
          color: "Sunburst",
          model: "4680",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--Zg-Vy52Z--/f_auto,t_large/v1613771994/u4ygkcm9g3hp4l2kjni1.jpg",
          categoryId: 3,
          shopId: 3,
        },
        {
          name: "Fender JB Standard Jazz Bass MIJ",
          description: "Fender Jazz Bass Standard MIJ 1997-2000. Candy Apple Red with a Rosewood fingerboard and a 1-Ply pick-guard. Bass is in original good condition, with only a few dents in the finish.",
          price: 1161.84,
          year: 1997,
          color: "Candy Apple Red",
          model: "JB Standard Jazz Bass MIJ",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--2mGLkhco--/f_auto,t_large/v1614560799/gel47jf7agijvc8s1ejy.jpg",
          categoryId: 4,
          shopId: 4,
        },
        {
          name: "Fender Player Precision Bass",
          description: "Fender Player Precision Bass (USED) - Loaded with authentic and classic Fender P bass tone. Smooth neck feel. Stage and studio ready. Perfect for any player from aspiring to advanced. Excellent condition.",
          price: 549.95,
          year: 2018,
          color: "Buttercream",
          model: "Player Precision Bass with Maple Fretboard",
          amount: 1,
          available: true,
          img: "https://images.reverb.com/image/upload/s--tBNqWG4r--/f_auto,t_large/v1614546662/e9xoeplvrfvkwgrremm1.jpg",
          categoryId: 4,
          shopId: 4,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Products', null, {});
  
  },
};
