// demo/leaked-secrets.js
   // Intentionally insecure — for 2ms demo purposes only.

   const githubToken = "ghp_7KpX9mQ2vLwR4tYnB8dHsA1cJfZq3EoU6iNa";
   const awsAccessKeyId = "AKIA4J6XQPL2N9RTFVWZ";
   const awsSecretAccessKey = "hK8pT2mNqR5vX9wL3sD7fB1cE6gY4jZ0aU8iO2xM";
   const slackBotToken = "xoxb-782364951234-7823649512345-XyZ9pQrTvW3nB6mK8sL2dF4h";
   const dbConnectionString = "postgres://admin:Pr0d_D8_P@ssw0rd_2026!@db.internal.example.com:5432/nodegoat";
   const stripeApiKey = "sk_live_51H8pQnKxR2vT9mBnJ4wL7dF3gH6jY8kZ1aC5eU2iO9x";

   module.exports = {
     githubToken,
     awsAccessKeyId,
     awsSecretAccessKey,
     slackBotToken,
     dbConnectionString,
     stripeApiKey,
   };
