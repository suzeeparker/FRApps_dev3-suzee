#  HTML Custom App <!-- {docsify-ignore} -->

<!-- -------------------------------------------------------------- >

## 3. Large Blocks Web Page  <!-- {docsify-ignore} -->
__

**Congratulation**, now look at your web page.  All the blocks now have changed to fill up the page in Chrome.

<img class="shadow-border" src="assets/images/md-images/BasicBlocksImage5.jpg">

___

### Large Blocks Code:
<br>
Below is the full code for the Large Blocks web page.
<br>


#### index.html  {docsify-ignore}
___


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
___

#### index.css   {docsify-ignore}
___

```css
/*Large Blocks CSS*/
@import url('https://fonts.googleapis.com/css?family=Bookman Old Style');

/*The html properites*/
html {
    background: #b3b3b3;
    height: 100%;
    text-align: center;
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
    color: white;
    height: 10%; /*was 100px*/
    width: 100%; /*was 300px*/
    position: relative;
}

/*This is the first <h2> override*/
/*setting the padding from 6 to 1 rem*/
.header h2 {
    padding: 1rem;
}

/*The .section1 properites*/
.section1 {
    background: blue;
    height: 40%; /*was 100px*/
    width: 100%; /*was 300px*/
    position: relative;
}

/*The .section2 properites*/
.section2 {
    background: lightgray;
    height: 40%; /*was 100px*/
    width: 100%; /*was 300px*/
    position: relative;
}

/*This is another <h2> override*/
/*setting the font color from white to black*/
.section2 h2 {
    color:black;
}

/*The .footer properites*/
.footer {
    background: green;
    height: 10%; /*was 100px*/
    width: 100%; /*was 300px*/
    position: relative;
}

/*This is another <h2> override*/
/*setting the padding from 6 to 2 rem*/
.footer h2 {
    padding: 2rem;
}
```
___

