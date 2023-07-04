# PC NT

- ...

## Prerequisite

- Here are some essential tools that you need to have to running project properly, and some optional tools if you want to change the repository.
And please feel free to make any changes that suit your interest.

- [docker](https://www.docker.com/)
- [make](https://www.gnu.org/software/make/)
- [node(Optional)](https://nodejs.org/en/)
- [MySql(Optional)](https://www.mysql.com/)
- [Typescript(Optional)](https://www.typescriptlang.org/)


### Get Started

- Once you finished pulling the repository, you will have a simple file structure like this. To look up more specificly you can exec `tree -I 'node_modules|dist|public'`

```text
├── LICENCE
├── Makefile
├── README.md
├── docker-compose.yaml
└── services
```

- If you are not going to make any changes, the only two things you need is inside `docker-compose.yaml` and `Makefile`. To execute and running the application.
You can start with `make help` to see what kinds of commands you can use. That's get started.

### Install and Run

-- Before running the application you need to build the entire app first, if you have questions about `make` commands go down below and take a look what our `makefile` can help you.

```shell
// Build Application
make build
```

-- Once you finished building the application, you will know be able to spin up the multi-containers. 

```shell
// Run Application
make up
```

** The App will running on `localhost:7080` as default, if you want to make any change, feel free to do so. **


-- When you finished spinning up the application, you can go and see this log if you wanted. If you have any
questions about logging, see `make logs` command down description below.

#### Helper command

- list all commands available for make

```shell
make help
```

#### Build command

- build the image from Dockerfile. In our applications we have a server build on top of Nestjs framework, and Vue Typescript frontend binding with Nginx.

```shell
make build
```

#### Up command

- Stopping and recreating the containers

```shell
make up
```

#### Start command

- Is used to start the containers. To start only one container for example if I only want to start db container run `make start c=server`

```shell
make start
```

#### Down command

- Is used to stop and remove containers. To delete specific container use for example if I only want to delete db container run `make down c=server`

```shell
make down            # delete all containers
make down c=server   # delete server only
```

#### Logs command

- Is used to see the log of the containers. To log specific container use for example if I only want to log db container run `make log c=server`

```shell
make log            # log all containers
make log c=server   # log server only
```

### Test API

#### Prerequisite

- Replace the domain and port of the api 

- Create User

```
curl --location --request POST 'http://{{DOMAIN}}:{{PORT}}/api/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Test",
    "email": "test@test.com",
    "password": "12345678"
}'
```

- Get Users

```
curl --location --request GET 'http://{{DOMAIN}}:{{PORT}}/api/v1/users'
```

- Get User By Id

```
curl --location --request GET 'http://{{DOMAIN}}:{{PORT}}/api/v1/users/f5784f22-cb47-4094-a943-abd303acac0a'
```