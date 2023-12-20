FROM node:lts-alpine as build

WORKDIR /app/build

COPY . .

# build back-end
RUN cd server && \
    npm install && \
    npm run build

# build front-end
RUN cd ui && \
    npm install && \
    npm run build && \
    cp -rf dist ../server/public

FROM node:lts-alpine

WORKDIR /app/run

# copy necessary things only
COPY --from=build "/app/build/server/public" public
COPY --from=build "/app/build/server/dist" dist
COPY --from=build "/app/build/server/package.json" .

# install production dependencies only
RUN npm install --omit=dev

ENTRYPOINT ["npm", "run", "serve" ]