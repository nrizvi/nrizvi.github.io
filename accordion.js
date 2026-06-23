var SECTION_IDS = ['workShow', 'experienceShow', 'pubsShow', 'awardsShow', 'mediaShow', 'talksShow', 'leadershipShow', 'teachingShow', 'menteesShow', 'aboutShow', 'updatesShow'];

// Show one section panel, hide the rest, and highlight its tab.
function showOnly(id) {
    SECTION_IDS.forEach(function (x) {
        var el = document.getElementById(x);
        if (el) { el.style.display = (x === id) ? 'block' : 'none'; }
    });
    document.querySelectorAll('.tabBtn').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-target') === id);
    });
}

// Show a section and bring the tab bar into view (used by tabs, nav, and hero cells).
function goToSection(id) {
    showOnly(id);
    var tabs = document.getElementById('sectionTabs');
    if (tabs) { tabs.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

// Backwards-compatible alias
function toggleVisibility(id) { goToSection(id); }

// Route the top nav links through the same tab navigator.
function handleNavLinkClicks() {
    document.querySelectorAll('.nav-item.nav-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            var href = this.getAttribute('href').substring(1);
            if (SECTION_IDS.indexOf(href) !== -1) {
                event.preventDefault();
                goToSection(href);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    handleNavLinkClicks();
    showOnly('workShow'); // default tab open on load (no scroll)
});

function playAudio() {
    var audio = document.getElementById('audioPlayer');
    audio.play();
}
