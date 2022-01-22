var paragraphs = document.getElementsByClassName("array");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "This is paragraph " + (i+1) + ".";
}