
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
         if(index>this.StringLength()){
            return "";
         }
         else
             {
                return this.val[index];
             }
        
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


    this.StringIndexOf=function(stringSearch){
        var index2, index1;
        var len=stringSearch.length;
        var originalStringLength=this.StringLength();
        if (stringSearch == undefined || stringSearch == null || stringSearch == '') {
            return console.log("Enter string to find IndexOf");
        }
        else{
            for (var i = 0; i < originalStringLength; i++) {
            index2 = 0;
            index1 = i;
            while (index2 < len && index1< originalStringLength && this.val[index1] == stringSearch[index2]) {
                index1++;
                index2++;
            };

            if (index2 == len) 
                {
                    break;
                };
            };
              
              if(i==originalStringLength){
                return -1
              }
              else
              {
                return i;
              }
        
        }

    }
  

  this.StringLastIndexOf = function (stringSearch) {
        var index2, index1;
         var len=stringSearch.length;
         var originalStringLength=this.StringLength();
        for (var i = originalStringLength - 1; i >=0; i--) { 
            index2 = 0;
            index1 = i;
            while (index2 < len && index1 < originalStringLength && this.val[index1] == stringSearch[index2]) {
                index1++;
                index2++;
            };

            if (index2 == len) 
                {
                    break;
                };
        }

        return i;
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
            resultBox.innerHTML = result;
            break;
        case "Length":
            var result = s.StringLength();
            resultBox.innerHTML = result;
            break;

        case "Substring":
            var result = s.StringSubString(startIndex, endIndex);
            resultBox.innerHTML = result;
            break;

        case "IndexofChar":
            var result = s.StringIndexOfChar(stringToSearch,startindex);
            resultBox.innerHTML= result;
            break;

        case "CharAt":
            var result = s.StringCharAt(startIndex);
            resultBox.innerHTML= result;
            break;
        case "Reverse":
            var result = s.StringReverse();
            resultBox.innerHTML = result;
            break;

        case "Replace":
            var result = s.StringReplace(strTwo, stringReplace);
            resultBox.innerHTML= result;

        case "Indexof":
             var result=s.StringIndexOf(stringToSearch);
             resultBox.innerHTML= result;
            break;

        case "Lastindexof":
             var result=s.StringLastIndexOf(stringToSearch);
             resultBox.innerHTML= result;
            break;

    }

}

var id=document.getElementById("calculateMethods");
id.onclick=calculate;
