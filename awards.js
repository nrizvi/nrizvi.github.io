var awards =
    [
    {
            "title": "CSTA CS Hero",
            "url": "https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student",
            "date": "2022",
        },
        {
            "title": "NCWIT Collegiate Award Recipient",
            "url": "https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2020-ncwit-collegiate",
            "date": "2020",
        },
        {
            "title": "Adobe Women in Tech Scholarship Recipient",
            "url": "https://research.adobe.com/scholarship/previous-scholarship-award-winners/",
            "date": "2019",
        },
        {
            "title": "Google CS Research Mentee",
            "url": "https://research.google/outreach/csrmp/recipients/?category=2019",
            "date": "2019",
        },
        {
            "title": "University of Toledo Advocate Award",
            "url": "https://www.utoledo.edu/getinvolved/studentorgawards/2019.html",
            "date": "2019",
        },
        {
            "title": "Google Women Techmakers Scholarship Recipient",
            "url": "https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship",
            "date": "2018",
        },
//        {
//            "title": "SD Hacks, First Place",
//            "url": "http://jacobsschoolofengineering.blogspot.com/2018/10/sd-hacks_18.html",
//            "date": "2018",
//        },
//        {
//            "title": "Scarlet Hacks, First Place",
//            "url": "https://devpost.com/NabahRizvi",
//            "date": "2017",
//        },
        {
            "title": "Best Student Poster (top 10%) at University of Michigan's Student Research Symposium",
            "url": "http://michaeltheaney.com/archives/725",
            "date": "2015",
        }
    ];

for (var value in awards) {
    var title = awards[value].title;
    var url = awards[value].url;
    var date = awards[value].date;
    var inf3 = document.createElement('span');
    inf3.className = 'awards align-items-center space';
    var includeThis =
        '<p class="text-center"><span class="space semibold"><a href=" ' + url + '" target="_blank">' + title + '</a>, </span><i>' + date + '</i></p>';
    inf3.innerHTML = includeThis;
    document.querySelector('#awards').appendChild(inf3);
}

