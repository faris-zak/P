const userIcon = document.getElementById('userIcon');
const socialMedia = document.getElementById('socialMedia');
const smIcons = document.getElementById('smIcons');
const name = document.querySelector('span.name');

userIcon.addEventListener('click', () => {
  if(socialMedia.style.opacity === '1'){
    userIcon.style.boxShadow = 'none';
    userIcon.style.transform = 'scale(0.95)';
    name.style.opacity = '0';
    name.style.transform = 'translate(-60px, 28.5px)';
    socialMedia.style.opacity = '0';
    socialMedia.style.transform = 'translateX(-90px)';
  } else{
        userIcon.style.boxShadow = '0 0 20px rgba(150, 150, 150, 0.8)';
        userIcon.style.transform = 'scale(1.05)';
        name.style.opacity = '1';
        name.style.transform = 'translate(20px, 28.5px)';
        socialMedia.style.opacity = '1';
        socialMedia.style.transform = 'translateX(26px)';
    }
});