#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- -->

## Basic Large Blocks  <!-- {docsify-ignore} -->

<br>


### Introduction
<br>
Next, we will add to your existing code in the index.<b>css</b> file to continue building on our basic web page.
<br><br>
Note: The index.<b>html</b> file will remain unchanged.

___

### index.css
___

#### 1. Body

In the <font color='green'>body</font> section, ADD the following by copying<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b><font color=#A81966>width</font></b>: 100%; 

and pasting it below the existing code for <b><font color=#A81966>height</font></b>.
<br><br>
Like this:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicLargeBlocksImage1.jpg">
<br><br> 
<b>ALTERNATIVELY</b> -- Copy/Paste <font color='green'>.body</font> code from below: 
<br>
(make certain you copy from <font color='green'>body ----- }</font> (curly bracket) ):
<br><br>

```css
body {
    background: white;
    height: 100%;
    width: 100%;  
    margin: 0;
}
^ copy to here

```
___


#### 2. &#60;h2&#62; tags
<br>
The &#60;h2&#62; tags come with built-in margins which we must <b>override</b> for the blocks to sit perfectly on top of each other.  
<br><br>
Please copy this snippet of code and paste below the body properties.
<br><br>

```css

/*-----------------------------------------
Set global properties for the <h2> tags
It also overrides the intrinsic margin of
20 to 0--allowing to stack the blocks together.
CHANGE: padding
-------------------------------------------*/
h2 {
    margin: 0;
    font-size: var(--h2-font-size);
    color: var(--h2-text-color-light);
    padding: 6rem;
    text-align: center;
}
^ copy to here

```

Like this:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicLargeBlocksImage2.jpg">

___

##### <span style='font-size: 22px;'>2a. &#60;h2&#62; Override In Header</span>

<b>ALSO</b>, we must override the padding for this &#60;h2&#62; tag in the <font color='green'>.header</font> & <font color='green'>.footer</font> with the following, placed under each, respectively:

<br>

```css
/*-----------------------------------------
This is the first <h2> override
setting the padding from 6 to 1 rem
------------------------------------------*/
.header h2 {
    padding: 1rem;
}
^ copy to here

```

Like this:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicLargeBlocksImage3.jpg">

##### <span style='font-size: 22px;'>2b. &#60;h2&#62; Override In Footer</span> 

<b>AND</b> for the <font color='green'>.footer</font>:
<br>

```css
/*-----------------------------------------
This is another <h2> override
setting the padding from 6 to 2 rem
------------------------------------------*/
.footer h2 {
    padding: 2rem;
}
^ copy to here

```

Like this:

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicLargeBlocksImage4.jpg">

___


#### 3. Header
<br>
In the <font color='green'>.header</font> section, CHANGE

 - <b><font color=#A81966>width</font></b> to 100% <br> AND 
 - <b><font color=#A81966>height</font></b> to 10%
<br><br>

```css
    width: 100%;    /*was 300px*/
    height: 10%;   /*was 100px*/
```
Like this:
```css
.header {
    background: var(--header-color);
    width: 100%; /*was 300px*/
    height: 10%; /*was 100px*/
    position: relative;
}
^ copy to here

```
___

#### 4. Sections 1 & 2

In <font color='green'>section1</font> <b>AND</b> <font color='green'>section2</font>, CHANGE
- <b><font color=#A81966>width</font></b> to 100% <br>AND 
- <b><font color=#A81966>height</font></b> to 40%
<br><br>

```css
    width:  100%;    /*was 300px*/
    height: 40%;   /*was 100px*/
```

Like this

```css
/*-----------------------------------------
The .section1 properites
CHANGE: width & height
------------------------------------------*/
.section1 {
    background: var(--section1-color);
    width: 100%; /*was 300px*/
    height: 40%; /*was 100px*/
    position: relative;
}

/*-----------------------------------------
The .section2 properites
CHANGE: width & height
------------------------------------------*/
.section2 {
    background: var(--section2-color);
    width: 100%; /*was 300px*/
    height: 40%; /*was 100px*/
    position: relative;
}
^ copy to here

```
___


#### 5. Footer

In the <font color='green'>.footer</font> section CHANGE the <b><font color=#A81966>width</font></b> to 100% 
- <b><font color=#A81966>width</font></b> to 100% <br>AND 
- <b><font color=#A81966>height</font></b> to 10%
<br><br>

```css
    width:  100%;    /*was 300px*/
    height: 10%;    /*was 100px*/
```

Like this

```css
/*-----------------------------------------
The .footer properites
CHANGE: width & height
------------------------------------------*/
.footer {
    background: var(--footer-color);
    width: 100%; /*was 300px*/
    height: 10%; /*was 100px*/
    position: relative;
}
```

## ___________________


## Basic Large Blocks Web Page       <!-- .(20615.01.1 RAM This seems a little out of place --> 
<br>

<span style="font-size: 25px"><b>Congratulations</b></span>! You have built a full page with four distinct blocks using your "Basic Blocks index.<b>css</b> code." In the next section. we will add/modify code to secure the header in one spot.   
<br>
Please check your Chrome browser to see your web page so far.

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicLargeBlocksImage5.jpg">

___

<!--## 6. View Full Code  <!-- {docsify-ignore} -->

##  [View Full Code For Basic Blocks](/FRApps/code/fr020102_basic-large-blocks-code.md "Full Code")

___

NEXT -->
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>