"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var post_entity_1 = require("./post.entity");
var _1 = require(".");
var User = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('user')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _fullName_decorators;
    var _fullName_initializers = [];
    var _fullName_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _createDate_decorators;
    var _createDate_initializers = [];
    var _createDate_extraInitializers = [];
    var _updateDate_decorators;
    var _updateDate_initializers = [];
    var _updateDate_extraInitializers = [];
    var _avatar_decorators;
    var _avatar_initializers = [];
    var _avatar_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _address_extraInitializers = [];
    var _district_decorators;
    var _district_initializers = [];
    var _district_extraInitializers = [];
    var _ward_decorators;
    var _ward_initializers = [];
    var _ward_extraInitializers = [];
    var _city_decorators;
    var _city_initializers = [];
    var _city_extraInitializers = [];
    var _birthdate_decorators;
    var _birthdate_initializers = [];
    var _birthdate_extraInitializers = [];
    var _posts_decorators;
    var _posts_initializers = [];
    var _posts_extraInitializers = [];
    var _categories_decorators;
    var _categories_initializers = [];
    var _categories_extraInitializers = [];
    var _postTypes_decorators;
    var _postTypes_initializers = [];
    var _postTypes_extraInitializers = [];
    var _roles_decorators;
    var _roles_initializers = [];
    var _roles_extraInitializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.fullName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _fullName_initializers, void 0));
            this.email = (__runInitializers(this, _fullName_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.createDate = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _createDate_initializers, void 0));
            this.updateDate = (__runInitializers(this, _createDate_extraInitializers), __runInitializers(this, _updateDate_initializers, void 0));
            this.avatar = (__runInitializers(this, _updateDate_extraInitializers), __runInitializers(this, _avatar_initializers, void 0));
            this.password = (__runInitializers(this, _avatar_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.phone = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.address = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _address_initializers, void 0));
            this.district = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _district_initializers, void 0));
            this.ward = (__runInitializers(this, _district_extraInitializers), __runInitializers(this, _ward_initializers, void 0));
            this.city = (__runInitializers(this, _ward_extraInitializers), __runInitializers(this, _city_initializers, void 0));
            this.birthdate = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _birthdate_initializers, void 0));
            this.posts = (__runInitializers(this, _birthdate_extraInitializers), __runInitializers(this, _posts_initializers, void 0));
            this.categories = (__runInitializers(this, _posts_extraInitializers), __runInitializers(this, _categories_initializers, void 0));
            this.postTypes = (__runInitializers(this, _categories_extraInitializers), __runInitializers(this, _postTypes_initializers, void 0));
            this.roles = (__runInitializers(this, _postTypes_extraInitializers), __runInitializers(this, _roles_initializers, void 0));
            __runInitializers(this, _roles_extraInitializers);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _fullName_decorators = [(0, typeorm_1.Column)({ length: 255 })];
        _email_decorators = [(0, typeorm_1.Column)()];
        _createDate_decorators = [(0, typeorm_1.Column)()];
        _updateDate_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _avatar_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _password_decorators = [(0, typeorm_1.Column)()];
        _phone_decorators = [(0, typeorm_1.Column)({ nullable: true, length: 10 })];
        _address_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _district_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _ward_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _city_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _birthdate_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _posts_decorators = [(0, typeorm_1.OneToMany)(function () { return post_entity_1.Post; }, function (post) { return post.user; })];
        _categories_decorators = [(0, typeorm_1.OneToMany)(function () { return _1.Category; }, function (category) { return category.user; })];
        _postTypes_decorators = [(0, typeorm_1.OneToMany)(function () { return _1.PostType; }, function (postType) { return postType.user; })];
        _roles_decorators = [(0, typeorm_1.ManyToMany)(function () { return _1.Role; }, function (role) { return role.users; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _fullName_decorators, { kind: "field", name: "fullName", static: false, private: false, access: { has: function (obj) { return "fullName" in obj; }, get: function (obj) { return obj.fullName; }, set: function (obj, value) { obj.fullName = value; } }, metadata: _metadata }, _fullName_initializers, _fullName_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _createDate_decorators, { kind: "field", name: "createDate", static: false, private: false, access: { has: function (obj) { return "createDate" in obj; }, get: function (obj) { return obj.createDate; }, set: function (obj, value) { obj.createDate = value; } }, metadata: _metadata }, _createDate_initializers, _createDate_extraInitializers);
        __esDecorate(null, null, _updateDate_decorators, { kind: "field", name: "updateDate", static: false, private: false, access: { has: function (obj) { return "updateDate" in obj; }, get: function (obj) { return obj.updateDate; }, set: function (obj, value) { obj.updateDate = value; } }, metadata: _metadata }, _updateDate_initializers, _updateDate_extraInitializers);
        __esDecorate(null, null, _avatar_decorators, { kind: "field", name: "avatar", static: false, private: false, access: { has: function (obj) { return "avatar" in obj; }, get: function (obj) { return obj.avatar; }, set: function (obj, value) { obj.avatar = value; } }, metadata: _metadata }, _avatar_initializers, _avatar_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _district_decorators, { kind: "field", name: "district", static: false, private: false, access: { has: function (obj) { return "district" in obj; }, get: function (obj) { return obj.district; }, set: function (obj, value) { obj.district = value; } }, metadata: _metadata }, _district_initializers, _district_extraInitializers);
        __esDecorate(null, null, _ward_decorators, { kind: "field", name: "ward", static: false, private: false, access: { has: function (obj) { return "ward" in obj; }, get: function (obj) { return obj.ward; }, set: function (obj, value) { obj.ward = value; } }, metadata: _metadata }, _ward_initializers, _ward_extraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
        __esDecorate(null, null, _birthdate_decorators, { kind: "field", name: "birthdate", static: false, private: false, access: { has: function (obj) { return "birthdate" in obj; }, get: function (obj) { return obj.birthdate; }, set: function (obj, value) { obj.birthdate = value; } }, metadata: _metadata }, _birthdate_initializers, _birthdate_extraInitializers);
        __esDecorate(null, null, _posts_decorators, { kind: "field", name: "posts", static: false, private: false, access: { has: function (obj) { return "posts" in obj; }, get: function (obj) { return obj.posts; }, set: function (obj, value) { obj.posts = value; } }, metadata: _metadata }, _posts_initializers, _posts_extraInitializers);
        __esDecorate(null, null, _categories_decorators, { kind: "field", name: "categories", static: false, private: false, access: { has: function (obj) { return "categories" in obj; }, get: function (obj) { return obj.categories; }, set: function (obj, value) { obj.categories = value; } }, metadata: _metadata }, _categories_initializers, _categories_extraInitializers);
        __esDecorate(null, null, _postTypes_decorators, { kind: "field", name: "postTypes", static: false, private: false, access: { has: function (obj) { return "postTypes" in obj; }, get: function (obj) { return obj.postTypes; }, set: function (obj, value) { obj.postTypes = value; } }, metadata: _metadata }, _postTypes_initializers, _postTypes_extraInitializers);
        __esDecorate(null, null, _roles_decorators, { kind: "field", name: "roles", static: false, private: false, access: { has: function (obj) { return "roles" in obj; }, get: function (obj) { return obj.roles; }, set: function (obj, value) { obj.roles = value; } }, metadata: _metadata }, _roles_initializers, _roles_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
