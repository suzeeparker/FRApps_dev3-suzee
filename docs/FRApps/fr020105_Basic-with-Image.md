#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- -->

## Basic Blocks With Image <!-- {docsify-ignore} -->
___

### Introduction
<br>
To add magic to your web site, we will add an image and text overlay.  This will require some modifications to your existing code in both the index.<b>html</b> AND index.<b>css</b> files.  

First, the index.<b>html</b> file.
___

### index.html

#### 1. Section 1

<br>

We will change this code that starts on line 21, from this...
<br><br>
```html
    <div class="section1">
        <h2>section 1</h2>
    </div>

```
...to this:

```html
    <div class="section1">
        <h2 class="image-text">My Image & Text</h2>
    </div>

```

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicWithImageImage1.jpg">

Notice the "My Image & Text" within the &#60;h2&#62; tags.  This will become our text overlay. Check your Chrome browser for this change.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicWithImageImage2.jpg">

Now, we move to the index.<b>css</b> file.
___

### index.css

#### 1. section1

This is where you completely change the .section1 code with the below.  It should fall under <font color='green'>.nav-list-item-cta a</font>.
<br><br>

```css
/*-----------------------------------------
The .section1 properites
CHANGES:    background:
ADDITIONS:  background-color: 
            background-repeat:
            background-size: 
            background-position:
Notice how we are using CSS to add a link to .jpg
file (monaco-blue-soft.jpg) in "images" directory.
Please Google the other properties to see how they
allow to properly position the image.
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
^ copy to here

```

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicWithImageImage3.jpg">

Again, check your Chrome browser for the change; a nice blue image with the font overlay.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicWithImageImage4.jpg">

___


#### 2. image-text
<br>
Now, let's focus on the text overlay. By ADDING the following two classes: 

  - <font color='green'>.image-text</font> and 
  - <font color='green'>.image-text::first-letter</font> 

below the <font color='green'>.section1 code</font>, we will acheive a nice change to the overlay.<br><br>

```css
/*-----------------------------------------
Sets all the propterties for the font-based
text overlay (sits over top of the image above).
It uses the "Bookman Old Style" font and changes
it blue text.  The padding property positions
the text in the image.  Try adjusting this to 
see how it changes.
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
of the font-based text overlay, above.
This makes the first letter a lighter blue
and increases its size to 150%.
------------------------------------------*/
.image-text::first-letter {
  font-size: 150%;
  color: cornflowerblue;
}
^ copy to here

```

Like this

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicWithImageImage5.jpg">

## ___________________

## Basic Blocks w/ Image Web Page       <!-- .(20615.01.1 RAM This seems a little out of place --> 
<br>


<span style="font-size: 25px"><b>Congratulations!</b></span>  You have just completed your web page with a fixed header and footer, links, a button, an image, and a text overlay.   
<br>
Please check your Chrome browser to see your web page:


<img class="shadow-border" src="FRApps/assets/images/md-images/BasicWithImageImage6.jpg">


___


## Next Version With formR logo and color changes.
<br>

<img src="FRApps/assets/images/md-images/formR-logo.gif">

In the final section, we will change the font-based logo to a formR logo image file AND we will change the color of the blocks on the web page.  

<br>
<!--## 6. View Full Code  <!-- {docsify-ignore} -->

##  [View Full Code For Basic w/ Image](/FRApps/code/fr020105_basic-with-image-code.md "Full Code")

___

NEXT -->






<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>