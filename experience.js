var experience = [
    {
        "role": "Independent AI Researcher & Consultant",
        "org": "",
        "logoText": "AI",
        "logoImg": "images/neuroinclusive_AI.png",
        "when": "2025 – Present",
        "desc": "Built a reproducible, checkpointed multi-agent evaluation framework to stress-test 12 LLMs across 14,840 instances; designed a psychometrically weighted, recognition-controlled probing method for ground-truth construction (stricter than majority vote, p < .001). Trained 27 nonprofit organizations across 18 European nations on neuro-inclusive AI."
    },
    {
        "role": "AI Research Scientist Intern",
        "org": "Google DeepMind / Google Research",
        "logoText": "",
        "logoImg": "images/google.png",
        "when": "Summer 2022",
        "desc": "Engineered a human-in-the-loop data pipeline for dermatology vision models that cut labeling cost 50% (2× throughput) while maintaining dermatologist-level accuracy, and integrated fairness metrics into the model evaluation lifecycle."
    },
    {
        "role": "Research Intern",
        "org": "Microsoft Research",
        "logoText": "",
        "logoImg": "images/msr.png",
        "when": "Summer 2020",
        "desc": "Designed and shipped a full-stack neuro-inclusion training platform (1,000+ active users) with end-to-end instrumentation and analytics; first-author paper at AMCIS 2021."
    },
    {
        "role": "Research Intern (NLP)",
        "org": "Adobe Research",
        "logoText": "",
        "logoImg": "images/adobe.jpg",
        "when": "Summer 2019",
        "desc": "Prototyped a real-time abstractive summarization system using fine-tuned BERT-based architectures for low-vision users; first-author paper at INLG 2019."
    }
];

for (var value in experience) {
    var e = experience[value];
    var logo = e.logoImg
        ? '<img src="' + e.logoImg + '" class="expLogo" alt="' + e.org + ' logo">'
        : '<div class="expLogoBox">' + e.logoText + '</div>';
    var orgLine = e.org ? '<span class="expRole">' + e.role + '</span> · ' + e.org : '<span class="expRole">' + e.role + '</span>';

    var row = document.createElement('div');
    row.className = 'expRow';
    row.innerHTML =
        logo +
        '<div class="expBody">' +
        '<div>' + orgLine + ' <span class="expWhen">' + e.when + '</span></div>' +
        '<p class="expDesc">' + e.desc + '</p>' +
        '</div>';
    document.querySelector('#experience').appendChild(row);
}
