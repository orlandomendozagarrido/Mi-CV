//select DOM itmes

const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelector('.nav-itmes');


//set initial state of menu 
 let showMenu = false;

 menuBtn.addEventListener('click', toggleMenu);

 const toggleMenu =()=> {
 	if(!showMenu) {
      menuBtn.classList.add('show');
      menu.classList.add('close');
      menuNav.classList.add('close');
      menuBranding.classList.add('close');
      navItems.forEach(item => item.classList.add('show'));
     
     //show menu state
     showMenu = true;
 	}else{
      menuBtn.classList.remove('show');
      menu.classList.remove('close');
      menuNav.classList.remove('close');
      menuBranding.classList.remove('close');
      navItems.forEach(item => item.classList.remove('show'));
     
     //show menu state
     showMenu = false;
 	}
 }
