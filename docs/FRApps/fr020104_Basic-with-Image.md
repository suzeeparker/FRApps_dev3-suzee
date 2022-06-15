#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- >

## 4. Blocks W/ Fixed Footer <!-- {docsify-ignore} -->

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="index.css">
        <link rel="shortcut icon" href="../favicon.gif">
        <link href="https://fonts.googleapis.com/css?family=Bookman Old Style" rel="stylesheet">
        <title>Basic Training</title>
    </head>
    <body>
        <div class="header">
            <span class="header-logo">My Logo</span>
            <ul class="nav-list">
                <li class="nav-list-item"><a href=#>Links</a>&nbsp;&nbsp;&nbsp;</li>
                <li class="nav-list-item"><a href=#>Cards</a>&nbsp;&nbsp;&nbsp;</li>
                <li class="nav-list-item"><a href=#>FAQs</a>&nbsp;&nbsp;&nbsp;</li>
                <li class="nav-list-item-cta"><a href=#>Sign In</a></li>
            </ul>
        </div>
        <div class="section1">
            <h2>section 1</h2>
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

```css
@import url('https://fonts.googleapis.com/css?family=Bookman Old Style');

/*From Basic Blocks*/
html {
    background: #b3b3b3;
    height: 100%;
    padding: 0px;
}

/*The body properites*/
body {
  background: white;
  height: 100%;
  width: 100%;
  margin: 0;
}

/*Set global properties for the <h2> tags*/
/*It also overrides the intrinsic margin of*/
/*20 to 0--allowing to stack the blocks together*/
h2 {
  margin: 0;
  font-size: 2rem;
  color: white;
  padding: 6rem;
  text-align: center;
}

/*The .header properites*/
.header {
  background: red;
  width: 100%;    /*was 300px*/
  height: 10%;   /*was 100px*/
  position: fixed;  /*was relative*/
  z-index: 100;
  display: flex;
  justify-content: space-between;
}

/*Sets all the properties for the font-based logo*/
.header-logo {
  font-family: "Bookman Old Style", sans-serif;
  font-size: 30px;
  font-weight: bolder;
  color: blue;
  text-shadow: 2px 2px 12px #000000;
  padding-left: 20px;
}

/*Sets the properties for the first letter*/
/*of the font-based logo*/
.header-logo::first-letter {
  font-size: 150%;
  color: cornflowerblue;
}

/*Sets properties for the nav-bar*/
/*introducing the flex property*/
.nav-list {
  list-style: none;
  margin-right: 30px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

/*Sets the properties for each of the nav-bar items*/
.nav-list-item a {
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin: 8px 0;
}

/*Sets the color of the nav-bar items when you hover*/
.nav-list-item a:hover,
.nav-list-item a:active {
  color: #ccc;
}

/*Creates the blue button around the 'Sign In'*/
/*button.  -cta stands for 'Call To Action'*/
.nav-list-item-cta a {
  color: white;
  background: blue ;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

/*The .section1 properites*/
.section1 {
  background: blue;
  height: 45%;  /*was 100px*/
  width: 100%;    /*was 300px*/
  position: relative;
  top: 10%; /*Added to adjust the top position*/
}

/*The .section2 properites*/
.section2 {
  background: lightgray;
  width: 100%;    /*was 300px*/
  height: 50%;  /*Added 5% to create scrolling*/
  position: relative;
  top: 10%; /*Added to adjust the top position*/
}

/*This is another <h2> override*/
/*setting the font color from white to black*/
.section2 h2 {
  color: black;
}

/*The .footer properites*/
/*The position was changed to fixed*/
/*With a z-index of 99*/
.footer {
    background: green;
    width: 100%; 
    /*height: 10%;  Removed in place of the bottom property*/
    bottom: 0;
    position: fixed;
    z-index: 99;
}

/*From Basic Fixed Footer with Links*/
.footer-text {
  font-size: x-large;
  text-align: right;
  padding: 0px 30px 0px 65%;}

/*From Basic Fixed Footer with Links*/
.footer-list {
    list-style: none;
    margin: 20px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

/*From Basic Fixed Footer with Links*/
.footer-list-item a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin: 8px 0;

  }

/*From Basic Fixed Footer with Links*/
.footer-list-item a:hover,
.footer-list-item a:active {
  color: #ccc;
}

/*This is another <h2> override*/
/*setting the padding from 6 to 0 rem*/
.footer h2 {
  padding: 0;
}
```
