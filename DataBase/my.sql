CREATE USER 'Lilia1'@'host' IDENTIFIED BY 'password111';
CREATE USER 'Lilia2'@'host' IDENTIFIED BY 'password222';
CREATE DATABASE my_db;
GRANT ALL PRIVILEGES ON my_db.* TO ‘User1’@’host’;
GRANT VIEW, ALTER PRIVILEGES ON mydb.* TO ‘User1’@’host’;
SHOW DATABASE;
SELECT User, Host FROM mysql.user;
SET PASSWORD FOR 'User1'@'host' = PASSWORD('lilia1506');
SET PASSWORD FOR 'User2'@'host' = PASSWORD('aaaaa1211');

~                                                             
