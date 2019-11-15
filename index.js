"use strict";
var TimeFormater = function(id, rows, str,lineH) {
    console.log('執行diamante',id,rows,str,lineH)
    str = str.replace(/<\/?[^>]*>/g, '').replace(/&nbsp;/ig,'');
    if (!str || str == '') {
        return ''
    }
    this.$nextTick(function () {
        var text = document.getElementById(id);
        var lineHeight = lineH;
        var at = rows * parseInt(lineHeight);
        var tempstr = str;
        text.innerHTML = tempstr;
        var len = tempstr.length;
        var i = 0;
        if (text.offsetHeight <= at) {
        }else {
            var temp = "";
            text.innerHTML = temp;
            while (text.offsetHeight <= at) {
                temp = tempstr.substring(0, i + 1);
                i++;
                text.innerHTML = temp;
            }
            var slen = temp.length;
            tempstr = temp.substring(0, slen - 1);
            len = tempstr.length
            text.innerHTML = tempstr.substring(0, len - 3) + "...";
            text.height = at + "px";
        }
        return str
    })


}

module.exports = TimeFormater;
