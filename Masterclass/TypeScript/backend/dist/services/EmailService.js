"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var author = _a.author, message = _a.message;
        console.log("email enviado para " + author.name + ": " + message.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
