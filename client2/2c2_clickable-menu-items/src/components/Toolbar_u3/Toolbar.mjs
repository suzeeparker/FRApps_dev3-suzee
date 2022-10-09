




    import  ToolbarItems7           from './ToolbarItems.mjs'                                             // [4] [4]        // Import[7]
    window. ToolbarItems7  =  ToolbarItems7       
            console.log( "[7] ToolbarItems7:", ToolbarItems7 ); ToolbarItems7.onClick( "Item4" )   // [7] [4]

//--------------------------------------------------------

// const toolbar = function( props ) { return (
// const toolbar = props => (
function Toolbar(  props ) {

//  --------------------------------------------------

  return removeOnClicks(
`
    <header  class    ="toolbar">
      <nav   class    ="toolbar_nav">
        <div>
          <!-- SideDrawer.ToggleButton -->
        </div>
        <div class    ="toolbar_logo"><a href="/">&nbsp;</a></div>  <!-- &nbsp; is required -->

        <div class    ="toolbar_spacer"></div>                              <!-- Ending tag is required -->

        <div class    ="toolbar_nav-items">
          <ul>
<!--        <li         ><a href="#" onclick="   (event) => { console.log( '[1] Clicked Home , Event:', pEvent ) }"           >Home</a></li>--><!-- No Import [1] -->
            <li         ><a href="#" onclick="( (pEvent) => { console.log( '[1] Clicked Home , Event:', pEvent ) } )( event )">Home</a></li>   <!-- No Import [1] -->

                                        <!-- 2,3,4,5 don't work -->
            <li         ><a href="/" onclick="ToolbarItems7.onClick(          event )">Links</a></li> <!-- but event is defined here -->
            <li         ><a href="Javascript: ToolbarItems7.onClick( 'Cards', event )">Cards</a></li> <!-- event is not defined      -->
            <button                  onclick="ToolbarItems7.onClick( 'FAQs ', event )">FAQs </button> <!-- but event is defined here -->
            <li id="cta"><a href="#" onclick="ToolbarItems7.onClick( 'Login', event )">Sign In</a></li>
          </ul>
        </div>
        <!-- ---------------------------------------------------------------------------------------------------------------------------- -->

        <script>                                                                                                          <!-- not loaded -->

      var ToolbarItems2 = { }                                                                                              //  Import [2]
//        ToolbarItems2.onClick =         ( aItem, pEvent ) => {                                                           // [[Prototype]]: Object
          ToolbarItems2.onClick = function( aItem, pEvent )    {
          var pItem  = pEvent ? pEvent.currentTarget : {}
          var aItem  = pEvent ? pItem.innerText      : aItem
              pEvent ? pEvent.preventDefault() : null

              console.log( "[2] Clicked " + aItem.padEnd(5) + ", Event:", pEvent);

              console.log( "    Toolbar.m[ 2]  alert( '[2] Clicked " + aItem + "' )" )
              alert(       "[2] Clicked " + aItem )
              }


        </script>
        <!-- ---------------------------------------------------------------------------------------------------------------------------- -->




        <!-- ---------------------------------------------------------------------------------------------------------------------------- -->

<!--    <script type="module" src='/client/1c-html-custom-app_final/src/components/Toolbar/ToolbarItems.mjs'></script>--> <!-- Import [4] -->
        <script               src='/client/1c-html-custom-app_final/src/components/Toolbar/ToolbarItems.js' ></script>    <!-- Import [5] Not loaded -->

        <!-- ---------------------------------------------------------------------------------------------------------------------------- -->

        <script>                                                                                                          <!-- not loaded -->
          console.log( "    Begin waiting: " + (new Date) )
          setTimeout( () => console.log( "    End 3sec wait: " + (new Date) ), 3000 )

          ToolbarItems5 = ToolbarItems4                               // Not defined via script module, but it is via normal script.js
// import ToolbarItems5 from './ToolbarItems.mjs'                     // Cannot use import statement outside a module      //  Import [5]
          console.log(     "[5] ToolbarItems5:", ToolbarItems5 ); ToolbarItems5.onClick( "Item5" )
          console.log(     "[7] ToolbarItems7:", ToolbarItems7 ); ToolbarItems7.onClick( "Item7" )                         //  Import [7] No workie

        </script>
        <!-- ---------------------------------------------------------------------------------------------------------------------------- -->

        <script>                                                                                                          <!-- not loaded -->

      var ToolbarItems3 = { }                                                                                              //  Import [3]
          ToolbarItems3.onClick = function( aItem, pEvent ) {
          var pItem  = pEvent ? pEvent.currentTarget : {}
          var aItem  = pEvent ? pItem.innerText      : aItem
              pEvent ? pEvent.preventDefault() : null

              console.log( "[3] Clicked " + aItem.padEnd(5) + ", Event:", pEvent);

              console.log( "    Toolbar.m[ 3]  alert( '[3] Clicked " + aItem + "' )" )
              alert(       "[3] Clicked " + aItem )
              }


        </script>
        <!-- ---------------------------------------------------------------------------------------------------------------------------- -->

      </nav>
    </header>
`
//  ).replace( /ToolbarItems.onClick/, '' ) // eos return( ... )
    ) // eos return( ... )
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

export default Toolbar;

// console.log( Toolbar( ) )

function removeOnClicks( aHTML ) {
//  aHTML = aHTML.replace(              /ToolbarItems.onClick/, ''     )
//  aHTML = aHTML.replace( /"Javascript: ToolbarItems.+">/g,    '"#">' )
//  aHTML = aHTML.replace(    / onclick="ToolbarItems.+">/g,    '>'    )
    return  aHTML
    }

