const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");


tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        updateCollection(tabs, "tab_active", i);
        updateCollection(tabContent, "tab__content_active", i);
    })
})

function updateCollection(coll, aC, idx) {
    [...coll].find(element => {
        if (element.classList.contains(aC)) {
            element.classList.remove(aC)
        }
    })
    coll[idx].classList.add(aC);
}