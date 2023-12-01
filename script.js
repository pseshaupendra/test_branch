//button functions
    //home button
function scrollToSection(home) {
    var section = document.getElementById(home);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'});
    }
}
    //abstract button
function scrollToPosition(abstract) {
    var section = document.getElementById(abstract);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'});
    }
}
    //csp button
function scrollToPosition(csp) {
    var section = document.getElementById(csp);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'});
    }
}
    //contact button
function scrollToPosition(contact) {
    var section = document.getElementById(contact);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'});
    }
}

//marquee function control
    //for images above table
document.getElementById('img-scroll').addEventListener('mouseover', function() {
    this.stop();
});
document.getElementById('img-scroll').addEventListener('mouseout', function() {
    this.start();
});
    //for images below table
document.getElementById('img-scroll2').addEventListener('mouseover', function() {
    this.stop();
});
document.getElementById('img-scroll2').addEventListener('mouseout', function() {
    this.start();
});
