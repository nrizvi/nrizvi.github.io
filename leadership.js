var leadership = [
    {
        "role": "Graduate Student Trustee (Board Member)",
        "org": "AnitaB.org",
        "detail": "serving on the board of the leading nonprofit for women in technology",
        "date": "2024–Present",
        "url": "https://anitab.org/"
    },
    {
        "role": "Founder",
        "org": "Non-Traditional Techies",
        "detail": "a community of 1,700+ members supporting career-changers entering tech",
        "date": "2018–Present",
        "url": ""
    },
    {
        "role": "Founder",
        "org": "Working With Disabilities",
        "detail": "a community supporting disabled and neurodivergent technologists",
        "date": "",
        "url": ""
    },
    {
        "role": "Content Creator",
        "org": "Scientist in Pink",
        "detail": "science communication on AI, neurodiversity, and women in STEM",
        "date": "2024–Present",
        "url": "https://www.tiktok.com/@scientistinpink"
    },
    {
        "role": "Course Developer & Instructor",
        "org": "UC San Diego — Human-Centered AI",
        "detail": "co-created and taught the graduate Human-Centered AI curriculum",
        "date": "2023",
        "url": ""
    },
    {
        "role": "Lead Organizer",
        "org": "QTBIPOC PD Workshop, CHI 2022",
        "detail": "exploring race, gender, and sexual orientation in participatory design",
        "date": "2022",
        "url": "https://arxiv.org/pdf/2204.07899.pdf"
    },
    {
        "role": "K-12 Outreach Coordinator",
        "org": "UCSD GradWiC (Graduate Women in Computing)",
        "detail": "",
        "date": "2021–2022",
        "url": ""
    },
    {
        "role": "Founder, Chair & Student Advisor",
        "org": "ACM-W, University of Toledo",
        "detail": "established the first ACM-W chapter in North-West Ohio",
        "date": "2017–2020",
        "url": ""
    },
    {
        "role": "Facilitator",
        "org": "Girls Who Code, Toledo Early College",
        "detail": "",
        "date": "2017–2020",
        "url": ""
    },
    {
        "role": "Regional Representative",
        "org": "Ohio Community of Women in Computing",
        "detail": "",
        "date": "2017–2019",
        "url": ""
    }
];

for (var i in leadership) {
    var l = leadership[i];
    var titleHtml = l.url ? '<a href="' + l.url + '" target="_blank">' + l.role + '</a>' : l.role;
    var detail = l.detail ? ', ' + l.detail : '';
    var date = l.date ? ' (' + l.date + ')' : '';

    var span = document.createElement('span');
    span.className = 'leadership align-items-center space';
    span.innerHTML = '<p class="text-center"><span class="space semibold">' + titleHtml + ',</span> <i>' + l.org + '</i>' + detail + date + '</p>';
    document.querySelector('#leadership').appendChild(span);
}
