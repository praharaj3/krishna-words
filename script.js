// script.js
// script.js
const quotes = {
    english: [
        {
            text: "“Time creates all things and time destroys them all. Time burns all creatures and time again extinguishes that fire.”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-5191c2522cfb00c85c4418ee20ac1f29"  // Image of the warrior who said this quote
        },
        {
            text: "“There is nothing lost or wasted in this life.”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-9c8886a8b7f596a9a7469be913ecd9e3"
        },
        {
            text: "“You have the right to work, but never to the fruit of work.”",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fvish_aesthetics%2Fstatus%2F1599008945666129923&psig=AOvVaw1Yn61N_RfC_xjpIMm-ZL0l&ust=1720438914389000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjowcTslIcDFQAAAAAdAAAAABAE"
        },
        {
            text: "“The mind acts like an enemy for those who do not control it.”",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r3xGeCkwGHKCuktp6Dvm6nL_vTC56efvXQ&s"
        },
        {
            text: "“We’re kept from our goal not by obstacles, but by a clear path to a lesser goal.”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-281487b69520efea849e789cbc3b4e6b-lq"
        }
    ],
    hindi: [
        {
            text: "“समय सभी चीजों को पैदा करता है और समय ही उन्हें नष्ट करता है। समय सभी प्राणियों को जलाता है और समय फिर उस आग को बुझा देता है।”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-42920b40b9fdcb896ac47c117a97fd82-lq"
        },
        {
            text: "“इस जीवन में कुछ भी खोया या बर्बाद नहीं हुआ है।”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-9c8886a8b7f596a9a7469be913ecd9e3"
        },
        {
            text: "“आपके पास काम करने का अधिकार है, लेकिन काम के फल के लिए कभी नहीं।”",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r3xGeCkwGHKCuktp6Dvm6nL_vTC56efvXQ&s"
        },
        {
            text: "“जो लोग इसे नियंत्रित नहीं करते उनके लिए मन दुश्मन की तरह काम करता है।”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-bfe061e3c30c0df960b510004d67dc13"
        },
        {
            text: "“हमें हमारे लक्ष्य से बाधाएँ नहीं रोकतीं, बल्कि एक छोटे लक्ष्य की स्पष्ट राह रोकती है।”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-281487b69520efea849e789cbc3b4e6b-lq"
        }
    ],
    sanskrit: [
        {
            text: "“समयः सर्वाणि सृजति समयः सर्वाणि हन्ति च। समयः पचते भूतानि समयः प्रत्यपचीयते॥”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-42920b40b9fdcb896ac47c117a97fd82-lq"
        },
        {
            text: "“न किञ्चित् वि नष्टं वा इह जीवनं नष्यते।",
            image: "https://qph.cf2.quoracdn.net/main-qimg-9c8886a8b7f596a9a7469be913ecd9e3"
        },
        {
            text: "“कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।”",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1r3xGeCkwGHKCuktp6Dvm6nL_vTC56efvXQ&s"
        },
        {
            text: "“अनात्मवशगं मनः शत्रुवत् प्रवर्तते।",
            image: "https://qph.cf2.quoracdn.net/main-qimg-bfe061e3c30c0df960b510004d67dc13"
        },
        {
            text: "“लघु लक्ष्यस्य स्फुटे पथेः कारणात् नः लक्ष्यं निवार्यते।”",
            image: "https://qph.cf2.quoracdn.net/main-qimg-281487b69520efea849e789cbc3b4e6b-lq"
        }
    ]
};

function showQuote(language) {
    const quoteDiv = document.getElementById(`quote-${language}`);
    const imageDiv = document.getElementById(`image-${language}`);
    const randomIndex = Math.floor(Math.random() * quotes[language].length);
    const quote = quotes[language][randomIndex];

    quoteDiv.innerHTML = quote.text;
    imageDiv.innerHTML = `<img src="${quote.image}" alt="Warrior Image">`;

    quoteDiv.style.display = 'block';
    imageDiv.style.display = 'block';

    quoteDiv.style.opacity = 0;
    imageDiv.style.opacity = 0;

    setTimeout(() => {
        quoteDiv.style.opacity = 1;
        imageDiv.style.opacity = 1;
    }, 10);
}
