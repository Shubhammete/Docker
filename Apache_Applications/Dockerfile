# base image
FROM ubuntu:latest
# command to execute -> here install apache server
RUN apt-get update && apt-get install -y apache2
# copy index.html to /var/www/html/ directory
COPY index.html /var/www/html/
# Run apache server on runing image
CMD ["apache2ctl", "-D", "FOREGROUND"]