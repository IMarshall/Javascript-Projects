//function demonstrating the concat string method
function concatenate() {
    var str1 = "This is ";
    var str2 = "a full ";
    var str3 = "sentence.";
    fullSentence = str1.concat(str2, str3);
    document.getElementById("sentence").innerHTML = fullSentence;
}

//function demonstrating the slice string method and the toUpperCase string method and the bold string method if you're into that
count = 0;

function sliceItUp() {
    count++
    if (count == 1) {
        var sentence = "\'When you look annoyed all the time, people think you're busy\' -George Costanza";
        var section = sentence.slice(6, 22);
        document.getElementById("just_a_slice").innerHTML = section;
        document.getElementById("clicky").innerHTML = "Click to make it more aggressive.";
    }
    else if (count == 2) {
        var sentence = "\'When you look annoyed all the time, people think you're busy\' -George Costanza";
        var section = sentence.slice(6, 22);
        document.getElementById("just_a_slice").innerHTML = section.toUpperCase();
        document.getElementById("clicky").innerHTML = "Click to make it even more aggressive.";
    }
    else {
        var sentence = "\'When you look annoyed all the time, people think you're busy\' -George Costanza";
        var section = sentence.slice(6, 22);
        document.getElementById("just_a_slice").innerHTML = (section.toUpperCase()).bold();
        document.getElementById("clicky").innerHTML = "We're done here.";
    }
}