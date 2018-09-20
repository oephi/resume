var fact= ["Ryan was born in a suburb called Paddington in Sydney Australia.","Ryan's parents were both born in Cape Town, South Africa and migrated to Australia 4 years before he was born.","Ryan lived on Kangaroo Island for 13 months before moving to the Northern Rivers and Gold Coast where he lived for 6 years","Ryan has a tattoo on the inside of his right arm","Ryan has trained in a variety of martial arts, and was training to be a Muay Thai fighter before moving back to Sydney","Ryan has very flexible hamstrings and has always been able to touch the floor with the flat of his palms","Ryan can tuvan throat sing","Ryan has been to India, Nepal, Thailand, America, London and South Africa and would love to gradually see the rest of the world","Ryan used to be an environmental activist and was almost arrested on multple occasions","Ryan can circular breath on the didgeridoo","In his late twenties Ryan thought he wanted to be a silversmith and so invested a substantial amount of money in the equipment.  They sit unused to this day","Ryan has an irrational fear of umbrellas","Ryan's favourite food is chinese beef noodle soup","Ryan is a puerh enthusiast and will bore or excite you with his tea knowledge","Ryan has an interest in alchemy and has in his possession a subtantial amount of lab equipment that he acquired from an alchemist","Ryan has had 2 near death experiences.  One from cliff jumping.  The other from white-water rafting in Nepal.","Ryan has never broken any bones","Ryan's grandpa is 102 years old","Ryan did drama for 6 years"
]

function newFact(){
var randomNumber=Math.floor(Math.random()*(19));
    document.getElementById('factDisplay').innerHTML=fact[randomNumber];
}

var randomColor = Math.floor(Math.random()*16777215).toString(16);

