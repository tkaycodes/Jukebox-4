$.extend($.expr[":"], {
"containsIN": function(elem, i, match, array) {
return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
}
});

// added this 

// http://jq4you.blogspot.ca/2013/05/jquery-contains-and-making-it-case.html
// to extent the jquery contains function
// called it with containsIN