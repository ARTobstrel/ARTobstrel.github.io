$(function () {
    $('.gallery__inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enable: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
    });
});