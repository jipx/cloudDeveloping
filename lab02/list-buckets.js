const AWS = require('aws-sdk');
//creating an instance of the S3 class using new AWS.S3(). 
//The apiVersion and region parameters are passed in during initialization, 
const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-east-1'});

 //listBuckets() function to retrieve a list of all S3 buckets in the account
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Bucket Names:");
    data.Buckets.forEach(function(bucket) {
      console.log(bucket.Name);
    });
  }
});
