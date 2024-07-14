const userIcon = document.getElementById('userIcon-1');
const userIcon2 = document.getElementById('userIcon-2');
const socialMedia = document.getElementById('socialMedia');
const smIcons = document.getElementById('smIcons');
const name = document.querySelector('span.name');


userIcon.addEventListener('click', () => {
  if(socialMedia.style.opacity === '1'){
    userIcon2.style.transform = 'translate(-75px, 7px)';
    userIcon2.style.boxShadow = 'none';
    userIcon.style.boxShadow = 'none';
    userIcon.style.transform = 'scale(0.95)';
    name.style.opacity = '0';
    name.style.transform = 'translate(-60px, 28.5px)';
    socialMedia.style.opacity = '0';
    socialMedia.style.transform = 'translateX(-90px)';
  } else{
        userIcon2.style.transform = 'translate(20px, 7px)';
        userIcon2.style.boxShadow = '0 0 20px rgba(150, 150, 150, 0.5)';
        userIcon.style.boxShadow = '0 0 20px rgba(150, 150, 150, 0.8)';
        userIcon.style.transform = 'scale(1.05)';
        name.style.opacity = '1';
        name.style.transform = 'translate(100px, 28.5px)';
        socialMedia.style.opacity = '1';
        socialMedia.style.transform = 'translateX(26px)';
    }
});

const dropDownBtn = document.querySelector('.dropBtn');
const dropdownContent = document.querySelector('.dropdownContent');

dropDownBtn.addEventListener('change', function(){
  if(this.checked){
    dropdownContent.style.transform = 'translateX(0%)';
  } else{
    dropdownContent.style.transform = 'translateX(150%)';
  }
});