// contentLoader.js
function loadMainContent() {
    const mainContentHTML = `
<div class="row">
  <div class="col text-center">
    <h2>From Granular Grief to Binary Belief: Collaboratively Optimizing Annotation Techniques for Anti-Autistic Language</h2>
  </div>
</div>

<div class="row">
  <div class="col text-center">
    <br><br>
    <p>Highly subjective classification tasks are known to have high rates of disagreements among annotators, some of which may provide valuable information to researchers interested in improving community alignment. In this study, we engaged 6 annotators in an iterative co-design and testing process to compare the results of several annotation techniques. We find that switching to a binary scheme can help raise annotator agreement from worse-than-chance to moderate agreement, without compromising on the quality of the labels.</p> 
    <br><br>
    <p>The full study is due to appear at CSCW 2025. Stay tuned for more updates!</p>
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