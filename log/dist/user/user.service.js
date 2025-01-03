"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_model_1 = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async signup(name, email, password, age) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({
            name,
            email,
            password: hashedPassword,
            age,
        });
        return newUser.save();
    }
    async login(email, password) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            return { message: 'wrong email' };
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { message: 'wrong password' };
        }
        const payload = { userId: user.id, email: user.email };
        const token = jwt.sign(payload, 'your_jwt_secret_key', { expiresIn: '1h' });
        return { message: 'Login successful', token };
    }
    async getUserByName(name) {
        const user = await this.userModel.findOne({ name });
        if (!user) {
            return { message: 'User not found' };
        }
        return user;
    }
    async deleteUserByName(name) {
        const result = await this.userModel.deleteOne({ name });
        if (result.deletedCount === 0) {
            return { message: 'User not found' };
        }
        return { message: 'User deleted successfully' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.user.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map