# SDC - Hack Reactor - RPP29 - Team Deku

*Project Owners:
- [Steven Harder](https://github.com/stevenharderjr) - [Engineering Journal](https://github.com/stevenharderjr/SDC-Engineering-Journal)
- Chris Monteilh
- Isaac Kim
- Callum Reid*


## Project Overview
Our team worked to replace an underpeforming extant API with series of microservice RESTful APIs that were individually created and scaled to achieve the client's goal of over 1000RPS without error. These microservices were built in MySQL and MongoDB, dependant on the needs for each service. Each microservice was then deployed, optimized, and connected to an existing frontend in order to achieve a much needed boost in handling traffic throughput without failure.

### Table of Contents
- [Description](#description)
- [Installation](#installation)

## Description

![Deku](https://i.ibb.co/sHKMprS/deku.jpg )



### Product Overview -----------------------------------------------------------------------------------------



### *Related Products* -----------------------------------------------------------------------------------------

### *Questions and Answers* -----------------------------------------------------------------------------------
- [Callum Reid](https://github.com/callumreid)- Questions and Answers Service Owner
- I decided to use MySQL for my database because the data I was working with was relational in nature. Using MySQL allowed me to take advantage of the relationship between the data that the client needed using foreign keys and methods like `JSON_OBJAGG` and `JSON_OBJ` to create the exact structure that was compliant with the extant client code
- One of the inital challenges I faced was performing an ETL process on large CSV files containing millions of lines each. I accomplished this by using the command line to break these files into smaller parcels before copying them onto a deployed EC2 instance and scripting their addition to my database.
- In development, I used K6 testing to measure the performance of my API. My initial GET request time was over 5s, so I employed indexing to hasten lookup for a product by id down to ~15ms. I then used node clustering to allow maximize the performance of my CPU's locally, improving K6 testing results from 1500 VUs to 2500 VUs.
- I deployed via AWS EC2 and utilized Loader.io to test the capacity of my API, resulting in a benchmark of success at 500 RPS. In order to meet the client needs, I horizontally scaled with additional servers and implemented an NGINX round-robin load balancer. With this in place, I was able to exceed the target by 100% by achieving 2000RPS with an average response of 15ms and 0.01% errror.


### *Reviews* ---------------------------------------------------------------------------------------------------



## Installation
- Clone to local machine
- Create .env file from example.env
- Run NPM install to install all necessary dependencies
- Run NPM start to transpile code into bundle.js file
- Run NPM run server to run express server locally
- To view in the browser, go to localhost:4000 in your broswer of choice




