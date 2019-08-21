document.body.onload = function (){
    setTimeout(function () {
        let preloader = document.getElementById('preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
};



document.getElementById('accordion').onclick = function (event) {
    var target = event.target;
    target.getElementsByClassName('accordion__item').onmouseover = function () {
        var s = target.getElementsByClassName('accordion__content');
        console.log(target);
    }

    // closeItem();
    // s[0].style.display = 'block';
};