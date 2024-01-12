const characters = [
    {
        name: 'Tanjiro Kamado',
        id: '001',
        race: 'Human',
        affiliation: 'Kamado Family, Demon Slayer Corps',
        skill: 'Water Breathing and Sun Breathing',
        quote: "I'll carry the weight of sadness for those who've died."
    },

    {
        name: 'Nezuko Kamado',
        id: '002',
        race: 'Demon',
        affiliation: 'Kamado Family, Demon Slayer Corps',
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
        skill: 'Whip Proficiency, Biokinesis',
        quote: "Does my complexion look unhealthy to you? Is my face pale? Do I look sickly to you? Do I look like I'm not long for this world? Do I look like I'm about to die? Wrong, wrong, wrong, wrong. I'm a living being who's infinitely close to perfection."
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
        affiliation: 'Shinazugawa Family, Demon Slayer Corps',
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
        quote: "Life is a series of decisions. You never have unlimited options or unlimited time to think, but what you choose in that instant defines who you are. Warriors who strive to save other people's lives are precious..."
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


    {
        name: 'Shinjuro Rengoku',
        id: '026',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Flame Breathing',
        quote: "Go ahead and live with your head held high. No matter how devastated you may be by your own weakness or uselessness, set your heart ablaze..."
    },

    {
        name: 'Tengen Uzui',
        id: '027',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Sound Breathing',
        quote: "I want you three to only think about your lives. Above all else, your top priority is to come back to me..."
    },

    {
        name: 'Genya Shinazugawa',
        id: '028',
        race: 'Human',
        affiliation: 'Shinazugawa Family, Demon Slayer Corps',
        skill: 'Dual Wielding',
        quote: "...I will not let my brother, or my master, or any of my comrades die!"
    },

    {
        name: 'Murata',
        id: '029',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Water Breathing',
        quote: "Tomioka remembered my name...We were together since the Final Selection too...!"
    },

    {
        name: 'Ozaki',
        id: '030',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Yoriichi Tsugikuni',
        id: '031',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Sun Breathing',
        quote: "What is the value of a life to you?"
    },

    {
        name: 'Aoi Kanzaki',
        id: '032',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'knowledgeable about breathing styles',
        quote: "If you're hungry, eat this. This plate is just for you, so eat from it whenever you want. But stop stealing food!"
    },

    {
        name: 'Sumi Nakahara',
        id: '033',
        race: 'Human',
        affiliation: 'Butterfly Mansion',
        skill: 'Rehabilitation, Breathing Styles Knowledge',
        quote: "As long as you’re still alive, there’s always a chance that the two of you can start over. You must make up with your brother."
    },

    {
        name: 'Kiyo Terauchi',
        id: '034',
        race: 'Human',
        affiliation: 'Rehabilitation, Breathing Styles Knowledge',
        skill: 'Water Breathing',
        quote: "There is a dimensional distance between those who can do it and those who cannot."
    },

    {
        name: 'Naho Takada',
        id: '035',
        race: 'Human',
        affiliation: 'Butterfly Mansion',
        skill: 'Rehabilitation, Breathing Styles Knowledge',
        quote: 'none'
    },

    {
        name: 'Goto',
        id: '036',
        race: 'Human',
        affiliation: 'Demon Slayer Corps',
        skill: 'Member of the Kakushi',
        quote: 'none'
    },

    {
        name: 'Yushiro',
        id: '037',
        race: 'Demon',
        affiliation: 'Demon Slayer Corps',
        skill: 'Blindfold',
        quote: "Someone who never gives to others will someday become unable to receive anything from them..."
    },

    {
        name: 'Susamaru',
        id: '038',
        race: 'Demon',
        affiliation: 'Muzan Kibutsuji',
        skill: 'Hiasobi Temari',
        quote: "Let's keep playing until dawn! Until your life ends."
    },

    {
        name: 'Yahaba',
        id: '039',
        race: 'Demon',
        affiliation: 'Muzan Kibutsuji',
        skill: 'Koketsu Arrow',
        quote: "How will we kill them? Brutally of course!."
    },

    {
        name: 'Hand Demon',
        id: '040',
        race: 'Demon',
        affiliation: 'Muzan Kibutsuji',
        skill: 'Hand Manipulation',
        quote: "I promised myself I'd kill every single one of them..."
    },

    {
        name: 'Temple Demon',
        id: '041',
        race: 'Demon',
        affiliation: 'none',
        skill: 'Flesh Manipulation',
        quote: "There's something off about you?"
    },

    {
        name: 'Tongue Demon',
        id: '042',
        race: 'Demon',
        affiliation: 'none',
        skill: 'Flesh Manipulation',
        quote: "I'm gonna guzzle your brains through your ears!"
    },

    {
        name: 'Horned Demon',
        id: '043',
        race: 'Demon',
        affiliation: 'none',
        skill: 'Flesh Manipulation',
        quote: "It takes guts to charge at me head on!"
    },

    {
        name: 'Swamp Demon',
        id: '044',
        race: 'Demon',
        affiliation: 'none',
        skill: 'Swamp Domain',
        quote: "You should have looked before you leaped in, imbecile!"
    },

    {
        name: 'Spider Demon - Son',
        id: '045',
        race: 'Demon',
        affiliation: 'Spider Family',
        skill: 'Spider Physiology, Conversion',
        quote: "There's nothing to be afraid of. When the poison runs throughout your system and you become a spider, your mind will be gone..."
    },

    {
        name: 'Spider Demon - Father',
        id: '046',
        race: 'Demon',
        affiliation: 'Spider Family',
        skill: 'Spider Physiology, Metamorphosis',
        quote: "Stay away from my family!"
    },

    {
        name: 'Spider Demon - Mother',
        id: '047',
        race: 'Demon',
        affiliation: 'Spider Family',
        skill: 'Spider Physiology, Enhanced Regeneration, Silk Manipulation',
        quote: "Such kind eyes. Back when I was human, I think someone used to look at me with kind eyes..."
    },

    {
        name: 'Spider Demon - Daughter',
        id: '048',
        race: 'Demon',
        affiliation: 'Spider Family',
        skill: 'Spider Physiology, Enhanced Regeneration Silk Manipulation',
        quote: "I only ever worried about myself. They were dumb, but I was different...."
    },

    {
        name: 'Nakime',
        id: '049',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Infinity Castle Manipulation',
        quote: "I decline."
    },
    
    {
        name: 'Slasher',
        id: '050',
        race: 'Demon',
        affiliation: 'none',
        skill: 'Regeneration',
        quote: "No one's ever been able to stop me. I'm the fastest...of them all!"
    },

    {
        name: 'Kokushibo',
        id: '051',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Moon Breathing, Crescent Moon Blades',
        quote: "I could never grab hold of anything. Anything at all. I abandoned my home. I abandoned my wife and children. I abandoned my humanity..."
    },

    {
        name: 'Doma',
        id: '052',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Cryokinesis',
        quote: "I truly believe that humans are pathetic..."
    },

    {
        name: 'Akaza',
        id: '053',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Destructive Death, Extrasensory Perception',
        quote: "You misunderstand, Tanjiro. I only despise the weak. I only spit on weaklings. Yes. Weaklings make me sick. It is the law of nature that they be weeded out."
    },

    {
        name: 'Hantengu',
        id: '054',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Emotion Manifestation',
        quote: "Since the day I was born I've never lied... not even once! I'm a good natured weakling! I deserve pity, but no one has any sympathy for me." 
    },

    {
        name: 'Gyokko',
        id: '055',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Porcelain Vase Spells',
        quote: "...You seem desperate. It's embarrassing" 
    },

    {
        name: 'Gyutaro',
        id: '056',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Dual Kama',
        quote: "The sufferings of my past were lessons on what to do to others as revenge! If I don't cause misery equal to my own unhappiness, I'll never balance the scales!" 
    },

    {
        name: 'Daki',
        id: '057',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Obi Sash Manipulation',
        quote: "We beautiful, powerful demons... can do anything we want!" 
    },

    {
        name: 'Enmu',
        id: '058',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Sleep Manipulation, Dream Manipulation',
        quote: "All human hearts are the same—fragile and weak like glasswork."
    },

    {
        name: 'Wakuraba',
        id: '059',
        race: 'Demon',
        affiliation: 'Twelve Kizuki',
        skill: 'Enhanced Regeneration',
        quote: "none"
    },

    {
        name: 'Tanjuro Kamado',
        id: '060',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'Demon Slayer Mark, Immense Strength, Extrasensory Perception',
        quote: "I'm sorry you're hungry but I will not let you come any closer. I will show no mercy to anyone who would harm my family... no matter the odds. Heed my warning... or I will steal your life."
    },

    {
        name: 'Kie Kamado',
        id: '061',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none' ,
        quote: "It's dangerous with all this snow.  You don't have to go, you know."
    },

    {
        name: 'Takeo Kamado',
        id: '062',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none' ,
        quote: "You and our sister sure take after each other. You're gentle but scary when you get mad."
    },

    {
        name: 'Hanako Kamado',
        id: '063',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none' ,
        quote: "Hey! You stop that right now!"
    },

    {
        name: 'Shigeru Kamado',
        id: '064',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none' ,
        quote: "You're going to town again today?"
    },

    {
        name: 'Rokuta Kamado',
        id: '064',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none' ,
        quote: 'none'
    },

    {
        name: 'Sumiyoshi Kamado',
        id: '065',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'Hinokami Kagura' ,
        quote: 'none'
    },

    {
        name: 'Suyako Kamado',
        id: '066',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Sumire Kamado',
        id: '067',
        race: 'Human',
        affiliation: 'Kamado Family',
        skill: 'none',
        quote: "Hug!"
    },

    {
        name: 'Kyogo Shinazugawa',
        id: '068',
        race: 'Human',
        affiliation: 'Shinazugawa Family',
        skill: 'none',
        quote: "Be thankful you're my son. You're extra tough."
    },

    {
        name: 'Shizu Shinazugawa',
        id: '069',
        race: 'Demon',
        affiliation: 'Shinazugawa Family',
        skill: 'Enhanced Speed',
        quote: 'none'
    },

    {
        name: 'Sumi Shinazugawa',
        id: '070',
        race: 'Human',
        affiliation: 'Shinazugawa Family',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Teiko Shinazugawa',
        id: '071',
        race: 'Human',
        affiliation: 'Shinazugawa Family',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Hiroshi Shinazugawa',
        id: '071',
        race: 'Human',
        affiliation: 'Shinazugawa Family',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Koto Shinazugawa',
        id: '072',
        race: 'Human',
        affiliation: 'Shinazugawa Family',
        skill: 'none',
        quote: 'none'
    },

    {
        name: 'Shuya Shinazugawa',
        id: '073',
        race: 'Human',
        affiliation: 'Shinazugawa Family',
        skill: 'none',
        quote: 'none'
    },

    





]

exports.characters = characters;
