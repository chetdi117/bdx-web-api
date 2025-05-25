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
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var Post = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('post')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _content_decorators;
    var _content_initializers = [];
    var _content_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _images_decorators;
    var _images_initializers = [];
    var _images_extraInitializers = [];
    var _settings_decorators;
    var _settings_initializers = [];
    var _settings_extraInitializers = [];
    var _createDate_decorators;
    var _createDate_initializers = [];
    var _createDate_extraInitializers = [];
    var _updateDate_decorators;
    var _updateDate_initializers = [];
    var _updateDate_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
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
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _postTypeId_decorators;
    var _postTypeId_initializers = [];
    var _postTypeId_extraInitializers = [];
    var _categoryId_decorators;
    var _categoryId_initializers = [];
    var _categoryId_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _slug_decorators;
    var _slug_initializers = [];
    var _slug_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var _postType_decorators;
    var _postType_initializers = [];
    var _postType_extraInitializers = [];
    var Post = _classThis = /** @class */ (function () {
        function Post_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.content = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _content_initializers, void 0));
            this.description = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.images = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _images_initializers, void 0));
            this.settings = (__runInitializers(this, _images_extraInitializers), __runInitializers(this, _settings_initializers, void 0));
            this.createDate = (__runInitializers(this, _settings_extraInitializers), __runInitializers(this, _createDate_initializers, void 0));
            this.updateDate = (__runInitializers(this, _createDate_extraInitializers), __runInitializers(this, _updateDate_initializers, void 0));
            this.image = (__runInitializers(this, _updateDate_extraInitializers), __runInitializers(this, _image_initializers, void 0));
            this.location = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _location_initializers, void 0));
            this.price = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _price_initializers, void 0));
            this.address = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _address_initializers, void 0));
            this.district = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _district_initializers, void 0));
            this.ward = (__runInitializers(this, _district_extraInitializers), __runInitializers(this, _ward_initializers, void 0));
            this.city = (__runInitializers(this, _ward_extraInitializers), __runInitializers(this, _city_initializers, void 0));
            this.endDate = (__runInitializers(this, _city_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
            this.postTypeId = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _postTypeId_initializers, void 0));
            this.categoryId = (__runInitializers(this, _postTypeId_extraInitializers), __runInitializers(this, _categoryId_initializers, void 0));
            this.userId = (__runInitializers(this, _categoryId_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
            this.slug = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _slug_initializers, void 0));
            this.category = (__runInitializers(this, _slug_extraInitializers), __runInitializers(this, _category_initializers, void 0));
            this.user = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.postType = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _postType_initializers, void 0));
            __runInitializers(this, _postType_extraInitializers);
        }
        return Post_1;
    }());
    __setFunctionName(_classThis, "Post");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _title_decorators = [(0, typeorm_1.Column)({ length: 255 })];
        _content_decorators = [(0, typeorm_1.Column)({ length: 1000, nullable: true })];
        _description_decorators = [(0, typeorm_1.Column)({ length: 500, nullable: true })];
        _images_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _settings_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _createDate_decorators = [(0, typeorm_1.CreateDateColumn)()];
        _updateDate_decorators = [(0, typeorm_1.UpdateDateColumn)({ nullable: true })];
        _image_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _location_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _price_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _address_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _district_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _ward_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _city_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _endDate_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _postTypeId_decorators = [(0, typeorm_1.Column)()];
        _categoryId_decorators = [(0, typeorm_1.Column)()];
        _userId_decorators = [(0, typeorm_1.Column)()];
        _slug_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _category_decorators = [(0, typeorm_1.ManyToOne)(function () { return _1.Category; }, function (category) { return category.posts; }, {
                onDelete: 'SET NULL',
            })];
        _user_decorators = [(0, typeorm_1.ManyToOne)(function () { return _1.User; }, function (user) { return user.posts; }, {
                onDelete: 'SET NULL',
            })];
        _postType_decorators = [(0, typeorm_1.ManyToOne)(function () { return _1.PostType; }, function (postType) { return postType.posts; }, {
                onDelete: 'SET NULL',
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: function (obj) { return "content" in obj; }, get: function (obj) { return obj.content; }, set: function (obj, value) { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _images_decorators, { kind: "field", name: "images", static: false, private: false, access: { has: function (obj) { return "images" in obj; }, get: function (obj) { return obj.images; }, set: function (obj, value) { obj.images = value; } }, metadata: _metadata }, _images_initializers, _images_extraInitializers);
        __esDecorate(null, null, _settings_decorators, { kind: "field", name: "settings", static: false, private: false, access: { has: function (obj) { return "settings" in obj; }, get: function (obj) { return obj.settings; }, set: function (obj, value) { obj.settings = value; } }, metadata: _metadata }, _settings_initializers, _settings_extraInitializers);
        __esDecorate(null, null, _createDate_decorators, { kind: "field", name: "createDate", static: false, private: false, access: { has: function (obj) { return "createDate" in obj; }, get: function (obj) { return obj.createDate; }, set: function (obj, value) { obj.createDate = value; } }, metadata: _metadata }, _createDate_initializers, _createDate_extraInitializers);
        __esDecorate(null, null, _updateDate_decorators, { kind: "field", name: "updateDate", static: false, private: false, access: { has: function (obj) { return "updateDate" in obj; }, get: function (obj) { return obj.updateDate; }, set: function (obj, value) { obj.updateDate = value; } }, metadata: _metadata }, _updateDate_initializers, _updateDate_extraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
        __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _district_decorators, { kind: "field", name: "district", static: false, private: false, access: { has: function (obj) { return "district" in obj; }, get: function (obj) { return obj.district; }, set: function (obj, value) { obj.district = value; } }, metadata: _metadata }, _district_initializers, _district_extraInitializers);
        __esDecorate(null, null, _ward_decorators, { kind: "field", name: "ward", static: false, private: false, access: { has: function (obj) { return "ward" in obj; }, get: function (obj) { return obj.ward; }, set: function (obj, value) { obj.ward = value; } }, metadata: _metadata }, _ward_initializers, _ward_extraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: function (obj) { return "city" in obj; }, get: function (obj) { return obj.city; }, set: function (obj, value) { obj.city = value; } }, metadata: _metadata }, _city_initializers, _city_extraInitializers);
        __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
        __esDecorate(null, null, _postTypeId_decorators, { kind: "field", name: "postTypeId", static: false, private: false, access: { has: function (obj) { return "postTypeId" in obj; }, get: function (obj) { return obj.postTypeId; }, set: function (obj, value) { obj.postTypeId = value; } }, metadata: _metadata }, _postTypeId_initializers, _postTypeId_extraInitializers);
        __esDecorate(null, null, _categoryId_decorators, { kind: "field", name: "categoryId", static: false, private: false, access: { has: function (obj) { return "categoryId" in obj; }, get: function (obj) { return obj.categoryId; }, set: function (obj, value) { obj.categoryId = value; } }, metadata: _metadata }, _categoryId_initializers, _categoryId_extraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
        __esDecorate(null, null, _slug_decorators, { kind: "field", name: "slug", static: false, private: false, access: { has: function (obj) { return "slug" in obj; }, get: function (obj) { return obj.slug; }, set: function (obj, value) { obj.slug = value; } }, metadata: _metadata }, _slug_initializers, _slug_extraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _postType_decorators, { kind: "field", name: "postType", static: false, private: false, access: { has: function (obj) { return "postType" in obj; }, get: function (obj) { return obj.postType; }, set: function (obj, value) { obj.postType = value; } }, metadata: _metadata }, _postType_initializers, _postType_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Post = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Post = _classThis;
}();
exports.Post = Post;
