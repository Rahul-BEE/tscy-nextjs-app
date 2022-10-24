import All from "../public/Svg/floorplans/all.svg";
import Area from "../public/Svg/floorplans/area.svg";
import Balcony from "../public/Svg/floorplans/balcony.svg";
import Bedroom from "../public/Svg/floorplans/bedroom.svg";
import Courtyard from "../public/Svg/floorplans/courtyard.svg";
import Farm from "../public/Svg/floorplans/farm.svg";
import Garage from "../public/Svg/floorplans/garage.svg";
import Garden from "../public/Svg/floorplans/garden.svg";
import Kitchen from "../public/Svg/floorplans/kitchen.svg";
import Mosque from "../public/Svg/floorplans/mosque.svg";
import Ocean from "../public/Svg/floorplans/ocean.svg";
import Parking from "../public/Svg/floorplans/parking.svg";
import Pool from "../public/Svg/floorplans/pool.svg";
import Spine from "../public/Svg/floorplans/spine.svg";
import Bin from "../public/Svg/floorplans/cards/bin.svg";
import Drop from "../public/Svg/floorplans/cards/drop.svg";
import House from "../public/Svg/floorplans/cards/house.svg";
import Car from "../public/Svg/floorplans/cards/car.svg";
import Plant from "../public/Svg/floorplans/cards/plant.svg";
import World from "../public/Svg/floorplans/cards/world.svg";
import SmartHouse from "../public/Svg/floorplans/cards/smarthouse.svg";
import Station from "../public/Svg/floorplans/cards/station.svg";

import Bedroomp from "../public/Svg/bedroom.svg";
import MaidRoomp from "../public/Svg/maidroom.svg";
import Bathroomp from "../public/Svg/bathroom.svg";
import Livingp from "../public/Svg/living.svg";
import Kitchenp from "../public/Svg/kitchen.svg";
import Laundryp from "../public/Svg/laundry.svg";
import Parkingp from "../public/Svg/parking.svg";
import Gardenp from "../public/Svg/garden.svg";

import Diamond from "../public/Logos/diamond.svg";
import Omran from "../public/Logos/omran.svg";

import Email from "../public/Svg/contactus/email.svg";
import Pin from "../public/Svg/contactus/pin.svg";
import Tel from "../public/Svg/contactus/tel.svg";
import Clock from "../public/Svg/contactus/clock.svg";
import Facebook from "../public/Svg/contactus/fb.svg";
import Linkedin from "../public/Svg/contactus/linkedin.svg";
import Instagram from "../public/Svg/contactus/insta.svg";
import Twitter from "../public/Svg/contactus/twitter.svg";

