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

  card.forEach((card) => {
    card.addEventListener("click", (e) => {
      const cardTitle = e.target.children[1].children[0].innerText;
  
      // const imgUrl = e.target.children[0].children[0].src;
      const image = e.target.style.backgroundImage;
      const cardUrl = image.slice(5, -2); 
  
      // storable values to display
      storyTitle.innerText = cardTitle;
      const displayStory = document.querySelector('.display-story').style.backgroundImage=`url(${cardUrl})`;
  
      // active div story card 
      storyCard.classList.add("active");
  
      // close buuton clicking action
      const storyClose = document.querySelector('.story-close');
      storyClose.addEventListener('click', () => {
        storyCard.classList.remove('active');
      });
    });
  });
