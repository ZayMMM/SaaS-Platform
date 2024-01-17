import CellImage from "../../assets/images/Cell.png";

const topSaleProductList = [
  {
    id: 1,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
  {
    id: 2,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
  {
    id: 3,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
  {
    id: 4,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
  {
    id: 5,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
  {
    id: 6,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
  {
    id: 7,
    product: "Text",
    brand: "Text",
    ecommerceSite: "Text",
    image: CellImage,
    saleUsd: "Text",
    priceUsd: "Text",
  },
];

const myProductList = [
  {
    id: 1,
    product: "Text",
    brand: "Text",
    category: "Text",
    image: CellImage,
  },
];

const myProductPriceTrendData = {
  showLegend: false,
  chartTitle: "Product Price Trend",
  subTitle: "",
  labels: [
    "2021-01",
    "2021-02",
    "2021-03",
    "2021-04",
    "2021-05",
    "2021-06",
    "2021-07",
    "2021-08",
  ],
  datasets: [
    {
      label: "Product Price Trend",
      backgroundColor: "#1fa083",
      borderColor: "#1fa083",
      data: [400, 600, 500, 100, 500, 400, 700, 600],
      fill: {
        target: "origin",
        above: "rgba(31, 160, 131, 0.3)",
      },
    },
  ],
};

const mySaleTrendData = {
  showLegend: false,
  chartTitle: "Sale Trend",
  subTitle: "",
  labels: [
    "2021-01",
    "2021-02",
    "2021-03",
    "2021-04",
    "2021-05",
    "2021-06",
    "2021-07",
    "2021-08",
  ],
  datasets: [
    {
      label: "Sale Trend",
      backgroundColor: "#1fa083",
      borderColor: "#1fa083",
      data: [400, 600, 500, 100, 500, 400, 700, 600],
    },
  ],
};

const myStockAvailabilityData = {
  chartTitle: "Stocks Availability",
  labels: ["In Stock", "Out of Stock"],
  datasets: [
    {
      data: [64, 43],
      backgroundColor: ["#E8684A", "#F6BD16"],
      borderColor: "transparent",
    },
  ],
};

const myBrandMentionData = {
  chartTitle: "Brand Mentioned",
  subTitle: "",
  labels: ["2021-01", "2021-02", "2021-03", "2021-04", "2021-05"],
  datasets: [
    {
      label: "Number of mentions",
      backgroundColor: "#1fa083",
      borderColor: "#1fa083",
      data: [100, 300, 200, 500, 700, 800],
    },
    {
      label: "Estimated Social Media Reach",
      backgroundColor: "#5AD8A6",
      borderColor: "#5AD8A6",
      data: [200, 500, 100, 800, 700, 300],
    },
  ],
};

export {
  topSaleProductList,
  myProductList,
  myProductPriceTrendData,
  mySaleTrendData,
  myStockAvailabilityData,
  myBrandMentionData,
};
