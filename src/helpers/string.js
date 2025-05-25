"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    /**
     * Removes all punctuation and special characters from a string.
     * @param input The input string to clean.
     * @returns The cleaned string.
     */
    StringHelper.removePunctuation = function (input) {
        return input.replace(/[^\w\s]/g, ''); // Removes all non-alphanumeric characters except spaces
    };
    /**
     * Converts a string to a slug (URL-friendly format).
     * @param input The input string to convert.
     * @returns The slugified string.
     */
    StringHelper.toSlug = function (input) {
        return input
            .toLowerCase()
            .replace(/[^\w\s]/g, '') // Remove punctuation
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .trim();
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;
