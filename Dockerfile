# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /btmeat

# add `/app/node_modules/.bin` to $PATH
ENV PATH /btmeat/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# MSYS_NO_PATHCONV=1 docker run -it --rm -v /$(pwd):/btmeat -v /btmeat/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true btmeat:dev