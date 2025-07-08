var teaching =
    [
        {
            "institution": "European Council of Autistic People (EUCAP) European Artificial Intelligence & Society Fund (AIRA) Training",
            "subject": "Are Robots Ready to Deliver Autism Inclusion?",
            "pRole": "provided neuro-inclusive AI training to 27 organizations across Europe", 
            "loc": "Berlin, DE",
            "yearsT": "2025"
        },
        {
            "institution": "UC Berkeley, Institute of Design Seminar",
            "subject": "Towards Neuro-Inclusive AI",
            "pRole": "guest lecturer", 
            "loc": "Berkeley, CA",
            "yearsT": "2024"
        },
        {
            "institution": "UC San Diego Interactive Computing Seminar",
            "subject": "Are Robots Ready to Deliver Autism Inclusion?",
            "pRole": "guest lecturer", 
            "loc": "San Diego, CA",
            "yearsT": "2023"
        },
        {
            "institution": "SweetWater High School",
            "subject": "Introduction to Creative Computing",
            "pRole": "instructor",
            "loc": "San Diego, CA",
            "yearsT": "2022"
        },
        // ----- 2020 -----
        {
            "institution": "University of Toledo (ACM-W)",
            "subject": "Biweekly Technical Workshops (Full Stack Web Development)",
            "pRole": "Organizer and Instructor",
            "loc": "Toledo, OH",
            "yearsT": "2018-2020" 
        },
        {
            "institution": "Toledo Early College (Girls Who Code)",
            "subject": "Introduction to Python",
            "pRole": "Instructor",
            "loc": "Toledo, OH",
            "yearsT": "2018-2020" // Using latest yearsT from 2018-2020 range
        },
        {
            "institution": "Eberly Women's Center",
            "subject": "Introduction to Web Development",
            "pRole": "Instructor",
            "loc":  "Toledo, OH",
            "yearsT": "2019"
        },
        // ----- 2018 -----
        {
            "institution": "University of Toledo (ACM-W)",
            "subject": "Introduction to JavaScript",
            "pRole": "Instructor",
            "loc": "Toledo, OH",
            "yearsT": "2018" // Using latest yearsT from 2017-2018 range
        }
    ];
for (var value in teaching) {
    var institution = teaching[value].institution;
    var subject = teaching[value].subject;
    var pRole = teaching[value].pRole;
    var loc = teaching[value].loc;
    var yearsT = teaching[value].yearsT;

    var inf0 = document.createElement('span');
    inf0.className = 'teaching align-items-center space';
    var includeThis =
        '<p class="text-center"> <span class="semibold">' + institution + '</span>, <i>' + subject + '</i>, ' + pRole + ', ' + loc + ' (' + yearsT + ')</p>';
    inf0.innerHTML = includeThis;
    document.querySelector('#teaching').appendChild(inf0);
}