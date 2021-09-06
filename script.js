var data = [
    {
        "icon": "interactions.png",
        "alt": "logo for Interactions magazine",
        "title": "Magazine Article",
        "date": "Summer 2021",
        "desc": "<a href='https://dl.acm.org/doi/fullHtml/10.1145/3477097'>Our article</a> on conducting racially-inclusive research was published in Interactions!"
    },
    {
        "icon": "amcis.png",
        "alt": "logo for Americas Conference on Information Systems",
        "title": "First Author Paper at AMCIS",
        "date": "Summer 2021",
        "desc": "<a href='https://andrewbegel.com/papers/begel-amcis2021.pdf'>First-author paper</a> on our communication skills course promoting autism acceptance in the workplace was accepted to AMCIS 2021."
    },
    {
        "icon": "sigcse.jpg",
        "alt": "logo for SIGCSE",
        "title": "Panel",
        "date": "Winter 2021",
        "desc": "<a href='https://abrahamglasser.com/pdfs/publications/2020/3408877.3432574.pdf'>Invited panelist</a> for the Experiences of Computing Students with Disabilities at SIGCSE 2021."
    },
    {
        "icon": "G1.png",
        "alt": "logo for the Graduate Women in Computing chapter at UCSD",
        "title": "K-12 Outreach Chair",
        "date": "Spring 2021",
        "desc": "Elected to serve as the K-12 Outreach Chair for UCSD's GradWiC chapter."
    },
    {
        "icon": "ncwit.png",
        "alt": "logo for The National Center for Women & Information Technology",
        "title": "NCWIT Collegiate Award Winner",
        "date": "Summer 2020",
        "desc": "Selected as one of the <a href='https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-recipients-2020-ncwit-collegiate?fbclid=IwAR0GWNd6rvM7VWS5WajeXumZ6iGsTi58ET1__8CYwwg2Dm6a0isMIFXYZKU'>6 recipients</a> of The National Center for Women & Information Technology (NCWIT) Collegiate Award for my work on Hera.",
    },
    {
        "icon": "ucsd.png",
        "alt": "UC San Diego logo",
        "title": "UC San Diego",
        "date": "Fall 2020",
        "desc": "Excited to start my PhD at UCSD under the supervision of professor <a href='https://www.ubicomp.ucsd.edu/weibel'>Nadir Weibel</a> mitigating bias in healthcare using human-computer interaction and social signal processing.",
    },
    {
        "icon": "chi.png",
        "alt": "Computer Human Interaction (CHI 2020) logo",
        "title": "First-Author paper at CHI 2020 <br>(Race in HCI Workshop)",
        "date": "Summer 2020",
        "desc": "Our paper on using HCI to study race & gender bias in ADHD diagnosis was accepted to the Race in HCI workshop.",
    },
    {
        "icon": "msr.png",
        "alt": "Microsoft logo",
        "title": "Microsoft Research",
        "date": "Summer 2020",
        "desc": "Excited to join <a href='https://www.microsoft.com/en-us/research/group/ability/' target='_blank'>MSR's Ability team</a> this summer!",
    },
    {
        "icon": "google.png",
        "alt":"Google logo",
        "title": "Google CS Research Mentorship Program",
        "date": "Fall 2019",
        "desc": "Grateful to have been sponsored by Google to attend CHI 2020 and Google's PhD Summit!",
    },
    {
        "icon": "inlg.png",
        "alt":"International Conference on Natural Language Generation logo",
        "title": "First-Author Paper at INLG",
        "date": "Summer 2019",
        "desc": "Our <a href='https://www.aclweb.org/anthology/W19-8632.pdf' target='_blank'>paper</a> on an assistive summarizer for blind & low-vision users was accepted to INLG.",
    },
    {
        "icon": "adobe.jpg",
        "alt": "Adobe logo",
        "title": "Adobe Research",
        "date": "Summer 2019",
        "desc": "Started internship at Adobe research's NLP group.",
    },
    {
        "icon": "ut.png",
        "alt": "University of Toledo logo",
        "title": "Advocate Award",
        "date": "Spring 2019",
        "desc": "Recognized by the University of Toledo for founding and leading the student chapter of ACM-W.",
    },
    {
        "icon": "adobe.jpg",
        "alt": "Adobe logo",
        "title": "Adobe Women in Tech Scholar",
        "date": "Spring 2019",
        "desc": "One of <a href='https://adoberesearch.ctlprojects.com/scholarship/previous-scholarship-award-winners/' target='_blank'>9 women</a> selected for the scholarship.",
    },
    {
        "icon": "palantir.png",
        "alt": "Palantir logo",
        "title": "Palantir Women in Tech Scholar",
        "date": "Spring 2019",
        "desc": "One of <a href='https://www.palantir.com/students/scholarship/wit-north-america/' target='_blank'>12 women</a> selected for the scholarship.",
    },
    {
        "icon": "UN.png",
        "alt": "United Nations logo",
        "title": "United Nations' Commission on the Status of Women",
        "date": "Winter 2019",
        "desc": "Our open source web app <i>Electing Women Toolkit</i> for the Women's Peer2Peer network was demoed at the CSW in NY!",
    },
    {
        "icon": "NTT.jpg",
        "alt": "Non-Traditional Techies logo",
        "title": "Non-Traditional Techies",
        "date": "Winter 2018",
        "desc": "Founded NTT with 1,000+ members & counting!",
    },
    {
        "icon": "google.png",
        "alt": "Google logo",
        "title": "Google Women Techmakers Scholar",
        "date": "Summer 2018",
        "desc": "Pleased to be <a href='https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship' target='_blank'> one of 20 students</a> selected!",
    }];
