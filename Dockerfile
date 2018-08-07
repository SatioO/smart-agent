# base image
FROM alpine as builder

# Install yarn
RUN echo -e "http://dl-cdn.alpinelinux.org/alpine/edge/main\nhttp://dl-cdn.alpinelinux.org/alpine/edge/community\nhttp://dl-cdn.alpinelinux.org/alpine/edge/testing" > /etc/apk/repositories && apk -U upgrade && apk add --no-cache yarn

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn

# copy source files and build project
COPY . /usr/src/app
RUN yarn build

# production environment
FROM nginx:alpine
LABEL maintainer="Vaibhav Satam <vaibhav.satam@accionlabs.com>" \
    com.amwater.description="Smart Agent Docker Configuration" \
    com.amwater.project="Smart Agent" \
    com.amwater.env="DEV"

RUN rm -rf /etc/nginx/conf.d && apk -U upgrade
COPY conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80

# to switch environment
ARG APP_ENV
ENV REACT_APP_ENV ${APP_ENV}

CMD ["nginx", "-g", "daemon off;"]