---
slug: 2023-02-10-exploring-terraform-your-first-guide-to-infrastructure-as-code
title: "Exploring Terraform: Your First Guide to Infrastructure as Code"
authors: joaovictornsv
tags: [technical]
---

Today, I want to show you the power of Terraform in action with a simple integration that you can follow while as you read the steps below.
But first, we need to understand what Terraform is.

<!-- truncate -->
## What is Terraform?

In short, Terraform is a tool for managing resources across different providers (AWS, GCP, Azure, GitHub, Kubernetes, etc.), all in an automated way through lines of code! If you want to dive deeper into these capabilities, I highly recommend checking out the [Terraform website](https://www.terraform.io/).

## Prerequisites

To proceed with the next steps, you need to have the Terraform installed in you machine. Installing it is simple, check the [docs](https://developer.hashicorp.com/terraform/install?product_intent=terraform) for more details. Additionally, Docker must be installed for this integration.

## Hands on

Let's start by pulling a Docker image and running a container using only Terraform! Keep in mind that this post won’t cover all the details. As mentioned in the title, this is just a simple introduction to the tool.

### 1. Setting the Providers

> I'm using the example described [here](https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs) in the Terraform documentation.

First, create a `main.tf` file and paste the following code:

```terraform
terraform {
    required_providers {
        docker = {
            source  = "kreuzwerker/docker"
            version = "3.0.1"
        }
    }
}

provider "docker" {
    host = "unix:///var/run/docker.sock"
}
```

This is how we tell Terraform that Docker will be our resource provider.

### 2. Defining Our Resources: Image and Container

Now, in the same file, let's pull a Docker image. For this example, I will use the [nginx](https://hub.docker.com/_/nginx/) image:

```terraform
resource "docker_image" "nginx" {
    name = "nginx:1.23.3-alpine"
}
```

The `resource` block has two key elements:  
1. **Resource Type**: Specifies the type of resource to create. In this case, it's a Docker image.  
2. **Resource Identifier**: A unique name to differentiate resources of the same type. This identifier is also crucial for referencing the resource later.

Let's use this identifier to create our container:

```terraform
resource "docker_container" "nginx" {
    image = docker_image.nginx.image_id
    name  = "nginx_alpine"
  
    ports {
        internal = 80
        external = 8080
    }
}
```

Here, we are creating a container based on the previously defined image, while setting the container name and its ports.

If you'd like to explore all available settings for these resources, consider reviewing their documentation:  
- Documentation for docker_image: https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs/resources/image
- Documentation for docker_container: https://registry.terraform.io/providers/kreuzwerker/docker/latest/docs/resources/container

### 3. Creating the Resources

To ensure that our resource configurations are valid, run the following command:

 ```bash
 terraform validate
```

Next, execute:

```bash
terraform plan
```

This command generates a report showing the changes Terraform will make. At the end of the output, you’ll see a summary of what will be created, modified, or destroyed:

```
Plan: 2 to add, 0 to change, 0 to destroy.
```

To apply the changes, use:

```bash
terraform apply
```

Terraform will ask for confirmation. Just type yes to proceed (you can skip this step by using the -auto-approve flag). Once the changes are applied, wait for Terraform to complete the process. If successful, you should see this message in your terminal:

```
Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
```

Finally, verify that the resources were created by running these Docker commands:

```
docker image ls
docker container ls
```

## Bonus

In this post, I have only covered the basics of integrating Terraform with Docker to keep it concise and interesting. If you're interested in exploring more advanced topics, such as separating resources into different files, defining variables, or understanding the `terraform.tfstate` file, check out the [video](https://www.youtube.com/watch?v=UZN221NJ2-M) I recorded (in Portuguese). It goes beyond the steps described here and dives into these additional details.  

## Conclusion

This is the power of Terraform! I hope you're feeling motivated to dive even deeper into it.




