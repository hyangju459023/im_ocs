jQuery(document).ready(function() {
    var header = document.querySelector("#header");

    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }

    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset : 50 //205
    });
    // headroom.init();

});

jQuery(document).ready(function() {

    $(window).scroll(
    function(){
        //스크롤의 위치가 상단에서 450보다 크면
        if($(window).scrollTop() > 800){
        /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
            $('aside').addClass("fix");
            //위의 if문에 대한 조건 만족시 fix라는 class를 부여함
        }else{
            $('aside').removeClass("fix");
            //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함
        }
    }
);


});
