export function getPopupYoutube() {
    const exitBtn = document.querySelector(".popup-exit")
    const btnYoutube = document.querySelectorAll(".program__item-play")
    const popupBg = document.querySelector(".popup-bg")
    const popupWrap = document.querySelector(".popup-wrap")
    const body = document.querySelector("body")
    let count = 1;
    let trek = {
        "1": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/lv9JI4EdjHA" title="AKSTAR | SMOKE ON THE WATER - DEEP PURPLE | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ AKSTAR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        "2": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/QBk9RzuA1Wg" title="AKSTAR | MISSION IMPOSSIBLE THEME | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        "3": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/WSzJAfU0hYE" title="AKSTAR | PRAYER IN C - ROBIN SCHULZ  | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        "4": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/qS1XaGujaxg" title="AKSTAR | ЛЕСНИК - КОРОЛЬ И ШУТ | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        "5": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/jcMJcMc0CPo" title="AKSTAR | КУКЛА КОЛДУНА - КОРОЛЬ И ШУТ | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        "6": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/tRdDoltf4Z0" title="AKSTAR | ЧЕРНЫЙ БУМЕР | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        "7": '<iframe width="80%" height="50%" src="https://www.youtube.com/embed/b4QfjLYgJTM" title="AKSTAR | КОНЬ - ЛЮБЭ | ПЕРВЫЙ КУРС ГИТАРНОЙ АКАДЕМИИ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    }
    //Цикл по всем кнопкам вызывающим попап и вешаем событие
    for (const el of btnYoutube) {
        el.id = count
        el.addEventListener("click", addActiveClass)
        count++
    }
    exitBtn.addEventListener("click", removeActiveClass)
    //завязать видео с id кнопки
    function addActiveClass(ev) {
        for (const key in trek) {
            if (ev.currentTarget.id == key) {
                ev.preventDefault();
                popupBg.classList.add("active");
                body.style.cssText = `overflow: hidden;`
                popupWrap.innerHTML = "";
                popupWrap.insertAdjacentHTML("beforeend", `
                ${trek[key]}
                `)
            }
        }
    }
    function removeActiveClass() {
        popupWrap.innerHTML = "";
        popupBg.classList.remove("active");
        body.style.cssText = `overflow: auto;`
    }
}
getPopupYoutube()