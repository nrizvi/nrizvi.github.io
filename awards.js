var awards =
    [
    {
            "title": "CSTA CS Hero",
            "url": "https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student",
            "add_info":"inspiring K-12 students all over the world",
            "date": "2022",
        },
        {
            "title": "NCWIT Collegiate Award Recipient",
            "url": "https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2020-ncwit-collegiate",
            "add_info": "<b>($10,000)</b>",
            "date": "2020",
        },
        {
            "title": "Adobe Women in Tech Scholarship Recipient",
            "url": "https://research.adobe.com/scholarship/previous-scholarship-award-winners/",
            "add_info": "<b>4% acceptance rate, ($10,000)</b>",
            "date": "2019",
        },
        {
            "title": "Palantir Women in Tech Scholarship Recipient",
            "url": "https://www.utfoundation.org/naba/",
            "add_info": "<b>1.5% acceptance rate, ($7,000)</b>",
            "date": "2019",
        },
        {
            "title": "Google CS Research Mentee",
            "url": "https://research.google/outreach/csrmp/recipients/?category=2019",
            "add_info": "advised by <a href='https://research.google/people/daniel-cer/'>Dan Cer</a>",
            "date": "2019",
        },
        {
            "title": "UT Advocate Award",
            "url": "https://www.utoledo.edu/getinvolved/studentorgawards/2019.html",
            "add_info": "for establishing & leading the <b>1st ACM-W chapter in NorthWest Ohio</b>",
            "date": "2019",
        },
        {
            "title": "Google Women Techmakers Scholarship Recipient",
            "url": "https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship",
            "add_info":"<b>($10,000)</b>",
            "date": "2018",
        },
        {
            "title": "SD Hacks, First Place",
            "url": "http://jacobsschoolofengineering.blogspot.com/2018/10/sd-hacks_18.html",
            "add_info": "out of <b>109</b> teams",
            "date": "2018",
        },
        {
            "title": "Scarlet Hacks, First Place",
            "url": "https://devpost.com/NabahRizvi",
            "add_info": "out of <b>132</b> participants",
            "date": "2017",
        },
        {
            "title": "Best Poster at University of Michigan's Student Research Symposium",
            "url": "http://michaeltheaney.com/archives/725",
            "add_info": "top 10%",
            "date": "2015",
        }
    ];

for (var value in awards) {
    var title = awards[value].title;
    var url = awards[value].url;
    var add_info = awards[value].add_info;
    var date = awards[value].date;
    var inf3 = document.createElement('span');
    inf3.className = 'awards align-items-center space';
    var includeThis =
        '<p class="text-center"><span class="space semibold"><a href=" ' + url + '" target="_blank">' + title + '</a>, </span>' + add_info + ', <i>'+ date + '</i></p>';
    inf3.innerHTML = includeThis;
    document.querySelector('#awards').appendChild(inf3);
}

