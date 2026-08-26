var awards =
    [
        // ----- 2025 -----
        {
            "title": "University of Washington, DO-IT Center Trailblazer Award",
            "date": "2025",
        },
        // ----- 2024 -----
        {
            "title": "Academic Careers Workshop (CMDIT &amp; University of Chicago)",
            "date": "2024",
        },
        {
            "title": "Johnson &amp; Johnson Access Ability Lime Connect Scholarship Finalist ($10,000)",
            "date": "2024",
        },
        {
            "title": "University of Chicago, AI &amp; Science Summer School (declined)",
            "date": "2024",
        },
        {
            "title": "ACM Travel Grant, FAccT ($1,600, declined)",
            "date": "2024",
        },
        // ----- 2023 -----
        {
            "title": "<a href='https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student'>The US White House, Commendation Letter</a> (Vice President Kamala Harris)",
            "date": "2023",
        },
        {
            "title": "CS Hero Award, Computer Science Teachers' Association",
            "date": "2023",
        },
        // ----- 2022 -----
        {
            "title": "UCSD CSE Department Nominee, Google PhD Fellowship (1 of 2 out of 300)",
            "date": "2022",
        },
        {
            "title": "UCSD CSE Department Nominee, Microsoft PhD Fellowship (1 of 2 out of 300)",
            "date": "2022",
        },
        // ----- 2020 -----
        {
            "title": "<a href='https://research.google/outreach/csrmp/recipients/?category=2019'>Google Research, CS Research Mentee</a>",
            "date": "2020",
        },
        {
            "title": "<a href='https://www.aspirations.org/blog/national-center-women-information-technology-ncwit-selects-finalists-2020-ncwit-collegiate'>NCWIT Collegiate Award</a> ($10,000)",
            "date": "2020",
        },
        {
            "title": "<a href='https://www.womentech.net/blog/womentech-global-awards-2020-winners-it-graduate-year'>WomenTech Network, IT Graduate of the Year Nominee</a>",
            "date": "2020",
        },
        // ----- 2019 -----
        {
            "title": "<a href='https://research.adobe.com/scholarship/previous-scholarship-award-winners/'>Adobe Research, Women in Tech Scholarship</a> ($10,000 &middot; 4% acceptance rate)",
            "date": "2019",
        },
        {
            "title": "Google Research, Women Techmakers Scholarship ($10,000)",
            "date": "2019",
        },
        {
            "title": "<a href='https://www.utfoundation.org/naba/'>Palantir, Women in Tech Scholarship</a> ($7,000 &middot; 1.5% acceptance rate)",
            "date": "2019",
        },
        {
            "title": "National Science Foundation, Tapia Conference Scholarship ($1,000)",
            "date": "2019",
        },
        {
            "title": "Google, I/O Women Techmakers Scholarship ($1,000)",
            "date": "2019",
        },
        {
            "title": "<a href='https://www.utoledo.edu/getinvolved/studentorgawards/2019.html'>University of Toledo, Advocate Award</a>",
            "date": "2019",
        },
        {
            "title": "University of Toledo, Outstanding New Student Organization Award",
            "date": "2019",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>JetBrains, Most Efficient Hack</a> (HackCWRU 6, out of 103 teams)",
            "date": "2019",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Fifth Third Bank, Best Use of Data</a> (RevolutionUC, out of 153 teams)",
            "date": "2019",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Rockwell Automation, Diversity Prize</a> (RevolutionUC, out of 103 teams)",
            "date": "2019",
        },
        // ----- 2018 -----
        {
            "title": "<a href='https://news.utoledo.edu/index.php/11_19_2018/ut-student-receives-google-women-techmakers-scholarship'>Google, Women Techmakers Scholarship</a> ($10,000)",
            "date": "2018",
        },
        {
            "title": "<a href='http://jacobsschoolofengineering.blogspot.com/2018/10/sd-hacks_18.html'>UC San Diego, First Place</a> (SDHacks, out of 109 teams)",
            "date": "2018",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Amazon, Best AWS Hack</a> (Technica, out of 110 teams)",
            "date": "2018",
        },
        {
            "title": "National Science Foundation, Innovation Corps",
            "date": "2018",
        },
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Capital One, Best Financial Hack</a> (Technica, out of 110 teams)",
            "date": "2018",
        },
        {
            "title": "AnitaB.org, Grace Hopper Celebration Scholar",
            "date": "2018",
        },
        // ----- 2017 -----
        {
            "title": "<a href='https://devpost.com/NabahRizvi'>Illinois Institute of Technology, First Place</a> (ScarletHacks, out of 45 teams)",
            "date": "2017",
        },
        // ----- 2016 -----
        {
            "title": "University of Toledo, International Student Scholarship ($40,000)",
            "date": "2016",
        },
        // ----- 2015 -----
        {
            "title": "<a href='http://michaeltheaney.com/archives/725'>Blue Ribbon Award (top 10% of posters)</a>, University of Michigan Undergraduate Research Symposium",
            "date": "2015",
        },
        // ----- Honor society -----
        {
            "title": "Sigma Xi, The Scientific Research Honor Society",
            "date": "Member",
        }
    ];

for (var value in awards) {
    var title = awards[value].title;
    var date = awards[value].date;
    var inf3 = document.createElement('span');
    inf3.className = 'awards align-items-center space';
    var includeThis =
        '<p class="text-center"><span class="space semibold">' + title + ', </span><i>' + date + '</i></p>';
    inf3.innerHTML = includeThis;
    document.querySelector('#awards').appendChild(inf3);
}
