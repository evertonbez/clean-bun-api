interface VerificationProps {
  id: string;
  identifier: string;
  value: string;
  expiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Verification {
  id: string;
  identifier: string;
  value: string;
  expiresAt: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(props: VerificationProps) {
    this.id = props.id;
    this.identifier = props.identifier;
    this.value = props.value;
    this.expiresAt = props.expiresAt;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  isValid(): boolean {
    return !this.isExpired();
  }

  verify(inputValue: string): boolean {
    if (this.isExpired()) {
      return false;
    }
    return this.value === inputValue;
  }

  extendExpiry(additionalTimeInMinutes: number): void {
    const currentExpiry = this.expiresAt.getTime();
    const additionalTime = additionalTimeInMinutes * 60 * 1000; // Convert to milliseconds
    this.expiresAt = new Date(currentExpiry + additionalTime);
    this.updatedAt = new Date();
  }
}
