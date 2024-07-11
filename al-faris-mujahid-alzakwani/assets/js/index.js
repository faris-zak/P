const userIcon = document.getElementById('userIcon');
const socialMedia = document.getElementById('socialMedia');
const smIcons = document.getElementById('smIcons');

userIcon.addEventListener('click', () => {
  if(socialMedia.style.opacity === '1'){
    userIcon.style.boxShadow = 'none';
    userIcon.style.transform = 'scale(0.95)';
    socialMedia.style.opacity = '0';
    socialMedia.style.transform = 'translateX(-90px)';
  } else{
        userIcon.style.boxShadow = '0 0 20px rgba(150, 150, 150, 0.8)';
        userIcon.style.transform = 'scale(1.05)';
        socialMedia.style.opacity = '1';
        socialMedia.style.transform = 'translateX(26px)';
    }
});