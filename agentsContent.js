// contentLoader.js
function loadMainContent() {
    const mainContentHTML = `
<div class="row">
  <div class="col text-center">
    <h2>Creators of Human-Like AI Agents Weigh in on Ethics and Neurodivergence</h2>
  </div>
</div>
<div class="row">
  <div class="col text-center">
    <br><br>
    <p>
Everyone has their own theories about ways to distinguish AI and AI-generated content from humans and our creations. Yet, have you ever wondered how the ways we define "humanity" and "humanness" may inevitably dehumanize marginalized populations, such as autistic people? Through our investigation of the perspectives of creators of human-like AI agents, we uncovered that many implicitly tie the communication styles and preferences of autistic individuals with "robotic" or "uncanny" behaviors in AI. Even though many participants expressed an interest in making their technologies more inclusive, they were often limited by institutional or organizational support that prioritized fast results over addressing ethical concerns.
</p>
    <br><br>
    <p>The full study is due to appear at FAccT 2025. Stay tuned for more updates!</p>
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