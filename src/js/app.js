import * as $ from 'jquery'

// ADD ELEMENTS TO THE SKY
$(function () {
    const sky = $('#sky');
    sky.prepend(`<div class="stars-wall"></div>`)
    let top, left, t2;
    // adding stars
    const starsAmount = 80;
    const starsWall = $('.stars-wall');
    for (let i = 0; i <= starsAmount; i++) {
        left = Math.ceil(Math.random() * 100);
        top = Math.ceil(Math.random() * 100);
        t2 = Math.ceil(Math.random() * 7) + 1;
        const transform = `scale(0.${t2})`;
        const animationDuration = `${(Math.ceil(Math.random() * 4) + 1)}s`;
        starsWall.append(`<span class="star" style="top:${top}%;left:${left}%;
            -moz-transform:${transform};
            -o-transform:${transform};
            -ms-transform:${transform};
            -webkit-transform:${transform};
            transform:${transform}; 
            -moz-animation-duration:${animationDuration};
            -o-animation-duration:${animationDuration};
            -ms-animation-duration:${animationDuration};
            -webkit-animation-duration:${animationDuration};
            animation-duration:${animationDuration};
             "></span>`)
    }
    //adding sun
    sky.append(`<span class="sun"></span>`)
    //adding clouds
    const cloudsAmount = 10;
    for (let i = 0; i <= cloudsAmount; i++) {
        let animationDelay = `${(Math.ceil(Math.random() * 3)) * i}s`;
        top = Math.ceil(Math.random() * 85) + 1;
        sky.append(`<span class="cloud" style="top:${top}%;
            -moz-animation-delay:${animationDelay};
            -o-animation-delay:${animationDelay};
            -ms-animation-delay:${animationDelay};
            -webkit-animation-delay:${animationDelay};
            animation-delay:${animationDelay};
             "></span>`)
    }

});

// ADD ELEMENTS TO THE LAKE
$(function () {
    const lake = $('#lake');
    let top;
    // add sea-flowers
    const seaFlowersAmount = 10;
    for (let i = 0; i <= seaFlowersAmount; i++) {
        top = Math.ceil(Math.random() * 15) + 5;
        let animationDelay = `${(Math.ceil(Math.random() * 35))}s`;
        lake.append(`<span class="sea-flower" style="top:${top}%;
           -moz-animation-delay:${animationDelay};
            -o-animation-delay:${animationDelay};
            -ms-animation-delay:${animationDelay};
            -webkit-animation-delay:${animationDelay};
            animation-delay:${animationDelay};
             "></span>`)
    }
});

// HIDE POPUP AFTER FEW SECS
$(function () {
    setTimeout(() => {
        $('.popup')[0].classList.add('hidden')
    }, 5000)
});