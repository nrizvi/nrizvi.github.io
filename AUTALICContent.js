// contentLoader.js
function loadMainContent() {
    // Note: The BibTeX text is indented here for readability in the template literal,
    // but the <pre> tag will preserve the whitespace exactly as it is written below.
    // Make sure the indentation inside the <pre><code> block is exactly how you want it copied.
    const mainContentHTML = `
    <div class="row">
        <div class="col text-center">
            <h2>Introducing AUTALIC</h2>
        </div>
    </div>
    <div class="row">
        <div class="col text-center">
            <br>
            <iframe width="100%" height="315" src="videos/AUTALIC_cropped.mp4" title="AUTALIC teaser" frameborder="0" allowfullscreen></iframe>
            <br>
            <p>Interested in evaluating or training a classifier for anti-autistic ableist speech?
            <br>
            <br>
            Try AUTALIC:
            A dataset of 2,400 sentences in context from Reddit. To learn more, <b><a href="https://arxiv.org/abs/2410.16520">check out our paper!</a></b>
            <br>
            <br>
            Our data is carefully selected
            and labeled by trained annotators. Through rigorous quality assessment,
            we created the first dataset to work towards improving human-AI alignment and AI safety
            for autistic people. We hope this dataset will decrease censorship of community perspectives.

            <br><br>
            <b>If you use our dataset, please cite our paper as follows:</b></p> <div class="citation-container" style="text-align: left; display: inline-block; max-width: 100%;"> <pre style="background-color: #f8f8f8; border: 1px solid #ddd; padding: 10px; border-radius: 4px; overflow-x: auto;"><code id="bibtex-citation">@misc{rizvi2024autalicdatasetantiautisticableist,
      title={AUTALIC: A Dataset for Anti-AUTistic Ableist Language In Context},
      author={Naba Rizvi and Harper Strickland and Daniel Gitelman and Tristan Cooper and Alexis Morales-Flores and Michael Golden and Aekta Kallepalli and Akshat Alurkar and Haaset Owens and Saleha Ahmedi and Isha Khirwadkar and Imani Munyaka and Nedjma Ousidhoum},
      year={2024},
      eprint={2410.16520},
      archivePrefix={arXiv},
      primaryClass={http://cs.CL},
      url={https://arxiv.org/abs/2410.16520},
}</code></pre>
                <button id="copy-citation-btn" style="margin-top: 5px; padding: 5px 10px; cursor: pointer;">Copy Citation</button>
            </div>
             <p> <br><br>
                <a href='https://github.com/nrizvi/AUTALIC/'>Click here to access the dataset!</a><br> <b>Pass: debiasai2024</b>
            </p>
        </div>
    </div>
    `;

    document.getElementById('mainContent').innerHTML = mainContentHTML;

    // --- Attach Copy Button Functionality ---
    const copyBtn = document.getElementById('copy-citation-btn');
    const citationTextElem = document.getElementById('bibtex-citation');

    if (copyBtn && citationTextElem) { // Make sure elements exist before adding listener
        copyBtn.addEventListener('click', () => {
            // Get the text content from the <code> element
            const textToCopy = citationTextElem.textContent;

            // Use the Clipboard API to copy the text
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Success feedback: Change button text temporarily
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.disabled = true; // Optionally disable button briefly

                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.disabled = false; // Re-enable button
                }, 2000); // Reset after 2 seconds

            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Optional: Provide error feedback to the user, e.g., using an alert
                // alert('Failed to copy citation. Please copy manually.');
            });
        });
    } else {
        console.error('Could not find the copy button or citation text element.');
    }
    // --- End Copy Button Functionality ---


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
