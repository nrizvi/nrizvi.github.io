// Content for the typing animation
const introTextContent = "Hi! <br> I am Naba Rizvi, a scientist who works on responsible AI.";
const introQuestionContent = "And you are...?";


// Function for typing effect that handles HTML tags like <br>
function typeText(element, text, delay, callback) {
    let i = 0;
    const interval = setInterval(() => {
        // Check if we're at the start of an HTML tag
        if (text[i] === "<") {
            // Find the closing tag and add the entire tag at once
            const closingIndex = text.indexOf(">", i);
            element.innerHTML += text.substring(i, closingIndex + 1);
            i = closingIndex + 1;
        } else {
            // Add the next character if it's not part of an HTML tag
            element.innerHTML += text[i];
            i++;
        }

        if (i >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, delay);
}

// Start the typing animation when the page loads
window.onload = function() {
    const introTextElement = document.getElementById("introText");
    const introQuestionElement = document.getElementById("introQuestion");
    const dropdown = document.getElementById("userTypeSelect");

    // Hide dropdown initially
    dropdown.style.display = "none";

    // Type the intro text first
    typeText(introTextElement, introTextContent, 10, () => {
        // Once intro text is complete, type the question
        typeText(introQuestionElement, introQuestionContent, 10, () => {
            // Show the dropdown after the question completes
            dropdown.style.display = "block"; // Make dropdown visible
            dropdown.style.opacity = 1; // Fade-in effect if needed
        });
    });
};



// Content based on the selected persona
const contentOptions = {
    recruiter: `
        <p>I am a multi-award winning UCSD CSE PhD candidate with 10 publications, graduating in June 2025, and actively looking for FT roles/internships. I have previously interned at Google Health AI, Microsoft, and Adobe Research.</p>
        <p><b>Research focus:</b> responsible AI, AI alignment, and safety for underserved communities.</p>
        <p><i class="fa fa-trophy goldColor" aria-hidden="true"></i><b> Selected Awards:</b> 2024 ACM FAccT travel grant, 2022 CSTA CS Hero, 2020 NCWIT Collegiate Award, 2019 Adobe Research WiT Award, 2018 Google WTM Award</p>
        <p>To see my full list of publications, check out my <a href="https://scholar.google.com/citations?user=N94ugmQAAAAJ&hl=en">scholar profile!</a></p>
        `,
    media: `
        <p>I am a scientist working on 'neuroinclusive AI', or ensuring that AI does not marginalize neurodivergent and autistic people. For example, I have studied the ways in which robotics research may dehumanize autistic people, and created recommendations for the people who create, fund, or control the publication of our work to promote more inclusive practices. </p>
        <p>I have received several prestigious awards, interned at companies like Google, Microsoft, and Adobe, and been featured in both national and international media.</p>
        <p>My research has been featured in media channels reaching over <span class="semibold">36.6 million viewers</span> and earned me a <a href="https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student" class="semibold">commendation letter from VP Kamala Harris!</a></p>
    `,
    academic: `
        <p>I am a multi-award winning UCSD CSE PhD Candidate graduating in June 2025 advised by <a href="https://www.imanimunyaka.com/" class="semibold">Dr. Imani Munyaka</a>. My research lies at the intersection of human-centered AI and accessibility, and I am actively looking for faculty/post doc roles.</p>
        <p>I have 10 peer-reviewed publications, 7 years of experience teaching CS fundamentals to students, provided 1:1 mentorship to 10 students, and have collaborated with interdisciplinary teams from both academia and industry. I’ve formerly interned at Google Health AI, Microsoft, and Adobe Research.</p>
        <p>My research has been featured in media channels reaching over <span class="semibold">36.6 million viewers</span> and earned me a <a href="https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student" class="semibold">commendation letter from VP Kamala Harris!</a><p>
        <p><i class="fa fa-trophy goldColor" aria-hidden="true"></i><b> Selected Awards:</b> 2024 ACM FAccT travel grant, 2022 CSTA CS Hero, 2020 NCWIT Collegiate Award, 2019 Adobe Research WiT Award, 2018 Google WTM Award</p>      
        <p>
        <b>Collaborators:</b> <a href="https://nedjmaou.github.io/" class="semibold">Dr. Nedjma Ousidhoum</a>, <a href="https://andrewbegel.com/" class="semibold">Dr. Andrew Begel</a>, <a href="https://polytechnic.purdue.edu/profile/will2330" class="semibold">Dr. Rua M. Williams</a>
                                <br><b>Mentees:</b>
                                <a href="https://www.linkedin.com/in/hcstrickland/">Harper Strickland</a>, 
                                <a href="https://www.linkedin.com/in/dgitelman/">Daniel Gitelman</a>, 
                                <a href="https://www.linkedin.com/in/tristanmcooper/ ">Tristan Cooper</a>, 
                                <a href="https://raunak2007.github.io/raunak/">Raunak Mondal</a>, 
                                <a href="https://www.linkedin.com/in/william-wu-33bb59202/">William Wu</a>, 
                                <a href="https://ainazestiritech.dev">Ainaz Estiri</a>, 
                                <a href="www.linkedin.com/in/taggertsmith">Taggert Smith</a> 
        </p>
        `,
    student: `
        <p>I am in my final year of PhD in computer science at UCSD and work on neuroinclusive AI. Check out my socials or the projects below to learn more. If you are interested in collaborating on projects surrounding ethical, responsible, and human-centered AI, contact me!</p>
    `,
    curious: `
        <p>I believe AI is a tool that can help improve our society if we build and use it responsibly. My work focuses on ensuring people from marginalized communities are not harmed by AI.</p>
        <br><p>My research has been recognized with several prestigious awards and even been featured in media channels reaching over <span class="semibold">36.6 million viewers</span> and earned me a <a href="https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student" class="semibold">commendation letter from VP Kamala Harris!</a><p>
        <p>Check out my socials or see the project previews below to learn more. Feel free to contact me if you have any questions, comments, or concerns.</p>
    `
};

function selectOption(selectElement) {
    const option = selectElement.value;
    if (option) {
        // Display the selected content
        document.getElementById('contentText').innerHTML = contentOptions[option];

        // Trigger sliding animations
        document.getElementById('topBox').classList.add('slide-right');
        document.getElementById('bottomBox').classList.add('slide-left');

        // Reveal the main content after animation
        setTimeout(function() {
            document.querySelector('.container').style.display = 'block';
            document.body.style.overflow = 'auto';
        }, 1000);

        // Reset selection to allow reselection
        selectElement.selectedIndex = 0;
    }
}