var i = 0;
for (var key in data) {
    var icon = data[key].icon;
    var title = data[key].title;
    var date = data[key].date;
    var desc = data[key].desc;
    var alt = data[key].alt;
    var info = document.createElement('div');
    var stacked = document.createElement('div');
    info.className = 'info';
    stacked.className = 'stacked';
    var widthResize = window.innerWidth;
    var stackedInfo = 
        '<div class="row align-items-center">' +
        '<div class="col-sm-12 space text-center">' +
        '<img src="' + icon + '" alt = "' + alt + '" class="graphic" />' +
        '</div></div>' +
        '<div class="row align-items-center">' +
        '<div class="col-sm-12">' +
        '<h4 align="center"><b>' + title + '</b></h4>' +
        '</div></div>' +
        '<div class="row align-items-center">' +
        '<div class="col-sm-12">' +
        '<p align="center"><i>' + date + '</i></p>' +
        '</div></div>' +
        '<div class="row align-items-center">' +
        '<div class="col-sm-12">' +
        '<p align="center">' + desc + '</p>' +
        '</div></div>';
    if (i % 2 == 0) {
        var show_this =
            '<div class="row align-items-center">' +
            '<div class="col-md-6 space">' +
            '<img src="' + icon + '" alt = "' + alt + '" class="graphic float-right" />' +
            '</div>' +
            '<div class="col-md-6 space">' +
            '<h4 class="float-left"><b>' + title + '</b></h4>' +
            '</div>' +
            '</div>' +
            '<div class="row align-items-center">' +
            '<div class="col-md-6">' +
            '<p class="float-right"><i>' + date + '</i></p>' +
            '</div>'
            + '<div class="col-md-6">' +
            '<p class="float-left">' + desc + '</p>' +
            '</div>' +
            '</div>';
    } else {
        var show_this =
            '<div class="row align-items-center">' +
            '<div class="col-md-6 space">' +
            '<h4 align="right"><b>' + title + '</b></h4>' +
            '</div>' +
            '<div class="col-md-6 space">' +
            '<img src="' + icon + '" alt = "' + alt + '" class="graphic float-left" />' +
            '</div>' +
            '</div>' +
            '<div class="row align-items-center">' + '<div class="col-md-6">' +
            '<p align="right">' + desc + '</p>' +
            '</div>' +
            '<div class="col-md-6">' +
            '<p class="float-left"><i>' + date + '</i></p>' +
            '</div>'
            +
            '</div>';
    };
    info.innerHTML = show_this;
    stacked.innerHTML = stackedInfo;
    i++;
    document.querySelector('#stacked').appendChild(stacked);
    document.querySelector('#timeline').appendChild(info);
};
