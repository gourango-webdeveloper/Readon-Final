const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "JK" , isPublished: true }  )
    res.send({msg: allBooks})
}


/*
On similar lines as above(today’s mongodb session APIs), 
complete this assignment and submit explainer video for the same : Create a bookSchema with bookName, 
authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another 
api to get the list of all books. 
*/

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData