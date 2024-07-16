const button = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
    navigation.classList.toggle('show-navigation');
});