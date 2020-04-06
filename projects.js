var data2 = [
    {
        "heading":"Hera",
        "photo": "hera.png",
        "altText":"Hera logo",
        "link": "https://devpost.com/software/hera-mjcr60",
    },
    {
        "heading":"Margin Call",
        "photo": "margincall.png",
        "altText":"Screenshot of Margin Call's interface",
        "link": "https://www.aclweb.org/anthology/W19-8632.pdf",
    },
    {
        "heading":"Electing Women",
        "photo": "electingwomen.PNG",
        "altText":"Electing Women toolkit's interface",
        "link": "https://github.com/nrizvi/electingwomen",
    },
    {
        "heading":"CodeWeGo",
        "photo": "codewego.jpg",
        "altText":"CodeWeGo's user interface",
        "link": "https://devpost.com/software/codewego",
    }   
];

for (var value in data2) {
    var heading = data2[value].heading;
    var photo = data2[value].photo;
    var altText = data2[value].altText;
    var link = data2[value].link;
    var info2 = document.createElement('span');
    info2.className = 'projects align-items-center space';
    var includeThis = 
    '<div class="col-md-3 col-sm-6 col-xs-12"><a href="' + link + '" target="_blank"><img src="' + photo + '" class="proj" alt="' + altText + 
    '"  width="150"><h3 class="space projCaption text-center">' + heading + 
    '</a></h3></div>';
    info2.innerHTML = includeThis;
    console.log(includeThis);
    //info2.innerHTML(includeThis);
    document.querySelector('#projects').appendChild(info2);

}



