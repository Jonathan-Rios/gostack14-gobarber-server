"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ProfileController_1 = __importDefault(require("../controllers/ProfileController"));
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var profileRouter = express_1.Router();
var profileController = new ProfileController_1.default();
profileRouter.use(ensureAuthenticated_1.default);
profileRouter.get('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
    },
    _a)), profileController.show);
profileRouter.put('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        old_password: celebrate_1.Joi.string(),
        password: celebrate_1.Joi.when('old_password', {
            is: celebrate_1.Joi.exist(),
            then: celebrate_1.Joi.required(),
        }),
        password_confirmation: celebrate_1.Joi.when('password', {
            is: celebrate_1.Joi.exist(),
            then: celebrate_1.Joi.valid(celebrate_1.Joi.ref('password')).required(),
        }),
    },
    _b)), profileController.update);
exports.default = profileRouter;
