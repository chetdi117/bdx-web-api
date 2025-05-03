import * as bcrypt from 'bcrypt';

export class HashString {
  async hashPassword(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to hash password: ${error.message}`);
      }
      throw new Error('An unknown error occurred while hashing the password');
    }
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      return bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to hash password: ${error.message}`);
      }
      throw new Error('An unknown error occurred while hashing the password');
    }
  }
}
