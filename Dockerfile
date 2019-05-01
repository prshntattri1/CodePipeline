FROM mhart/alpine-node:base-0.10

# Bundle app source
COPY . .

CMD [ "node", "app.js" ]
