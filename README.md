Install docker on the instance
sudo yum install docker -y
sudo systemctl enable --now docker
docker --version
sudo usermod -aG docker $USER
sudo chmod 777 /var/run/docker.sock
for pipeline install jenkins