import Popwellness from "../public/Svg/masterplan/wellness.svg";
import Popeast from "../public/Svg/masterplan/east.svg";
import Popwest from "../public/Svg/masterplan/west.svg";
import Popplaza from "../public/Svg/masterplan/plaza.svg";
import Pop5star from "../public/Svg/masterplan/5star.svg";
import Pop4star from "../public/Svg/masterplan/4star.svg";
import Popschool from "../public/Svg/masterplan/school.svg";
import Popsports from "../public/Svg/masterplan/sports.svg";
import Popbranded from "../public/Svg/masterplan/branded.svg";
import Popequestrian from "../public/Svg/masterplan/equestrisn.svg";
import Popseelab from "../public/Svg/masterplan/seelab.svg";
import Popautism from "../public/Svg/masterplan/autism.svg";
import Popjogging from "../public/Svg/masterplan/jogging.svg";
import Popmosque from "../public/Svg/masterplan/mosque.svg";
import Popequestraiantrack from "../public/Svg/masterplan/equestraiantrack.svg";
import Popcycling from "../public/Svg/masterplan/cycling.svg";
import Popebuggy from "../public/Svg/masterplan/ebuggy.svg";
import Popfestival from "../public/Svg/masterplan/festival.svg";
import Popspine from "../public/Svg/masterplan/spine.svg";
const english = {
  language: 1,
  header: {
    langbtn: "عربي",
    links: [
      { text: "Find Your Dream Home", link: "/floorplan" },
      { text: "About Us", link: "/about" },
      { text: "News", link: "/news" },
    ],
    contact: "REGISTER INTEREST",
    homepage: "Homepage",
  },

  bannersection: {
    title1: "A Sustainable Lifestyle",
    title2: "For a Better Tomorrow",
  },

  sustainablesection: {
    title1: "HOW WE SUPPORT",
    title2: "SUSTAINABLE FEATURES",
    features: [
      {
        sectionhead: "Sustainable Features",
        heading: "Social Sustainability",
        sub: "We are achieving this in The Sustainability City by providing all kinds of amenities and community outreach programs.",
        bullets: [
          "Indoor and outdoor gyms",
          "Cycling & jogging tracks",
          "Equestrian club & horse track",
          "Park playgrounds",
          "Swimming pools",
          "Mosque & prayer rooms",
          "Health clinics & Wellness Center",
          "School & educational programs",
          "Autism Center",
          "A thriving hospitality sector that includes 4 and 5 star hotels",
        ],
        rightimg: "/Images/sustainable/social_right.png",
        leftimg: "/Images/sustainable/social_left.png",
        mobimg: "/Images/sustainable/social_mobile.png",
      },

      {
        heading: "Economic Sustainability",
        sub: "Facilitated through operational efficiencies, savings for residents & contribution to a green economy",
        bullets: [
          "Huge savings on electricity & water bills",
          "Job creation",
          "Supporting local businesses & adding in-country value",
          "Smart design leading to lower operational costs",
          "Promotion of circular economy",
        ],
        rightimg: "/Images/sustainable/economic_right.png",
        leftimg: "/Images/sustainable/economic_left.png",
        mobimg: "/Images/sustainable/economic_mobile.png",
      },
      {
        heading: "Environmental Sustainability",
        sub: "Maintained through passive & active design strategies",
        bullets: [
          "Urban farms and greenhouses",
          "100% renewable energy sources",
          "Recycling water for irrigation",
          "Humidity harvesting",
          "Efficient homes with smart design",
          "EV charging stations",
          "Waste recycling",
        ],
        rightimg: "/Images/sustainable/environmental_right.png",
        leftimg: "/Images/sustainable/environmental_left.png",
        mobimg: "/Images/sustainable/environmental_mobile.png",
      },
    ],
  },

  masterplan: {
    title1: "GET QUALITY LIFE WITH",
    title2: "OUR MASTER PLAN",
    description:
      "The project is designed to improve the quality of life for residents without compromising the needs of future generations.",
    markers: [
      {
        id: 1,
        name: "autism center",
        icon: <Popplaza />,

        description:
          "One of the region’s largest centres offering a comprehensive and integrated approach towards autism spectrum disorders (ASD) and other related disorders. The center’s holistic approach is designed to empower both affected individuals and their families to navigate daily life.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/autismcenter/1.png",
          "/Images/masterplan/autismcenter/2.png",
          "/Images/masterplan/autismcenter/3.png",
        ],
      },
      {
        id: 2,
        name: "Equestrian center",
        icon: <Popequestrian />,
        description:
          "The equestrian center features 77 Trained horses to suit a range of abilities and includes a 1.2km riding track.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/equistrian/1.png",
          "/Images/masterplan/equistrian/2.png",
          "/Images/masterplan/equistrian/3.png",
          "/Images/masterplan/equistrian/4.png",
        ],
      },
      {
        id: 3,
        name: "see lab",
        icon: <Popseelab />,
        description:
          "SEE Lab showcases renewable energy, technologies, indoor vertical farming, small-scale dairy farming, humidity harvesting, solid waste treatment, and smart mobility. SEE Lab also houses SEE Institute, a net zero carbon learning facility for professionals working in urban sustainability practices.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/seelab/1.png",
          "/Images/masterplan/seelab/2.png",
          "/Images/masterplan/seelab/3.png",
        ],
      },
      {
        id: 4,
        name: "Sustainable mosque",
        icon: <Popmosque />,
        description: "....",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/sustainablemosque/1.png",
          "/Images/masterplan/sustainablemosque/2.png",
          "/Images/masterplan/sustainablemosque/3.png",
        ],
      },
      {
        id: 5,
        icon: <Popspine />,
        name: "Green Spine",
        description:
          "The green spine runs along the majority of the development and is planted with trees and shrubs that thrive in Oman’s environment. Being a productive landscape, residents can farm the community allotments and greenhouses are used to grow herbs and leafy green vegetables.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/greenspine/1.png",
          "/Images/masterplan/greenspine/2.png",
          "/Images/masterplan/greenspine/3.png",
        ],
      },
      {
        id: 6,
        name: "Luxury Apartments",
        icon: <Popbranded />,
        description: "....",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/brandedresidencies/1.png",
          "/Images/masterplan/brandedresidencies/2.png",
          "/Images/masterplan/brandedresidencies/3.png",
          "/Images/masterplan/brandedresidencies/4.png",
        ],
      },
      {
        id: 7,
        name: "Wellness center",
        icon: <Popwellness />,
        description:
          "A wellness center providing high quality holistic medical services.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/wellnesscenter/1.png",
          "/Images/masterplan/wellnesscenter/2.png",
          "/Images/masterplan/wellnesscenter/3.png",
        ],
      },
      {
        id: 8,
        name: "Sports complex",

        icon: <Popsports />,
        description:
          "As part of an all-encompassing approach to sustainable development, the city facilitates an active lifestyle through the integration of gyms, a sports complex, a 7.4km running and cycling track, outdoor fitness stations, tennis courts, basketball courts, a skate park, 11 playgrounds, swimming pools, an equestrian club and riding track, over 3km of hiking trails and access to non-motorised water-sports on the beach.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/sportcomplex/1.png",
          "/Images/masterplan/sportcomplex/2.png",
          "/Images/masterplan/sportcomplex/3.png",
        ],
      },
      {
        name: "4 Star resort",
        id: 9,
        icon: <Pop4star />,
        description:
          "The four-star Hotel is characterized by a neighbour-hood spirit and friendly atmosphere and echoes the community’s sustainability ethos.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/4starresort/1.png",
          "/Images/masterplan/4starresort/2.png",
          "/Images/masterplan/4starresort/3.png",
        ],
      },
      {
        id: 10,
        villadetails: true,
        name: "West District",
        icon: <Popwest />,
        description: "....",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/westdistrict/1.png",
          "/Images/masterplan/westdistrict/2.png",
          "/Images/masterplan/westdistrict/3.png",
        ],
        villatype: [
          {
            type: "Courtyyard Villa",
            noofbedrooms: 4,
          },
          {
            type: "Courtyyard Villa",
            noofbedrooms: 5,
          },
        ],
      },
      {
        id: 11,
        name: "school & nursery",
        icon: <Popschool />,
        description:
          "An onsite school and nursery are accessible from all areas by walking or biking without having to cross any road. The school and the nursery follow sustainability ethos and are also powered by rooftop solar energy.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/school/1.png",
          "/Images/masterplan/school/2.png",
          "/Images/masterplan/school/3.png",
        ],
      },
      {
        id: 12,
        name: "5 star resort",
        icon: <Pop5star />,
        description:
          "This five-star resort has a range of restaurants, leisure facilities, lounges and beach front access. The resort also manages 132 luxury branded apartments.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/5starresort/1.png",
          "/Images/masterplan/5starresort/2.png",
          "/Images/masterplan/5starresort/3.png",
        ],
      },

      {
        id: 13,
        villadetails: true,
        name: "East District",
        icon: <Popeast />,
        description: "....",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/eastdistrict/1.png",
          "/Images/masterplan/eastdistrict/2.png",
          "/Images/masterplan/eastdistrict/3.png",
        ],
        villatype: [
          {
            type: "Garden Villa",
            noofbedrooms: 4,
          },
        ],
      },
      {
        id: 14,
        name: "Plaza",
        icon: <Popplaza />,
        description:
          "A vibrant community plaza, with commercial facilities including shops, restaurants, cafes, offices, and apartments.",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/plaza/1.png",
          "/Images/masterplan/plaza/2.png",
          "/Images/masterplan/plaza/3.png",
        ],
      },
      {
        id: 15,
        name: "Festival Park",
        icon: <Popfestival />,
        description: "....",
        details: {
          area: "1250 sq.ft",
          capacity: 3000,
          built: 2020,
        },
        contact: {
          contact: "0123456",
          email: "come@yiti.com",
          Phone: " 0312547",
        },
        slideimg: [
          "/Images/masterplan/festivalpark/1.png",
          "/Images/masterplan/festivalpark/2.png",
          "/Images/masterplan/festivalpark/3.png",
        ],
      },
    ],
  },
  locationsection: {
    title1: "Dont miss anything with",
    title2: "OUR PROJECT LOCATION",
    description:
      "Our project location is thoroughly surrounded by touristic locations with a world-class experience.",
  },
  villaplansection: {
    title1: "Redefining living with our",
    title2: "Choose Your Villa",
    btntext: "see details",
    proptext: "property features",
    villas: [
      {
        id: 1,
        keys: [0, 1, 5, 6, 7],
        slug: "courtyard-villa-3bedroom",
        title: "Courtyard Villa – 3 Bedroom Unit – West Villas",
        homepagetitle: "Bedroom Courtyard",
        gross: "Gross Floor Area 238 m2",
        build: "Built Up Area 256 m2",
        mainImg: "/Images/villas/3bcv/3bcv.png",
        blurImg: "/Images/villas/3bcv/3bcvblur.png",
        floorplan: [
          "/Images/villas/3bcv/floorplan/groundfloor.png",
          "/Images/villas/3bcv/floorplan/firstfloor.png",
        ],
        interior: [
          {
            title: "Appliances",
            description:
              "High effeciency heating / cooling water fixtures and appliances",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Flooring",
            description: "High quality texture porcelain tiles",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wardrobes",
            description: "Custom made high gloss veneer finish",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
          {
            title: "Windows",
            description: "Double glazed insulated windows",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Sanitary",
            description: "Modern designed sanitary",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wall Paint",
            description: "High finishing fenomastic paint",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
          {
            title: "Wardrobes",
            description: "Custom made high gloss veneer finish",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Sanitary",
            description: "Modern designed sanitary",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wall Paint",
            description: "High finishing fenomastic paint",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
        ],
        link: "/floorplan/1",
        ff_plan: "",
        gf_plan: "",
        bedrooms: "3",
        bathrooms: "5",
        maidroom: "1",
        type: "Courtyard Villa",
        location: "West District",
        locationid: 1,
        locationImg: "/Images/villas/westdistrict.png",
        propertyFeatures: {
          ground: [0, 1, 2, 3],
          first: [5, 6, 7, 4],
        },
        locationDesc:
          "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
        nearby: [
          {
            name: "Plaza",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/plaza.png",
          },
          {
            name: "AUTISM VILLAGE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/autism.png",
          },
          {
            name: "MOSQUE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/mosque.png",
          },
          {
            name: "EQUISTRIAN CENTRE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/equistrian.png",
          },
          {
            name: "BRIDGES",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/bridge.png",
          },
        ],
        gfa: "238",
        bua: "256",
        description:
          "Our three-bedroom villas are spacious and stylishly contemporary. This functional layout takes an enlightened approach to the ground floor with ample kitchen space adjacent to the maid’s quarters accompanied by a half bathroom separating the spacious living room area. Upstairs there are three en-suite bedrooms with plenty of room for study, sleep, and storage. The master bedroom, complete with an extensive wardrobe area, lavishly accommodated bathroom, and balcony access overlooking the meticulously groomed courtyard, provides all of the necessary elements for tranquil and comfortable living.",
        interiorDescription:
          "Our three-bedroom villas are spacious and stylishly contemporary. This functional layout takes an enlightened approach to the ground floor with ample kitchen space adjacent to the maid’s quarters accompanied by a half bathroom separating the spacious living room area.",
      },
      {
        id: 2,
        keys: [0, 2, 10, 11, 13, 14],
        slug: "courtyard-villa-4bedroom",
        title: "Courtyard Villa – 4 Bedroom Unit – West Villas",
        homepagetitle: "Bedroom Courtyard",
        gross: "Gross Floor Area 266 m2",
        build: "Built Up Area 285 m2",
        link: "/floorplans/2",
        mainImg: "/Images/villas/4bcv/4bcv.png",
        blurImg: "/Images/villas/4bcv/4bcvblur.png",
        propertyFeatures: {
          ground: [0, 1, 2, 3, 4],
          first: [5, 6, 7],
        },
        locationDesc:
          "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
        floorplan: [
          "/Images/villas/4bcv/floorplan/groundfloor.png",
          "/Images/villas/4bcv/floorplan/firstfloor.png",
        ],
        interior: [
          {
            title: "Appliances",
            description:
              "High effeciency heating / cooling water fixtures and appliances",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Flooring",
            description: "High quality texture porcelain tiles",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wardrobes",
            description: "Custom made high gloss veneer finish",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
          {
            title: "Windows",
            description: "Double glazed insulated windows",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Sanitary",
            description: "Modern designed sanitary",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wall Paint",
            description: "High finishing fenomastic paint",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
          {
            title: "Wardrobes",
            description: "Custom made high gloss veneer finish",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Sanitary",
            description: "Modern designed sanitary",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wall Paint",
            description: "High finishing fenomastic paint",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
        ],
        nearby: [
          {
            name: "Plaza",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/plaza.png",
          },
          {
            name: "AUTISM VILLAGE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/autism.png",
          },
          {
            name: "MOSQUE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/mosque.png",
          },
          {
            name: "EQUISTRIAN CENTRE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/equistrian.png",
          },
          {
            name: "BRIDGES",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/bridge.png",
          },
        ],
        gf_plan: "",
        ff_plan: "",
        bedrooms: "4",
        bathrooms: "5",
        maidroom: "1",
        type: "Courtyard Villa",
        location: "West District",
        locationid: 1,
        locationImg: "/Images/villas/westdistrict.png",
        gfa: "266",
        bua: "285",
        description:
          "This immaculate four-bedroom villa layout contains a bright and welcoming lower level with an extraordinarily bountiful living room area. The kitchen is clad with premium fixtures and fittings with plenty of elbow room to stimulate culinary creativity. The adjoining dining area is a lofty space enveloped in natural lighting and exuding a contemporary charm. The ground floor also houses a half-bath and maid’s room. On the upper level of this layout, there are three en-suite bedrooms along with a sprawling master bedroom. The master bedroom is fitted with prodigiously sized windows, generous wardrobe space, an opulent en-suite bathroom equipped with a soaking tub, and shaded balcony access overlooking the courtyard.",
        interiorDescription:
          "Our three-bedroom villas are spacious and stylishly contemporary. This functional layout takes an enlightened approach to the ground floor with ample kitchen space adjacent to the maid’s quarters accompanied by a half bathroom separating the spacious living room area.",
      },
      {
        id: 3,
        keys: [0, 3, 4, 8, 9, 12],
        slug: "garden-villa-4bedroom",
        title: "Garden Villa – 4 Bedroom Unit – East Villas",
        homepagetitle: "Bedroom Garden Villa",
        gross: "Gross Floor Area 378 m2",
        build: "Built Up Area 459 m2",
        link: "/floorplans/3",
        mainImg: "/Images/villas/4bgv/4bgv.png",
        blurImg: "/Images/villas/4bgv/4bgvblur.png",
        propertyFeatures: {
          ground: [0, 1, 2, 3, 4],
          first: [5, 6, 7],
        },
        floorplan: [
          "/Images/villas/4bgv/floorplan/groundfloor.png",
          "/Images/villas/4bgv/floorplan/firstfloor.png",
        ],
        interior: [
          {
            title: "Appliances",
            description:
              "High effeciency heating / cooling water fixtures and appliances",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Flooring",
            description: "High quality texture porcelain tiles",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wardrobes",
            description: "Custom made high gloss veneer finish",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
          {
            title: "Windows",
            description: "Double glazed insulated windows",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Sanitary",
            description: "Modern designed sanitary",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wall Paint",
            description: "High finishing fenomastic paint",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
          {
            title: "Wardrobes",
            description: "Custom made high gloss veneer finish",
            img: "/Images/villas/3bcv/3bcvInterior/1.png",
          },
          {
            title: "Sanitary",
            description: "Modern designed sanitary",
            img: "/Images/villas/3bcv/3bcvInterior/2.png",
          },
          {
            title: "Wall Paint",
            description: "High finishing fenomastic paint",
            img: "/Images/villas/3bcv/3bcvInterior/3.png",
          },
        ],
        nearby: [
          {
            name: "Plaza",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/plaza.png",
          },
          {
            name: "AUTISM VILLAGE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/autism.png",
          },
          {
            name: "MOSQUE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/mosque.png",
          },
          {
            name: "EQUISTRIAN CENTRE",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/equistrian.png",
          },
          {
            name: "BRIDGES",
            description:
              "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
            img: "/Images/villas/amenities/bridge.png",
          },
        ],
        gf_image: "",
        ff_image: "",
        bedrooms: "4",
        bathrooms: "6",
        maidroom: "1",
        type: "Garden Villa ",
        location: "East District",
        locationid: 2,
        locationDesc:
          "The YITI Sustainable commercial center comes with all the necessities of life just at a hands distance.",
        locationImg: "/Images/villas/eastdistrict.png",
        gfa: "378",
        bua: "459",
        description:
          "Our four-bedroom garden villa layout was masterfully designed for the discerning environmentalist. An inviting foyer area is a welcoming gateway to this residence. An expansive living room is accompanied by a vast swath of shaded terrace space. The two-car garage is a convenient addition, situated behind the maid’s room, accessible through the courtyard. The dining area flows seamlessly into a u-shaped kitchen, which makes for a commanding focal point, spaciously accommodating to the most ambitious of culinary aspirations. The first floor is comprised of four en-suite bedrooms. The master bedroom has abundant wardrobe space, a splendidly spacious en-suite bathroom, and a broad, sweeping balcony, nestled above the courtyard’s luxuriant greenspace.",
        interiorDescription:
          "Our three-bedroom villas are spacious and stylishly contemporary. This functional layout takes an enlightened approach to the ground floor with ample kitchen space adjacent to the maid’s quarters accompanied by a half bathroom separating the spacious living room area.",
      },
    ],
    filters: [
      {
        id: 0,
        key: "all",
        icon: <All />,
        headingText: "PERFECT FOR YOU.",
        subtext: "All",
        text: "Villas",
      },
      {
        id: 1,
        key: "ocean",
        icon: <Ocean />,
        headingText: "CLOSER TO OCEAN.",
        subtext: "Closer to",
        text: "Ocean",
      },
      {
        id: 2,
        key: "mosque",
        icon: <Mosque />,
        headingText: "CLOSER TO MOSQUE.",
        subtext: "Closer to",
        text: "Mosque",
      },
      {
        id: 3,
        key: "pool",
        icon: <Pool />,
        headingText: "HAVING PROVISIONAL POOL.",
        subtext: "Provisional",
        text: "Pool",
      },
      {
        id: 4,
        key: "spine",
        icon: <Spine />,
        headingText: "HAVE GREEN SPINE.",
        subtext: "Attaching",
        text: "Green Spine",
      },
      {
        id: 5,
        key: "parking",
        icon: <Parking />,
        headingText: "HAVE PARKING.",
        subtext: "Cluster",
        text: "Parking",
      },
      {
        id: 6,
        key: "bedrooms",
        icon: <Bedroom />,
        headingText: "HAVE 3 BEDROOMS",
        subtext: "Bedrooms",
        text: "3",
      },
      {
        id: 7,
        key: "bedrooms",
        icon: <Bedroom />,
        headingText: "HAVE 4 BEDROOMS",
        subtext: "Bedrooms",
        text: "4",
      },
      {
        id: 8,
        key: "kitchens",
        icon: <Kitchen />,
        headingText: "HAVE 2 KICHTENS",
        subtext: "Kitchens",
        text: "2",
      },
      {
        id: 9,
        key: "courtyard",
        icon: <Courtyard />,
        headingText: "HAVE A COURTYARD",
        subtext: "Bigger",
        text: "Courtyard",
      },
      {
        id: 10,
        key: "garden",
        icon: <Garden />,
        headingText: "HAVE A GARDEN",
        subtext: "Bigger",
        text: "Garden",
      },
      {
        id: 11,
        key: "area",
        icon: <Area />,
        headingText: "HAVE BIG AREA",
        subtext: "Bigger",
        text: "Area",
      },
      {
        id: 12,
        key: "balcony",
        icon: <Balcony />,
        headingText: "HAVE A BALCONY",
        subtext: "Sweeping",
        text: "Balcony",
      },
      {
        id: 13,
        key: "garage",
        icon: <Garage />,
        headingText: "HAVE A GARAGE",
        subtext: "Cars",
        text: "Garage",
      },
      {
        id: 14,
        key: "farm",
        icon: <Farm />,
        headingText: "HAVE A FARM",
        subtext: "C.V.",
        text: "Farm",
      },
    ],
  },
  propertyFeatures: [
    {
      name: "Bedrooms",
      icon: <Bedroomp />,
      num: true,
      key: "bedrooms",
    },
    {
      name: "Maid Room",
      icon: <MaidRoomp />,
      num: true,
      key: "maidroom",
    },
    {
      name: "Bathrooms",
      icon: <Bathroomp />,
      num: true,
      key: "bathrooms",
    },
    {
      name: "Living Room",
      icon: <Livingp />,
    },
    {
      name: "Kitchen",
      icon: <Kitchenp />,
    },
    {
      name: "Laundry",
      icon: <Laundryp />,
    },
    {
      name: "Parking",
      icon: <Parkingp />,
    },
    {
      name: "Private Garden",
      icon: <Gardenp />,
    },
  ],
  commontext: {
    sendmessage: "Send Message",
    getdirection: "Get Directions",
    nearby: "Nearby",
    amenities: "Amenities",
    brochure: "Brochure",
    floorplan: "Floor Plan",
    learnmore: "Learn More",
    download: "Download",
    bedroom: "Bedroom",
    bathroom: "Bathroom",
    pool: "Swimming Pool",
    maidroom: "Maid Room",
    propsubheading_1: "Property Features",
    propsubheading_2: "Extra Features",
    ecofriendly: "Eco-Friendly",
    smarthome: "Smart Home",
    privategarden: "Private Garden",
    seedetails: "See Details",
    tracks: "Tracks",
    landmarks: "Landmarks",
    components: "Components",
    description: "Description",
    details: "Details",
    gobacktomasterplan: "Back to masterplan ",
    villatypes: "Villa Types",
    seevillas: "See Villas",
    previousto: "Previous to",
    nextto: "Next to",
    contact: "Contact",
    relatedimages: "Related Images",
    comparison: "Comparison",
    dontforget: "Dont forget to check our",
    othervillatypes: "Other Villa Types",
    situated: "Situated at a ",
    primelocationText: "Prime Location in Master Plan",
    viewin: "View In",
    masterplan: "Master Plan",
    interiorHeading: "Interior Features",
    caption: "caption",
    registerinterest: "Register Interest",
    findyour: "Find your",
    dreamHome: "dream home",
    firstfloor: "First Floor",
    groundfloor: "Ground Floor",
    parking: "Parking",
    press: "Press and News",
    ourstory: "Our Story",
    diamonddevelopers: "The Sustainable City - Yiti",
    cpyright: "© The Sustainable City - Yiti 2022",
    language: "Arabic",
    next: "Next",
    previous: "Previous",
    thanksnote: "Thank you for your response",
    adddetails: "Add your details",
    prev: "Prev",
    visitouroffice: "Visit our office",
    stories: "Latest Stories",
    featured: "featured news",
    featureddesc: "See what they",
    featureddesc2: "say in",
    gfa: "Gross Floor Area",
    bua: "Built Up Area",
    unit: "m",
  },
  tracks: [
    {
      id: 16,
      name: "Jogging",
      icon: <Popjogging />,
      slideimg: ["/Images/masterplan/tracks/joggingtrack.png"],
      description:
        "A 7.4 km jogging track runs along the entire stretch of the green spine and the waterfront promenade.",
      details: {
        area: "1250 sq.ft",
        capacity: 3000,
        built: 2020,
      },
      contact: {
        contact: "0123456",
        email: "come@yiti.com",
        Phone: " 0312547",
      },
    },
    {
      id: 17,
      name: "Equestrian",
      icon: <Popequestraiantrack />,
      slideimg: ["/Images/masterplan/tracks/equistriantrack.png"],
      description:
        "=1.2 Km long equestrian track that runs along the waterfront promenade connecting the stables with the public park.",
      details: {
        area: "1250 sq.ft",
        capacity: 3000,
        built: 2020,
      },
      contact: {
        contact: "0123456",
        email: "come@yiti.com",
        Phone: " 0312547",
      },
    },
    {
      id: 18,
      name: "Cycling",
      icon: <Popcycling />,
      slideimg: ["/Images/masterplan/tracks/cyclingtrack.png"],
      description:
        "The dedicated cycling track encourages people to go car-free by providing non-vehicular Sikkas within the sustainable district.",
      details: {
        area: "1250 sq.ft",
        capacity: 3000,
        built: 2020,
      },
      contact: {
        contact: "0123456",
        email: "come@yiti.com",
        Phone: " 0312547",
      },
    },
    {
      id: 19,
      name: "E-Buggy",
      icon: <Popebuggy />,
      slideimg: ["/Images/masterplan/tracks/cyclingtrack.png"],
      description:
        "Car free areas to create safe zones for kids and promote walkability.",
      details: {
        area: "1250 sq.ft",
        capacity: 3000,
        built: 2020,
      },
      contact: {
        contact: "0123456",
        email: "come@yiti.com",
        Phone: " 0312547",
      },
    },
  ],
  newssection: {
    post: [
      {
        slug: "newly-launched-plan",
        title: [
          "The Sustainable City - Yiti Signs Escrow",
          "Agreement with Sohar Islamic",
        ],
        date: "29th June, 2022",
        city: "Muscat",
        country: "Oman",
        image: "/Images/news/news_img1.jpg",
        type: "news",
        heading:
          "Understanding with Sohar Islamic Bank to open an Escrow Account for the newly launched master planned project in the capital city of Muscat.",
        discription: [
          "Muscat, Oman – The Sustainable City - Yiti, set to be the first fully sustainable community in Oman, has signed today a Memorandum of Understanding with Sohar Islamic Bank to open an Escrow Account for the newly launched master planned project in the capital city of Muscat.",
          "This agreement was made in abidance by the Sultanate’s Royal Decree No. 30/2018, aimed to protect developers’ funds. In light of that, The Sustainable City Yiti can now offer Escrow services for the buyers of its upcoming 1657 residential units - including 300 eco-friendly and energy-efficient villas, 1225 apartments, and 132 luxury serviced apartments. ",
          "The agreement was signed by Mr. Hashil Bin Obaid Al Mahrougi, Chairman of Sustainable Development and Investment Company (SDIC), and Mr. Abdul Wahid Bin Mohammed Al Murshidi, Chief Islamic Banking Officer, Sohar Islamic. The ceremony was also attended by key stakeholders from OMRAN Group, Diamond Developers and Sohar Islamic.",
          ,
          "Commenting on this partnership, Mr. Hashil Al Mahrouqi, Chairman of (SDIC), said: With an investment value of nearly one billion US dollars, this project marks a unique milestone in our journey as we continue to invest, develop, and maximize the limitless potential of Omans tourism sector. We are committed to working with our partners to ensure the smoothest experience for our buyers and investors. Our agreement with Sohar Islamic, one of the leading financial institutions in the country, not only protects customers but assists in attracting investors to Omans real estate market.",
          "Mr. Abdul Wahid Al Murshidi, Chief Islamic Banking Officer, Sohar Islamic, said: “We always aspire to collaborate with key strategic partners in the development space. This agreement was a result of a very detailed dialogue and requirements definition exercise between the teams from both sides, and we are delighted to be offering bespoke services to The Sustainable City - Yiti buyers and to support the property sector and the overall economic growth of the Sultanate.",
          "The Sustainable City - Yiti project is a partnership between OMRAN Group, the executive arm of the Sultanate for developing the tourism sector, and Diamond Developers – the leading company in developing sustainable communities. The project will be the largest operational sustainable community in the region, designed to deliver measurable outcomes across the three pillars of sustainability: social, environmental, and economic, and will achieve net-zero carbon targets by 2040.",
        ],
      },
      {
        slug: "tourism-partnership-omran",
        title: [
          "Diamond Developers signs partnership with The Oman Tourism ",
          "Development Company (OMRAN Group)",
        ],
        date: "13th January, 2022",
        city: "Dubai",
        country: "UAE",
        image: "/Images/news/news_img2.jpg",
        type: "news",
        heading:
          "As part of its ongoing efforts to expand sustainable projects in the region",
        discription: [
          "- OMRAN group, the Sultanate of Oman’s executive arm for tourism development signed an agreement with Diamond Developers, the Dubai–based company specialized in developing sustainable environmental projects",
          "- The new agreement will underline the company’s commitment towards building carbon-neutral and resilient communities",
          "Dubai – 13th January 2022: Diamond Developers, the mastermind behind The Sustainable City brand, the first fully operational sustainable community in the Middle East has entered into a development partnership agreement with the Oman Tourism Development Company (OMRAN Group), the executive arm of the Sultanate for tourism development. The agreement entails the development of first phase of the Yiti Tourism masterplan with an investment value of approximately AED 3.7 billion (approximately USD 1 billion). In conjunction with this partnership, a joint venture called Sustainable Development and Investment Company (SDIC) S.A.O.C has been established to carry out the execution of this phase.",
          "OMRAN Group’s partnership with Diamond Developers marks a major milestone in Yiti Development as we together begin the first phase of this integrated urban destination in Muscat. The signing further attests to OMRAN Group’s strategic vision in expanding the nation’s tourism sector and continuing to play a pivotal role as a catalyst and enabler of multi-fold, lucrative investment opportunities in the country in line with Oman Investment Authority’s directions in realising the ambitious goals of Oman Vision 2040 and supporting the delivery of the National Tourism Strategy,” said Hashil Bin Obaid Al Mahrouqi, CEO of OMRAN Group.",
          "“We are delighted to collaborate with Diamond Developers as they are one of the leading and reputable companies in building sustainable cities in the region.  Their approach is in line with our vision of adopting the foundations of placemaking and harnessing sustainability in all aspects of the development.” Al Mahrouqi added.",
          "The first phase of the Yiti project, which covers 900,000 square meters, will focus on constructing a fully sustainable mixed-use project, the Sultanate's first of its kind community that promotes sustainable living. The first phase will include green public spaces, residences, tourism, commercial, and educational facilities, all with well-balanced and integrated components. Visitors and residents alike will enjoy a variety of unique lifestyle experiences, including restaurants, cafés, shops, and an equestrian center, a farm along with other distinctive components that create a meaningful green-living environment. The two sides announced that full details of the project will be revealed at the official launch ceremony later this year.",
          "Commenting on the occasion, Engineer Faris Saeed, Chairman of Diamond Developers said, “We are very excited to join hands with OMRAN to execute our first project in Oman, and to work together on preserving the Sultanate’s rich natural environmental resources in accordance with the best global green practices. Over the past decade, we have gained and harnessed invaluable knowledge from our working proof-of-concept, which we are leveraging to set new standards for building sustainable and resilient cities with the highest sustainable standards to achieve a carbon-neutral future that also suits the local culture, environment, and economy.”",
          "Founded in 2003, Diamond Developers embodies a fundamental change in the concept of future cities; building, and maintaining sustainable, evidence-driven and intelligent, live-work-and-thrive cities. Their replicable & scalable cities bring forward the 2050 Paris Agreement targets, enhance quality of life, and bring significant in-country value. The company is committed to enabling, empowering, and supporting partners around the world to realise the cities of tomorrow, today. ",
        ],
      },
      {
        slug: "investment-value-news",
        title: [
          "Diamond Developers announce the launch of ‘The Sustainable City – Yiti’ with an investment ",
          "value of nearly one billion US dollars",
        ],
        date: "30th March, 2022",
        city: "Dubai",
        country: "UAE",
        image: "/Images/news/news_img3.jpg",
        type: "news",
        heading:
          "Strategic partnership between OMRAN Group and Diamond Developers.",
        discription: [
          "•	The fully integrated urban mixed-use project in Muscat meets the highest sustainability standards. ",
          "•	Spans over an area of one million square meters ",
          "•	The project will be net zero carbon by 2040",
          "Dubai – 30th March 2022: Earning a commendable reputation for being the leading developers of sustainable communities in the UAE, Diamond Developers in partnership with the Oman Tourism Development Company (OMRAN Group), announced the launch of ‘The Sustainable City – Yiti’ in Muscat, today. With an investment value of nearly one billion US dollars, the city is the first project in Oman that meets the highest global green practices and adheres to the highest sustainability standards. ",
          "Spread over an area of 1 million square meters, ‘The Sustainable City – Yiti’ – will be developed within the phase 1 of the Yiti Integrated Tourism Development Masterplan - is the first project in Oman that meets the global green practices and is in adherence to the highest sustainability standards. This iconic destination is situated in the capital city of Muscat, overlooking the Sea of Oman and features a unique topography of majestic mountains that mingle with undisturbed valleys and pristine shores, which creates further competitive advantages to the destination.",
          "Engineer Faris Saeed, Chairman of Diamond Developers said, “The Sustainable City – Yiti is not only a benchmark for sustainable urban development, it is a working model for future cities. It is a thriving community made up of thousands of residents, visitors, students, researchers, and entrepreneurs” he added. “The project is expected to be one of the region’s most sustainable cities, and by adopting the latest solutions in energy production, vertical farming, humidity harvesting, and autonomous transportation, we aim to be net zero carbon by 2040, in line with Oman’s vision and national strategy. At Diamond Developers, we remain committed to empowering and supporting partners around the world to realise the cities of tomorrow, today to deliver a more sustainable future for all of us.”",
          "Further commenting on the launch, Eng. Mohammed Salim Al Busaidi, Chairman of OMRAN Group, said, “Our partnership with Diamond Developers to launch ‘The Sustainable City – Yiti’ is a unique milestone in our journey as we continue to invest, develop, and maximise the limitless potential of Oman’s tourism sector. As it’s being developed withinone of the largest urban developments in the Middle East, Yiti will open avenues for numerous lucrative investment opportunities for both local and international investors in line with the directions of Oman Investment Authority. Mirroring the Sultanate’s goal of driving transformational change to attain a green, circular economy and emissions reduction, the city embraces the highest standards of sustainability and attests to our vision of creating an eco-conscious community that is harmoniously aligned with the distinct geography of the region.”",
          "With sustainable innovation at the heart of the development, the project will feature 1657 residential units including 300 eco-friendly and energy-efficient villas. Designed for comfort, practicality, and style, the spacious 3 and 4 bedroom villas will also offer significant savings on utility bills.",
          "In line with the UN Sustainable Development Goals to reduce dependency on non-renewable sources of energy, the city is designed to produce 100 percent of its energy requirements from renewables which include solar panels and biogas. It will also recycle all its water and waste and use it for irrigation. Acknowledging the importance of creating a community that is self-sustaining, the city aims to grow its own food through productive farm areas and greenhouses. Encouraging community members to be a part of the process, private farming slots will also be allocated for residents to grow their own produce. ",
          "With a holistic approach to sustainability, the city will play a significant role in reducing carbon emissions by adopting clean mobility solutions like autonomies shuttles and electric cars, and by deploying EV charging stations around the project. The residential areas, designed to be car-free, will not only provide a safe environment for families but also encourage residents to build strong social connections within the community.",
          "Dedicated to nurturing a new generation that understands the value of sustainability, the city will include a sustainable school that will teach important concepts of sustainability through the school curriculum. It will feature a ‘SEE lab’ which will showcase the latest in sustainability solutions like renewable energy technologies, indoor vertical farming, and humidity harvesting. With an innovative carbon natural building, the ‘SEE Institute’ will, additionally, focus on promoting awareness on environmental issues and sustainable living.",
          "Striking the right balance between sustainability goals and promoting wellness, the city will feature a number of sports facilities which include jogging and cycling tracks, an equestrian club, and a horse track. It will also include a plaza that hosts a selection of commercial outlets, like shops, restaurants, and cafes.",
          "In an endeavor to support eco-tourism, the project will feature a four-star neighborhood hotel with 197 rooms, a five-star resort with 170 rooms and a range of restaurants, numerous leisure facilities, and beachfront access. The resort will also manage 132 luxury serviced apartments to further accommodate the diverse needs of visitors. ",
          "The Sustainable City- Yiti positions itself as a working model for future cities that meets the highest sustainability standards. Upon completion in 2025, the city will go beyond enhancing the quality of life of its residents, taking an integrated and inclusive approach to urban life and amalgamating green, energy efficient designs with a people-centric philosophy. By addressing local social, environmental, and economic concerns, The Sustainable City acts as a catalyst for change that is intelligent, scalable, resilient, and replicable.",
        ],
      },
      {
        slug: "environment-clean-marinedebris",
        title: [
          "The Sustainable City - Yiti and The Environment Society of Oman Partner   ",
          "to Clear over 1.5 Tons of Marine Debris from Muscat’s beaches",
        ],
        date: "18th September, 2022",
        city: "Oman",
        country: "Muscat",
        image: "/Images/news/news_img4.png",
        type: "news",
        heading:
          "The beach cleanup took place, along Al Hail beach to mark World Cleanup Day.",
        discription: [
          "•	Attendance exceeded expectation as more than 125 members of the community rallied to clear over 1.5 tons of trash from Oman’s beaches  ",
          "•	Protecting the environment and conserving Oman’s rich biodiversity are among the key objectives of The Sustainable City – Yiti, in line with Oman’s vision 2040. ",
          "Muscat, Oman – To mark World Cleanup Day, The Sustainable City- Yiti, alongside Oman Tourism Development Company (OMRAN Group), Diamond Developers, and the Environment Society of Oman (ESO), organized a community cleanup campaign along Al Hail beach, resulting in more than 1.5 tons of marine litter being removed from the beaches. The cleanup saw an astonishing attendance from the Omani community, with more than 125 volunteers rallying to clear trash from one of Oman’s most popular beaches. As a result, millions of plastic and micro-plastic particles have been held from entering the marine ecosystem, helping to preserve the environment and wildlife bionetwork.",
          "Eng Ammar Al Kharusi, Development Director, Yiti Tourism Development Company, said; Protecting the environment and preserving its natural resources and biodiversity are among the strategic priorities of the Sustainable City - Yiti. The 1 million square meters project is designed to preserve natural resources and provide residents with a sustainable lifestyle.",
          "Al Kharusi praised the efforts of the Environment Society of Oman, saying: We hope that such campaigns can contribute to raising awareness about the importance of maintaining a clean environment, and properly reducing waste production and disposal, as well as instilling a culture of volunteerism among youth.",
          "Suaad Al Harthi, ESO Director, said It has been a pleasure to collaborate with The Sustainable City - Yiti to bring this campaign to life. The response from the community was inspiring and serves as a reminder to us all of our shared responsibility for the conservation of our environment. On the occasion of World Cleanup Day however, we also remind the community that where there is no waste, there is no need for cleanups! There are many steps we can take to reduce the amount of waste we produce and to dispose of the waste we do create responsibly. Oman is blessed with one of the most stunning coastlines in the region and we hope that this beach cleanup inspires the community to continue maintaining its natural resources.",
          "The campaign was organized in recognition of World Cleanup Day, an annual global social action program aimed at combatting the global waste problem, whilst also raising awareness about the dangers of waste to both human and environmental health. ",
          "Additionally, protecting the environment and conserving Oman’s rich biodiversity are among the key objectives of The Sustainable City – Yiti, which aligns with Oman’s Vision 2040. The project, which is a partnership between OMRAN Group and Diamond Developers, will be the largest and most sustainable operational sustainable community in the region. It is designed to deliver measurable outcomes across all the three pillars of sustainability: social, environmental, and economic, bringing forward the UN emission reduction targets for 2050. Waste management will also be a key priority within the community, with sufficient in-built recycling and disposable systems designed to keep waste out of landfill and the environment. ",
          "As part of their mission to help conserve Oman's natural heritage, ESO undertakes numerous beach and underwater clean ups each year. To date in 2022, ESO, with the support of over two hundred volunteers, has cleared more than 72 tons of marine debris from our beaches and coral reefs.  These events are not possible without the help of the community. To do your part, sign up to become an ESO member at www.eso.org.om. ",
          "To learn more about The Sustainable City Yiti, visit www.thesustainablecity-yiti.com ",
        ],
      },
    ],
  },
  newspage: {
    locationtitle: "MUSCAT | OMAN",
    title1: `The Sustainable City - Yiti Signs Escrow`,
    title2: `Agreement with Sohar Islamic`,
    date: "29th July, 2022",
    desctitle1:
      "Britain to open up, Ramadan begins. It feels like perfect timing, with Russia cheif army scrubbling over the issue.",
    desctitle2: "Calculating earnings in the Partner Program ",
    descpara1:
      "Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.",
    descpara2:
      "Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.",
    descpara3:
      "Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.",
    descpara4:
      "Thus, when using the definite article, the speaker assumes the listener knows the identity of the noun’s referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent. Use of an indefinite article implies that the speaker assumes the listener does not have to be told the identity of the referent.",
  },

  partners: {
    title1: "We are proud of our",
    title2: "PROJECT PARTNERS",
    diamond: <Diamond />,
    omran: <Omran />,
  },
  findyourvilla: {
    title1: "Caption",
    title2: "Experience Sustainable Living",
    description:
      "The project is designed to improve The Sustainable City Yiti has gone to great lengths in increasing the sense of community feel with the facilities and services provided.",
    cards: [
      {
        id: 0,
        icon: <Car />,
        title1: "Shared EV",
        title2: "Network",
        description:
          "Shared EV or buggy networks within the community further facilitates clean mobility and encourages users to forgo their cars..",
      },
      {
        id: 1,
        icon: <Drop />,
        title1: "Wastewater",
        title2: "Recycling",
        description:
          "Our cities aim to recycle 100% of their wastewater and use the resulting treated sewage effluent to irrigate the landscape.",
      },
      {
        id: 2,
        icon: <House />,
        title1: "Thermal",
        title2: "Insulation",
        description:
          "By using products with high insulation levels in our buildings, we are able to create a well insulated envelope that significantly reduces energy demand.",
      },
      {
        id: 3,
        icon: <Bin />,
        title1: "Renewable",
        title2: "Energy",
        description:
          "We rely on clean renewable sources to generate energy for our cities. These systems include but are not limited to solar PV cells, biogas plants and wind turbines.",
      },
      {
        id: 4,
        icon: <Station />,
        title1: "EV Charging",
        title2: "Stations",
        description:
          "EV chargers are distributed around our cities to further promote the use of electric cars.",
      },
      {
        id: 5,
        icon: <SmartHouse />,
        title1: "Smart",
        title2: "Home",
        description:
          "By integrating smart technologies to manage our systems, we are able to drive higher efficiencies across all platforms, allowing us to maximise the use of our assets and resources.",
      },
      {
        id: 6,
        icon: <Plant />,
        title1: "Low-Carbon",
        title2: "Embodiment",
        description:
          "We aim to maximise the use of low-embodied carbon materials and products in order to help us achieve our net zero carbon goals.",
      },
      {
        id: 7,
        icon: <World />,
        title1: "Food",
        title2: "Production",
        description:
          "By facilitating community gardening initiatives, residents are encouraged to grow their own food and further promote local food production within our developments.",
      },
    ],
  },
  aboutus: {
    title: "A working model for future cities",

    statistics: [
      {
        title: "Square Meters",
        data: "1",
        sub: "M",
      },

      {
        title: "Residential Units",
        data: "1650",
        sub: "+",
      },
      {
        title: "Water Recycling",
        data: "100",
        sub: "%",
      },
      {
        title: "Jogging Tracks",
        data: "7.4",
        sub: "Km",
      },
      {
        title: "Carbon Footprint Reduction",
        data: "75",
        sub: "%",
      },
    ],
    story: {
      p1: "Oman Tourism Development Company (",
      s1: "Omran",
      p2: ") and ",
      s2: "Diamond Developers",
      p3: " have joined forces to develop a world-class, mixed use project that meets the highest standards of social, environmental, and economic sustainability. Perched on the picturesque coastline, overlooking the Gulf of Oman, The Sustainable City Yiti (TSC Yiti) brings together a pioneering vision of sustainability and an unparalleled quality of community living to Oman. The project, designed to improve quality of life for residents, makes no compromises on the needs of future generations. Directed by some of the best thought leaders in the world, TSC Yiti presents opportunities for research and learning, empowering residents to lead the change towards minimizing our carbon footprint, realizing the goals of the future today.",
      p4: "Using clean energy, water & waste recycling, food production, clean mobility, and better air quality, Oman's first",
      s3: " net-zero",
      p5: " energy city and it keeps people at its heart. The strength of community spirit endures here as we come together with our residents to lead the change towards a brighter tomorrow. The Sustainable City Yiti follows the blueprint for low carbon living that was pioneered by the first ",
      s4: "Sustainable City in Dubai",
      p6: " in 2016.",
    },
    joinus: {
      title: "Join us in inspiring a better and a brighter tomorrow. ",
      desc: "The project is designed to improve the quality of life for residents without compromising the needs of future generations.",
    },
    othercity: {
      heading1: "Other Cities by",
      heading2: "Diamond Developers",
      city1: "Sharjah Sustainable City",
      city2: "The Sustainable City - Dubai",
      country: "UAE",
    },
  },
  contact: {
    register: {
      title: "Broker Registration",

      info: {
        title: "Contact Information",
        description:
          "Fill up the form and our team will try to help you with your query.",
        data: [
          {
            title: "Email",
            content: "hello@thesustainablecity-yiti.com",
            icon: <Email />,
          },
          {
            title: "Address",
            content: "Mina Al Sultan Qaboos Centre Yiti, Sultanate of Oman",
            icon: <Pin />,
          },
          {
            title: "Toll-Free",
            content: "+968 8000 33 33",
            icon: <Tel />,
          },
          {
            title: "Working Hours",
            content: "Sun - Thu: 09:00AM - 07:00PM",
            content2: "Sat: 10:00AM - 7:00PM",
            icon: <Clock />,
          },
        ],
        socialmedia: [
          {
            icon: <Facebook />,
            link: "/",
          },
          {
            icon: <Linkedin />,
            link: "/",
          },
          {
            icon: <Instagram />,
            link: "/",
          },
          {
            icon: <Twitter />,
            link: "/",
          },
        ],
      },
      individual: "Individual",
      corporate: "Corporate",
      formdata: {
        company: {
          title: "Company Name",
          placeholder: "Wallace Co.",
        },
        companyContact: {
          title: "Company Contact",
          placeholder: "xyz.company.com",
        },
        license: {
          title: "Cooperate License Number",
          placeholder: "0000000000",
        },
        name: {
          title: "Full Name",
          placeholder: "John Doe",
        },
        villas: {
          title: "Villa you are interested in ",
          villa: [
            "4 Bedroom Garden Villa",
            "4 Bedroom Courtyard Villa",
            "3 Bedroom Courtyard Villa",
          ],
        },
        email: {
          title: "Mail",
          placeholder: "example@gmail.com",
        },
        phone: {
          title: "Phone",
          placeholder: "+968 000 000000",
        },
      },
    },
    visitus: {
      title: "Visit us anytime",
      description:
        "The project is designed to improve the quality of life for residents without compromising the needs of future generations.",
      location: "Mina Al Sultan Qaboos Centre Yiti",
    },
    submitanotherinterest: "Submit another interest",
    thanksdesc:
      "Our Sales and Marketing team will get back to you soon on your given contact number and email. Don’t forget to keep checking your emails inbox and spam folder.",
  },
  footer: [
    {
      title: "Navigation",
      links: [
        {
          text: "Find your dream home",
          link: "/floorplan",
        },
        {
          text: "Newsroom",
          link: "/news",
        },
        {
          text: "About us",
          link: "/about",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          text: "Reach out to us",
          link: "/contact",
        },
        {
          text: "Become a broker",
          link: "/contact?broker=true",
        },
      ],
    },
    {
      title: "More from TSC",
      links: [
        {
          text: "About diamond developers",
          link: "https://diamond-developers.ae/",
        },
        {
          text: "TSC - Dubai",
          link: "https://www.thesustainablecity.ae/",
        },
        {
          text: "TSC - Sharjah",
          link: "https://www.sharjahsustainablecity.ae/",
        },
      ],
    },
    {
      title: "Contact Information",
      links: [
        {
          title: "Email:",
          link: "hello@thesustainablecity-yiti.com",
        },
        {
          title: "Toll-free:",
          link: "+968 8000 33 33",
        },
      ],
    },
  ],
};

export default english;
