variable "aws_region" {
  description = "AWS region where the infrastructure will be created"
  type        = string
  default     = "ap-southeast-1"
}

variable "aws_profile" {
  description = "AWS CLI profile name"
  type        = string
  default     = "default"
}

variable "vpc_cidr" {
  description = "CIDR block for the custom VPC"
  type        = string
  default     = "10.8.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR block for the public subnet"
  type        = string
  default     = "10.8.1.0/24"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "AWS EC2 key pair name"
  type        = string
}

variable "allowed_ip" {
  description = "Allowed IP address for SSH, Grafana, Prometheus, Loki, Node Exporter, and app access"
  type        = string
  default     = "0.0.0.0/0"
}