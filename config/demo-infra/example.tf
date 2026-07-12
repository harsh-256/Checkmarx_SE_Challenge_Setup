resource "aws_security_group" "demo_open_sg" {
     name        = "demo-open-sg"
     description = "Intentionally open for KICS demo"

     ingress {
       from_port   = 0
       to_port     = 65535
       protocol    = "tcp"
       cidr_blocks = ["0.0.0.0/0"]
     }
   }
