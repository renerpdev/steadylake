import * as $ from 'jquery'

$(function () {
    console.log('Thanks for using html-shell!')
});
$(function () {
    const starsWall = $('.stars-wall');
    let top, left, t2;
    const starsAmount = 80;
    for (let i = 0; i <= starsAmount; i++) {
        left = Math.ceil(Math.random() * 100);
        top = Math.ceil(Math.random() * 100);
        t2 = Math.ceil(Math.random() * 7) + 1;
        const transform = `scale(0.${t2})`;
        starsWall.append(`<span class="star" style="top:${top}%;left:${left}%;
            -moz-transform:${transform};
            -o-transform:${transform};
            -ms-transform:${transform};
            -webkit-transform:${transform};
            transform:${transform};
             "></span>`)
    }
});