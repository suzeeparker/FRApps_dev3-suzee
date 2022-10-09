//  import  setPanels from './expanding-cards_u6.js';

//     var  document = { "querySelectorAll": ( aSelector ) => { return [] } }

       var  aItemsClass = '.toolbar_nav-items li'

       var  mItems = { "Home"   : { Selector: ''                , Type: ''      , Visible: 0 }
                     , "Links"  : { Selector: ''                , Type: ''      , Visible: 0 }
                     , "Cards"  : { Selector: '#cards-container', Type: 'flex'  , Visible: 0 }
                     , "FAQs"   : { Selector: '#faq-container'  , Type: ''      , Visible: 0 }
                     , "Contact": { Selector: '#contact-form'   , Type: 'block' , Visible: 0 }
                       }
// -------------------------------------------------------------------------------------

  function  Toolbar_setItems( ) {
            NavMenuBar_addClickListeners( )
            }
//          -------------------------------------------------------

  function  NavMenuBar_addClickListeners( ) {
       var mNavItems = document.querySelectorAll( aItemsClass )
           mNavItems.forEach( NavItem_addClickListener )
            }
//          -------------------------------------------------------

  function  NavItem_addClickListener( pNavItem ) {
            console.log( "Added Listner for " + pNavItem.innerText )
           pNavItem.addEventListener( 'click',  NavItem_onClick )
            }
//          -------------------------------------------------------

// -----------------------------------------------------------------------------------------

  function  NavItem_onClick( aItem, pEvent ) {
       var pItem  = pEvent ? pEvent.currentTarget : {}
       var aItem  = pEvent ? pItem.innerText      : aItem
           pEvent ? pEvent.preventDefault() : null
            console.log( "\n[4] Clicked " + aItem.padEnd(5) + ", Event:", pEvent ); // return false
            toggleDiv( aItem )
            }
//          -------------------------------------------------------

  function  NavItem_onClick1( NavItem_Event ) {

      try {
       var pNavItem  =  NavItem_Event.currentTarget
       var aNavItem  =  pNavItem.innerText;
            NavItem_Event.preventDefault()
            }
 catch(e) { console.log( " ** NavItem_onClick[ 1]  pNavItem not defined" )
       var aNavItem  =  NavItem_Event
            }
            console.log( "[4] Clicked " + aNavItem ); // return false

       if (aNavItem == "Home"    ) { toggleDiv( aNavItem ) }
       if (aNavItem == "Links"   ) { toggleDiv( aNavItem ) }

//     if (aNavItem == "Cards"   ) { toggleDiv( aNavItem )
//                                   setPanels( )
       if (aNavItem == "Cards"   ) { toggleDiv( aNavItem ) }
       if (aNavItem == "FAQ"     ) { toggleDiv( aNavItem ) }

//     if (aNavItem == "Contact" ) { alert( " *** " + aNavItem + " is not defined" ) }
       if (aNavItem == "Contact" ) { toggleDiv( aNavItem ) }            // .(20426.02.1 RAM Added)

            } // eof NavItem_onClick1
//          -------------------------------------------------------

  function  toggleDiv( aName ) {
        if (mItems[ aName ] == undefined ) { return }

       var  aSelector   =  mItems[ aName ].Selector
       var  aDisplay    =  mItems[ aName ].Type
            aDisplay    =  aDisplay  ? aDisplay : "block"   // The default visible value

//     var  pDiv        =  document.querySelectorAll( '.faq-container' )[0]
       var  bSelector   =  aSelector > ""
       var  mDivs       =  bSelector ? document.querySelectorAll( aSelector ) : []
        if (mDivs.length > 0) {

       var  pDiv        =  mDivs[ 0 ]
//     var  aVisibility =  pDiv.style.visibility
//          pDiv.style.visibility = (aVisibility == "hidden") ? "visible" :"hidden"

       var  aVisibility =  pDiv.style.display
//          pDiv.style.display = (aVisibility == "none") ? "block" :"none"

//          aVisibility =  aVisibility ? aVisibility  : "block"
            aVisibility =  aVisibility ? aVisibility  : "none"   // .(20426.03.11 RTAM Assume it's hidden)
            aVisibility = (aVisibility == "none") ? aDisplay : "none"
            pDiv.style.display = aVisibility
        } else {
            aVisibility = mItems[ aName ].Visible == 0 ? aDisplay : "none"
            }
            mItems[ aName ].Visible = (aVisibility != "none")

            alert(                                  `[4] ${aName} display is now set to ${aVisibility}` )
            console.log( `    toggleDiv[ 1]  alert( '[4] ${aName} display is now set to ${aVisibility}' )` )

            }
//          -------------------------------------------------------
// ------------------------------------------------------------------------

//     var  NavMenu = { setBar: {}, setItems: {} }
// export { NavMenu }               // Named export. Imported name must match.

       var  ToolbarItems8 = { onClick:      NavItem_onClick
 //                         , onClick:    ( aItem, pEvent ) => NavItem_onClick1( pEvent )
                            , addListeners: Toolbar_setItems
                              }

//  export  default ToolbarItems4    // Default export

// ------------------------------------------------------------------------

   console.log( "[8] ToolbarItems8:", ToolbarItems4 ); ToolbarItems4.onClick( "Item8" )
// console.log( "---------------------------------------------------" )

