output "server_public_ip" {
  description = "Public IP address of the monitoring server"
  value       = aws_instance.monitoring_server.public_ip
}

output "ssh_command" {
  description = "SSH command to connect with the server"
  value       = "ssh -i your-key.pem ubuntu@${aws_instance.monitoring_server.public_ip}"
}

output "app_url" {
  description = "Application URL"
  value       = "http://${aws_instance.monitoring_server.public_ip}:8080"
}

output "grafana_url" {
  description = "Grafana URL"
  value       = "http://${aws_instance.monitoring_server.public_ip}:3000"
}

output "prometheus_url" {
  description = "Prometheus URL"
  value       = "http://${aws_instance.monitoring_server.public_ip}:9090"
}

output "node_exporter_url" {
  description = "Node Exporter metrics URL"
  value       = "http://${aws_instance.monitoring_server.public_ip}:9100/metrics"
}

output "loki_url" {
  description = "Loki URL"
  value       = "http://${aws_instance.monitoring_server.public_ip}:3100"
}