<!-- ------------------------------------------------------------------------- -->
<!--
<div class="page-back">

[BACK - X](/FRApps/fr020100_Basic-Tools.md)
</div><div class="page-next">

[X - NEXT](/FRApps/fr020102_Basic-Large-Blocks.md)
</div><div style="margin-top:35px">&nbsp;</div>
-->
<!-- ------------------------------------------------------------------------- -->

#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- -->

## 1. Basic Blocks <!-- {docsify-ignore} -->

### 1. Assure VSCode Setup

- From VSCode

- Be certain that you have checked "Auto Save" in the File menu

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBlocksImage1.jpg">

- And that you have added "Live Server" to the "Extensions"

<img class="shadow-border" src="FRApps/assets/images/md-images/BasicBlocksImage2.jpg">

___

### 2. Create Files

- In a folder called BasicTraining, create 2 new files.
    - index.<b>html</b>
    - index.<b>css</b>

- Be certain the "favicon.gif" into the root directory.
    This will give you a nice FormR icon on the tab of your browser

___

### 3. Insert Code

#### index.html   <!--{docsify-ignore}-->


Open the index.<b>html</b> and paste the following on Line 1:
<br><br>

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href="index.css">
       <link rel="shortcut icon" href="../favicon.gif">
       <title>Basic-Training</title>
    </head>
    <body>
        <div class="header">
            <h2>header</h2>
        </div>
        <div class="section1">
           <h2>section 1</h2>
        </div>
        <div class="section2">
            <h2>section 2</h2>
        </div>
        <div class="footer">
            <h2>footer</h2>
        </div>
    </body>
</html>
```
**Save this page, if you have NOT checked the "Auto Save" option in the File menu.**

From VSCode, right click on the file "index.<b>html</b>" and click on "Open In Live Server"
- (This option will not be available if you had not added the "Live Server" extension)


<img class="shadow-border" src="assets/images/md-images/BasicBlocksLiveServer.jpg">

___

You will see in your browser the following:

<img class="shadow-border" src="assets/images/md-images/BasicBlocksImage3.jpg">

___

#### index.css  {docsify-ignore}
___

Open the index.<b>css</b> file and paste the following on Line 1
<br><br>

```css
/*Basic Blocks*/
@import url('https://fonts.googleapis.com/css?family=Bookman Old Style');

html {
    background: #b3b3b3;
    height: 100%;
    text-align: center;
}

/*The body properites*/
body {
    background: white;
    height: 100%;
}

/*Set global properties for the <h2> tags*/
/*It also overrides the intrinsic margin of*/
/*20 to 0--allowing to stack the blocks together*/
h2 {
    margin: 0;
    font-size: 1.5rem;
    color: white;
    padding: 1.5rem;
    text-align: center;
  }

/*The .header properites*/
.header {
    background: red;
    width: 300px;
    height: 100px;
    position: relative;
}

/*The .section1 properites*/
.section1 {
    background: blue;
    width: 300px;
    height: 100px;
    position: relative;
}

/*The .section2 properites*/
.section2 {
    background: lightgray;
    width: 300px;
    height: 100px;
    position: relative;
}

/*This is another <h2> override*/
/*setting the font color from white to black*/
.section2 h2 {
    color: black;
}

/*The .section2 properites*/
.footer {
    background: green;
    width: 300px;
    height: 100px;
    position: relative;
}

```

### Basic Blocks Web Page       <!-- .(20615.01.1 RAM This seems a little out of place --> 
<br>

**Congratulations**, you have just created a simple html page with a cascading style sheet (CSS) that makes 4 *basic blocks!*

Like this:

<img class="shadow-border" src="assets/images/md-images/BasicBlocksImage4.jpg">

___

### 4. Understanding CSS        <!-- .(20615.01.2 RAM Changed to ### 4. Was #### --> 

To understand a little of this CSS code, lets look at the header css properties.
<br><br>
```css
.header {                       Description
  background: red;     makes the background red

  width: 300px;        makes the block 300 pixels
                          wide

  height: 100px;       makes the block 100 pixels
                          tall

  position: relative;  places the header box
                        relative to the html code
                        (DOM) reading from the
                        top to the bottom
}
```
We will be building from this basic page to create a page with fixed header and footer, links with a button and an image.  From there the next course we will move on to adding JavaScript (JS) to this web page.
___

[View Full Code For Basic Blocks](/FRApps/code/fr020101_basic-blocks-code.md "Full Code")

___