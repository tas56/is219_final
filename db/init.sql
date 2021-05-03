CREATE DATABASE banking;
use banking;

CREATE TABLE IF NOT EXISTS accounts (
    `id` int AUTO_INCREMENT,
    `name` VARCHAR(21) CHARACTER SET utf8,
    `balance` NUMERIC(19, 2),
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS transactions (
    `id` int AUTO_INCREMENT,
    `account_id` VARCHAR(21) CHARACTER SET utf8,
    `amount` NUMERIC(19, 4),
    PRIMARY KEY (`id`)
);
