
// -------------------------------------------------------------------------------------

      var ToolbarItems1 = { }

                                 function onClick( aVar )    {  // normal function
//                     onClick = function onClick( aVar )    {  // named function
//                     onClick = function        ( aVar )    {  // anonymous function
//                     onClick =          onClick( aVar ) => {  // no workie
//                     onClick =                 ( aVar ) => {  // arrow function

             console.log( "[1] Clicked " + aVar );
             }

          ToolbarItems1.onClick = onClick

          ToolbarItems1.onClick( 'me' );

             console.log( ToolbarItems1 );

             console.log( "-------------------------------------" )

// -------------------------------------------------------------------------------------

      var ToolbarItems2 = { }
//                                function ToolbarItems2.onClick( aVar )    {  // no workie
//        ToolbarItems2.onClick = function               onClick( aVar )    {  // named function
//        ToolbarItems2.onClick = function                      ( aVar )    {  // anonymous function
//        ToolbarItems2.onClick =                        onClick( aVar ) => {  // no workie
          ToolbarItems2.onClick =                               ( aVar ) => {  // arrow function

             console.log( "[2] Clicked " + aVar );
             }

          ToolbarItems2.onClick( 'me' );

             console.log( ToolbarItems2 );
             console.log( "-------------------------------------" ); // ; is required for ( function() { } )( ) to work

// -------------------------------------------------------------------------------------

 ( function( aVar )    {
             console.log( "[3] Clicked " + aVar );
//           this.preventDefault()
//           alert("Clicked " + aVar ); return false
             } ) ( 'anon1' );

             console.log( "-------------------------------------" ); // ; is required for ( function() { } )( ) to work

// -------------------------------------------------------------------------------------

 (         ( aVar ) => {
             console.log( "[4] Clicked " + aVar );
//           this.preventDefault()
//           alert("Clicked " + aVar ); return false
             } ) ( 'anon2' )

             console.log( "-------------------------------------" );

// -------------------------------------------------------------------------------------


[[Prototype]]: Object
