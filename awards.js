var awards =
    [
        {
            "title": "Academic Careers Workshop (CMDIT/UChicago)",
            "url": "",
            "date": "2024",
        },
        {
            "title": "Johnson&Johnson Access Ability Lime Connect Scholarship Finalist",
            "url": "",
            "date": "2024",
        },
        {
            "title": "University of Chicago, AI & Science Summer School",
            "url": "",
            "date": "2024",
        },
        {
            "title": "ACM Travel Grant, FAccT",
            "url": "",
            "date": "2024",
        },
        // ----- 2023 -----
        {
            "title": "The US White House, Commendation Letter",
            "url": "https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student",
            "date": "2023",
        },
        // ----- 2022 -----
        {
            "title": "CSTA CS Hero",
            "url": "https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student",
            "date": "2022",
        },
        {
            "title": "UCSD CSE Department Nominee, Google PhD Fellowship",
            "url": "",
            "date": "2022",
        },
        {
            "title": "UCSD CSE Department Nominee, Microsoft PhD Fellowship",
            "url": "",
            "date": "2022",
        },
        // ----- 2020 -----
        {
            "title": "NCWIT Collegiate Award Recipient",
            "url": "https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2020-ncwit-collegiate",
            "date": "2020",
        },
         // ----- 2019 -----
        {
            "title": "Adobe Women in Tech Scholarship Recipient",
            "url": "https://research.adobe.com/scholarship/previous-scholarship-award-winners/",
            "date": "2019",
        },
        {
            "title": "Palantir Women in Tech Scholarship Recipient",
            "url": "https://www.utfoundation.org/naba/",
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
            "title": "WomenTech Network, IT Graduate of the Year Nominee",
            "url": "https://www.womentech.net/blog/womentech-global-awards-2020-winners-it-graduate-year",
            "date": "2019",
        },
        {
            "title": "National Science Foundation, Tapia Conference Scholarship",
            "url": "",
            "date": "2019",
        },
        {
            "title": "Google I/O Women Techmakers Scholarship",
            "url": "",
            "date": "2019",
        },
        {
            "title": "JetBrains, Most Efficient Hack (HackCWRU 6)",
            "url": "http://devpost.com/NabahRizvi/challenges",
            "date": "2019",
        },
        {
            "title": "Fifth Third Bank, Best Use of Data (RevolutionUC)",
            "url": "http://devpost.com/NabahRizvi/challenges",
            "date": "2019",
        },
        {
            "title": "Rockwell Automation, Rockwell's Diversity Prize (RevolutionUC)",
            "url": "http://devpost.com/NabahRizvi/challenges",
            "date": "2019",
        },
        // ----- 2018 -----
        {
            "title": "Google Women Techmakers Scholarship Recipient", // The 2018 one
            "url": "https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship",
            "date": "2018",
        },
        {
            "title": "SD Hacks, First Place",
            "url": "http://jacobsschoolofengineering.blogspot.com/2018/10/sd-hacks_18.html",
            "date": "2018",
        },
        {
            "title": "Amazon, Best AWS Hack (Technica)",
            "url": "http://devpost.com/NabahRizvi/challenges",
            "date": "2018",
        },
        {
            "title": "National Science Foundation, Innovation Corps",
            "url": "",
            "date": "2018",
        },
        {
            "title": "Capital One, Best Financial Hack (Technica)",
            "url": "http://devpost.com/NabahRizvi/challenges",
            "date": "2018",
        },
        // ----- 2017 -----
        {
            "title": "Scarlet Hacks, First Place",
            "url": "https://devpost.com/NabahRizvi",
            "date": "2017",
        },
        {
            "title": "AnitaB.org, Grace Hopper Celebration Scholar",
            "url": "",
            "date": "2017",
        },
        // ----- 2016 -----
        {
            "title": "University of Toledo, International Student Scholarship",
            "url": "",
            "date": "2016",
        },
        // ----- 2015 -----
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

