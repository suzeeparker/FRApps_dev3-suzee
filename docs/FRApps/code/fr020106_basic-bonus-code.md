<!-- ---------------------------------------------------------------------- -->
<div class="page-back">

[<-- BACK](/FRApps/fr020106_Basic-Bonus)

</div><div class="page-next">

<!-- ---------------------------------------------------------------------- -->
<br><br>
HTML

___


```html

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="index.css">
        <link rel="shortcut icon" href="../favicon.gif">
        <title>Basic Training</title>
    </head>
    <body>
        <div class="header">
            <img class="formr-logo" src="assets/images/formr-logo.gif"/>
            <!--<span class="header-logo">My Logo</span>-->
            <ul class="nav-list">
                <li class="nav-list-item"><a href=#>Links</a>&nbsp;&nbsp;&nbsp;</li>
                <li class="nav-list-item"><a href=#>Cards</a>&nbsp;&nbsp;&nbsp;</li>
                <li class="nav-list-item"><a href=#>FAQs</a>&nbsp;&nbsp;&nbsp;</li>
                <li class="nav-list-item-cta"><a href=#>Sign In</a></li>
            </ul>
        </div>
        <div class="section1">
            <h2 class="image-text">My Image & Text</h2>
        </div>
        <div class="section2">
            <h2>section 2</h2>
        </div>
        <div class="footer">
            <ul class="footer-list">
                <li class="footer-list-item"><a href=#>Support</a></li>
                <li class="footer-list-item"><a href=#>Terms Of Use</a></li>
            </ul>
        </div>
    </body>
</html>


```


CSS

___

