var fact= ["Ryan was born in a suburb called Paddington in Sydney Australia.","Ryan's parents were both born in Cape Town, South Africa and migrated to Australia 4 years before he was born.","Ryan lived on Kangaroo Island for 13 months before moving to the Northern Rivers and Gold Coast where he lived for 6 years","Ryan has a tattoo on the inside of his right arm","Ryan has trained in a variety of martial arts, and was training to be a Muay Thai fighter before moving back to Sydney","Ryan has very flexible hamstrings and has always been able to touch the floor with the flat of his palms","Ryan can tuvan throat sing","Ryan has been to India, Nepal, Thailand, America, London and South Africa and would love to gradually see the rest of the world","Ryan used to be an environmental activist and was almost arrested on multple occasions","Ryan can circular breath on the didgeridoo","In his late twenties Ryan thought he wanted to be a silversmith and so invested a substantial amount of money in the equipment.  They sit unused to this day","Ryan has a perfectly rational fear of umbrellas","Ryan's favourite food is chinese beef noodle soup","Ryan is a puerh enthusiast and will bore or excite you with his tea knowledge","Ryan has an interest in alchemy and has in his possession a subtantial amount of lab equipment that he acquired from an alchemist","Ryan has had 2 near death experiences.  One from cliff jumping.  The other from white-water rafting in Nepal.","Ryan has never broken any bones","Ryan's grandpa is 102 years old","Ryan did drama for 6 years","Ryan owns 5 acres of deforested land in Spain (I think)","Ryan once won $7000 from a $1 hit on a poker machine from $20 that he found buried on the side of a creek in the roots of water gum he was treating for fungus","Ryan is a qualified celebrant"
]

function newFact(){
var randomNumber=Math.floor(Math.random()*(fact.length));
    document.getElementById('factDisplay').innerHTML=fact[randomNumber];
}

var randomColor = Math.floor(Math.random()*16777215).toString(16);


//  Contact form

$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");
					
						switch(e.type) {
							case 'keyup': {
								 $parent.toggleClass('js-hide-label', $this.val() == '');
							} break;
							case 'blur': {
								if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
							} break;
							case 'focus': {
								if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
							} break;
							default: break;
						}
						// previous implementation with ifs
            /*if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }*/
        });
    } 
});


//sidebar

