// Define the media data from the CV
var media = [
    // ----- Interviews -----
    {
        "title": "Why Robots Are Not Effective Tools for Supporting Autistic People",
        "venue": "The 74 Million",
        "type": "Interview",
        "url": "https://www.the74million.org/article/why-robots-are-not-effective-tools-for-supporting-autistic-people/",
        "date": "2024"
    },
    {
        "title": "Interview on disability inclusion in AI (In Urdu)",
        "venue": "Hum TV News",
        "type": "Interview",
        "url": "",
        "date": "2023"
    },
    {
        "title": "Interview on ethical AI for health (In Urdu)",
        "venue": "Geo News",
        "type": "Interview",
        "url": "https://drive.google.com/file/d/1usvZO0lrSusHIaPmvrT9LO1f0bWJKAOc/view?usp=share_link",
        "date": "2023"
    },
    {
        "title": "UCSD Student Pursuing More Accessibility, Equity in Computer Science...",
        "venue": "San Diego Union Tribune",
        "type": "Interview",
        "url": "",
        "date": "2023"
    },
    {
        "title": "All Together Now",
        "venue": "UCSD Magazine",
        "type": "Interview",
        "url": "",
        "date": "2022"
    },
    {
        "title": "Vice President Kamala Harris Honors CSE Student Naba Rizvi (PhD '25)",
        "venue": "UCSD Today",
        "type": "Interview",
        "url": "https://today.ucsd.edu/story/vice-president-kamala-harris-honors-cse-student",
        "date": "2022"
    },
    {
        "title": "Our Experiences as Speakers at the Grace Hopper Conference",
        "venue": "AccessComputing",
        "type": "Media Publication",
        "url": "https://www.washington.edu/doit/our-experiences-speakers-grace-hopper-conference-1",
        "date": "2019"
    },
    {
        "title": "Advocating for anti-bullying policies in public schools",
        "venue": "NBC Education Nation Detroit",
        "type": "Interview (Student Representative)",
        "url": "",
        "date": "2015"
    }
    // ----- Media Publications -----

];

for (var value in media) {
    var title = media[value].title;
    var venue = media[value].venue;
    var role = media[value].type;
    var url = media[value].url;
    var date = media[value].date;

    var inf00 = document.createElement('span');
    inf00.className = 'media align-items-center space d-block';

    // Check if the URL is not empty
    var includeThis;
    if (url) {
        includeThis = '<p class="text-center"><span class="space semibold"><a href="' + url + '" target="_blank">' + title + '</a>,</span> ' + role + ', <i>' + venue + '</i> ('+ date + ')</p>';
    } else {
        // If the URL is empty, do not create a hyperlink for the title
        includeThis = '<p class="text-center"><span class="space semibold">' + title + ',</span> ' + role + ', <i>' + venue + '</i> ('+ date + ')</p>';
    }

    inf00.innerHTML = includeThis;
    document.querySelector('#media').appendChild(inf00);
}


