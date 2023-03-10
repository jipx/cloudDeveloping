const AWS = require('aws-sdk');
const session = new AWS.Session();
const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-east-1'});

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
