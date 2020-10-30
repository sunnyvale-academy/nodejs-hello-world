# Node.js Hello World

The app will reply to the clients the value of the environment variable ENVIRONMENT and VERSION as well as with the hostname.

ie:

```console
$ curl http://127.0.0.1:3000/
Hello World v.1.0 from 6770cb770e19!<br/>I'm running in local<br/>
```

## Test locally

```console
$ node app.js
```

## Build Docker image

```console
$ export ENVIRONMENT=local
$ export VERSION=1.0
$ docker build -t dennydgl1/nodejs-hello-world:1.0 . 
$ docker push dennydgl1/nodejs-hello-world:1.0    
```

## Run Docker container

```console
$ docker run \
    -ti \
    --rm \
    -e ENVIRONMENT=local \
    -e VERSION=1.0 \
    -p 3000:3000 \
    dennydgl1/nodejs-hello-world:1.0
```