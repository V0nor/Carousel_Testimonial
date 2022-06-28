const reviews = [
    {
        id:1,
        name:'Sara Jhones',
        job:'UX DESIGNER',
        img:"img/girl.jpg",
        text:' Lorem ipsum odor amet, consectetuer adipiscing elit. Mus rutrum tristique. Urna eros litora odio. Penatibus ligula iaculis justo. Ante id auctor curabitur. Ligula libero cursus. Adipiscing adipiscing aliquet accumsan.',
    },
    {
        id:2,
        name:'Susan Smith',
        job:'FRONT-END',
        img:"img/girl2.jpg",
        text:' Lorem ipsum odor amet, consectetuer adipiscing elit. Mus rutrum tristique. Urna eros litora odio. Penatibus ligula iaculis justo. Ante id auctor curabitur. Ligula libero cursus. Adipiscing adipiscing aliquet accumsan.',
    },
    {
        id:3,
        name:'Phil Jones',
        job:'BACK-END',
        img:"img/man.jpg",
        text:' Lorem ipsum odor amet, consectetuer adipiscing elit. Mus rutrum tristique. Urna eros litora odio. Penatibus ligula iaculis justo. Ante id auctor curabitur.',
    },
]

const img = document.getElementById('person__img');
const author = document.getElementById('js-author');
const job = document.getElementById('js-job');
const info = document.getElementById('js-info');

const nextBtn = document.querySelector('.btn__next');
const prevBtn = document.querySelector('.btn__prev');
const randomBtn = document.querySelector('.btn--random')


let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson()
})



function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson()
})

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
})

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})
