function string_Expression(strOne) {

    this.val = strOne;
    this.StringConcat = function (strTwo) {
        return this.val = this.val + strTwo;
    }


    this.StringLength = function () {
        if (this.val == undefined || this.val == null || this.val == '') {
            return 0;
        }

        var countStrOne = 0;
        for (var i = 0; this.val[i] != undefined; i++) {
            countStrOne++;
        }
        return countStrOne;
    }

    this.StringSubString = function (strStart, strEnd) {
        var subString = '';
        if (strStart == undefined || strStart == null || strStart == '') {
            return console.log("Enter startindex");
        }
        else if (strEnd == undefined || strEnd == null) {
            for (var i = strStart; this.val[i] != undefined; i++) {
                subString += this.val[i];
            }
            return subString;
        }
        else {
            for (var i = strStart; this.val[i] != this.val[strEnd]; i++) {
                subString += this.val[i];
            }
            return subString;
        }
    }


    this.StringCharAt = function (index) {

        if (index == undefined || index == null || index == '') {
            return console.log("Enter Index for which you want to find Character");
        }
        return this.val[index];
    }


    this.StringIndexOfChar = function (stringSearchValue, strStart) {
        if (stringSearchValue == undefined || stringSearchValue == null || stringSearchValue == '') {
            return console.log("Enter string to find IndexOf");
        }
        else if (strStart == undefined || strStart == null || strStart == '') {
            for (var i = 0; this.val[i] != undefined; i++) {
                if (stringSearchValue == this.val[i]) {
                    return i;
                }
            }
        }
        else {
            var j = 0;
            for (var i = strStart; this.val[i] != undefined; i++, j++) {
                if (stringSearchValue == this.val[i]) {
                    //debugger;
                    return j;

                }
            }
        }
    }


    this.StringReverse = function () {
        var reverseString = '';
        for (var i = this.StringLength() - 1; i >= 0; i--) {
            reverseString += this.val[i];
        }

        return reverseString;
    }


    this.StringLastIndexOfChar = function (stringSearchValue, strStart) {
        if (stringSearchValue == undefined || stringSearchValue == null || stringSearchValue == '') {
            return console.log("Enter string to find LastIndexOf");
        }
        else if (strStart == undefined || strStart == null || strStart == '') {
            for (var i = 0; this.val[i] != undefined; i++) {
                if (stringSearchValue == this.val[i]) {
                    var index = i;
                }
            }
            return index;
        }
        else {
            var j = 0;
            for (var i = strStart; this.val[i] != undefined; i++, j++) {
                if (stringSearchValue == this.val[i]) {
                    //debugger;
                    var index = j;

                }

            }
            return index;
        }
    }



    this.StringIndexOf = function (stringSearchValue, strStart) {
        debugger;
        var lengthStrOne = this.StringLength();
        var indexForStringSearchValue = 0;
        var result;
        var flag = 1;
        var track;
        //debugger;
        if (stringSearchValue == undefined || stringSearchValue == null || stringSearchValue == '') {
            return console.log("Enter string to find IndexOf");
        }
        else if (strStart == undefined || strStart == null || strStart == '') {
            for (var i = 0; i < lengthStrOne; i++) {
                if (stringSearchValue[indexForStringSearchValue] == this.val[i]) {
                    result = i;
                    track = i;
                    for (var j = 0; stringSearchValue[j] != undefined; j++) {
                        if (this.val[track] == stringSearchValue.val[j]) {
                            track++;
                            flag = 1;
                            //debugger;
                        }
                        else {
                            flag = 0;
                            break;
                        }
                    }
                    if (flag == 1) {
                        //debugger;
                        return result;
                    }

                }
            }
        }
        else {
            var j = 0;
            for (var i = strStart; this.val[i] != undefined; i++, j++) {
                if (stringSearchValue[indexForStringSearchValue] == this.val[i]) {
                    result = j;
                    track = j;
                    for (var k = 0; stringSearchValue[k] != undefined; k++) {
                        if (this.val[track] == stringSearchValue.val[k]) {
                            track++;
                            flag = 1;
                        }
                        else {
                            flag = 0;
                            break;
                        }
                    }
                    if (flag == 1) {
                        return result;
                    }

                }
            }
        }

    }


    this.StringReplace = function (stringSearch, stringReplace) {
        //debugger;
        var index = this.val.indexOf(stringSearch);
        var stringReplaced = "";
        var newString = stringReplace;
        var indexLast = index + stringSearch.length;;
        for (var i = 0; i < index; i++)
            stringReplaced += this.val[i];
        stringReplaced += stringReplace;
        for (var j = indexLast; j < this.StringLength() ; j++)
            stringReplaced += this.val[j];
        return stringReplaced;
    }

}




function calculate() {
    var e = document.getElementById("dropMenu");
    var strUser = e.options[e.selectedIndex].text;
    var strOne = document.getElementById("stringOne").value;
    var strTwo = document.getElementById("stringTwo").value;
    var startIndex = document.getElementById("startIndex").value;
    var endIndex = document.getElementById("endIndex").value;
    var stringToSearch = document.getElementById("getIndex").value;
    var stringReplace = document.getElementById("stringReplace").value;
    var resultBox = document.getElementById("result");
    s = new string_Expression(strOne);
    switch (strUser) {
        case "Concat":
            var result = s.StringConcat(strTwo);
            resultBox.value = result;
            break;
        case "Length":
            var result = s.StringLength();
            resultBox.value = result;
            break;

        case "Substring":
            var result = s.StringSubString(startIndex, endIndex);
            resultBox.value = result;
            break;

        case "Indexof":
            var result = s.StringIndexOfChar(stringToSearch, startIndex);
            resultBox.value = result;
            break;

        case "CharAt":
            var result = s.StringCharAt(startIndex);
            resultBox.value = result;
            break;

        case "Lastindexof":
            var result = s.StringIndexOfChar(stringToSearch, startIndex);
            resultBox.value = result;
            break;

        case "Reverse":
            var result = s.StringReverse();
            resultBox.value = result;
            break;

        case "Replace":
            var result = s.StringReplace(strTwo, stringReplace);
            resultBox.value = result;

    }

}

