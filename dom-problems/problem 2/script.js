//Create an HTML page with a button and a P element with a link inside.

/*
Then, write a JavaScript function to get the HREF attribute of the link when you click the button.
When you click on it, display it on the webpage by adding it as the text for another P element on the page.
*/


/*function getLink(){
    const linkUrl = document.getElementById('link').getAttribute('href');
    console.log(document.getAttribute('href'));
}
*/

function getLink(){
    const linkUrl = document.getElementById('link').getAttribute('href');
    document.getElementById('p1').innerHTML = linkUrl;
}
