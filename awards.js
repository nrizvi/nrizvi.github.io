var awards =
    [
        {
            "title": "University of Washington, DO-IT Center Trailblazer Award",
            "date": "2025",
        },
        {
            "title": "Academic Careers Workshop (CMDIT/UChicago)",
            "date": "2024",
        },
        {
            "title": "Johnson&Johnson Access Ability Lime Connect Scholarship Finalist",
            "date": "2024",
        },
        {
            "title": "University of Chicago, AI & Science Summer School",
            "date": "2024",
        },
        {
            "title": "ACM Travel Grant, FAccT",
            "date": "2024",
        },
        // ----- 2023 -----
        {
            "title": "<a href='https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student'>The US White House, Commendation Letter</a>",
            "date": "2023",
        },
        // ----- 2022 -----
        {
            "title": "<a href='https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student'>Computer Science Teachers' Association, CS Hero</a>",
            "date": "2022",
        },
        {
            "title": "UCSD CSE Department Nominee, Google PhD Fellowship",
            "date": "2022",
        },
        {
            "title": "UCSD CSE Department Nominee, Microsoft PhD Fellowship",
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
            "title": "<a href='https://research.adobe.com/scholarship/previous-scholarship-award-winners/'>Adobe Women in Tech Scholarship Recipient</a>",
            "date": "2019",
        },
        {
            "title": "<a href='https://www.utfoundation.org/naba/'>Palantir Women in Tech Scholarship Recipient</a>",
            "date": "2019",
        },
        {
            "title": "<a href='https://research.google/outreach/csrmp/recipients/?category=2019'>Google CS Research Mentee</a>",
            "date": "2019",
        },
        {
            "title": "<a href='https://www.utoledo.edu/getinvolved/studentorgawards/2019.html'>University of Toledo Advocate Award</a>",
            "date": "2019",
        },
        {
            "title": "<a href='https://www.womentech.net/blog/womentech-global-awards-2020-winners-it-graduate-year'>WomenTech Network, IT Graduate of the Year Nominee</a>",
            "date": "2019",
        },
        {
            "title": "National Science Foundation, Tapia Conference Scholarship",
            "date": "2019",
        },
        {
            "title": "Google I/O Women Techmakers Scholarship",
            "date": "2019",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>JetBrains, Most Efficient Hack (HackCWRU 6)</a>",
            "date": "2019",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Fifth Third Bank, Best Use of Data (RevolutionUC)</a>",
            "date": "2019",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Rockwell Automation, Rockwell's Diversity Prize (RevolutionUC)</a>",
            "date": "2019",
        },
        // ----- 2018 -----
        {
            "title": "<a href='https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship'>Google Women Techmakers Scholarship Recipient</a>", // The 2018 one
            "date": "2018",
        },
        {
            "title": "<a href='http://jacobsschoolofengineering.blogspot.com/2018/10/sd-hacks_18.html'>SD Hacks, First Place</a>",
            "date": "2018",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Amazon, Best AWS Hack (Technica)</a>",
            "date": "2018",
        },
        {
            "title": "National Science Foundation, Innovation Corps",
            "date": "2018",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Capital One, Best Financial Hack (Technica)</a>",
            "date": "2018",
        },
        // ----- 2017 -----
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Scarlet Hacks, First Place</a>",
            "date": "2017",
        },
        {
            "title": "AnitaB.org, Grace Hopper Celebration Scholar",
            "date": "2017",
        },
        // ----- 2016 -----
        {
            "title": "University of Toledo, International Student Scholarship",
            "date": "2016",
        },
        // ----- 2015 -----
        {
            "title": "<a href='http://michaeltheaney.com/archives/725'>Best Student Poster (top 10%) at University of Michigan's Student Research Symposium</a>",
            "date": "2015",
        }
    ];

for (var value in awards) {
    var title = awards[value].title;
    // var url = awards[value].url;
    var date = awards[value].date;
    var inf3 = document.createElement('span');
    inf3.className = 'awards align-items-center space';
    var includeThis =
        '<p class="text-center"><span class="space semibold">' + title + ', </span><i>' + date + '</i></p>';
    inf3.innerHTML = includeThis;
    document.querySelector('#awards').appendChild(inf3);
}

