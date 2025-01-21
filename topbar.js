function topbar(activeHref) {
    fetch('/topbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('topbar').innerHTML = data;
  
        var script = document.createElement('script');
        script.src = '/menu.js';
        document.body.appendChild(script);

        if (activeHref) {
            const selectedTopbarLink = document.querySelector(`#topbar a[href="${activeHref}"]`);
            if (selectedTopbarLink) {
              selectedTopbarLink.classList.add('topbar-page-link-selected');
            }
            const selectedMenuLink = document.querySelector(`#fullscreen-menu a[href="${activeHref}"]`);
            if (selectedMenuLink) {
              selectedMenuLink.classList.add('topbar-page-link-selected');
            }
            const topbar = document.querySelector(`.topbar`);
            if (topbar && activeHref === "/index.html") {
                topbar.classList.add('topbar-homepage');
            }
        }
      })
      .catch(error => console.error('Error loading topbar:', error));
  }
