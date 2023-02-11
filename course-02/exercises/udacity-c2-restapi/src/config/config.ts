export const config = {
  "dev": {
    // "username": "udagramdev2",
    // "password": "udagramdev2",
    // "database": "udagramdev2",
    // "host": "udagramdev2.ce6roocnqgqt.us-east-1.rds.amazonaws.com",
    // "dialect": "postgres",
    // "aws_region": "us-east-1",
    // "aws_profile": "default",
    // "aws_media_bucket": "udagram-dipo-dev"
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET
  },
  "jwt": {
    "secret": " "
  },
  "prod": { 
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
