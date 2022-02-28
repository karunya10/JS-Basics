function landScape(width, height) {
  return width > height ? true : false;
}

let w = 15;
let h = 20;
let imageMode = landScape(w, h);
console.log(imageMode);
