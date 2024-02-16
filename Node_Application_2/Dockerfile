FROM node

COPY index.js /home/app/index.js
COPY package.json /home/app/package.json

# working directory to run the command in following folder
# i.e. first I want to go to the following directory and then run the command
WORKDIR /home/app/
# all commands below this will run in /home/app/ directory
RUN npm install

# WORKDIR /root --> to run commands in main directory

# when user starts server run the file
CMD ["node","index"]