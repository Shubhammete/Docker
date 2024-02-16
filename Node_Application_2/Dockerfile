FROM node

COPY index.js /home/app/index.js
COPY package.json /home/app/package.json

# working directory to run the command in following folder
# i.e. first I want to go to the following directory and then run the command
WORKDIR /home/app/
# all commands below this will run in /home/app/ directory
RUN npm install

# WORKDIR /root --> to run commands in main directory

# we can expose the port so can we not need to map it on CLI

# EXPOSE 3000 8000 3001 we can expose as many ports we need
# EXPOSE 3000-3999 we can expose the port in the range also

# make sure the the port is same as given in code
EXPOSE 8080  
# when user starts server run the file
CMD ["node","index"]