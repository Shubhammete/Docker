# stable official Java runtime base image
FROM openjdk:17-jdk-alpine
# openjdk - image name
# 17-jdk-alpine - tag name

# metadata
LABEL maintainer="your-email@example.com"
LABEL version="1.0"
LABEL description="A simple Java application"

# working directory
WORKDIR /app

# Copy source code into the container
#COPY src/Main.java /app/Main.java
COPY src/Main.java .
# Here we only copy Main.java to /app folder or working directory of container
#COPY . .
# this copies all content from present directory to working directory

# Compile the Java code
RUN javac Main.java

# Run the Java application when the container starts
CMD ["java", "Main"]

# CMD basically executes after container gets created and all other commands are intermediate at time of container creation
# ENTRYPOINT [ "executable" ]
# We can use ENTRYPOINT instead of CMD but CMD can be overridden but ENTRYPOINT cannot be