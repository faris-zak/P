const userImage = document.getElementById('userImage');
const shape = document.getElementById('shape');
const mainContent = document.querySelector('main');
const links = document.querySelectorAll('a.fade');

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
    userImage.style.transform = 'translateX(0)';
    userImage.style.opacity = '1';
    shape.style.transform = 'translateY(0)';
    mainContent.style.transform = 'translateY(0)';
    mainContent.style.opacity = '1';
};

shape.addEventListener('mouseover', () => {
    shape.style.opacity = '0.5';
    shape.style.transform = 'translateY(-60px)';
});

shape.addEventListener('mouseout', () => {
    shape.style.opacity = '0.3';
    shape.style.transform = 'translateY(0)';
});

shape.addEventListener('click', () => {
    if(shape.style.transform === 'translateX(0px)'){
        shape.style.transform = 'translateX(-60px)';
    } else{
        shape.style.transform = 'translateX(0px)';
    }
});