```css

/*Large Blocks Bonus CSS*/
@import url('https://fonts.googleapis.com/css?family=Bookman Old Style');

/*-----------------------------------------
root selector to create variables
CHANGE: h2-font-size
-------------------------------------------*/
:root {
    --header-color:#FF7034; /*dark orange*/
    --section1-color: whitesmoke;
    --section2-color: whitesmoke;
    --footer-color:#FF7034; /*dark orange*/
    --h2-text-color-light: white;
    --h2-text-color-dark: black;
    --nav-list-item-hover-color: white;
    --h2-font-size: 2rem;
    --nav-list-font-size: 1.2rem;
    --footer-list-font-size: .9rem;    
}

/*-----------------------------------------
The html properites
NO CHANGES or ADDITIONS
------------------------------------------*/
html {
    background: #b3b3b3;
    height: 100%;
    padding: 0px;
}

/*-----------------------------------------
The body properites
NO CHANGES or ADDITIONS
------------------------------------------*/
body {
  background: white;
  height: 100%;
  width: 100%;
  margin: 0;
}

/*-----------------------------------------
Set global properties for the <h2> tags
It also overrides the intrinsic margin of
20 to 0--allowing to stack the blocks together.
NO CHANGES or ADDITIONS
-------------------------------------------*/
h2 {
  margin: 0;
  font-size: var(--h2-font-size);
  color: var(--h2-text-color-light);
  padding: 6rem;
  text-align: center;
}

/*-----------------------------------------
The .header properites
NO CHANGES or ADDITIONS
------------------------------------------*/
.header {
  background: var(--header-color);
  width: 100%;
  height: 10%;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
}

/*-----------------------------------------
NEW
This replaces the action of the below css code
This sets the size and position of the formr.gif logo
------------------------------------------*/
.formr-logo {
  width: 210px;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
}

/*===========================================================*/
/****.header-logo & .header-logo::first-letter NOT NEEDED****/
/*-----------------------------------------
Sets all the properties for the font-based logo
NO CHANGES or ADDITIONS
------------------------------------------*/
/*
.header-logo {
  font-family: "Bookman Old Style", sans-serif;
  font-size: 30px;
  font-weight: bolder;
  color: blue;
  text-shadow: 2px 2px 12px #000000;
  padding-left: 20px;
}
*/
/*-----------------------------------------
Sets the properties for the first letter
of the font-based logo
NO CHANGES or ADDITIONS
------------------------------------------*/
/*
.header-logo::first-letter {
  font-size: 150%;
  color: cornflowerblue;
}
*/
/**** END of properties not needed ****/
/*===========================================================*/

/*-----------------------------------------
Sets properties for the nav-bar
introducing the flex property
NO CHANGES or ADDITIONS
------------------------------------------*/
.nav-list {
  list-style: none;
  margin-right: 30px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--nav-list-font-size);
}

/*-----------------------------------------
Sets the properties for each
introducing the flex property
of the nav-bar items
NO CHANGES or ADDITIONS
------------------------------------------*/
.nav-list-item a {
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin: 8px 0;
  padding: 25px
}

/*-----------------------------------------
Sets the color of the nav-bar
items when you hover
NO CHANGES or ADDITIONS
------------------------------------------*/
.nav-list-item a:hover,
.nav-list-item a:active {
  color: var(--nav-list-item-hover-color);
}

/*-----------------------------------------
Creates the blue button around the 'Sign In'
button.  -cta stands for 'Call To Action'
NO CHANGES or ADDITIONS
------------------------------------------*/
.nav-list-item-cta a {
  color: white;
  background: blue ;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

/*-----------------------------------------
The .section1 properites
CHANGES: background
ADDITIONS: background-color, background-repeat,
           background-size & background-position
------------------------------------------*/
.section1 {
  background: url("assets/images/monaco-blue-soft.jpg");
  background-color: blue;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 45%;
  position: relative;
  top: 10%;  
}

/*-----------------------------------------
Sets all the propterties for the font-based
text overlay (sits over top of the image above)
------------------------------------------*/
.image-text {
  font-family: "Bookman Old Style", sans-serif;
  font-size: 3rem;
  font-weight: bolder;
  color: blue;
  text-shadow: 2px 2px 12px #000000;
  padding: 80px 400px 20px 0px;
}

/*-----------------------------------------
Sets the properties for the first letter
of the font-based text overlay, above
------------------------------------------*/
.image-text::first-letter {
  font-size: 150%;
  color: cornflowerblue;
}

/*-----------------------------------------
The .section2 properites
NO CHANGES or ADDITIONS
------------------------------------------*/
.section2 {
  background: var(--section2-color);
  width: 100%;    /*was 300px*/
  height: 50%;  /*Added 5% to create scrolling*/
  position: relative;
  top: 10%; /*Added to adjust the top position*/
}

/*-----------------------------------------
This is another <h2> override setting 
the font color from white to black
------------------------------------------*/
.section2 h2 {
  color: black;
}

/*-----------------------------------------
The .footer properites
ADDITION: z-index, bottom
CHANGES: position
REMOVAL: top
------------------------------------------*/
.footer {
  background: var(--footer-color);
  width: 100%; 
  /*top: 10%;  Removed in place of the bottom property*/
  bottom: 0;
  position: fixed;
  z-index: 99;
}

/*-----------------------------------------
This is another <h2> override
REMOVAL: the entire property
due to <h2> tag was removed from html
in the footer
------------------------------------------*/
/*.footer h2 {
    padding: 0;
}*/

/*-----------------------------------------
Sets properties for the footer text
NO CHANGES
------------------------------------------*/
.footer-text {
  font-size: x-large;
  text-align: right;
  padding: 0px 30px 0px 65%;}

/*-----------------------------------------
Sets properties for the footer nav list
introducing the flex property
NO CHANGES
------------------------------------------*/
.footer-list {
    list-style: none;
    margin: 20px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: var(--footer-list-font-size);
  }

/*-----------------------------------------
Sets the properties for each nav item
introducing the flex property
of the nav-bar items
NO CHANGES
------------------------------------------*/
.footer-list-item a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin: 8px 0;
    padding: 12px;
  }

/*-----------------------------------------
Sets the color of the footer nav
items when you hover
NO CHANGES
------------------------------------------*/
.footer-list-item a:hover,
.footer-list-item a:active {
  color: var(--nav-list-item-hover-color);
}


```
___