// grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went wrong, make sure that ${selector} exists or is typed correctly')
};

//styles on scroll
const scrolHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classlist.add('activated');
    }else{
        headerElement.classlist.remove('activated');
    }
};

const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classlist.tooggle('activated')
    menuToggleIcon.classlist.toggleMenu('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

//switch theme
const bodyElement = document.body;
const themeToggleBtn = selectElement('theme-toggle-btn')

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classlist.toggle('light-theme');
});