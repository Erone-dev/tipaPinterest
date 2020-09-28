'use strict'

var num = 0;

function addContent(link, img_link) {
    var code = "<div class='pin'><div class='img'><div><a target='_blank' href='" + link + "'><img data-src='" + img_link + "' alt='img-" + num + "'></a></div></div></div>"
    $(".content-sec").prepend(code);
    num += 1;
}

var link = "https://picsum.photos/images";
addContent(link,"https://picsum.photos/id/1016/350/350");
addContent(link,"https://picsum.photos/id/666/350/350");
addContent(link,"https://picsum.photos/id/160/350/350");
addContent(link,"https://picsum.photos/id/100/350/350");
addContent(link,"https://picsum.photos/id/96/300/350");
addContent(link,"https://picsum.photos/id/201/350/350");
addContent(link,"https://picsum.photos/id/58/300/350");
addContent(link,"https://picsum.photos/id/61/350/350");
addContent(link,"https://picsum.photos/id/132/300/350");
addContent(link, "https://picsum.photos/id/1032/350/350");
addContent(link,"https://picsum.photos/id/98/300/350");
addContent(link,"https://picsum.photos/id/1015/300/350");
addContent(link,"https://picsum.photos/id/1020/350/350");
addContent(link,"https://picsum.photos/id/28/350/350");
addContent(link,"https://picsum.photos/id/17/350/350");
addContent(link,"https://picsum.photos/id/8/350/350");
addContent(link,"https://picsum.photos/id/861/350/350");
addContent(link,"https://picsum.photos/id/554/350/350");
addContent(link,"https://picsum.photos/id/789/350/350");
addContent(link,"https://picsum.photos/id/342/350/350");

$(".menu").click(() => {
    $(".menu-btn").toggleClass("menu-icon-active");
    $(".menu-sec").toggleClass("open-menu");
    //$(".menu").toggleClass("menu-move");
    if(!($(".menu-sec").hasClass("open-menu"))){
        setTimeout(()=>{$(".menu-items").toggleClass("shr-menu");}, 500);
        $(".content-sec").removeClass("active-content");
    } else {
        $(".menu-items").removeClass("shr-menu");
        $(".content-sec").addClass("active-content");
    }
})

$("#search-inp").focusin(()=>{
    $(".search").removeClass("anim");
});

$("#search-inp").focusout(()=>{
    $(".search").addClass("anim");
});