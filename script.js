let ep = [];
const section = document.querySelector("episodes");
async function trueDitactive() {
  try {
    const req = await fetch("https://api.tvmaze.com/shows/5/episodes");
    ep = await req.json();
    ditactivEps(ep);
    // console.log(ep);
  } catch (err) {
    console.log(err);
  }
}
let slc = document.querySelector(".select");

function ditactivEps(eps) {
  eps.forEach((season) => {
    //creat
    let sec = document.createElement("section");
    let pic = document.createElement("img");
    let title = document.createElement("h6");
    let opt = document.createElement("option");
    let playIcone = document.createElement("i");
    let playTimer = document.createElement("i");
    let play = document.createElement("a");
    play.setAttribute("href", season.url);
    // console.log(eps);
    //selector
    let all = document.querySelector(".episodes");
    //text content
    opt.textContent = `${season.name} , ${season.season}-${season.number}`;
    pic.src = season.image.medium;
    title.textContent = `${season.name} , ${season.season}-${season.number}`;
    //add
    sec.classList.add("secTD");
    playIcone.classList.add("fa-solid", "fa-circle-play");
    playTimer.classList.add("fa-solid", "fa-clock");
    //appends
    document.body.append(sec);
    sec.append(pic);
    sec.append(title);
    slc.append(opt);
    play.append(playIcone);
    sec.append(play);
    sec.append(playTimer);
  });
  slc.addEventListener("change", function (evn) {
    const gav = document.querySelectorAll(".secTD h6");
    // console.log(evn.target.value);
    Array.from(gav).forEach((item) => {
      item.parentElement.style.display = "inline-block";
      if (evn.target.value) {
        if (item.textContent === evn.target.value) {
          item.parentElement.style.display = "inline-block";
        } else {
          item.parentElement.style.display = "none";
        }
      }
      // console.log(item);
      // console.log(item.textContent);
      // console.log(evn.target.value);
    });
  });
}
trueDitactive();

//serching
const serchBox = document.querySelector(".serch");
serchBox.addEventListener("keyup", function (evn) {
  let valueEp = evn.target.value.toLowerCase();
  let nameEps = document.querySelectorAll("h6");
  let secNew = document.querySelectorAll(".secTD");
  for (let i = 0; i < secNew.length; i++) {
    if (!secNew[i].innerText.toLowerCase().includes(valueEp)) {
      secNew[i].style.display = "none";
    } else {
      secNew[i].style.display = "inline-block";
    }
  }
});
