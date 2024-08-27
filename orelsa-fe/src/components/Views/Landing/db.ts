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
