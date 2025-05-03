import * as bcrypt from 'bcrypt';

export class StringHelper {
  /**
   * Removes all punctuation and special characters from a string.
   * @param input The input string to clean.
   * @returns The cleaned string.
   */
  static removePunctuation(input: string): string {
    return input.replace(/[^\w\s]/g, ''); // Removes all non-alphanumeric characters except spaces
  }

  /**
   * Converts a string to a slug (URL-friendly format).
   * @param input The input string to convert.
   * @returns The slugified string.
   */
  static toSlug(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .trim();
  }
}
