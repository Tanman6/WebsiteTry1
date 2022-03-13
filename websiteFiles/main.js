// grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly`);
};

//nav styles on scroll
const scrollHeader = () =>{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classlist.add('activated');
    }else{
        headerElement.classlist.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-icon');

 toggleMenu() = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classlist.toggle('activated');
    menuToggleIcon.classlist.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

//switch theme/ add to local storage
const body = document.body;
const themeToggleBtn = selectElement('theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme')

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classlist.toggle('light-theme');

    if(bodyElement.classList.toggle('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
    });
// Check to see if there is a theme preference in local Storage, if so add the light theme to the body
