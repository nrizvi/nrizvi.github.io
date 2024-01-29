var publications = [
    {
        "title": "Are Robots Ready to Deliver Autism Inclusion?: A Critical Review",
        "type": "Full Paper",
        "date": "May 11, 2024",
        "venue": "",
        "url": "https://drive.google.com/file/d/1QVIGqSYtaLBDJXTH_cUAjpxHk-_VI3Fb/view",
        "people": "Rizvi, N., et al.",
    },
    {
        "title": "Making Hidden Bias Visible: Designing a Feedback Ecosystem for Primary Care Providers",
        "type": "Complex Health Ecosystems Workshop Paper",
        "date": "April 30, 2022",
        "venue": "Conference on Human Factors in Computing Systems (CHI 2022)",
        "url": "https://drive.google.com/file/d/1QVIGqSYtaLBDJXTH_cUAjpxHk-_VI3Fb/view",
        "people": "Rizvi, N., et al.",
    },
    {
        "title": "Inclusive Interpersonal Communication Education for Technology Professionals",
        "type": "Full Paper",
        "date": "August 13, 2021",
        "venue": "Twenty-Seventh Americas Conference on Information Systems (AMCIS 2021)",
        "url": "https://andrewbegel.com/papers/begel-amcis2021.pdf",
        "people": "Rizvi, N., Begel A., and Annabi H.",
    }
    /*{
        "title": "Using HCI to Tackle Race and Gender Bias in ADHD Diagnosis",
        "type": "Race in HCI Workshop Publication",
        "date": "April 25, 2020",
        "venue": "Conference on Human Factors in Computing Systems (CHI 2020)",
        "url": "https://drive.google.com/file/d/1jOBORarDHIbPX2cwucHb2DvFT2k9VRHF/view?usp=sharing",
        "people": "Rizvi, N. and Mrini, K.",
    },*/
//    {
//        "title": "Margin Call: an Accessible Web-based Text Viewer with Generated Paragraph Summaries in the Margin",
//        "type": "Conference Publication",
//        "date": "October 28, 2019",
//        "venue": "The 12th International Conference on Natural Language Generation (INLG 2019)",
//        "url": "https://www.aclweb.org/anthology/W19-8632.pdf",
//        "people": "Rizvi, N., et al.",
//    }
];


for (var value in publications) {
    var title = publications[value].title;
    var type = publications[value].type;
    var venue = publications[value].venue;
    var url = publications[value].url;
    var people = publications[value].people;
    var boldedauthors = people.replace("Rizvi, N.", "<span class='semibold'>Rizvi, N.</span>");
    console.log(typeof people)
    var inf0 = document.createElement('span');
    inf0.className = 'publications align-items-center space';
    var includeThis =
        '<p class="text-center"> ' + boldedauthors + ', <span class="space semibold"><a href=" ' + url + '" target="_blank">' + title + '</a>, </span><i>' + venue + '</i> (' + type + ')</p>';
    inf0.innerHTML = includeThis;
    console.log(includeThis);
    document.querySelector('#publications').appendChild(inf0);
}
