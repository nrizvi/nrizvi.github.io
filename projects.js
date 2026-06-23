var data2 = [
    {
        "heading": "Algorithmic Fragility & Persona Bias",
        "finding": "LLMs flatten autistic voices",
        "summary": "How persona prompts make LLM-generated autistic communication fragile — surfacing 'algorithmic sanitization' across frontier models.",
        "photo": "images/persona.svg",
        "altText": "multiple person icons with arrows pointing to a chatbot, symbolizing AI personas",
        "link": "https://arxiv.org/abs/2605.26397",
    },
    {
        "heading": "Annotator Positionality as Signal",
        "finding": "stricter ground-truth generation",
        "summary": "A psychometrically-weighted, community-proximate ground truth for anti-autistic ableism detection that significantly outperforms majority-vote aggregation.",
        "photo": "images/positionality.svg",
        "altText": "animation of a person removing tape from their mouth and then speaking into a microphone",
        "link": "positionality_as_a_signal.pdf",
    },
    {
        "heading": "AUTALIC",
        "finding": "benchmark for anti-autistic ableism",
        "summary": "The first context-aware benchmark for evaluating anti-autistic ableist speech in LLM outputs.",
        "photo": "images/neuroinclusive_AI.png",
        "altText": "logo for neurodiverse ai",
        "link": "https://nrizvi.github.io/AUTALIC.html",
    },
    {
        "heading": "Are Robots Ready to Deliver Autism Inclusion?",
        "finding": "90% of HRI papers pathologize autism",
        "summary": "A critical review of 142 human-robot interaction studies (2016–2022) and a checklist for more inclusive research.",
        "photo": "images/ndrobot.gif",
        "altText": "Image of a feminine pink and baby blue robot wearing purple headphones with a rainbow infinity symbol on her dress.",
        "link": "https://nrizvi.github.io/hri_paper.html",
    },
    {
        "heading": "Optimizing Classification Annotations",
        "finding": "~50% gain in label reliability",
        "summary": "Improving annotation techniques for highly subjective tasks without compromising label quality (CSCW 2025).",
        "photo": "images/annotation.gif",
        "altText": "animation with 6 colored lines converging into two groups.",
        "link": "https://nrizvi.github.io/annotation.html",
    },
    {
        "heading": "Neuro-Inclusive AI",
        "finding": "LLMs replicate anti-autistic bias",
        "summary": "Defining and evaluating neuro-inclusive AI — datasets, models, and agents that de-center neuronormative benchmarks.",
        "photo": "images/agents.gif",
        "altText": "a rainbow infinity symbol with a circuit brain symbolizing neurodiverse AI; the word human is crossed out and replaced with AI.",
        "link": "https://nrizvi.github.io/agents.html",
    }
];

for (var value in data2) {
    var d = data2[value];
    var media = d.photo
        ? '<img src="' + d.photo + '" class="workImg" alt="' + d.altText + '">'
        : '<div class="workImgAlt" style="background:' + (d.color || '#F7E696') + '">' + (d.badge || '') + '</div>';

    var card = document.createElement('div');
    card.className = 'workCard';
    card.innerHTML =
        '<a href="' + d.link + '" target="_blank">' +
        media +
        '<div class="workBody">' +
        '<span class="workFind">' + d.finding + '</span>' +
        '<div class="workHead">' + d.heading + '</div>' +
        '<p class="workSum">' + d.summary + '</p>' +
        '</div></a>';
    document.querySelector('#projects').appendChild(card);
}
