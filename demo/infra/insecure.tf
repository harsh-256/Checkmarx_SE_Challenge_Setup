# demo/infra/insecure.tf
   # Intentionally insecure — for KICS demo purposes only. Do not apply.

   resource "aws_security_group" "demo_open_sg" {
     name        = "demo-open-sg"
     description = "Intentionally open for KICS demo"

     ingress {
       from_port   = 0
       to_port     = 65535
       protocol    = "tcp"
       cidr_blocks = ["0.0.0.0/0"]
     }

     egress {
       from_port   = 0
       to_port     = 0
       protocol    = "-1"
       cidr_blocks = ["0.0.0.0/0"]
     }
   }

   resource "aws_s3_bucket" "demo_bucket" {
     bucket = "demo-nodegoat-findings-bucket"
   }

   resource "aws_s3_bucket_acl" "demo_bucket_acl" {
     bucket = aws_s3_bucket.demo_bucket.id
     acl    = "public-read"
   }

   resource "aws_db_instance" "demo_db" {
     identifier          = "demo-nodegoat-db"
     engine              = "mysql"
     instance_class      = "db.t3.micro"
     allocated_storage   = 20
     username            = "admin"
     password            = "SuperSecretPassword123!"
     storage_encrypted   = false
     publicly_accessible = true
     skip_final_snapshot = true
   }

   resource "aws_iam_policy" "demo_admin_policy" {
     name = "demo-admin-policy"
     policy = jsonencode({
       Version = "2012-10-17"
       Statement = [
         {
           Effect   = "Allow"
           Action   = "*"
           Resource = "*"
         }
       ]
     })
   }
