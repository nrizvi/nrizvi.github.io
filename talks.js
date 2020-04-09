var talks = [
    {
        "title": "Using HCI to Tackle Race and Gender Bias in ADHD Diagnosis",
        "type": "Race in HCI Workshop Publication",
        "date": "April 25, 2020",
        "venue": "Conference on Human Factors in Computing Systems (CHI 2020)",
        "url": "https://drive.google.com/file/d/1jOBORarDHIbPX2cwucHb2DvFT2k9VRHF/view?usp=sharing",
        "people": "Rizvi, N. and Mrini, K.",
    },
    {
        "title": "Margin Call: an Accessible Web-based Text Viewer with Generated Paragraph Summaries in the Margin",
        "type": "Conference Publication",
        "date": "October 28, 2019",
        "venue": "The 12th International Conference on Natural Language Generation (INLG 2019)",
        "url": "https://www.aclweb.org/anthology/W19-8632.pdf",
        "people": "Rizvi, N., Gehrmann, S. et al.",
    },
    {
        "title": "Navigating the Tech Scene with a Disability",
        "type": "panelist",
        "date": "October 1, 2019",
        "venue": "Grace Hopper Celebration 2019",
        "url": "https://www.washington.edu/accesscomputing/resources/accesscomputing-news-december-2019/our-experiences-speakers-grace-hopper-conference",
        "people": "Blaser, B., Rizvi, N. et al.",
    }
];


for (var value in talks) {
    var title = talks[value].title;
    var type = talks[value].type;
    var venue = talks[value].venue;
    var url = talks[value].url;
    var people = talks[value].people;
    var inf0 = document.createElement('span');
    inf0.className = 'publications align-items-center space';
    var includeThis =
        '<p class="text-center"> ' + people + ', <span class="space font-weight-bold"><a href=" ' + url + '" target="_blank">' + title + '</a>, </span><i>' + venue + '</i> (' + type + ')</p>';
    inf0.innerHTML = includeThis;
    console.log(includeThis);
    document.querySelector('#publications').appendChild(inf0);
}