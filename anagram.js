function apple() {
    let a = "race"
    let b = "hink"
    var k=(a.split('').sort().join(''));
    var l=(b.split('').sort().join(''));

    var len1 = a.length
    var len2 = b.length
    if (len1 == len2 && k==l) {
        console.log("anagram")
    }else{
        console.log("Not anagram")
    }
}
apple()