import IQuote from "./IQuote";

export default function getQuoteLocal(excludedId = -1): IQuote {
    const getRandomIndex = () => Math.floor(Math.random() * offlineData.length);
    let randomIndex = getRandomIndex();
    for (let i = 0; i < 20; i++) {
        if (offlineData[randomIndex].id !== excludedId) break;
        randomIndex = getRandomIndex();
    }
    return offlineData[randomIndex];
}


const offlineData: IQuote[] = [
    {
        "id": 0,
        "speaker": "funny-memes.org",
        "quote": "If I punch myself and it hurts, does it mean I'm really strong or really weak or it means I am are really stupid?",
        "src": "https://www.funny-memes.org/2013/10/if-i-punch-myself-and-it-hurts-does-it.html"
    },
    {
        "id": 1,
        "speaker": "therealviiru",
        "quote": "If you work as a securiry guard in samsung store, does that make you GUARDIAN OF GALAXY?",
        "src": "https://imgur.com/user/therealviiru"
    },
    {
        "id": 2,
        "speaker": "potnoodleproblembeast",
        "quote": "Using solar panels to power air conditioning is like using suns power against itself.",
        "src": "https://imgur.com/gallery/qo2CveY"
    },
    {
        "id": 3,
        "speaker": "linkkoriri",
        "quote": "Is it possible that the reason no one says YOLO anymore is because they all died of natural selection?",
        "src": "https://imgur.com/gallery/EmCsI"
    },
    {
        "id": 4,
        "speaker": "DreadfulLK",
        "quote": "If \"10 times better than leading brand\", why isn't it the leading brand?",
        "src": "https://imgur.com/gallery/GXk0ORK"
    },
    {
        "id": 5,
        "speaker": "anonymous",
        "quote": "If good things come to those who wait, isn't procrastination a virtue?",
        "src": "https://imgur.com/gallery/aStO8"
    },
    {
        "id": 6,
        "speaker": "Iamthedancingking",
        "quote": "Why is there a \"D\" when it's a fridge, but not when it's a refrigerator?",
        "src": "https://imgur.com/gallery/G8Iq9sh"
    },
    {
        "id": 7,
        "speaker": "Iamthedancingking",
        "quote": "While yor're waiting for the waiter, in that moment do you not become the waiter?",
        "src": "https://imgur.com/gallery/G8Iq9sh"
    },
    {
        "id": 8,
        "speaker": "Iamthedancingking",
        "quote": "When little people do drugs, do they get medium?",
        "src": "https://imgur.com/gallery/G8Iq9sh"
    },
    {
        "id": 9,
        "speaker": "Iamthedancingking",
        "quote": "If Victoria has a secret, why does she reveal so much?",
        "src": "https://imgur.com/gallery/G8Iq9sh"
    },
    {
        "id": 10,
        "speaker": "Iamthedancingking",
        "quote": "If Cinderela's shoe fits perfectly then why did it fall off?",
        "src": "https://imgur.com/gallery/G8Iq9sh"
    },
    {
        "id": 11,
        "speaker": "casuallystalking",
        "quote": "If being a mother is the hardest job in the world, why are there so many teen moms and so few engineers?",
        "src": "https://imgur.com/gallery/VhmS9Qu"
    },
    {
        "id": 12,
        "speaker": "Gurtofthequakes",
        "quote": "When you buy a bigger bathtub, you have more bath room but less bathroom.",
        "src": "https://imgur.com/gallery/rmXXB"
    },
    {
        "id": 13,
        "speaker": "SkyyFy",
        "quote": "If Tupac was a philosopher, a rapper and an actor, does that mean he was a philosoraptor?",
        "src": "https://imgur.com/gallery/sXJVzcU"
    },
    {
        "id": 14,
        "speaker": "trogdoorrr",
        "quote": "If time is money, are ATMS time machines?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 15,
        "speaker": "trogdoorrr",
        "quote": "If the earth is the third planet from the sun, isn't every country a third world country?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 16,
        "speaker": "trogdoorrr",
        "quote": "If you are what you eat, are cannibals the only real humans?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 17,
        "speaker": "trogdoorrr",
        "quote": "If tomatoes are a fruit, isn't ketchup technically a smoothie?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 18,
        "speaker": "trogdoorrr",
        "quote": "If it's called Final Fantasy, why are there 15 of them?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 19,
        "speaker": "trogdoorrr",
        "quote": "Is there another word for SYNONYM?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 20,
        "speaker": "trogdoorrr",
        "quote": "If professor Xavier can control things with his mind, whi can't he control his legs?",
        "src": "https://imgur.com/gallery/0lOYF"
    },
    {
        "id": 21,
        "speaker": "anonymous",
        "quote": "If Cinderella's shoe fit perfectly, why did it fall off?",
        "src": "https://imgur.com/gallery/K3Qxp"
    },
    {
        "id": 22,
        "speaker": "anonymous",
        "quote": "If the number 666 is considered evil, is 25.8069 the root of all evil?",
        "src": "https://imgur.com/gallery/ZL1Jp"
    },
    {
        "id": 23,
        "speaker": "BeTheHammer",
        "quote": "If Ironman and the Silver Surfer teamed up, would they be alloys?",
        "src": "https://imgur.com/gallery/qdMgq"
    },
    {
        "id": 24,
        "speaker": "Kensaro",
        "quote": "Is using sign language while holding something the same as speaking with your mouth full?",
        "src": "https://imgur.com/gallery/SPMuKFj"
    },
    {
        "id": 25,
        "speaker": "WhyDontYouGoBackToYourHomeOnWhoreIsland",
        "quote": "The government says \"if you're not doing anything wrong, you shouldn't have anything to hide\". If that is true, shouldn't the government declassify evreything?",
        "src": "https://imgur.com/gallery/tryCc"
    },
    {
        "id": 26,
        "speaker": "WhyDontYouGoBackToYourHomeOnWhoreIsland",
        "quote": "If you die before someone else does, does that mean you've beaten them to death?",
        "src": "https://imgur.com/gallery/tryCc"
    },
    {
        "id": 27,
        "speaker": "WhyDontYouGoBackToYourHomeOnWhoreIsland",
        "quote": "Why doesn't Tarzan have a beard?",
        "src": "https://imgur.com/gallery/tryCc"
    },
    {
        "id": 28,
        "speaker": "WhyDontYouGoBackToYourHomeOnWhoreIsland",
        "quote": "Instead of saying \"someone's life was saved\", shouldn't it be \"Someone's death was postponed\"?",
        "src": "https://imgur.com/gallery/tryCc"
    },
    {
        "id": 29,
        "speaker": "Tvincher",
        "quote": "If steroids are illegal for professional athletes, should Photoshop illegal for models?",
        "src": "https://imgur.com/gallery/Pd6uy"
    },
    {
        "id": 30,
        "speaker": "anonymous",
        "quote": "If \"money doesn't buy happiness\", why does every one get so pissed of when a rich person says they're unhappy?",
        "src": "https://imgur.com/gallery/B3N5XrW"
    },
    {
        "id": 31,
        "speaker": "ticklemonster142",
        "quote": "Wouldn't it be ironic to die in the living room?",
        "src": "https://imgur.com/gallery/FUf1cwf"
    },
    {
        "id": 32,
        "speaker": "klockflen",
        "quote": "What if \"deja vu\" meant that you lost a life and are starting back up from your last checkpoint?",
        "src": "https://imgur.com/gallery/RXBDP5A"
    },
    {
        "id": 33,
        "speaker": "RiceBowl9514",
        "quote": "If people could read minds, and two people were reading each other's minds, wouldn't the be reading their own minds?",
        "src": "https://imgur.com/gallery/RZ7TZmU"
    },
    {
        "id": 34,
        "speaker": "Nibbets",
        "quote": "If a zombie apocalypse happened in Vegas, would it stay in vegas?",
        "src": "https://imgur.com/gallery/aCs3iAw"
    },
    {
        "id": 35,
        "speaker": "kittydee",
        "quote": "If multiple universe theory is correct and all possibilities exist, is there a universe in which other universes don't exist?",
        "src": "https://imgur.com/gallery/uMMzH"
    },
    {
        "id": 36,
        "speaker": "Fragdonut",
        "quote": "Every year you pas your birthday and konow that you were born that day. But every year you pass your death day and have no clue.",
        "src": "https://imgur.com/gallery/lMWDzzG"
    },
    {
        "id": 37,
        "speaker": "mikeburnbeard1337",
        "quote": "Wheight loss progress pics are exempt from the selfie rule, because they're technically diy projects.",
        "src": "https://imgur.com/gallery/saqMs4l"
    },
    {
        "id": 38,
        "speaker": "moreroomforactivities",
        "quote": "If I illegally download a movie in Jamaica, I am a pirate of the Caribbean?",
        "src": "https://imgur.com/gallery/KapI0jV"
    },
    {
        "id": 39,
        "speaker": "catrlewkins",
        "quote": "If you really enjoy female protagonists, does that make you a heroine-addict?",
        "src": "https://imgur.com/gallery/JYA1gm0"
    },
    {
        "id": 40,
        "speaker": "Empario",
        "quote": "If dentists make their money from unhealthy teeth, why would I trust a product 4/5 of them recommend?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 41,
        "speaker": "Empario",
        "quote": "If two witches watched two watches, which witch would watch which watch?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 42,
        "speaker": "Empario",
        "quote": "Why is it that to bring balance to the force, you must destroy one side of it?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 43,
        "speaker": "Empario",
        "quote": "Iron Man, FE-Male?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 44,
        "speaker": "Empario",
        "quote": "When two left-handers have an argument, who is right?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 45,
        "speaker": "Empario",
        "quote": "If students are the \"customers\" of colleges, and customers are always right, shouldn't they be getting 100%?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 46,
        "speaker": "Empario",
        "quote": "How does love at first sight exist if love is blind?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 47,
        "speaker": "Empario",
        "quote": "If cockroaches can survive a nuclear blast, what the hell is in RAID?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 48,
        "speaker": "Empario",
        "quote": "If you're lost in the middle of nowhere, how do you know you're in the middle of nowhere?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 49,
        "speaker": "Empario",
        "quote": "If the world is unfair for everyone, doesn't that make the world fair?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 50,
        "speaker": "Empario",
        "quote": "If you can sell your soul to the devil for a wish, what if you wish for entry into heaven?",
        "src": "https://imgur.com/gallery/iVuft"
    },
    {
        "id": 51,
        "speaker": "potnoodleproblembeast",
        "quote": "Alien invaded the moon on july 20th 1969",
        "src": "https://imgur.com/gallery/b4Y9aKV"
    },
    {
        "id": 52,
        "speaker": "anonymous",
        "quote": "How does one gain 3-5 years of experience when every job requires 3-5 years experience?",
        "src": "https://imgur.com/gallery/TEcxn"
    }
];
