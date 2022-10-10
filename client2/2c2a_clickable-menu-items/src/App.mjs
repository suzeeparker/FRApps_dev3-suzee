
    import  Toolbar    from './components/Toolbar/Toolbar.mjs';
    import  SideDrawer from './components/Sidebar/Sidebar.mjs';
    import  Backdrop   from './components/Backdrop/Backdrop.mjs';

       var bSidebar_button_isOpen = true

//--------  -----------------   =  ------------------------------------

//   const  App = function( )     { // render( ) { return {
//   class  App extends Component ( render() { return {
  function  App( ) {

            alert( "Begin javascript (App.mjs)" )
           bSidebar_button_isOpen  =  ! bSidebar_button_isOpen
/*
//          Sidebar_button_onClick =  function( ) {
  function  Sidebar_button_onClick           ( )    {
//          Sidebar_button_clickHandler   =    ( ) => {
//          this.setState(                      {          bSidebar_button_isOpen: !           bSidebar_button_isOpen } )   // Not good
//          this.setState(  ( prevState ) => { return { bSidebar_button_isOpen: ! prevState.bSidebar_button_isOpen } } ) //     good
           bSidebar_button_isOpen  =  ! bSidebar_button_isOpen
            alert(`Sidebar is now ${ bSidebar_button_isOpen ? 'open' : 'closed' } (Class - App.mjs)`)
            }

//     var  bSidebar_button = document.querySelectorAll( '.Sidebar_button' )

//function  Sidebar_button_addEventListener( pSidebar_button ) {
//         pSidebar_button.addEventListener( "click", Sidebar_button_onClick )
//          }
*/
return (

//  --------------------------------------------------
`
  <div style="height: 100%;" >
    ${ Toolbar( ) }
    ${ bSidebar_button_isOpen ? Sidebar( )  : null }
    ${ bSidebar_button_isOpen ? Backdrop( ) : null }
    <main style="margin-top: 64px;">
      <p>This is some page content</p>
      <p style="margin-left:10px;"> JS version _u1 </p>
    </main>
  </div>
`
    )   // eos return
//  --------------------------------------------------
  }  // eof App
//--------  -----------------   =  ------------------------------------

 export default App

// console.log( App() )


