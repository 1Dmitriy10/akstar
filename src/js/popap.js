export function getPopup() {
    const exitBtn = document.querySelector(".popup-exit")
    const btn = document.querySelectorAll(".catalog__slider-item")
    const btnYoutube = document.querySelectorAll(".program__item-play")
    const popupBg = document.querySelector(".popup-bg")
    const popupWrap = document.querySelector(".popup-wrap")
    const body = document.querySelector("body")
    let count = 1;
    //Цикл по всем кнопкам вызывающим попап и вешаем событие
    for (const el of btn) {
        el.id = count
        el.addEventListener("click", addActiveClass)
        count++
    }
    exitBtn.addEventListener("click", removeActiveClass)

    //завязать видео с id кнопки
    function addActiveClass(ev) {
        for (const el of btn) {
            if (el.id === ev.currentTarget.id) {
                ev.preventDefault();
                popupBg.classList.add("active");
                body.style.cssText = `overflow: hidden;`
                popupWrap.innerHTML = "";
                popupWrap.insertAdjacentHTML("beforeend", `
                <video width="70%" height="50%" controls>
                <source src="../files/IMG_8719.MOV" type="video/mp4">
                </video>
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
getPopup()