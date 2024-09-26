class menu {

    constructor(botao, navList, navLinks) {
        this.botao = document.querySelector(botao);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.botao.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.botao.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.botao) {
            this.addClickEvent();
        }
        return this;
    }

}

const navbar = new menu(
    ".botao",
    ".navbar",
    ".navbar li"
);

navbar.init();
