"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    driver: process.env.MAIL_DRIVER || 'ethereal',
    defaults: {
        from: {
            email: 'jonathan.riosousa2@gmail.com',
            name: 'Jonathan Rios Sousa',
        },
    },
};
