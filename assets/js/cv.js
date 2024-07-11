const userImage = document.getElementById('userImage');
const shape = document.getElementById('shape');
const mainContent = document.querySelector('main');
const links = document.querySelectorAll('a.fade');
const introSection = document.querySelector('section.intro');
const cvSection = document.querySelector('section.embedded-cv');


links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.style.opacity = '0';

    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1000);
  });
});

window.onload = () =>{
    userImage.style.transform = 'translateX(300px) translateY(300px)';
    userImage.style.maxWidth = '500px';
    shape.style.transform = 'translateX(-200px)';
    mainContent.style.opacity = '1';
};

userImage.addEventListener('mouseover', () => {
    userImage.style.transform = 'translate(0px)';
    userImage.style.maxWidth = '800px';
});

userImage.addEventListener('mouseout', () => {
    userImage.style.transform = 'translateX(300px) translateY(300px)';
    userImage.style.maxWidth = '500px';
});

shape.addEventListener('mouseover', () => {
    shape.style.opacity = '0.5';
    shape.style.transform = 'translateY(280px)';
});

shape.addEventListener('mouseout', () => {
    shape.style.opacity = '0.3';
    shape.style.transform = 'translateX(-200px)';
});