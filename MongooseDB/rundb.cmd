if not exist "db" mkdir db
mongod -port 3000 -dbpath ".\db"