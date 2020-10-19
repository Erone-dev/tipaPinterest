'use strict'

let num = 0;

function addContent(link, img_link) {
    let code = "<div class='pin'><div class='img'><div><img class='cont_im' id='pin-img' data-src='" + img_link + "' alt='" + link + "'></div></div></div>"
    $(".content-sec").prepend(code);
    num += 1;
}



let link = "https://picsum.photos/images";
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
    if(!($(".menu-sec").hasClass("open-menu"))){
        setTimeout(()=>{$(".menu-items").addClass("shr-menu");}, 500);
    } else {
        $(".menu-items").removeClass("shr-menu");
    }
})

// $("#search-inp").focusin(()=>{
//     $(".search").removeClass("anim");
// });

// $("#search-inp").focusout(()=>{
//     $(".search").addClass("anim");
// });


$(".pin").on("click", (e)=>{
    let img_href;
    let img_link;
    if(e.target.id == "pin-img"){
        img_href = e.target.getAttribute("data-src");
        img_link = e.target.getAttribute("alt");
        $("#selected-pin-img").attr("src", img_href);
        $("#selected-pin-a").attr("href", img_link);
        $("#selected-pin-a").text(img_link);
        $(".selected-pin").removeClass("closed");
        $(".selected-pin").addClass("opened");
        $("body").css("overflow", "hidden");
    }
})

$(".close-pin").on("click", ()=>{
    $(".selected-pin").addClass("closed");
    $(".selected-pin").removeClass("opened");
    $("body").css("overflow", "auto");
})
