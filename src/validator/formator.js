function trim(){
    const spaces=" functionup "
    console.log("before excute trim function",spaces+". ")
    console.log("after excute trim function",spaces.trim()+". ")
}
function changeToLowerCase(){
    const abc="gourango"
    console.log("before change",abc)
    console.log("after change",abc.toLowerCase())
}
function changeToUpperCase(){
    const pqr="gourango"
    console.log("before changes",pqr)
    console.log("afterchanges",pqr.toUpperCase())

}
module.exports.trim=trim
module.exports.changeToLowerCase=changeToLowerCase
module.exports.changeToUpperCase=changeToUpperCase