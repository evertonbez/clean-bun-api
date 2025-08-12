interface UserProps {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.emailVerified = props.emailVerified;
    this.image = props.image;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  isEmailVerified(): boolean {
    return this.emailVerified;
  }

  updateEmail(email: string): void {
    this.email = email;
    this.emailVerified = false; // Reset verification when email changes
    this.updatedAt = new Date();
  }

  verifyEmail(): void {
    this.emailVerified = true;
    this.updatedAt = new Date();
  }

  updateProfile(name: string, image?: string): void {
    this.name = name;
    this.image = image;
    this.updatedAt = new Date();
  }
}
