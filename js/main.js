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



var num = 2;

function addContent(link, img_link) {
    var code = "<div class='pin'><a href='" + link + "'><div class='img'><div><img src='" + img_link + "' alt='img-" + num + "'></div></div></a></div>"
    $(".content-sec").prepend(code);
    num += 1;
}

addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2F72tv.ru%2Fpictures%2F11905-krasivye-cvety-foto.html&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAK", "https://72tv.ru/uploads/posts/2018-08/1535284732_dekorativnyy-podsolnuh.jpg");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Ffishki.net%2F2437187-neverojatno-krasivye-fotografii.html&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAW", "https://cdn.fishki.net/upload/post/2017/11/21/2437187/dwwpkmjf2x8.jpg");
addContent("https://picsum.photos/id/237/200/300","https://picsum.photos/id/45/300/300");
addContent("https://picsum.photos/id/237/200/300","https://picsum.photos/id/78/200/300");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldi.ru%2Fsamye-prisamye-krasivye-tsvety-v-mire-10-foto%2F&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABA6", "https://worldi.ru/wp-content/uploads/2019/03/Samye-krasivye-tsvety-v-mire.jpg");
addContent("https://picsum.photos/id/237/200/300","https://picsum.photos/id/98/200/300");
addContent("https://www.google.com/url?sa=i&url=http%3A%2F%2Fduck.show%2Fkrasivye-foto-odno-mgnovenie.html&psig=AOvVaw1AJY04rxym-uoGa0F6caDJ&ust=1600250204837000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCJ1Nvy6usCFQAAAAAdAAAAABAD","https://duck.show/wp-content/uploads/2019/09/2019-09-17_17-11-17.png");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fklike.net%2F1884-krasivye-kartinki-na-oboi-40-foto.html&psig=AOvVaw1AJY04rxym-uoGa0F6caDJ&ust=1600250204837000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCJ1Nvy6usCFQAAAAAdAAAAABAJ","https://klike.net/uploads/posts/2019-06/1560664251_3.jpg");
addContent("https://picsum.photos/id/237/200/300","https://picsum.photos/id/28/300/300");
addContent("https://picsum.photos/id/237/200/300","https://picsum.photos/id/17/300/300");
addContent("https://picsum.photos/id/237/200/300","https://picsum.photos/id/8/300/300");

