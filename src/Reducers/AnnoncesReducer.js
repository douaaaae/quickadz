const initialState = {
  annonces: [
    {
      id: 1,
      titre: "The Squish",
      description: "The Squish Sectional",
      categorie: "Furniture",
      prix: 15000,
      photos: ["The Squish Sectional.jpeg"],
      ville: "Rabat",
      datePoster: "2024-11-24",
    },
    {
      id: 2,
      titre: "Rounded Table ",
      description: "Rounded Table",
      categorie: "Furniture",
      prix: 1000,
      photos: ["table.jpeg"],
      ville: "Casablanca",
      datePoster: "2024-12-22",
    },
    {
      id: 3,
      titre: "Frame ",
      description: "Shop — abide art studio",
      categorie: "Frames",
      prix: 5000,
      photos: ["Shop — abide art studio.jpeg"],
      ville: "Rabat",
      datePoster: "2024-12-20",
    },
    {
      id: 4,
      titre: "Red Light",
      description: "light",
      categorie: "Furniture",
      prix: 3000,
      photos: ["lamp.jpeg"],
      ville: "Tanger",
      datePoster: "2024-12-20",
    },
    {
      id: 5,
      titre: "Bang & Olufsen H95",
      description: "Bureau spacieux pour vos affaires",
      categorie: "Electronics",
      prix: 500,
      photos: ["BANG & OLUFSEN Beoplay H95 Headphones - Brown.jpeg"],
      ville: "Tanger",
      datePoster: "2024-10-20",
    },
    {
      id: 6,
      titre: "Living room",
      description: "Living room",
      categorie: "Furniture",
      prix: 15000,
      photos: ["dec1.jpg"],
      ville: "Tanger",
      datePoster: "2024-12-18",
    },
    {
      id: 7,
      titre: "Grey Couch",
      description: "Couch",
      categorie: "Furniture",
      prix: 6000,
      photos: ["white.jpeg"],
      ville: "Tanger",
      datePoster: "2024-12-18",
    },
    {
      id: 8,
      titre: "Jelly Fish Light",
      description: "Light",
      categorie: "Furniture",
      prix: 5000,
      photos: ["Jellyfish.jpeg"],
      ville: "Tanger",
      datePoster: "2024-12-20",
    },
    {
      id:9,
      titre : "Headphones",
      description : "Brown Headphones",
      categorie : "Electronics",
      prix : 250,
      photos : ["marshall.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-23"
    },
    {
      id:10,
      titre : "3D Frame",
      description : "",
      categorie : "Frames",
      prix : 550,
      photos : ["3d.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-21"
    },    {
      id:11,
      titre : "Carolyn Misterek",
      description : "phones",
      categorie : "Frames",
      prix : 250,
      photos : ["Brown Frame.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-23"
    },    {
      id:12,
      titre : "Laptop stand",
      description : "Brown Headphones",
      categorie : "Electronics",
      prix : 150,
      photos : ["Amazon_com_ Laptop Stand, Lamicall Laptop Riser….jpeg"],
      ville : "Rabat",
      datePoster : "2024-12-23"
    },    {
      id:13,
      titre : "Couch",
      description : "couch",
      categorie : "Furniture",
      prix : 250,
      photos : ["beige.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-2"
    },
    {
      id:14,
      titre : "Navy Iphone Case",
      description : "couch",
      categorie : "Electronics",
      prix : 250,
      photos : ["phonecase4.jpeg"],
      ville : "Casablanca",
      datePoster : "2024-02-20"
    },
    {
      id:15,
      titre : "Frame",
      description : "Frame",
      categorie : "Frames",
      prix : 350,
      photos : ["frame2.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-2"
    },
    {
      id:16,
      titre : "AirPods Max",
      description : "Airpods max",
      categorie : "Electronics",
      prix : 200,
      photos : ["AirPods Max.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-30"
    },
    {
      id:17,
      titre : "Sofa",
      description : "couch",
      categorie : "Furniture",
      prix : 250,
      photos : ["Sofas.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-2"
    },
    {
      id:18,
      titre : "Dinner Table",
      description : "Dinner Table for 6",
      categorie : "Furniture",
      prix : 650,
      photos : ["dinner table.jpeg"],
      ville : "Tanger",
      datePoster : "2024-10-12"
    },
    {
      id:19,
      titre : "Caseative Case ",
      description : "case",
      categorie : "Electronics",
      prix : 250,
      photos : ["Caseative Case.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-2"
    },
    {
      id:20,
      titre : "Brown Lamp",
      description : "couch",
      categorie : "Furniture",
      prix : 250,
      photos : ["light.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-2"
    },
    {
      id:21,
      titre : "Flower Light",
      description : "light",
      categorie : "Furniture",
      prix : 250,
      photos : ["flower.jpeg"],
      ville : "Tanger",
      datePoster : "2024-12-2"
    },
    {
      id:22,
      titre : "Lenovo",
      description : "couch",
      categorie : "Electronics",
      prix : 250,
      photos : ["Microsoft Surface Laptop 3 - An Awesome Travel Laptop.jpeg"],
      ville : "Tanger",
      datePoster : "2024-10-2"
    },
    {
      id:23,
      titre : "Burrard",
      description : "couch",
      categorie : "Furniture",
      prix : 250,
      photos : ["Burrard.jpeg"],
      ville : "Rabat",
      datePoster : "2023-12-2"
    },
    {
      id:24,
      titre : "Couch",
      description : "couch",
      categorie : "Furniture",
      prix : 250,
      photos : ["beige.jpeg"],
      ville : "Tanger",
      datePoster : "2024-01-2"
    },
    
  ],
  filters: {
    categorie: '',
    ville: '',
  },
};

const AnnoncesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          categorie: action.payload,
        },
      };
    case 'SET_CITY_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          ville: action.payload,
        },
      };
    case 'ADD_ANNONCE': 
      return {
        ...state,
        annonces: [...state.annonces, { id: state.annonces.length + 1, ...action.payload }],
      };
    case 'DELETE_ANNONCE': 
      return {
        ...state,
        annonces: state.annonces.filter((annonce) => annonce.id !== action.payload),
      };
    default:
      return state;
  }
};

export default AnnoncesReducer;