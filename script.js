var data = [
    {
        "icon": "ucsd.png",
        "title": "UC San Diego",
        "date": "Fall 2020",
        "desc": "Excited to start my PhD at UCSD.",
    },
    {
        "icon": "chi.png",
        "title": "CHI 2020 (Workshop Paper)",
        "date": "Summer 2020",
        "desc": "Our paper on using HCI to study race & gender bias in ADHD diagnosis was accepted to the Race in HCI workshop.",
    },
    {
        "icon": "msr.png",
        "title": "Microsoft Research",
        "date": "Summer 2020",
        "desc": "Excited to join <a href='https://www.microsoft.com/en-us/research/group/ability/'>MSR's Ability team</a> this summer!",
    },
    {
        "icon": "inlg.png",
        "title": "First-Author Paper at INLG",
        "date": "Summer 2019",
        "desc": "Our <a href='https://www.aclweb.org/anthology/W19-8632.pdf'>paper</a> on an assistive summarizer for blind & low-vision users was accepted to INLG.",
    },
    {
        "icon": "ut.png",
        "title": "UT Advocate Award",
        "date": "Fall 2019",
        "desc": "Recognized by my university for founding and leading the student chapter of ACM-W at UT.",
    },
    {
        "icon": "adobe.jpg",
        "title": "Adobe Women in Tech Scholar",
        "date": "Summer 2019",
        "desc": "One of <a href='https://adoberesearch.ctlprojects.com/scholarship/previous-scholarship-award-winners/'>9 women</a> selected for the scholarship. Interned at Adobe Research's NLP group.",
    },
    {
        "icon": "palantir.png",
        "title": "Palantir Women in Tech Scholar",
        "date": "Summer 2019",
        "desc": "One of <a href='https://www.palantir.com/students/scholarship/wit-north-america/'>12 women</a> selected for the scholarship.",
    },
    {
        "icon": "UN.png",
        "title": "United Nations' Commission on the Status of Women",
        "date": "Spring 2019",
        "desc": "The open source web app I developed with <a href='https://github.com/dquach217'>David Quach</a> for Women's Peer2Peer network was demoed at the CSW in NY!",
    },
    {
        "icon": "NTT.jpg",
        "title": "Non-Traditional Techies",
        "date": "Winter 2018",
        "desc": "Founded NTT with 1,000+ members & counting!",
    },
    {
        "icon": "google.png",
        "title": "Google Women Techmakers Scholar",
        "date": "Summer 2018",
        "desc": "Pleased to be <a href='https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship'> one of 20 students</a> selected!",
    }];
var i = 0;
for (var key in data) {
    var icon = data[key].icon;
    var title = data[key].title;
    var date = data[key].date;
    var desc = data[key].desc;
    var info = document.createElement('div');
    var stacked = document.createElement('div');
    info.className = 'info';
    stacked.className = 'stacked';
    var widthResize = window.innerWidth;
    var stackedInfo = 
        '<div class="row align-items-center">' +
        '<div class="col-sm-12 space text-center">' +
        '<img src="' + icon + '" class="graphic" />' +
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
            '<img src="' + icon + '" class="graphic float-right" />' +
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
            '<img src="' + icon + '" class="graphic float-left" />' +
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
