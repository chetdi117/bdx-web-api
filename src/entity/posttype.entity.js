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
exports.PostType = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var PostType = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('posttype')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _createDate_decorators;
    var _createDate_initializers = [];
    var _createDate_extraInitializers = [];
    var _updateDate_decorators;
    var _updateDate_initializers = [];
    var _updateDate_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var _posts_decorators;
    var _posts_initializers = [];
    var _posts_extraInitializers = [];
    var PostType = _classThis = /** @class */ (function () {
        function PostType_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.createDate = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _createDate_initializers, void 0));
            this.updateDate = (__runInitializers(this, _createDate_extraInitializers), __runInitializers(this, _updateDate_initializers, void 0));
            this.userId = (__runInitializers(this, _updateDate_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
            this.user = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.posts = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _posts_initializers, void 0));
            __runInitializers(this, _posts_extraInitializers);
        }
        return PostType_1;
    }());
    __setFunctionName(_classThis, "PostType");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ length: 255 })];
        _createDate_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _updateDate_decorators = [(0, typeorm_1.Column)()];
        _userId_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return _1.User; }, function (user) { return user.postTypes; })];
        _posts_decorators = [(0, typeorm_1.OneToMany)(function () { return _1.Post; }, function (post) { return post.postType; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _createDate_decorators, { kind: "field", name: "createDate", static: false, private: false, access: { has: function (obj) { return "createDate" in obj; }, get: function (obj) { return obj.createDate; }, set: function (obj, value) { obj.createDate = value; } }, metadata: _metadata }, _createDate_initializers, _createDate_extraInitializers);
        __esDecorate(null, null, _updateDate_decorators, { kind: "field", name: "updateDate", static: false, private: false, access: { has: function (obj) { return "updateDate" in obj; }, get: function (obj) { return obj.updateDate; }, set: function (obj, value) { obj.updateDate = value; } }, metadata: _metadata }, _updateDate_initializers, _updateDate_extraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _posts_decorators, { kind: "field", name: "posts", static: false, private: false, access: { has: function (obj) { return "posts" in obj; }, get: function (obj) { return obj.posts; }, set: function (obj, value) { obj.posts = value; } }, metadata: _metadata }, _posts_initializers, _posts_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PostType = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PostType = _classThis;
}();
exports.PostType = PostType;
