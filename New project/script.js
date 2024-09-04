import Glide from '@glidejs/glide';

// Ініціалізація Glide
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
    bound: true,
    autoplay: 3000,
}).mount();