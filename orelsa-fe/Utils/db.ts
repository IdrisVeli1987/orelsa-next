export interface IRange {
  id: string | number;
  src: string;
  desc: string;
}

export interface IOurProducts {
  id: string | number;
  src: string;
  subTitle: string;
  desc: string;
  price: string | number;
  sales: string | number;
}

export interface IRooms {
  id: string | number;
  imagesrc: string;
}

export interface ShopRoom {
  id: string | number;
  src: string;
  title: string;
  subtitle: string;
  priceList: number;
  sale: number;
}

export interface AboutQuality {
  id: string | number;
  src: string;
  title: string;
  desc: string;
}

export interface Price {
  name: string;
  value: string;
}

export const TheRangeData: any = [
  {
    id: 1,
    src: "/TheRange/Group-1.svg",
    desc: "Dining",
  },
  {
    id: 2,
    src: "/TheRange/Group-2.svg",
    desc: "Living",
  },
  {
    id: 3,
    src: "/TheRange/Group-3.svg",
    desc: "Bedroom",
  },
];

export const TheOurProducts: IOurProducts[] = [
  {
    id: 1,
    src: "/OurProducts/1.svg",
    subTitle: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    sales: "Rp 3.500.000",
  },
  {
    id: 2,
    src: "/OurProducts/1.svg",
    subTitle: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    sales: "",
  },
  {
    id: 3,
    src: "/OurProducts/3.svg",
    subTitle: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    sales: "Rp 14.000.000",
  },
  {
    id: 4,
    src: "/OurProducts/4.svg",
    subTitle: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    sales: "",
  },
  {
    id: 5,
    src: "/OurProducts/5.svg",
    subTitle: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    sales: "",
  },
  {
    id: 6,
    src: "/OurProducts/6.svg",
    subTitle: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    sales: "",
  },
  {
    id: 7,
    src: "/OurProducts/7.svg",
    subTitle: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    sales: "Rp 14.000.000",
  },
  {
    id: 8,
    src: "/OurProducts/8.svg",
    subTitle: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    sales: "",
  },
];

export const Rooms: IRooms[] = [
  {
    id: 1,
    imagesrc: "/rooms/R-1.svg",
  },
  {
    id: 2,
    imagesrc: "/rooms/R-2.svg",
  },
  {
    id: 3,
    imagesrc: "/rooms/R-3.svg",
  },
];

export const Shoping: ShopRoom[] = [
  {
    id: 1,
    src: "/ShopRooms/img-1.svg",
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 1200,
  },
  {
    id: 2,
    src: "/ShopRooms/img-2.svg",
    title: "Leviosa",
    subtitle: "Stylish cafe chair",
    priceList: 50000,
    sale: 0,
  },
  {
    id: 3,
    src: "/ShopRooms/img-3.svg",
    title: "Lolito",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 45,
  },
  {
    id: 4,
    src: "/ShopRooms/img-4.svg",
    title: "Respira",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 0,
  },
  {
    id: 5,
    src: "/ShopRooms/img-5.svg",
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 120,
  },
  {
    id: 6,
    src: "/ShopRooms/img-6.svg",
    title: "Leviosa",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 0,
  },
  {
    id: 7,
    src: "/ShopRooms/img-7.svg",
    title: "Lolito",
    subtitle: "Stylish cafe chair",
    priceList: 455000,
    sale: 5000,
  },
  {
    id: 8,
    src: "/ShopRooms/img-8.svg",
    title: "Respira",
    subtitle: "Stylish cafe chair",
    priceList: 1000,
    sale: 0,
  },
  {
    id: 9,
    src: "/ShopRooms/img-9.svg",
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    priceList: 25000,
    sale: 5000,
  },
  {
    id: 10,
    src: "/ShopRooms/img-10.svg",
    title: "Leviosa",
    subtitle: "Stylish cafe chair",
    priceList: 500,
    sale: 0,
  },
  {
    id: 11,
    src: "/ShopRooms/img-11.svg",
    title: "Lolito",
    subtitle: "Stylish cafe chair",
    priceList: 9500,
    sale: 200,
  },
  {
    id: 12,
    src: "/ShopRooms/img-12.svg",
    title: "Respira",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 600,
  },
  {
    id: 13,
    src: "/ShopRooms/img-13.svg",
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    priceList: 51000,
    sale: 5000,
  },
  {
    id: 14,
    src: "/ShopRooms/img-14.svg",
    title: "Leviosa",
    subtitle: "Stylish cafe chair",
    priceList: 98000,
    sale: 2600,
  },
  {
    id: 15,
    src: "/ShopRooms/img-15.svg",
    title: "Lolito",
    subtitle: "Stylish cafe chair",
    priceList: 7000,
    sale: 0,
  },
  {
    id: 16,
    src: "/ShopRooms/img-16.svg",
    title: "Respira",
    subtitle: "Stylish cafe chair",
    priceList: 5000,
    sale: 1200,
  },
];

export const QualityData: AboutQuality[] = [
  {
    id: 1,
    src: "/Quality/1st.svg",
    title: "High Quality",
    desc: "crafted from top materials",
  },
  {
    id: 2,
    src: "/Quality/2nd.svg",
    title: "Warranty Protection",
    desc: "Over 2 years",
  },
  {
    id: 3,
    src: "/Quality/3rd.svg",
    title: "Free Shipping",
    desc: "Order over 150 $",
  },
  {
    id: 4,
    src: "/Quality/4.svg",
    title: "24 / 7 Support",
    desc: "Dedicated support",
  },
];

export const Prices: Price[] = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];


