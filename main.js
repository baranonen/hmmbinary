function encode() {
    var length = document.getElementById("encodeinput").value.length,
        output = [];
    for (var i = 0;i < length; i++) {
        var bin = document.getElementById("encodeinput").value[i].charCodeAt().toString(2);
        output.push(Array(8-bin.length+1).join("0") + bin);
    } 
    document.getElementById("encodeoutput").value = output.join(" ").replace(/1/g, "hm").replace(/0/g, "mm")
}

function decode() {
    var newBin = document.getElementById("decodeinput").value.replace(/hm/g, "1").replace(/mm/g, "0").split(" ");
    var binCode = [];

    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    document.getElementById("decodeoutput").value = binCode.join("")
}