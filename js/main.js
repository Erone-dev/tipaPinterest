'use strict'

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



var num = 0;

function addContent(link, img_link) {
    var code = "<div class='pin'><div class='img'><div><a target='_blank' href='" + link + "'><img data-src='" + img_link + "' alt='img-" + num + "'></a></div></div></div>"
    $(".content-sec").prepend(code);
    num += 1;
}

var link = "https://picsum.photos/images";
addContent(link,"https://picsum.photos/id/1016/300/300");
addContent(link,"https://picsum.photos/id/200/300/300");
addContent(link,"https://picsum.photos/id/160/300/300");
addContent(link,"https://picsum.photos/id/100/300/300");
addContent(link,"https://picsum.photos/id/96/200/300");
addContent(link,"https://picsum.photos/id/201/300/300");
addContent(link,"https://picsum.photos/id/58/200/300");
addContent(link,"https://picsum.photos/id/61/300/300");
addContent(link,"https://picsum.photos/id/132/200/300");
addContent(link, "https://picsum.photos/id/1032/300/300");
addContent(link,"https://picsum.photos/id/98/200/300");
addContent(link,"https://picsum.photos/id/1015/200/300");
addContent(link,"https://picsum.photos/id/1020/300/300");
addContent(link,"https://picsum.photos/id/28/300/300");
addContent(link,"https://picsum.photos/id/17/300/300");
addContent(link,"https://picsum.photos/id/8/300/300");
addContent(link,"https://picsum.photos/id/861/300/300");
addContent(link,"https://picsum.photos/id/554/300/300");
addContent(link,"https://picsum.photos/id/789/300/300");
addContent(link,"https://picsum.photos/id/342/300/300");

