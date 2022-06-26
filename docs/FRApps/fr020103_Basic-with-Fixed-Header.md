<!--#  HTML Custom App <!-- {docsify-ignore} --> 

<!-- -------------------------------------------------------------- -->
#  HTML Custom App <!-- {docsify-ignore} -->

## Basic Blocks with Fixed Header  <!-- {docsify-ignore} -->
<br>

### Introduction
<br>
Next, we will add to your existing code in  both index.<b>html</b> AND index.<b>css</b> files to continue building on our basic web page.

___

### index.html

#### 1. Header Section

First, let's make some modifications to the index.<b>html</b> file.  The entire header section can be changed by replacing it with this code.

Like this
___

```html

<div class="header">
    <span class="header-logo">My Logo</span>
    <ul class="nav-list">
        <li class="nav-list-item"><a href=#>Links</a></li>
        <li class="nav-list-item"><a href=#>Cards</a></li>
        <li class="nav-list-item"><a href=#>FAQs</a></li>
        <li class="nav-list-item-cta"><a href=#>Sign In</a></li>
    </ul>
</div>

```
___

Replace the code, starting with line 12.

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage1.jpg">

<br>

Great! Now we move to the index.<b>css</b> file.

___

### index.css

___



#### 1. header

First and foremost, do the following in the <font color='green'>.header</font> class:
- CHANGE the <font color=#A81966>position</font>: from relative to <b>fixed</b>
- ADD 
    + <font color=#A81966>z-index</font>: 100; 
    + <font color=#A81966>display</font>: flex; 
    + <font color=#A81966>justify-content</font>: space-between;

Like this<br><br>

```css
/*-----------------------------------------
The .header properites
CHANGES: position
ADDITION: z-index, display & justify-content
REMOVAL: .header h2 
------------------------------------------*/
.header {
    background: var(--header-color);
    width: 100%;
    height: 10%;
    position: fixed;  /*was relative*/
    z-index: 100;
    display: flex;
    justify-content: space-between;
}
^ copy to here

```

- REMOVE the <font color=green>.header h2</font> class


<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage2.jpg">


___

Look at your Chrome browser! The above steps "secure" the header into a stationary position.

We still need to:

1. Get rid of the "Unwanted Space" at the bottom 
2. Fix the links in the right corner of the header 
3. Fix the "My Logo" in the left corner of the header.


<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage3.jpg">


___



#### 2. sections 1 & 2, footer
<br>

To handle the Unwanted Space, we need to adjust Sections 1 & 2 and the Footer.  It's easy, we will code each to have a <font color=#A81966>top</font> of 10%.  

ADD 
- <font color=#A81966>top</font>: 10%;

at the bottom of <font color=green>.section1</font>, <font color=green>.section2</font> and <font color=green>.footer</font>

Like this

___

```css
/*-----------------------------------------
The .section1 properites
ADDITION: top
------------------------------------------*/
.section1 {
    background: var(--section1-color);
    width: 100%;
    height: 40%;
    position: relative;
    top:10%; /*<---ADD to adjust the top position*/
}

/*-----------------------------------------
The .section2 properites
CHANGE: height
ADDITION: top
------------------------------------------*/
.section2 {
    background: var(--section2-color);
    width: 100%; 
    height: 50%;  /*Added 10% for scrolling*/
    position: relative;
    top:10%; /*<---ADD to adjust the top position*/
}

/*-----------------------------------------
The .footer properites
ADDITION: top
------------------------------------------*/
.footer {
    background: var(--footer-color);
    width: 100%;
    height: 10%;
    position: relative;
    top:10%; /*<---ADD to adjust the top position*/
}
^ copy to here

```

Back to Chrome. We now have all the blocks stacked in proper order with no "Unwanted Space" at the bottom. 
<br><br>
AND if you scroll up and down, you will have the "secured" header.

___

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage4.jpg">

___


#### 3. header-logo
<br>
Now, let's fix that ugly "My Logo" on the left side of the header. To do this, we add some new classes to our CSS file.

