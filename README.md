# Docker-Using-Load-Balancer

How to scale Docker using Load Balancer

# Docker Scale

We need to run same service into multiple containers

- docker compose up --scale api=2
- Remove the service name
- If the port is matched then system port can not be mapped to 2 different containers so remove the port and use NGINX (Any other load balancer) to map the ports. It will use the round robin approach
