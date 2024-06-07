# Backend

## Set up local Postgres DB

### Install Docker

Install Docker Desktop for Mac following the [official guide](https://docs.docker.com/desktop/install/mac-install/).

### Start postgres container

Run the script to start the postgres container:

```sh
ca-animal-lovers/backend $ ./start-postgres.sh
```

### Connect to postgres container

To connect to the postgres container, fetch the container ID first:

```sh
➜  backend git:(ziniz/add-local-db) ✗ docker container ls
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS                    PORTS                    NAMES
fae215ff958c   postgres:16.3   "docker-entrypoint.s…"   45 minutes ago   Up 45 minutes (healthy)   0.0.0.0:5432->5432/tcp   caal-postgres
```

Here `fae215ff958c` is the container id.

Then open a shell for the postgres container:

```sh
$ docker exec -it fae215ff958c sh
```

In the shell, connect to psql db:

```sh
$ psql -U caal
```

And you are now conencted to the DB.

### Connect to the postgres DB programmatically

Install `tsx`:

```sh
$ sudo npm install tsx -g
```

And you can interact with the DB by using the `pg` client library. You can find the examples in `/backend/src/db/index.ts`.

```sh
$ tsx backend/src/db/index.ts
```
