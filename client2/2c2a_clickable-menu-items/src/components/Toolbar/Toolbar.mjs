
    import  Sidebar_button from '../Sidebar/Sidebar_button.mjs'

//--------  -----------------------------------------------------------

//   const  Toolbar = function( props ) { return (
//   const  Toolbar = props => (
  function  Toolbar(  props ) {

//  --------------------------------------------------

  return (
`
    <header  class="Toolbar">
      <nav   class="Toolbar_nav">

        <div>
          ${ Sidebar_button( ) }
        </div>

        <div class="Toolbar_logo"><a href="/">&nbsp;</a></div>  <!-- &nbsp; is required -->

        <div class="Toolbar_spacer"></div>                      <!-- Ending tag is required -->

        <div class="Toolbar_nav-items">
          <ul>
<!--        <li><a href="/">Home</a></li>  -->
            <li><a href="/">Links</a></li>
            <li><a href="/">Cards</a></li>
            <li><a href="/">FAQs</a></li>

            <li id="Toolbar_cta-button"><a href="/">Sign In</a></li>
          </ul>
        </div>

      </nav>
    </header>
`
    ) // eos return( ... )
//  --------------------------------------------------
  }  // eof Toolbar
//--------  -----------------------------------------------------------

export default Toolbar;

// console.log( Toolbar( ) )