import person1 from "src/assets/person/1.jpeg";
import person2 from "src/assets/person/2.jpeg";
import person3 from "src/assets/person/3.jpeg";
import person4 from "src/assets/person/4.jpeg";
import person5 from "src/assets/person/5.jpeg";
import post1 from "src/assets/post/1.jpeg";
import post2 from "src/assets/post/2.jpeg";
import post3 from "src/assets/post/3.jpeg";
import post4 from "src/assets/post/4.jpeg";
import post5 from "src/assets/post/5.jpeg";

export const Users = [
  {
    id: 1,
    profilePicture: person1,
    username: "ShinCode",
  },
  {
    id: 2,
    profilePicture: person2,
    username: "Yamaki",
  },
  {
    id: 3,
    profilePicture: person3,
    username: "Koga",
  },
  {
    id: 4,
    profilePicture: person4,
    username: "Matukubo",
  },
  {
    id: 5,
    profilePicture: person5,
    username: "Kikukawa",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "コツコツの積み重ねが大事。",
    photo: post1,
    date: "5分前",
    userId: 1,
    like: 20,
    comment: 4,
  },
  {
    id: 2,
    desc: "MERNスタックが楽しすぎる",
    photo: post2,
    date: "2分前",
    userId: 2,
    like: 140,
    comment: 13,
  },
  {
    id: 3,
    desc: "ShinCodeさんの解説が分かりやすい。",
    photo: post3,
    date: "10分前",
    userId: 3,
    like: 230,
    comment: 29,
  },
  {
    id: 4,
    photo: post4,
    date: "1分前",
    userId: 4,
    like: 10,
    comment: 1,
  },
  {
    id: 5,
    desc: "定期的に散歩した方が生産性が上がる。",
    photo: post5,
    date: "1分前",
    userId: 5,
    like: 100,
    comment: 3,
  },
];
