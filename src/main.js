import "./style.css";
import "material-icons/iconfont/material-icons.css";

let comments = [
  {
    id: crypto.randomUUID(),
    username: "amyrobson",
    photo: "./src/assets/image-amyrobson-DIYtJakD.webp",
  },
  {
    id: crypto.randomUUID(),
    username: "juliusomo",
    photo: "./src/assets/image-juliusomo-GOpOiOke.webp",
  },
  {
    id: crypto.randomUUID(),
    username: "maxblagun",
    photo: "src/assets/image-maxblagun-BOzb0Wbd.webp",
  },
  {
    id: crypto.randomUUID(),
    username: "ramsesmiron",
    photo: "src/assets/image-ramsesmiron-C5YlnrVr.webp",
  },
];

const containerEl = document.querySelector("#container");

comments.forEach(()=> {
  containerEl.innerHTML += `
   <li class="comment bg-white">
      <div>
        <div class="flex justify-start gap-5">
          <img src="" alt="" />
          <span>name</span>
          <span>time</span>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          explicabo.
        </p>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <button>+</button>
          <span id="record">12</span>
          <button>-</button>
        </div>
        <div>
          <button>Reply</button>
        </div>
      </div>
    </li>
`;
})