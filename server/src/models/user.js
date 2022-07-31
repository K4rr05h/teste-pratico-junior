const express = require("express");
const user = express();

module.exports = class User {

    cosntructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}