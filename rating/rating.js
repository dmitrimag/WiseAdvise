//----- Vars

var current_rating = 3;
// Get cookie
console.log(GetCookie( "current_rating" ));
if ( GetCookie( "current_rating" ) )
{
	current_rating = GetCookie( "current_rating" );
}

var max_rating = 5;
var active_class = "rating__value_active";

//----- Listeners

for ( var rating = 1; rating <= max_rating; rating++ )
{
	var elem = document.getElementById( "rating-" + rating );
	if (elem) {
		elem.addEventListener( "click", SelectRating.bind( null, rating ) );
	}
}

document.getElementById( "rating-button" ).addEventListener( "click", SetNewRating );

//----- Functions

// Load previous rating
function GetCookie( name )
{
 	var matches = document.cookie.match( new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  	return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Loading current and choosing new rating
function SelectRating( rating )
{
	for ( var i = 1; i <= max_rating; i++ )
	{
		var elem = document.getElementById( "rating-" + i );

		if ( i <= rating && !elem.classList.contains( active_class ) )
		{
			elem.classList.add( active_class );
		}
		else if ( i > rating )
		{
			elem.classList.remove( active_class );
		}
	}

	current_rating = rating;
}

// Set new current rating when press the button
function SetNewRating()
{
	document.cookie = "current_rating=" + current_rating;
	console.log(GetCookie( "current_rating" ));
}

//----- Initializing on load

SelectRating( current_rating );