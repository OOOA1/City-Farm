'use strict';

const greenBtn = document.querySelector('.greeb__btn');

// Плавное перемещение к секции сайта

greenBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.classList.contains('greeb__btn')) {
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
    }
});

const blackBtn = document.querySelectorAll('.black__button');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form');

// Открыть форму
const openForm = function() {
    form.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Закрыть форму
const closeForm = function() {
    overlay.classList.add('hidden');
    form.classList.add('hidden');
};

blackBtn.forEach(btn => {
    btn.addEventListener('click', openForm)
});

overlay.addEventListener('click', closeForm)

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        closeForm();
    };
});