var mentees = [
    // ----- 2024-present -----
    {
        "name": "Harper Strickland",
        "url": "https://www.linkedin.com/in/hcstrickland/",
        "description": "Graduate Student at UCSD",
        "outcome": "", // No outcome listed in CV text
        "date_range": "2024-present"
    },
    {
        "name": "Taggert Smith",
        "url": "https://www.linkedin.com/in/taggertsmith",
        "description": "Undergraduate Student at UCSD",
        "outcome": "", // No outcome listed in CV text
        "date_range": "2024-present"
    },
    {
        "name": "Tristan Cooper",
        "url": "https://www.linkedin.com/in/tristanmcooper/",
        "description": "Undergraduate Student at UCSD",
        "outcome": "→ Masters at UCSD",
        "date_range": "2024-present"
    },
    {
        "name": "Daniel Gitelman",
        "url": "https://www.linkedin.com/in/dgitelman/",
        "description": "Undergraduate Student at UCSD",
        "outcome": "→ Masters at Carnegie Mellon University",
        "date_range": "2024-present"
    },
    // ----- 2024-2025 -----
    {
        "name": "Ainaz Estiri",
        "url": "https://www.linkedin.com/in/ainaz-estiri-03b0b5195/",
        "description": "Undergraduate Student at UCSD",
        "outcome": "", // No outcome listed in CV text
        "date_range": "2024-2025"
    },
    // ----- 2023-2025 -----
    {
        "name": "Raunak Mondal",
        "url": "https://raunak2007.github.io/raunak/",
        "description": "Student at Del Norte High School",
        "outcome": "", // No outcome listed in CV text
        "date_range": "2023-2025"
    },
    // ----- 2023-2024 -----
    {
        "name": "William Wu",
        "url": "https://www.linkedin.com/in/william-wu-33bb59202/",
        "description": "Student at Del Norte High School",
        "outcome": "→ UCSD",
        "date_range": "2023-2024"
    },
    // ----- 2021-2022 -----
    {
        "name": "Manas Bedmutha",
        "url": "https://www.linkedin.com/in/manas-bedmutha/",
        "description": "Masters Student at UCSD",
        "outcome": "→ PhD at UCSD",
        "date_range": "2021-2022"
    },
    {
        "name": "Harshini Ramaswamy",
        "url": "https://www.linkedin.com/in/harshini-ramaswamy",
        "description": "Undergrad at UCSD",
        "outcome": "→ Carnegie Mellon University",
        "date_range": "2021-2022"
    },
    {
        "name": "Lisa Wang",
        "url": "",
        "description": "High school student (Girls Who Code)",
        "outcome": "→ Carnegie Mellon University",
        "date_range": "2021-2022"
    }
];

for (var value in mentees) {
    var title = mentees[value].name;
    var url = mentees[value].url;
    var outcome = mentees[value].outcome;
    var role = mentees[value].description;
    var date = mentees[value].date_range;

    var inf00 = document.createElement('span');
    inf00.className = 'mentees align-items-center space';

    // Check if the URL is not empty
    var includeThis;
    if (url) {
        includeThis = '<p class="text-center"><span class="space semibold"><a href="' + url + '" target="_blank">' + title + '</a>,</span> ' + role + ', <i>' + outcome + '</i> ('+ date + ')</p>';
    } else {
        // If the URL is empty, do not create a hyperlink for the title
        includeThis = '<p class="text-center"><span class="space semibold">' + title + ',</span> ' + role + ', <i>' + outcome + '</i> ('+ date + ')</p>';
    }

    inf00.innerHTML = includeThis;
    document.querySelector('#mentees').appendChild(inf00);
}


