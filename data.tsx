const districtList = [
  {
    title: "Alipurduar",
    image: {
      source: "../../assets/images/l1.png",
    },
    latitude: 26.4924290524708,
    longitude: 89.53258329733393,
  },
  {
    title: "Kolkata",
    image: {
      source: "../../assets/images/l11.png",
    },
    latitude: 22.530784457538843,
    longitude: 88.36430096986835,
  },

  {
    title: "Bankura",
    image: {
      source: "../../assets/images/l2.png",
    },
    latitude: 23.236336940116633,
    longitude: 87.0657922093798,
  },
  {
    title: "Malda",
    image: {
      source: "../../assets/images/l12.png",
    },
    latitude: 25.006910966944186,
    longitude: 88.13619596079482,
  },
  {
    title: "Birbhum",
    image: {
      source: "../../assets/images/l3.png",
    },
    latitude: 23.935768849423635,
    longitude: 87.68555984337605,
  },
  {
    title: "Murshidabad",
    image: {
      source: "../../assets/images/l13.png",
    },
    latitude: 24.18245483214275,
    longitude: 88.27797782687199,
  },
  {
    title: "Cooch Behar",
    image: {
      source: "../../assets/images/l4.png",
    },
    latitude: 26.33703870288076,
    longitude: 89.44971948902496,
  },
  {
    title: "Nadia",
    image: {
      source: "../../assets/images/l14.png",
    },
    latitude: 23.430681467200458,
    longitude: 88.54430719964577,
  },
  {
    title: "Dakshin Dinajpur",
    image: {
      source: "../../assets/images/l5.png",
    },
    latitude: 25.364605147751156,
    longitude: 88.59826996240544,
  },
  {
    title: "North 24 Parganas",
    image: {
      source: "../../assets/images/l15.png",
    },
    latitude: 22.758843567078827,
    longitude: 88.70363508034794,
  },
  {
    title: "Darjeeling",
    image: {
      source: "../../assets/images/l6.png",
    },
    latitude: 27.037164396727178,
    longitude: 88.26398734469534,
  },
  {
    title: "Paschim Bardhaman",
    image: {
      source: "../../assets/images/l16.png",
    },
    latitude: 23.62132407338012,
    longitude: 87.27376045198426,
  },
  {
    title: "Hooghly",
    image: {
      source: "../../assets/images/l7.png",
    },
    latitude: 22.90084218346584,
    longitude: 88.39591181777556,
  },
  {
    title: "Paschim Medinipur",
    image: {
      source: "../../assets/images/l17.png",
    },
    latitude: 22.446187632085792,
    longitude: 87.42312893661592,
  },
  {
    title: "Howrah",
    image: {
      source: "../../assets/images/l8.png",
    },
    latitude: 22.575012010694504,
    longitude: 88.20680932952068,
  },
  {
    title: "Purba Bardhaman",
    image: {
      source: "../../assets/images/l18.png",
    },
    latitude: 23.354260064205892,
    longitude: 87.96128891992406,
  },
  {
    title: "Jalpaiguri",
    image: {
      source: "../../assets/images/l9.png",
    },
    latitude: 26.535055300682,
    longitude: 88.70232480033232,
  },

  {
    title: "Purba Medinipur",
    image: {
      source: "../../assets/images/l19.png",
    },
    latitude: 22.066551805626805,
    longitude: 87.81896173226569,
  },
  {
    title: "Jhargram",
    image: {
      source: "../../assets/images/l10.png",
    },
    latitude: 22.45229537181998,
    longitude: 87.00237228042647,
  },

  {
    title: "Purulia",
    image: {
      source: "../../assets/images/l20.png",
    },
    latitude: 23.32869167039008,
    longitude: 86.36358869108956,
  },
  {
    title: "Kalimpong",
    image: {
      source: "../../assets/images/l11.png",
    },
    latitude: 27.064294781888105,
    longitude: 88.47518460398267,
  },
  {
    title: "South 24 Parganas",
    image: {
      source: "../../assets/images/l21.png",
    },
    latitude: 22.19229626520562,
    longitude: 88.49310910140885,
  },
  {
    title: "Uttar Dinajpur",
    image: {
      source: "../../assets/images/l12.png",
    },
    latitude: 25.818679834353752,
    longitude: 88.06419435826079,
  },
];

const MarkerSchema = new mongoose.Schema(
  {
    lattitude: {
      type: String,
      required: [true, "Lattitude is requireed"],
    },
    longitude: {
      type: String,
      required: [true, "Lattitude is required"],
    },
    email: {
      type: String,
      required: [true, "Marker poster Email required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (email) {
          const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return emailRegex.test(email);
        },
        message: "Please Enter a valid email",
      },
    },
    pandalName: {
      type: String,
      required: [true, "Pandal name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    district: {
      type: mongoose.Types.ObjectId,
      ref: "district",
    },
    feedbacks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "feedback",
      },
    ],
  },
  {
    timestamps: { createdAt: "cts", updatedAt: "mts" },
    collection: "markers.list",
  }
);
