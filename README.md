# team-38 platform

Web Platform & API for team38

> Note: Please run your own mongo instance and replace MONGO_DB and MONGO_URI in api `.env` file

## Api Setup

```bash
cd api
cp .env.dist .env
yarn install
yarn start:dev
```

### Documentation

```bash
cd api
yarn build:docs
firefox docs/build/index.html
```

## Platform Setup

```bash
cd platform
yarn install
yarn serve
firefox http://127.0.0.1:8080
```
