const like = document.querySelectorAll(".like");

var colors = ["var(--blue)", "grey"],
  index = 0;
like.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.color = colors[index];
    index = (index + 1) % colors.length;
  });
});

const card = document.querySelectorAll(".card");
const storyCard = document.querySelector(".story-card");
const storyTitle = document.querySelector('.story-title');
const displayStory = document.querySelector('.display-story').style.backgroundImage;



card.forEach((card) => {
  card.addEventListener("click", (e) => {
    const cardTitle = e.target.children[1].children[0].innerText;

    // const imgUrl = e.target.children[0].children[0].src;
    const image = e.target.style.backgroundImage;
    const url = image.slice(5, -2); 

    // storable values to display
    storyTitle.innerText = cardTitle;
    displayStory.innerText = `url(${url})`;

    const urlStore = storyCard.children[0].style.backgroundImage;
    // const titleStore = storyCard.children[0].children[1].children[0].innerText;

    // active div story card 
    storyCard.classList.add("active");

    // close buuton clicking action
    const storyClose = document.querySelector('.story-close');
    storyClose.addEventListener('click', () => {
      storyCard.classList.remove('active');
    })


  });
});


/* <div class="story-card">
<div
  class="display-story"
  style="
    background: url();
    background-position: center;
    background-size: cover;
  "
>
  <div class="card-img">
    <img src="./img/avatar.jfif" class="story-avatar-img" />
  </div>
  <div class="story-content">
    <h4 class="story-title"></h4>
  </div>
</div>
<span class="material-icons story-close"> close </span>
</div> */