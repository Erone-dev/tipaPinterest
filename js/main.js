'use strict'

$(".menu").click(() => {
    $(".menu-btn").toggleClass("menu-icon-active");
    $(".menu-sec").toggleClass("open-menu");
    $(".menu").toggleClass("menu-move");
})

var num = 5;

function addContent(link, img_link) {
    var code = "<div class='pin'><a href='" + link + "'><div class='img'><img src='" + img_link + "' alt='img-" + num + "'></div></a></div>"
    $(".content-sec").prepend(code);
    num += 1;
}

addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2F72tv.ru%2Fpictures%2F11905-krasivye-cvety-foto.html&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAK", "https://72tv.ru/uploads/posts/2018-08/1535284732_dekorativnyy-podsolnuh.jpg");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Ffishki.net%2F2437187-neverojatno-krasivye-fotografii.html&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAW", "https://cdn.fishki.net/upload/post/2017/11/21/2437187/dwwpkmjf2x8.jpg");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fproprikol.ru%2Fkartinki%2Fskachat-krasivye-kartinki-na-telefon-besplatno-75-foto.html&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAc", "https://proprikol.ru/wp-content/uploads/2020/02/kachat-krasivye-kartinki-na-telefon-besplatno-1.jpg");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fribalych.ru%2F2017%2F12%2F13%2Fprosto-ochen-krasivye-foto%2F&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAi", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3xiFDgrDHxeTUVjzWqTECgYkgk2U0ssTCQw&usqp=CAU");
addContent("https://www.google.com/url?sa=i&url=http%3A%2F%2Fpikstok.ru%2Fpost%2Fkrasivye-i-neobychnye-kartinki-390576&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAo", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6nbO20fNSuafYzzYf5r4FsMR1965WyD0_4Q&usqp=CAU");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fdrasler.ru%2Fkrasivye-kartinki-vertikalnye-hd-podborka%2F&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABAu", "https://drasler.ru/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-hd-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-028.jpg");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldi.ru%2Fsamye-prisamye-krasivye-tsvety-v-mire-10-foto%2F&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABA6", "https://worldi.ru/wp-content/uploads/2019/03/Samye-krasivye-tsvety-v-mire.jpg");
addContent("https://www.google.com/url?sa=i&url=https%3A%2F%2Fxn--e1aaajzchnkg.ru.com%2Fporazitelno-krasivye-kartiny-maslom-ot-hudozhnitsy-anastasii-morskoj.html&psig=AOvVaw3bOJWloK_O4l7CmAZaMqwT&ust=1600243323225000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDP2YnZ6usCFQAAAAAdAAAAABBN", "https://интересное.ru.com/wp-content/uploads/2018/11/Porazitelno-krasivye-kartiny-maslom-ot-hudozhnitsy-Anastasii-Morskoj-11-600x467.jpg");
addContent("https://www.google.com/url?sa=i&url=http%3A%2F%2Fduck.show%2Fkrasivye-foto-odno-mgnovenie.html&psig=AOvVaw1AJY04rxym-uoGa0F6caDJ&ust=1600250204837000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCJ1Nvy6usCFQAAAAAdAAAAABAD","https://duck.show/wp-content/uploads/2019/09/2019-09-17_17-11-17.png");
