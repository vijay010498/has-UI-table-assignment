# http://www.hasura.vijayaraghavan.com/


Completed the assignment in micro-services architecture using kubernetes cluster in the real production style and automated the CI/CD using github actions
![github-actions](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Fgithub_actions.JPG?alt=media&token=e2bb96d0-84b5-48df-b02a-9f045dbd1ac3)
# Microservices Architecture
![overview](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Foverview_arch.JPG?alt=media&token=d62f86a7-bf3e-4de7-99a6-98bb07b37ca2)

# Deployed in Digital Ocean
![Digital-ocean](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Fdigial_ocean_depl.JPG?alt=media&token=3f67668a-e738-4c8d-9bf8-32e618443422)

# Load Balancer - Ingress-nginx
![Digital_ocean_Load](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Fload_balancer.JPG?alt=media&token=fd988c6a-d126-4362-b955-92aa5847fe49)

# File Structure
![File-structure-1](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Ffile_structure-1.JPG?alt=media&token=79480806-105d-43a9-b556-4c2390acddf8)
![File-structuew-2](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Ffile_structure-2.JPG?alt=media&token=7c1ed3c6-297a-4fb6-bfff-6fdf6dd20cb2)

# Model Dataset for Mongo DB
https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Fstudents.json?alt=media&token=e2f88ac9-9986-451c-9d8d-7276ec67ac93
![mongo-db](https://firebasestorage.googleapis.com/v0/b/eatitv2-75508.appspot.com/o/hasura%2Fmongo.JPG?alt=media&token=a2144035-5594-4241-80a3-af009e9b7353)

# Tools Used
 - Git
  - Docker
  - webstrom
  - skaffold
# Node Modules Used
  - Axios
  - Express
  - Mongooose
  - react
  - react-table
  - jest - for automated test
  
# CI/CD
   - For production - Used github actions to deploy autonomously to digital ocean when code is pushed into the master branch
  - For-Developement - Uses skaffold to automate the deployment and termination of the pods inside k8s cluster
# Todos For Complete Production Grade
 - The current code style and pipeline is almost production grade, for the real production grade application we would need to use authentication, auth middleware, Event-bus homemade or opensource like kafka or NATS, etc.
  - Authentication can be done as simple as Jwt and cookie and production and deployment pipeline should be more proper. 
  

