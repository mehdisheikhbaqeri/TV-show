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

function ditactivEps(eps) {
  eps.forEach((season) => {
    //creat
    let sec = document.createElement("section");
    let pic = document.createElement("img");
    let title = document.createElement("h6");
    let opt = document.createElement("option");
    let playIcone = document.createElement("i");
    let playTimer = document.createElement("i");
    // console.log(eps);
    //selector
    let slc = document.querySelector(".select");
    let all = document.querySelector(".episodes");
    //text content
    opt.textContent = `${season.season}-${season.number},${season.name}`;
    pic.src = season.image.medium;
    title.textContent = ` ${season.name} , ${season.season}-${season.number}`;
    //add
    sec.classList.add("secTD");
    playIcone.classList.add("fa-solid", "fa-circle-play");
    playTimer.classList.add("fa-solid", "fa-clock");
    //appends
    document.body.append(sec);
    sec.append(pic);
    sec.append(title);
    slc.append(opt);
    all.append(sec);
    sec.append(playIcone);
    sec.append(playTimer);
  });
  console.log(slc);
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
      secNew[i].style.display = "block";
    }
  }
});
