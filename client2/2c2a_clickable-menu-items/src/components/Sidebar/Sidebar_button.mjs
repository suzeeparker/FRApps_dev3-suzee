
            alert( "Begin javascript (Sidebar_button.mjs)" )
      var  bSidebar_button_isOpen  =  false

//--------  -----------------------------------------------------------

//          Sidebar_button_clickHandler =    ( ) => {
  function  Sidebar_button_onClick           ( )    {
//          this.setState(                      {          Sidebar_button_isOpen: !           Sidebar_button_isOpen } )   // Not good
//          this.setState(  ( prevState )    => { return { Sidebar_button_isOpen: ! prevState.Sidebar_button_isOpen } } ) //     good
           bSidebar_button_isOpen  =  ! bSidebar_button_isOpen
            alert( "Sidebar is now ${ bSidebar_button_isOpen ? 'open' : 'closed' } (Class - Sidebar_button.mjs)" )
            }
//--------  -----------------------------------------------------------

//   const  Sidebar_button = function( props ) { return (
//   const  Sidebar_button = props => (
  function  Sidebar_button(  props ) {

            alert( "Call javascript (Sidebar_button)" )
      var  bSidebar_button_isOpen  =  false

 return (

//  --------------------------------------------------

`           <div class="Toolbar_sidebar-button">

              <div   class="Sidebar_button" onclick="Sidebar_button_onClick()">   <!-- defined in App.mjs -->
                <div class="Sidebar_button-line"></div>
                <div class="Sidebar_button-line"></div>
                <div class="Sidebar_button-line"></div>
              </div>

              <script>
 //                      Sidebar_button_clickHandler =  ( ) => { ... }
               function  Sidebar_button_onClick( ) {
                        bSidebar_button_isOpen  =  ! bSidebar_button_isOpen
                         alert( "Sidebar is now ${ bSidebar_button_isOpen ? 'open' : 'closed' } (HTML - Inline class)" )
                         }
              </script>

            </div>
 `
    ) // eos return( ... )
//  --------------------------------------------------
  }  // eof Sidebar_button
//--------  -----------------------------------------------------------

 export default Sidebar_button

// console.log( Sidebar_button( ) )

