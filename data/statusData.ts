export interface Status {
  id: number;
  name: string;
  img: string;
  stat: string;
}

export const statusData: Status[] = [
  {
    id: 1,
    name: "Your Status",
    img: "/images/Elon.png",
    stat: "/videos/swan.mp4",
  },
  {
    id: 2,
    name: "Jeff",
    img: "/images/Jeff.png",
    stat: "/videos/city.mp4",
  },
  {
    id: 3,
    name: "Mark",
    img: "/images/Mark.png",
    stat: "/videos/swan.mp4",
  },
  {
    id: 4,
    name: "Bill Gates",
    img: "/images/BillGates.png",
    stat: "/videos/city.mp4",
  },
];
