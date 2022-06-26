#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- -->

## BONUS <!-- {docsify-ignore} -->
<br>

___

### Introduction
<br>
As previoused mentioned, we will make some changes.  First, the font-based "My Logo" will be changed to our formR logo image file.  Then, because the next author would like to work with diffent colors for the blocks, we can easily change them.  Let's have some fun. This will require some modifications to your existing code in both the index.<b>html</b> AND index.<b>css</b> files.  

First, the index.<b>html</b> file.
___

### index.html

#### 1. Replace logo

<br>
In the index.<b>html</b> file comment-out the below:<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>&#60;span class="header-logo">My Logo</span>&#62;</b><br><br>
using the &#60;!-- (Less-than exclamation dash dash) AND --&#62; (dash dash greater-than) at the beginning and end of this line of code.

Like this: &#60;!--&#60;span class="header-logo">My Logo</span>&#62;--&#62;

Then add:<br>
&nbsp;&nbsp;&nbsp;&nbsp;"&#60;img class="formr-logo" src="assets/images/formr-logo.gif"/&#62;"<br> below the &#60;div class="header"&#62;<br><br>
Like this:

<img src="FRApps/assets/images/md-images/BasicBonusImage1.jpg">

___

ALTERNATIVELY, Copy this code...

```html
<div class="header">
    <img class="formr-logo" src="assets/images/formr-logo.gif"/>
    <!--<span class="header-logo">My Logo</span>-->
```

...and paste below the <b>&#60;body&#62;</b> tag AND above <b>&#60;ul class="nav-list"&#62;</b>, to replace the existing code.

Like this

<img src="FRApps/assets/images/md-images/BasicBonusImage2.jpg">


### index.css

#### 1. formr-logo


Then add the below css property (.formr-logo) below the 
<font color='green'>.header-logo::first-letter</font> css code.
___

```css
/*This replaces the action of the above css code*/
/*This sets the size and position of the formr.gif logo*/
.formr-logo {
  width: 210px;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
}
^ copy to here

```
Like this

<img src="FRApps/assets/images/md-images/BasicBonusImage3.jpg">

___

The web page should look like this.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBonusImage4.jpg">

___

#### 2. Color Changes

We were requested to change some colors for the next major lessons. No problem!
<br><br>
First, remember the <font color='green'>:root</font> in our index.<b>css</b> file.
<br><br>

```css
/*-----------------------------------------
root selector to create variables
-------------------------------------------*/
** In CSS you can describe variables, this is very 
powerful. For example, if it was decided that the 
header color should actually be yellow, not red,
it only needs changing here.  NOTE in the .header
properties how this variable is used.

:root {
    --header-color: red;
    --section1-color: blue;
    --section2-color: lightgray;
    --footer-color: green;
    --h2-text-color-light: white;
    --h2-text-color-dark: black;
    --nav-list-item-hover-color: white;
    --h2-font-size: 2rem;
    --nav-list-font-size: 1.2rem;
    --footer-list-font-size: .9rem;    
}

```

Well, it's very simple to make the requested color changes right here in four of the properties:

- --header-color    (requested change from red to #FF7034; [dark orange])
- --section1-color  (requested change from blue to whitesmoke)
- --section2-color  (requested change from lightgray to whitesmoke)
- --footer-color    (requested change from green to #FF7034; [dark orange])
<br><br>

```css

:root {
    --header-color:  #FF7034; /*dark orange*/
    --section1-color: whitesmoke;
    --section2-color: whitesmoke;
    --footer-color: #FF7034; /*dark orange*/
    --h2-text-color-light: white;
    --h2-text-color-dark: black;
    --nav-list-item-hover-color: white;
    --h2-font-size: 2rem;
    --nav-list-font-size: 1.2rem;
    --footer-list-font-size: .9rem;    
}

```
Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBonusImage5.jpg">
<br><br> 
Check it out in Chrome!  So easy and powerful with the <font color='green'>:root</font> variables.

___

## Final Version With formR logo and color changes.
<br><br>
<span style="font-size: 20px"><b>CONGRATULATIONS!!</b></span> You have completed this basic course on HTML and CSS.



<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBonusImage6.jpg">

___

Moving forward we will add JavaScript to include some cool things in the nav-bar, section2 and responsiveness of the web page.

___

<!--## 6. View Full Code  <!-- {docsify-ignore} -->

##  [View Full Code For Basic Blocks](/FRApps/code/fr020106_basic-bonus-code.md "Full Code")

<br>
FINISHED