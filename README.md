# reddit-server

### Setup Database
After installing Postgres Database, create db with the name `lireddit`.

### To install this project:

**Step # 1:**
Clone the repo and than change directory to new repository directory:
```
git clone git@github.com:bilalbash/reddit-react.git lireddit
cd lireddit
git reset --hard 3f71e0389a124c3a40c9ae95a149f649b242b017
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
Than you can run the following command in another terminal tab:

```
yarn dev
```

**Step # 6:**
Continue this video link @ [39:38](`https://www.youtube.com/watch?v=I6ypD7qv3Z8&t=2211s`)
