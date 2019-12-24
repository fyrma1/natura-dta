document.addEventListener('swiped-left', function(e) {
    console.log(e.target); // the element that was swiped
    $("#msg").text("SWIPED-LEFT");
});

document.getElementById('myBox').addEventListener('swiped-down', function(e) {
    console.log(e.target); // the element that was swiped
    console.log("tada");
    
    $("#msg").text("SWIPED-DOWN");
});



