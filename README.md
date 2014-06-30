# Virtual Machine Examples

This Repository contains Virtual Machines for my Talk ["Virtuelle Umgebungen mit
Vagrant, Docker und
Ansible"](https://speakerdeck.com/simono/virtuelle-umgebungen-mit-vagrant-docker-und-ansible)
(available in German only).

## Virtual Machines:

* *minimal*: Minimal [Vagrant](https://www.vagrantup.com) VM
* *shell-nginx*: Vagrant VM with Shell Provisioner
* *docker-host*: Vagrant VM to host [Docker](http://www.docker.com) Containers
* *docker-nginx*: Docker Container with nginx
* *docker-node*: Docker Container with Node.js
* *ansible-nginx*: Vagrant VM with [Ansible](http://www.ansible.com) Provisioner
* *app*: A complete App with Node.js, Assets and Database Containers

To run the VMs use:

```sh
vagrant up
```

or for the Docker Containers:
```sh
vagrant up --provider=docker
```
