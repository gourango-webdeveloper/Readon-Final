README.md
radon
Backend cohort Feb 2022 - May 2022

Assignment - Book Collection

1> Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)

2> create the following API’s (write logic in bookController and routes in routes):

3> createBook : to create a new entry..use this api to create 11+ entries in your collection

4> bookList : gives all the books- their bookName and authorName only

5> getBooksInYear: takes year as input in post request and gives list of all books published that year

6> getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition e.g if body had { name: “hi”} then you would fetch the books with this name if body had { year: 2020} then you would fetch the books in this year hence the condition will differ based on what you input in the request body

7> getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”

8> getRandomBooks - returns books that are available in stock or have more than 500 pages

link------

https://docs.google.com/document/d/1afgPZSzSy1qgIP_iNJAVhZQD8eS-OJDxu8FpE0CzK5w/edit