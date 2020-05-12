var news =
    [
        {
            "title": "Interview With Skiveo Radio",
            "url": "https://www.skive0.com/urscienceminority",
            "date": "May 2020",
        },
        {
            "title": "The National Center for Women & Information Technology Selects Finalists for the 2020 NCWIT Collegiate Award",
            "url": "https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2020-ncwit-collegiate",
            "date": "Jan 31, 2020",
        },
        {
            "title": "Our Experiences as Speakers at the Grace Hopper Conference",
            "url": "https://www.washington.edu/doit/our-experiences-speakers-grace-hopper-conference",
            "date": "Dec 2019",
        },
        {
            "title": "Making Connections: Engineering Student Interns in Silicon Valley",
            "url": "https://news.utoledo.edu/index.php/09_12_2019/making-connections-engineering-student-interns-in-silicon-valley",
            "date": "Sep 12, 2019",
        },
        {
            "title": "UT Student Receives Google Women Techmakers Scholarship",
            "url": "https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship",
            "date": "Nov 19, 2018",
        },
        {
            "title": "SD Hacks",
            "url": "http://jacobsschoolofengineering.blogspot.com/2018/10/sd-hacks_18.html",
            "date": "Oct 18, 2018",
        }
    ];

for (var value in news) {
    var title = news[value].title;
    var url = news[value].url;
    var date = news[value].date;
    var inf3 = document.createElement('span');
    inf3.className = 'news align-items-center space';
    var includeThis =
        '<p class="text-center"><span class="space font-weight-bold"><a href=" ' + url + '" target="_blank">' + title + '</a>, </span><i>' + date + '</i></p>';
    inf3.innerHTML = includeThis;
    document.querySelector('#news').appendChild(inf3);
}

