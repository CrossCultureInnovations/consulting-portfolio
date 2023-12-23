FROM 343dev/optimizt as optimizt

WORKDIR /app/build

COPY . .

RUN find . -type f \( -name '*.PNG' -o -name '*.JPG' \) -exec optimizt {} +

FROM node:lts-alpine as build

WORKDIR /app/build

COPY --from=optimizt /app/build .

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

ENV NODE_ENV=production

ENTRYPOINT ["npm", "run", "serve" ]