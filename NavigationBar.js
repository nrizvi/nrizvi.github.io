function renderNavbar() {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    const baseURL = isHomePage ? '' : 'https://nrizvi.github.io/';

    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top transparentObj">
            <a href="https://nrizvi.github.io/">
                <img src="images/icon_transparent.png" alt="neurodiverse AI symbol" id="homeIcon">
            </a>
            <a id="NavHead" class="navbar-brand" href="#">Navigate to...</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link text-dark" href="${baseURL}">Home</a>
                    <a class="nav-item nav-link text-dark" href="${baseURL}/hri_paper.html">Robotics Paper</a>
                    <a class="nav-item nav-link text-dark" href="${baseURL}/AUTALIC.html">AUTALIC</a>
                    <a class="nav-item nav-link text-dark" href="${baseURL}/annotation.html">Annotation Optimization</a>
                    <a class="nav-item nav-link text-dark" href="${baseURL}/agents.html">AI Agents</a>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}
