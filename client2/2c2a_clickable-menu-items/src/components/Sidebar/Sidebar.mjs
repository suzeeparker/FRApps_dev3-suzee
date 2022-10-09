//--------  -----------------------------------------------------------

//   const  Sidebar = function( props ) { return (
//   const  Sidebar = props => (
  function  Sidebar(  props ) {

 return (

//  --------------------------------------------------
`
    <nav class="Sidebar">
      <ul>
<!--    <li><a href="/">Home</a></li>  -->
        <li><a href="/">Links</a></li>
        <li><a href="/">Cards</a></li>
        <li><a href="/">FAQ</a></li>

        <li id="Toolbar_cta-button"><a href="/">Sign In</a></li>
      </ul>
    </nav>
`
    ).substr(5) // eos return( ... )
//  --------------------------------------------------
  }  // eof ToggleButton
//--------  -----------------------------------------------------------

 export default Sidebar

// console.log( Sidebar( ) )

