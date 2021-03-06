var data2 = [
    {
        "heading": "Hera",
        "summary": "Empowering patient self-advocacy by analyzing ECG results.",
        "photo": "hera.gif",
        "altText":"Hera logo",
        "link": "https://devpost.com/software/hera-mjcr60",
    },
    {
        "heading": "Margin Call",
        "summary": "Assistive web based text summarizer for blind & low-vision users.",
        "photo": "margincall.gif",
        "altText":"Screenshot of Margin Call's interface",
        "link": "https://www.aclweb.org/anthology/W19-8632.pdf",
    },
    {
        "heading": "Electing Women",
        "summary": "Web app keeping women politicians around the world safe on the campaign trail.",
        "photo": "electingwomen.PNG",
        "altText":"Electing Women toolkit's interface",
        "link": "https://github.com/nrizvi/electingwomen",
    },
    {
        "heading": "PolyGlot",
        "summary": "Web based IDE empowering developers to code in their native language.",
        "photo": "polyglot.png",
        "altText":"PolyGlots's user interface",
        "link": "https://devpost.com/software/polyglot-pv4er8",
    }   
];

for (var value in data2) {
    var heading = data2[value].heading;
    var photo = data2[value].photo;
    var altText = data2[value].altText;
    var link = data2[value].link;
    var summary = data2[value].summary;
    var info2 = document.createElement('span');
    info2.className = 'projects align-items-center space';
    var includeThis = 
    '<div class="col-md-3 col-sm-6 col-xs-12"><a href="' + link + '" target="_blank"><img src="' + photo + '" class="proj projPhoto" alt="' + altText + 
        '"  width="150"><p class="space projCaption text-center"><b>' + heading + '</b><p class="projCaption text-center">' + summary +'</p>' +
        '</a></p></div>';
    info2.innerHTML = includeThis;
    console.log(includeThis);
    //info2.innerHTML(includeThis);
    document.querySelector('#projects').appendChild(info2);

}



