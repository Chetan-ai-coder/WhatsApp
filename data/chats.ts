export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: string;
  isFavourite: boolean;
  isGroup: boolean;
  callStatus: string;
  isAll: boolean;
  isArchived?: boolean;
}

export const chats: Chat[] = [
  {
    id: 1,
    name: "Elon Musk",
    lastMessage: "Tnx Chetan",
    time: "5:05 PM",
    unreadCount: 2,
    avatar: "/images/Elon.png",
    isFavourite: true,
    isGroup: false,
    callStatus: "Outgoing",
    isAll: true,
  },
  {
    id: 2,
    name: "Jeff",
    lastMessage: "Plzz reply Mr Chetan",
    time: "4:45 PM",
    unreadCount: 0,
    avatar: "/images/Jeff.png",
    isFavourite: true,
    isGroup: false,
    callStatus: "Missed",
    isAll: true,
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    lastMessage: "It's complex sir but I will try",
    time: "3:30 PM",
    unreadCount: 1,
    avatar: "/images/Mark.png",
    isFavourite: true,
    isGroup: false,
    callStatus: "Incoming",
    isAll: true,
  },
  {
    id: 4,
    name: "Bill Gates",
    lastMessage: "Not a big deal for me",
    time: "2:00 PM",
    unreadCount: 0,
    avatar: "/images/BillGates.png",
    isFavourite: true,
    isGroup: false,
    callStatus: "Outcoming",
    isAll: true,
  },
  {
    id: 5,
    name: "Elisha",
    lastMessage: "Are you free this sunday?",
    time: "1:30 PM",
    unreadCount: 5,
    avatar: "/images/Randi.png",
    isFavourite: true,
    isGroup: false,
    callStatus: "Missed",
    isAll: true,
  },
  {
    id: 6,
    name: "Elisha Husband",
    lastMessage: "Stay away from her",
    time: "1:25 PM",
    unreadCount: 9,
    avatar: "/images/RandiHusband.png",
    isFavourite: true,
    isGroup: false,
    callStatus: "Incoming",
    isAll: true,
  },
  {
    id: 7,
    name: "Volt",
    lastMessage: "Bhai baat hui",
    time: "2:25 PM",
    unreadCount: 1,
    avatar: "/images/RandiHusband.png",
    isFavourite: false,
    isGroup: false,
    isArchived: true,
    callStatus: "Incoming",
    isAll: false,
  },
];
