// contentLoader.js
function loadMainContent() {
    const mainContentHTML = `
    <div class="row">
<div class="col text-center">
    <h2>Introducing AUTALIC</h2>
</div>
</div>
<div class="row">
<div class="col text-center">
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dxAa4v59Qjo?si=ZhaIBeJc2O-MyAFn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <br>
    <p>Interested in classifying anti-autistic ableist speech? 
    <br>
    <br>
    Try AUTALIC:
    A dataset of 2,400 sentences in context from Reddit. 
    <br>
    <br>
    Our data is carefully selected
    and labeled by trained annotators. Through rigorous quality assessment,
    we created the first dataset to work towards improving human-AI alignment and AI safety
    for autistic people. We hope this dataset will decrease censorship of community perspectives.
    
    <br>
    <br>
    <a href='https://github.com/nrizvi/AUTALIC/'>Try it out here!</a></p>
    <p><b>Pass: debiasai2024</b></p>
</div>

</div>
    `;

    document.getElementById('mainContent').innerHTML = mainContentHTML;

    // Attach scrollIntoView to all anchor links after loading the content
    enableCenteredScrolling();
}

// Function to enable smooth, centered scrolling for anchor links
function enableCenteredScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center"  // Center the element in the viewport
                });
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", loadMainContent);