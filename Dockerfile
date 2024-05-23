FROM node:alpine3.19 AS influx
WORKDIR /app
COPY --from=app-base /app/dist/apps/influx ./dist/apps/influx
COPY --from=app-base /app/node_modules ./node_modules
CMD [ "node", "dist/apps/influx/main.js" ]