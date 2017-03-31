$( document ).ready( function () {
  $( "#sticky-wrapper" ).sticky( {
    topSpacing: 0
  } );
  if ( !localStorage.getItem( "runOnce" ) ) {
    if ( $( ".front" ).length != 0 ) {
      $( '.popup' ).css( 'visibility', 'visible' );
      localStorage.setItem( "runOnce", true );
    }
  }

  var portada1 = $( "#pimg" ).text();
  var portada2 = $( "#oimg" ).text();

  var flag = false;
  setInterval( function () {
    if ( flag == false ) {
      $( '#bloque-principal' ).css( 'background-image', 'url(./img/' + portada1 + ')' );
    } else {
      $( '#bloque-principal' ).css( 'background-image', 'url(./img/' + portada2 + ')' );
    }
    flag = !flag;
  }, 8000 );

} );
