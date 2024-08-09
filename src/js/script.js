const slider = tns({
    container: '.slider__content',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};

const content = document.querySelectorAll('.catalog-item__content'),
    descr = document.querySelectorAll('.catalog-item__descr'),
    descrBtn = document.querySelectorAll('.catalog-item__back'),
    contentBtn = document.querySelectorAll('.catalog-item__link');


function toggleCardsContent(btn, elem, secondItem, active, activeSecond) {
    btn.forEach((item, i) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            elem[i].classList.toggle(active);
            secondItem[i].classList.toggle(activeSecond);
        });
    });
}

toggleCardsContent(contentBtn, content, descr, "catalog-item__content_active", "catalog-item__descr_active");
toggleCardsContent(descrBtn, content, descr, "catalog-item__content_active", "catalog-item__descr_active");

//Tabs

const tabs = document.querySelectorAll(".catalog__tab"),
    tabsContent = document.querySelectorAll(".catalog__content"),
    tabsActive = "catalog__tab_active",
    tabsContentActive = "catalog__content_active";

function removeActives(items, active) {
    items.forEach(item => {
        item.classList.remove(active)
    })
}

function addActive(item, active) {
    item.classList.add(active);
}


tabs.forEach((item, i) => {
    item.addEventListener("click", () => {

        removeActives(tabs, tabsActive);
        addActive(item, tabsActive)

        removeActives(tabsContent, tabsContentActive);
        addActive(tabsContent[i], tabsContentActive);

        removeActives(descr, "catalog-item__descr_active");
        content.forEach(item => {
            addActive(item, "catalog-item__content_active");
        })
    });
});

