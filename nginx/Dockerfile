FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY site.template /etc/nginx/conf.d/
COPY dist/  /usr/share/nginx/html/
EXPOSE 80
ENV URL http://node-express:3000
CMD envsubst '${URL}' < /etc/nginx/conf.d/site.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'