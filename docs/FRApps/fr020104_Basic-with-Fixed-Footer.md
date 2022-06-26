#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- >

## 5. Blocks W/ Image & Overlay  <!-- {docsify-ignore} -->

<!--#  HTML Custom App <!-- {docsify-ignore} --> 

<!-- -------------------------------------------------------------- -->

## Basic Blocks with Fixed Footer  <!-- {docsify-ignore} -->
<br>

### Introduction

Next, we will add to your existing code in both the index.<b>html</b> AND index.<b>css</b> files to continue building on our basic web page. We will add some links to the footer and "secure" the position of the footer as we did with the header.
___

### index.html

#### 1. Footer Section

First, let's make some modifications to the index.<b>html</b> file.  The entire footer section can be changed by replacing it with this code.
___

```html
<div class="footer">
    <ul class="footer-list">
        <li class="footer-list-item"><a href=#>Support</a></li>
        <li class="footer-list-item"><a href=#>Terms Of Use</a></li>
    </ul>
</div>

```
___

Replace your code starting with line 27. 

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage1.jpg">

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage2.jpg">
<br><br>
Great! Now we move to the index.<b>css</b> file.

___

### index.css

___



#### 1. footer

First and foremost, in the .footer class:
- CHANGE the <font color=#A81966>position</font>: from relative to <b>fixed</b>
- ADD 
    + <font color=#A81966>z-index</font>: 99; 
    + <font color=#A81966>bottom</font>: 0; 
- REMOVE the <font color=green>top</font> property<br><br>
  You can comment-out a line of code with the /* (slash asterisk) at the 
  beginning of the line and an */ (asterisk slash) at the end.<br><br>
  Example:<br>
  <b>/ * top: 10%; Removed in place of the bottom property*/</b>

Like this
<br><br>

```css
/*-----------------------------------------
The .footer properites
ADDITION: z-index, bottom
CHANGES: position
REMOVAL: top property; and .footer h2 class
------------------------------------------*/
.footer {
  background: var(--footer-color);
  width: 100%; 
  /*top: 10%;  Removed in place of the bottom property*/
  bottom: 0;
  position: fixed;
  z-index: 99;
}
^ copy to here

```

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage3.jpg">

___

Also, we can remove the <font color='green'>.footer h2</font> class.  It is not needed because we replaced the &#60;h2&#62; tag with a &#60;ul&#62; tag in the index.<b>html</b> file.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage4.jpg">

___


Look on your Chrome browser! This "secured" the footer into a stationary position, but we need to fix the links in the left corner of the footer.


<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage6.jpg">

___

#### 2. footer nav-links
<br>
Now, let's focus on the links on the left side of the header.  

Copy and paste the following 4 classes and place below the <font color='green'>.footer</font> class.

<br>

```css
/*-----------------------------------------
***NEW***
Sets properties for the footer text
------------------------------------------*/
.footer-text {
  font-size: x-large;
  text-align: right;
  padding: 0px 30px 0px 65%;}

/*-----------------------------------------
***NEW***
Sets properties for the footer nav list
introducing the flex property and the use
of a variable for the font size
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
***NEW***
Sets the properties for each nav item
introducing the flex property
of the nav-bar items
------------------------------------------*/
.footer-list-item a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin: 8px 0;
    padding: 12px;
  }

/*-----------------------------------------
***NEW***
Sets the color of the footer nav
items when you hover using a variable
------------------------------------------*/
.footer-list-item a:hover,
.footer-list-item a:active {
  color: var(--nav-list-item-hover-color);
}
^ copy to here

```
___

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage7.jpg">

___

Again, go see it in your Chrome browser. The links are nicely centered and side-by-side, thanks to the CSS "flex" property. 

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage8.jpg">

___

## ___________________

## Basic Blocks w/ Fixed Header Web Page       <!-- .(20615.01.1 RAM This seems a little out of place --> 
<br>


<span style="font-size: 25px"><b>Congratulations!</b></span> You have just added to your Basic Blocks code which builds a full web page with a secured footer along with links. In the next section, we will add/modify code that will add an image and text overlay in <font color='green'>section1</font>.   
<br>
Please check your Chrome browser to see your web page thus far:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedFooterImage9.jpg">


___

<!--## 6. View Full Code  <!-- {docsify-ignore} -->

##  [View Full Code For Basic Blocks](/FRApps/code/fr020104_basic-with-fixed-footer-code.md "Full Code")

___

NEXT -->
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

