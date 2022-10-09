




    import  ToolbarItems              from './ToolbarItems.mjs'     
    window. ToolbarItems  =                   ToolbarItems                   // must assign object into global window object / scope    
 
            console.log( "[7] ToolbarItems:", ToolbarItems ); // ToolbarItems.onClick( "Item7" )  

//--------------------------------------------------------

// const toolbar = function( props ) { return (
// const toolbar = props => (
function Toolbar(  props ) {

//  --------------------------------------------------

  return (
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
<!--        <li         ><a href="#" onclick="   (event) => { console.log( '[1] Clicked Home , Event:', pEvent ) }"           >Home</a></li>--><!-- No workie -->
            <li         ><a href="#" onclick="( (pEvent) => {       alert( '[1] Clicked Home , Event:', pEvent ) } )( event )">Home</a></li>   <!-- event must be passed -->

            <li         ><a href="/" onclick="ToolbarItems.onClick( 'Links', event )">Links</a></li>   <!-- event is defined here -->

            <li         ><a href="Javascript: ToolbarItems.onClick( 'Cards', event )">Cards</a></li>   <!-- event is not defined for Javascript: -->

<!--        <button                  onclick="ToolbarItems.onClick( 'FAQs' , event )">FAQs </button>--><!-- works for any tag -->
            <li         ><span       onclick="ToolbarItems.onClick( 'FAQs'         )">FAQs </span>     <!-- works with just a item name -->

            <li id="cta"><a href="#" onclick="ToolbarItems.onClick(          event )">Sign In</a></li> <!-- OnClick takes event as 1st or 2nd arg -->
          </ul>
        </div>
      </nav>
    </header>
`
    ) // eos return( ... )
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

export default Toolbar;

// console.log( Toolbar( ) )

