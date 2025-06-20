// contentLoader.js
function loadMainContent() {
    const mainContentHTML = `
<div class="row">
  <div class="col text-center">
  <br>
    <h1>Neuro-Inclusive AI</h1>
  </div>
</div>
<div class="row">
  <div class="col text-center">
    <br><br>
    <h3> <mark><b>Definition</b>: An approach to the design, development, and deployment of AI systems that explicitly de-centers neuronormative benchmarks and challenges the goal of merely mimicking 'humanness', instead promoting the acceptance of diverse neurotypes, such as autism.
    </mark></h3><br>
    <p>
    In 1949, Alan Turing defined a machine's intelligence as its effectiveness in mimicking human communication. Since then, the Turing Test continues to serve as a benchmark in AI, even insipiring the creation of 'human-like' AI agents such as robots and chatbots. Today, everyone has their own theories about ways to distinguish AI and AI-generated content from humans and our creations. Yet, have you ever wondered how the ways we define "humanity" and "humanness" may inevitably dehumanize marginalized populations, such as autistic people? 

    </p>
    <p>
<b><a href="">The Perspectives of AI Creators</a>: </b> Through our investigation of the perspectives of creators of human-like AI agents, we uncovered that many implicitly tie the communication styles and preferences of autistic individuals with "robotic" or "uncanny" behaviors in AI. Even though many participants expressed an interest in making their technologies more inclusive, they were often limited by institutional or organizational support that prioritized fast results over addressing ethical concerns.
</p>
<p><b><a href="">What Kind of Human Perspectives Do AI Agents Mimic?<a></b> Our evaluation of multiple LLMs finds that contrary to popular beliefs, AI agents do not self-identify as autistic and tend to replicate anti-autistic biases in human perspectives better than autistic perspectives.
</p>
    <br><br>
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