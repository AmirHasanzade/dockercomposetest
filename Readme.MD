```docker
docker build -t devsetup .

docker run -d --rm -p 3000:3000 -v "$(pwd)\src:/app/src" devsetup

# without -L nodemon doesn't see changes in host
docker run -d --rm -p 3000:3000 -v "$(pwd)/src:/app/src" devsetup sh -c "npx nodemon -L ./src/index.js"

docker save devsetup > devsetup.tar
docker load < devsetup.tar

docker system prune -a
 # This will remove:
 # - all stopped containers
 # - all networks not used by at least one container
 # - all images without at least one container associated to them
 # - all build cache
```

If you bind mount to a folder inside container that has files in it, docker hides those files