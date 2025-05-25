"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSetting = exports.EntityType = exports.ImageDTO = void 0;
var ImageDTO = /** @class */ (function () {
    function ImageDTO() {
    }
    return ImageDTO;
}());
exports.ImageDTO = ImageDTO;
var EntityType;
(function (EntityType) {
    EntityType["TEXT"] = "text";
    EntityType["NUMBER"] = "number";
    EntityType["SELECT"] = "select";
    EntityType["CHECKBOX"] = "checkbox";
    EntityType["RADIO"] = "radio";
    EntityType["TEXTAREA"] = "textarea";
    EntityType["DATE"] = "date";
    EntityType["TIME"] = "time";
    EntityType["DATETIME"] = "datetime";
    EntityType["FILE"] = "file";
    EntityType["IMAGE"] = "image";
    EntityType["COLOR"] = "color";
    EntityType["Price"] = "price";
    EntityType["URL"] = "url";
    EntityType["EMAIL"] = "email";
    EntityType["PHONE"] = "phone";
    EntityType["PASSWORD"] = "password";
})(EntityType || (exports.EntityType = EntityType = {}));
var PostSetting = /** @class */ (function () {
    function PostSetting() {
    }
    return PostSetting;
}());
exports.PostSetting = PostSetting;
