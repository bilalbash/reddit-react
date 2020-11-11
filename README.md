# reddit-server

#### Setup Database
After installing Postgres Database, create db with the name `lireddit`.

#### to install this project clone it and than type the following command:

Step # 1:
Clone the repo and than change directory to new repository directory.

Step # 2:
Update `src/mikro-orm.config.ts` file with your postgresql database user, password
and dbName. Which in case of this application is `lireddit`.

Step # 3:
Install dependencies:
```
yarn install
```

#### to run this project

run this command in one terminal window:

```
yarn watch
```

after a while the watcher will be ready and generate `dist` directory than you can run this 
command in another terminal tab to finally see the project running:

```
yarn dev
```
