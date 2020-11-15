# reddit-server

### Setup Database
After installing Postgres Database, create db with the name `lireddit`.

### To install this project:

**Step # 1:**
Clone the repo and than change directory to new repository directory:
```
git clone git@github.com:bilalbash/reddit-react.git lireddit
cd lireddit
git reset --hard [desired release commit hash]
```

**Step # 2:**
Update `src/mikro-orm.config.ts` file with your postgresql database user, password
and dbName. Which in case of this application is `lireddit`.

**Step # 3:**
Install dependencies:
```
yarn install
```

### To run this project
**Step # 4:**
run this command in one terminal window:

```
yarn watch
```
After a while the watcher will be ready and generate `dist` directory.

**Step # 5:**
Open another terminal tab and than install redis and than start redis server via this command:
```
redis-server
```

**Step # 6:**
Than you can run the following command in another terminal tab:

```
yarn dev
```

**Step # 6:**
Continue this video link @ [2:07:48](https://youtu.be/I6ypD7qv3Z8?t=7668)
