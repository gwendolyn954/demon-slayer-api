const characters = [
    {
        name: 'Tanjiro Kamado',
        id: '001',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Water Breathing and Sun Breathing',
        quote: "I'll carry the weight of sadness for those who've died. That's the only way I can repay them for keeping me alive."
    },

    {
        name: 'Nezuko Kamado',
        id: '002',
        race: 'Demon',
        affiliation: 'Demon Slayer Corps (formerly)',
        skill: 'Blood Demon Art',
        quote: "Humans are to be protected and saved. I will never hurt them."
    },

    {
        name: 'Zenitsu Agatsuma',
        id: '003',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Thunder Breathing',
        quote: "I can only do the first form, but you can do everything except that."
    },

    {
        name: 'Inosuke Hashibira',
        id: '004',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Beast Breathing',
        quote: "I'm not going to die! I'm going to survive even if it kills me!"
    },

    {
        name: 'Muzan Kibutsuji',
        id: '005',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Whip Proficiency, Blood Demon Art',
        quote: "I will never allow a single person to escape. I will never allow a single person to live."
    },

    {
        name: 'Kanao Tsuyuri',
        id: '006',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Flower Breathing',
        quote: "I don't want to regret the choices I make."
    },

    {
        name: 'Giyu Tomioka',
        id: '007',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Water Breathing',
        quote: "I want you to live your life to the fullest. Do your best and make your own decisions. And don't let others decide things for you."
    },

    {
        name: 'Mitsuri Kanroji',
        id: '008',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Love Breathing',
        quote: "You've gained even more scars! How gorgeous you look!"
    },

    {
        name: 'Obanai Iguro',
        id: '009',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Serpent Breathing',
        quote: "In the first place, I loathe demons."
    },

    {
        name: 'Sanemi Shinazugawa',
        id: '010',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Wind Breathing',
        quote: "Is that the moron Slayer who has a demon with him?"
    },

    {
        name: 'Gyomei Himejima',
        id: '011',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Stone Breathing',
        quote: "Let us kill this poor child immediately so that she can be liberated!"
    },

    {
        name: 'Muichiro Tokito',
        id: '012',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Mist Breathing',
        quote: "Just like master said, if you recover your confidence... you can dig in with both feet and use your full strength. If you know who you are then no demon can run when you bring down a blade that knows no hesitation or confusion."
    },

    {
        name: 'Shinobu Kocho',
        id: '013',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Insect Breathing',
        quote: "How can you feel sorry for something that's killed humans? I've never heard of anything so absurd. But if that was how my sister truly felt, then I must carry it on. If there's a way not to kill these pitiful demons, I have to keep trying to come up with it. Without ever extinguishing the smile my sister said she loved.."
    },

    {
        name: 'Kyojuro Rengoku',
        id: '014',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Flame Breathing',
        quote: "Life is a series of decisions. You never have unlimited options or unlimited time to think, but what you choose in that instant defines who you are. Warriors who strive to save other people's lives are precious."
    },

    {
        name: 'Kanae Kocho',
        id: '015',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Flower Breathing',
        quote: "Pull yourself together. I won't allow you to cry. Stand up."

    },

    {
        name: 'Tamayo',
        id: '016',
        race: 'Demon',
        affiliation: 'Demon Slayer Corps',
        skill: 'Blood Demon Art',
        quote: "Well, well. It looks like the death you've hated for so long is right before your eyes now."
    },

    {
        name: 'Rui',
        id: '017',
        race: 'Demon',
        affiliation: 'Twelve Kizuki, Spider Family',
        skill: 'Thread Manipulation',
        quote: "I couldn't bear the weight of what I'd done. Even knowing that I only had myself to blame... Every single day..."

    },

    {
        name: 'Kagaya Ubuyashiki',
        id: '018',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: "I know what eternity is. Eternity is human feeling. Only human feelings last forever and are undying."
    },

    {
        name: 'Amane Ubuyashiki',
        id: '019',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Hinaki Ubuyashiki',
        id: '020',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Nichika Ubuyashiki ',
        id: '021',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Kiriya Ubuyashiki ',
        id: '022',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Kanata Ubuyashiki',
        id: '023',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: "Be strong, Master! Hurry up and give the next order! The fight isn't over yet!"
    },

    {
        name: 'Sakonji Urokodaki',
        id: '024',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Water Breathing',
        quote: "Your sister must never take the life of an innocent person!"
    },

    {
        name: 'Jigoro Kuwajima',
        id: '025',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Thunder Breathing',
        quote: "Compassion can make a person's heart infinitely tough. A sword that you swing for the sake of others can have power that is immense. You must become that kind of person."
    },


]

//makes this accessible outside of this code file; updated to ES
exports.characters = characters;
