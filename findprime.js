var MongoClient = require('mongodb').MongoClient;
var dateTime = require('node-datetime');
var dateFormat = require('dateformat');
var today = new Date();
console.log(today);





var url = "mongodb://localhost:27017/mohan";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mohan");
  var Today = new Date();
  var dat = Today.getDate();
  console.log(dat);
  var dat1 = 13;
  var n = Today.getTime();
  console.log(n);
  isPrime(dat)

});
     
function isPrime(n) {
 var i,flag=0;
 var number=n;
    
    for(i=2; i <= number/2; i++)
    {
      if(number%i == 0)
      {
        flag = 1;
        break;
      }
    }
    if(flag == 0)
    {
      console.log(number+"-The inputed date is Prime");
      db.collection

    }
    else
    {
      console.log(number+"-The inputted date is not Prime");
    }
}   
  