Copy and paste the following 2 classes, and place below the <font color='green'>.header</font> class.
<br><br>
Like this
<br><br>

```css

/*-----------------------------------------
***NEW***
Sets all the properties for the font-based logo.
The font-family is special and explained below
this code. Notice how we add a shadow to the text.
------------------------------------------*/
.header-logo {
    font-family: "Bookman Old Style", sans-serif;
    font-size: 30px;
    font-weight: bolder;
    color: blue;
    text-shadow: 2px 2px 12px #000000;
    padding-left: 20px;
}

/*-----------------------------------------
***NEW***
Sets the properties for the first letter
of the font-based logo AND we increase the
size of the first letter by 150%.
------------------------------------------*/

.header-logo::first-letter {
    font-size: 150%;
    color: cornflowerblue;
}
^ copy to here

```

___

Check Chrome

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage5.jpg">

___


This takes the boring "My Logo" and turns it into a nice "font-based" logo (with large shadowed blue letters and a lighter blue first letter).  Note the font is one of Google's special fonts, called "Bookman Old Style."  We linked to that from the very top of the index.<b>css</b> file.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage6.jpg">

___

#### 4. header nav-bar
<br>
Now, let's focus on the stack of links on the right side of the header.  

Copy and paste the following 3 classes and place below the <font color='green'>.header-logo::first-letter</font> class.

<br>

```css

/*-----------------------------------------
***NEW***
Sets properties for the nav-bar
introducing the flex property. Again, we
use a variable to set the font size.
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
***NEW***
Sets the properties for each nav-bar item.
The padding separates each 25px from each other.
------------------------------------------*/
.nav-list-item a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin: 8px 0;
    padding: 25px;
}

/*-----------------------------------------
***NEW***
Sets the color of the nav-bar
items when you hover with a variable.
------------------------------------------*/
.nav-list-item a:hover,
.nav-list-item a:active {
    color: var(--nav-list-item-hover-color);
}
^ copy to here

```
Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage7.jpg">





Go back to Chrome and see the results. Notice that the 3 links on the right will to a light gray (#ccc) when you hover over them.

___

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage8.jpg">

___

#### 5. cta button
<br>
Now, let's do something about that "Sign In" link. Using CSS, we can turn it into a nice blue button. We will copy the below code and place it under the...<br>

&nbsp;&nbsp;&nbsp;<font color='green'>.nav-list-item a:hover,</font><br>
&nbsp;&nbsp;&nbsp;<font color='green'>.nav-list-item a:active</font> {<br>
class.


The "cta" stands for "Call to Action." It becomes the most important link.


```css

/*-----------------------------------------
***NEW***
Creates the blue button around the 'Sign In'
button.  -cta stands for 'Call To Action'
------------------------------------------*/
.nav-list-item-cta a {
    color: white;
    background: blue ;
    padding: 0.5rem 1rem;
    border-radius: 8px;
}
^ copy to here

```

___

Like this


<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage9.jpg">

___

Again, go see it in your Chrome browser.  

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage10.jpg">

___

You have completed this part of the Fixed Header.  Later, we will add an image for a logo instead of the font-based logo. <br>
<img src="FRApps/assets/images/md-images/BasicFixedHeaderImage11.jpg">

___

## ___________________

## Basic Blocks w/ Fixed Header Web Page       <!-- .(20615.01.1 RAM This seems a little out of place --> 
<br>


<span style="font-size: 25px"><b>Congratulations!</b></span> You have just added to your Basic Blocks code which built a full web page with a fixed header along with links, a button, and a font-based logo. In the next section, we will add/modify code that will secure the footer with links.   
<br>
Please check your Chrome browser to see your web page thus far.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicFixedHeaderImage12.jpg">

___

<!--## 6. View Full Code  <!-- {docsify-ignore} -->

##  [View Full Code For Basic Blocks](/FRApps/code/fr020103_basic-with-fixed-header-code.md "Full Code")

___

NEXT -->
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>