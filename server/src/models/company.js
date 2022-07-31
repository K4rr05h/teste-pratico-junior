const express = require("express");
const company = express();

module.exports = class company {

    constructor(fantasyName, CNPJ, openDate, Email, Phone, CEP, Address ){

        this.fantasyName = fantasyName;
        this.CNPJ = CNPJ;
        this.openDate = openDate;
        this.Email = Email;
        this.Phone = Phone;
        this.CEP = CEP;
        this.Address = Address;

    }

}