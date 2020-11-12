const navbarItems = [
    {
        label: "Formularz",
        url: "form.html"
    },
];
// 3 funkcje tworzące navbar w js 
function generateNavbarList() {
    return navbarItems.map(item => {
        return generateNavbarItem(item.label, item.url);
    }).join("\n")
}

function generateNavbarItem(label, url) {
    return `<li class="nav-item">
        <a class="nav-link" href="${url}">${label}</a>
    </li>`;
}

function generateNavbar() {
    document.getElementById("navbar-items").innerHTML = generateNavbarList();
}
generateNavbar();