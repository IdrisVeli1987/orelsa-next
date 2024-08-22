const menu = (): { id: string; link: string; name: string }[] => {
  return [
    {
      id: "1",
      name: "Home",
      link: "/",
    },
    {
      id: "2",
      name: "Shop",
      link: "/shop",
    },
    {
      id: "3",
      name: "Contact",
      link: "/contact",
    },
  ];
};
export default menu;
