interface SessionProps {
  id: string;
  expiresAt: Date;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;
  userAgent?: string;
  userId: string;
}

export class Session {
  id: string;
  expiresAt: Date;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;
  userAgent?: string;
  userId: string;

  constructor(props: SessionProps) {
    this.id = props.id;
    this.expiresAt = props.expiresAt;
    this.token = props.token;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.ipAddress = props.ipAddress;
    this.userAgent = props.userAgent;
    this.userId = props.userId;
  }

  isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  isValid(): boolean {
    return !this.isExpired();
  }

  extendSession(additionalTimeInMinutes: number): void {
    const currentExpiry = this.expiresAt.getTime();
    const additionalTime = additionalTimeInMinutes * 60 * 1000; // Convert to milliseconds
    this.expiresAt = new Date(currentExpiry + additionalTime);
    this.updatedAt = new Date();
  }

  revoke(): void {
    this.expiresAt = new Date(); // Set expiry to now, effectively revoking the session
    this.updatedAt = new Date();
  }
}
