export interface IRange {
  _id: string | number;
  browseRangePhoto: string;
  description: string;
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
  _id: string | number;
  photos: string[];
  name: string;
  description: string;
  discount_price: number;
  price: number;
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
    _id: 1,
    photos: ["/ShopRooms/img-1.svg"],
    name: "Syltherine",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price: 1200,
  },
  {
    _id: 2,
    photos: ["/ShopRooms/img-2.svg"],
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount_price: 50000,
    price : 0,
  },
  {
    _id: 3,
    photos: ["/ShopRooms/img-3.svg"],
    name: "Lolito",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price : 45,
  },
  {
    _id: 4,
    photos: ["/ShopRooms/img-4.svg"],
    name: "Respira",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price : 0,
  },
  {
    _id: 5,
    photos: ["/ShopRooms/img-5.svg"],
    name: "Syltherine",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price : 120,
  },
  {
    _id: 6,
    photos: ["/ShopRooms/img-6.svg"],
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price : 0,
  },
  {
    _id: 7,
    photos: ["/ShopRooms/img-7.svg"],
    name: "Lolito",
    description: "Stylish cafe chair",
    discount_price: 455000,
    price : 5000,
  },
  {
    _id: 8,
    photos: ["/ShopRooms/img-8.svg"],
    name: "Respira",
    description: "Stylish cafe chair",
    discount_price: 1000,
    price : 0,
  },
  {
    _id: 9,
    photos: ["/ShopRooms/img-9.svg"],
    name: "Syltherine",
    description: "Stylish cafe chair",
    discount_price: 25000,
    price : 5000,
  },
  {
    _id: 10,
    photos: ["/ShopRooms/img-10.svg"],
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount_price: 500,
    price : 0,
  },
  {
    _id: 11,
    photos: ["/ShopRooms/img-11.svg"],
    name: "Lolito",
    description: "Stylish cafe chair",
    discount_price: 9500,
    price : 200,
  },
  {
    _id: 12,
    photos: ["/ShopRooms/img-12.svg"],
    name: "Respira",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price : 600,
  },
  {
    _id: 13,
    photos: ["/ShopRooms/img-13.svg"],
    name: "Syltherine",
    description: "Stylish cafe chair",
    discount_price: 51000,
    price : 5000,
  },
  {
    _id: 14,
    photos: ["/ShopRooms/img-14.svg"],
    name: "Leviosa",
    description: "Stylish cafe chair",
    discount_price: 98000,
    price : 2600,
  },
  {
    _id: 15,
    photos: ["/ShopRooms/img-15.svg"],
    name: "Lolito",
    description: "Stylish cafe chair",
    discount_price: 7000,
    price : 0,
  },
  {
    _id: 16,
    photos: ["/ShopRooms/img-16.svg"],
    name: "Respira",
    description: "Stylish cafe chair",
    discount_price: 5000,
    price : 1200,
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
