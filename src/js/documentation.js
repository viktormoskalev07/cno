{
  if (document.querySelector(".documentation")) {
    const header = document.querySelector(".header");
    const main = document.querySelector(".main");

    main.style.paddingTop = `${header.clientHeight + 50}px`;

    // sidebar toggler
    function toggleSidebar() {
      const sidebarNav = document.querySelector(".sidebar");
      const sidebarToggler = document.querySelector(".sidebar__toggler");
      const sidebarClose = document.querySelector(".sidebar__close");

      if (window.innerWidth < 1200) {
        sidebarToggler.addEventListener("click", function () {
          sidebarNav.classList.add("active");
        });
        sidebarClose.addEventListener("click", function () {
          sidebarNav.classList.remove("active");
        });
      } else if (window.innerWidth >= 1200) {
        sidebarNav.classList.remove("active");
      }
    }

    // toc list anchors onscroll
    const tocListContainer = document.querySelector(".toc");
    const tocListItem = tocListContainer.querySelectorAll("ul li a");

    // fix toc container in stiky pos
    tocListContainer.style.top = `${header.clientHeight + 70}px`;

    function removeActiveClass(elements) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
      }
    }

    function switchActiveOnListItem() {
      let previousRefElement = null;
      for (let i = 0; i < tocListItem.length; i++) {
        const currentRefElement = document.getElementById(
          tocListItem[i].getAttribute("href").substring(1)
        );

        const currentRefElementTop =
          currentRefElement.getBoundingClientRect().top;
        if (currentRefElementTop <= 50) {
          previousRefElement = tocListItem[i];
          removeActiveClass(tocListItem);
          tocListItem[i].classList.add("active");
        }
      }
    }

    window.addEventListener("scroll", switchActiveOnListItem);
    toggleSidebar();
    window.addEventListener("resize", toggleSidebar);
  }
}
