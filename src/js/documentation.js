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
        if (window.innerWidth < 768) {
          
          sidebarToggler.addEventListener("click", hidescroll);
          sidebarClose.addEventListener("click", showscroll);
        }
      } else if (window.innerWidth >= 1200) {
        sidebarNav.classList.remove("active");
      }
    }

    // toc list anchors onscroll
    if (document.querySelector(".toc")) {
      // fix toc container in stiky pos
      document.querySelector(".toc").style.top = `${header.clientHeight + 70}px`;

      function removeActiveClass(elements) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("active");
        }
      }

      function switchActiveOnListItem() {
        let previousRefElement = null;
        const tocListItem = document.querySelectorAll(".toc ul li a");
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
    }

    function copyToClipboard() {
      const copyBtns = document.querySelectorAll(".token");
      let range = document.createRange();

      copyBtns.forEach((token) => {
        token.querySelector('.token__copy').addEventListener("click", function() {
          // copy to clipboard
          range.selectNode(token.querySelector(".token__comand"));
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
          document.execCommand("copy");
          // modern clibboard command(not worked on mobile, need to check if device === ios...)
          // window.navigator.clipboard.writeText(token.querySelector(".token__comand").innerText)

          // change tooltip text
          token.querySelector('.token__tooltip').innerText = 'Copied';
          setTimeout(() => {
            token.querySelector('.token__tooltip').innerText = 'Copy To Clipboard';
          }, 1250);
        });
      });
    }

    toggleSidebar();
    window.addEventListener('DOMContentLoaded', copyToClipboard)
    window.addEventListener("scroll", switchActiveOnListItem);
    window.addEventListener("resize", toggleSidebar);
  }
}
