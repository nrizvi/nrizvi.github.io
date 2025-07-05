var data2 = [
    {
        "heading": "Neuro-Inclusive AI",
        "summary": "Defining and evaluating neuro-inclusive AI (datasets, models, and agents).",
        "photo": "images/agents.gif",
        "altText":"a rainbow infinity symbol with a circuit brain symbolizing neurodiverse AI. the word human appears next to it and then gets crossed out and replaced with the word AI",
        "link": "https://nrizvi.github.io/agents.html",
    },
        {
        "heading": "Optimizing Classification Annotations",
        "summary": "Improving annotations for difficult tasks: from worse-than-chance to moderate agreement",
        "photo": "images/annotation.gif",
        "altText":"animation with 6 lines with the colors in top-to-bottom order: red, orange, yellow, green, blue, and purple. The top 3 converge into orange, while the bottom 3 converge into blue.",
        "link": "https://nrizvi.github.io/annotation.html",
    },
    {
        "heading": "AUTALIC",
        "summary": "The first benchmark for evaluating anti-autistic ableist speech classification.",
        "photo": "images/neuroinclusive_AI.png",
        "altText":"logo for neurodiverse ai",
        "link": "https://nrizvi.github.io/AUTALIC.html",
    },
    {
        "heading": "Autism Inclusion in Robotics",
        "summary": "Less than 10% of HRI studies include the perspectives of autistic people in research affecting them",
        "photo": "images/ndrobot.gif",
        "altText":"Image of a feminine pink and baby blue robot wearing purple headphones. She has a rainbow infinity symbol on her dress.",
        "link": "https://nrizvi.github.io/hri_paper.html",
    }
    // ,
    // {
    //     "heading": "UnBIASED",
    //     "summary": "Visualizing social signals to make implicit bias explicit in patient-provider interactions.",
    //     "photo": "images/unbiased.png",
    //     "altText":"unbiased logo",
    //     "link": "https://drive.google.com/file/d/1QVIGqSYtaLBDJXTH_cUAjpxHk-_VI3Fb/view?usp=sharing",
    // } 
    // {
    //     "heading": "AI Color Equity",
    //     "summary": "Proposing a more granular annotation methodology for skin type labeling tasks.",
    //     "photo": "images/skin_tone.gif",
    //     "altText":"animation showing the diversity of skin types through a spectrum",
    //     "link": "",
    // },
    // {
    //     "heading": "Hera",
    //     "summary": "Empowering patient self-advocacy by classifying ECG results.",
    //     "photo": "images/hera.gif",
    //     "altText":"Hera logo",
    //     "link": "https://devpost.com/software/hera-mjcr60",
    // }
//    {
//        "heading": "Margin Call",
//        "summary": "Assistive web based text summarizer for blind & low-vision users.",
//        "photo": "images/margincall.gif",
//        "altText":"Screenshot of Margin Call's interface",
//        "link": "https://www.aclweb.org/anthology/W19-8632.pdf",
//    },
//    {
//        "heading": "Electing Women",
//        "summary": "Keeping women politicians around the world safe on the campaign trail.",
//        "photo": "images/electingwomen.PNG",
//        "altText":"Electing Women toolkit's interface",
//        "link": "https://github.com/nrizvi/electingwomen",
//    }
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



