var publications = [
        {
        "title": "AUTALIC: A Dataset for Anti-AUTistic Ableist Language in Context",
        "type": "Full Paper",
        "date": "2025",
        "venue": "63rd Annual Meeting of the Association for Computational Linguistics <b>(ACL 2025)</b>",
        "url": "https://arxiv.org/pdf/2410.16520",
        "people": "Rizvi, N., Strickland, H., Gitelman, D., Cooper, T., Morales-Flores, A., Golden, M., Kallepalli, A., Alurkar, A., Owens, H., Ahmedi, S., Khirwadkar, I., Munyaka, I., Ousidhoum, N."
    },
        {
        "title": "‘I Hadn’t Thought About That’: Creators of Human-like AI Weigh in on Ethics & Neurodivergence",
        "type": "Full Paper",
        "date": "2025",
        "venue": "ACM Conference on Fairness, Accountability, and Transparency <b>(FAccT)</b>",
        "url": "https://arxiv.org/abs8/2506.1209",
        "people": "Rizvi, N., Smith, T., Vidyala, T., Bolds, M., Begel, A., Munyaka, I., Strickland, H., Williams, R."
    },
    {
        "title": "From Granular Grief to Binary Belief: A Collaborative Optimization of Annotation Techniques for Anti-Autistic Language",
        "type": "Full Paper",
        "date": "2025",
        "venue": "ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing <b>(CSCW)</b>",
        "url": "papers/labels.pdf",
        "people": "Rizvi, N., Rizvi, M., Morales Flores, A., Ousidhoum, N., Munyaka, I."
    },
    {
        "title": "Are Robots Ready to Deliver Autism Inclusion?: A Critical Review",
        "type": "Full Paper",
        "date": "May 11, 2024",
        "venue": "Conference on Human Factors in Computing Systems <b>(CHI 2024)</b>",
        "url": "papers/robots.pdf",
        "people": "Rizvi, N., Wu, W., Bolds, M., Mondal, R., Begel, A., Munyaka, I.",
    },
    {
        "title": "QTBIPOC PD: Exploring the Intersections of Race, Gender, and Sexual Orientation in Participatory Design",
        "type": "Workshop",
        "date": "April 30, 2022",
        "venue": "Conference on Human Factors in Computing Systems <b>(CHI 2022)</b>",
        "url": "https://arxiv.org/pdf/2204.07899.pdf",
        "people": "Rizvi, N., Casanova-Perez, R., Ramaswamy, H., Bascom, E.",
    },
    {
        "title": "Making Hidden Bias Visible: Designing a Feedback Ecosystem for Primary Care Providers",
        "type": "Complex Health Ecosystems Workshop Paper",
        "date": "April 30, 2022",
        "venue": "Conference on Human Factors in Computing Systems <b>(CHI 2022)</b>",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9128862/pdf/nihms-1804970.pdf",
        "people": "Rizvi, N., Ramaswamy, H., Bascom, E., Casanova-Perez, R.",
    },
    {
        "title": "Battling Bias in Primary Care Encounters: Informatics Designs to Support Clinicians",
        "type": "Late Breaking Work",
        "date": "April 27, 2022",
        "venue": "Conference on Human Factors in Computing Systems <b>(CHI 2022)</b>",
        "url": "https://drive.google.com/file/d/1QVIGqSYtaLBDJXTH_cUAjpxHk-_VI3Fb/view",
        "people": "Dirks, L., Beneteau, E., Sabin, J., Pratt, W., Lane, C., Bascom, E., Casanova-Perez, R., Rizvi, N., Weibel, N., Hartzler, A.",
    },
    {
        "title": "Experiences of Computing Students with Disabilities",
        "type": "Panel",
        "date": "2021",
        "venue": "ACM Technical Symposium on Computer Science Education <b>(SigCSE 2021)</b>",
        "url": "https://abrahamglasser.com/pdfs/publications/2020/3408877.3432574.pdff",
        "people": "Ladner, R.E., Seim, C., Sharif, A., Rizvi, N., Glasser, A.",
    },
        {
        "title": "Keepin' It Real About Race in HCI",
        "type": "Magazine Publication",
        "date": "2021",
        "venue": "Interactions Magazine (28)",
        "url": "https://www.researchgate.net/profile/Ron-Eglash/publication/354288986_Keepin%27_it_real_about_race_in_HCI/links/6133614cc69a4e48797a6a76/Keepin-it-real-about-race-in-HCI.pdf",
        "people": "Rizvi, N. and the Race in HCI Collective",
    },
    {
        "title": "Inclusive Interpersonal Communication Education for Technology Professionals",
        "type": "Full Paper",
        "date": "August 13, 2021",
        "venue": "Twenty-Seventh Americas Conference on Information Systems <b>(AMCIS 2021)</b>",
        "url": "https://andrewbegel.com/papers/begel-amcis2021.pdf",
        "people": "Rizvi, N., Begel A., and Annabi H.",
    },
    {
        "title": "Using HCI to Tackle Race and Gender Bias in ADHD Diagnosis",
        "type": "Race in HCI Workshop Publication",
        "date": "April 25, 2020",
        "venue": "Conference on Human Factors in Computing Systems <b>(CHI 2020)</b>",
        "url": "https://drive.google.com/file/d/1jOBORarDHIbPX2cwucHb2DvFT2k9VRHF/view?usp=sharing",
        "people": "Rizvi, N. and Mrini, K.",
    },
    {
        "title": "Margin Call: an Accessible Web-based Text Viewer with Generated Paragraph Summaries in the Margin",
        "type": "Conference Publication",
        "date": "October 28, 2019",
        "venue": "The 12th International Conference on Natural Language Generation <b>(INLG 2019)</b>",
        "url": "https://www.aclweb.org/anthology/W19-8632.pdf",
        "people": "Rizvi, N., et al.",
    }
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
