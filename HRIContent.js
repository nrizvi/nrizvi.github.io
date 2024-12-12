// contentLoader.js
function loadMainContent() {
    const mainContentHTML = `
<div class="row">
  <div class="col text-center">
    <h2>Are Robots Ready to Deliver Autism Inclusion?</h2>
  </div>
</div>

<div class="row">
  <div class="col text-center">
    <br>
    <h5><i>Jump to: our <a href="#paper">paper</a>, <a href="#findings">findings</a>, our <a href="#checklist">checklist</a> to guide more inclusive future work </i></h5>
    <br>
  </div>
</div>

<div class="row">
  <div class="col col-md-6 col-sm-12 col-xs-12 text-left">
    <p>Autism is multi-dimensional and can be understood in a variety of ways.
      Some may use the medical model to define autism as a disorder,
      but this belief contributes to the marginalization we face in society.
      In contrast,
      <a href="https://journals.sagepub.com/doi/10.1177/13623613221130845#:~:text=Autistic%20adults%20preferred%20to%20self,%2Dfirst%20language%20(13%25).">87% of autistic adults</a>
      in the US view it as an identity.
      <b>Neurodiversity</b> is a term used to describe
      all the diverse ways our brains can differ from each others' and
      also includes other cool identities such as
      ADHD, dyslexia, dyscalculia, and many more!
      According to this framework, autism is a distinct <b>neurotype</b>, or
      unique way of thinking or expressing our thoughts.
    </p>
    <p>Unfortunately, robotics research fails to include these diverse perspectives.
      Our latest paper quantifies the impact of this lack of inclusion in the ways
      we research, design, develop, and test robots for autistic people.
    </p>
    <br>
  </div>

  <div class="col col-md-6 col-sm-12 col-xs-12 text-center">
    <h3>Video Summary (Subtitles on TikTok)</h3>
    <iframe src="https://www.tiktok.com/embed/7376044928004066606" style="width: 100%; height: 500px; border: none;"></iframe>
  </div>
</div>

<div class="row text-center" id="paper">
  <div class="col text-center">
    <br>
    <h3><a href="https://dl.acm.org/doi/10.1145/3613904.3642798">Read</a> our full paper and
      <a href="#" onclick="toggleCitation(event)">click here to cite it!</a>
    </h3><br><br>
    
    <!-- Hidden Citation Div -->
    <div id="citationDiv" style="display:none; text-align:left; margin:auto; max-width:600px;">
      <textarea id="citationText" class="form-control" rows="10" style="font-family:monospace;">
@inproceedings{10.1145/3613904.3642798,
author = {Rizvi, Naba and Wu, William and Bolds, Mya and Mondal, Raunak and Begel, Andrew and Munyaka, Imani N. S.},
title = {Are Robots Ready to Deliver Autism Inclusion?: A Critical Review},
year = {2024},
isbn = {9798400703300},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3613904.3642798},
doi = {10.1145/3613904.3642798},
abstract = {The marginalization of autistic people in our society today is multi-faceted as it includes violence that is both physical and ideological in nature. It is rooted in the dehumanization, infantilization, and masculinization of autistic people and pervasive even in contemporary research studies that continue to echo ableist ideologies from the past. In this work, we identify how HRI research reproduces systemic social inequalities and explain how they align with historical misrepresentations, and other systemic barriers. We analyzed 142 papers focusing on HRI and autism published between 2016 and 2022. We critique these studies through a mixed-methods analysis of their definition of autism, study designs, participant recruitment, and results. Our findings indicate that HRI research stigmatizes autism in three dimensions - 1) the pathologization of autism, 2) gender and age-based essentialism, and 3) power imbalances. Our work uncovered that about 90% of HRI research during the timeline explored excluded the perspectives of autistic people, particularly those from understudied groups. We recommend broadening the inclusion of autistic people, considering research objectives beyond clinical use, and diversifying collaborations, foundational works considered, & participant demographics for more inclusive future work.},
booktitle = {Proceedings of the CHI Conference on Human Factors in Computing Systems},
articleno = {69},
numpages = {18},
keywords = {autism, human-computer interaction, robotics},
location = {<conf-loc>, <city>Honolulu</city>, <state>HI</state>, <country>USA</country>, </conf-loc>},
series = {CHI '24}
}
      </textarea>
      <br>
      <button class="btn btn-primary" onclick="copyCitation()">Copy to Clipboard</button>
    </div>
  </div>
</div>

<div class="row">
  <div class="col text-center">
    <h3 id="findings">Figures</h3>
  </div>
</div>

<div class="row align-items-center">
  <div class="col-md-6 col-sm-12 col-xs-12 chart-container">
    <canvas id="chart"></canvas>
    <p class="chartCaption">
      Figure 1. More than 90% of HRI papers defined autism as an 'illness' and explored ways to diagnose or 'treat' it in their studies.
    </p>
  </div>

  <div class="col-md-6 col-sm-12 col-xs-12 chart-container">
    <div id="pictogram"></div>
    <p class="chartCaption">
      Figure 2. Less than 10% of HRI papers (shown in pink) included a representative sample of women and girls with autism in their studies. The majority (in yellow) did not report the participants' gender demographics.
    </p>
  </div>
</div>

<div class="row">
  <div class="col text-center">
    <h3 id="checklist">Our Checklist</h3>
  </div>
</div>

<div class="row">
  <div class="col">
    <br>
    <p>We developed this checklist specifically for HRI researchers to assess the inclusivity of their work.
      However, it may also be useful for other researchers.
      <a href="images/HRI_checklist.png">Click here to download the PDF</a> and
      <a href="HRI_checklist.zip">here to download the latex file</a> to incorporate in your paper(s).<br><br>
      <img src="images/HRI_checklist.png" id="HRIchecklist" alt="our checklist for HRI researchers.">
    </p>
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

function toggleCitation(event) {
    event.preventDefault();
    const citationDiv = document.getElementById('citationDiv');
    citationDiv.style.display = (citationDiv.style.display === 'none' || citationDiv.style.display === '') ? 'block' : 'none';
}

function copyCitation() {
    const citationText = document.getElementById("citationText");
    citationText.select();
    citationText.setSelectionRange(0, 99999); // For mobile
    document.execCommand("copy");
    alert("Citation copied to clipboard!");
}

document.addEventListener("DOMContentLoaded", loadMainContent);