interface AccountProps {
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  accessTokenExpiresAt?: Date;
  refreshTokenExpiresAt?: Date;
  scope?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Account {
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  accessTokenExpiresAt?: Date;
  refreshTokenExpiresAt?: Date;
  scope?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: AccountProps) {
    this.id = props.id;
    this.accountId = props.accountId;
    this.providerId = props.providerId;
    this.userId = props.userId;
    this.accessToken = props.accessToken;
    this.refreshToken = props.refreshToken;
    this.idToken = props.idToken;
    this.accessTokenExpiresAt = props.accessTokenExpiresAt;
    this.refreshTokenExpiresAt = props.refreshTokenExpiresAt;
    this.scope = props.scope;
    this.password = props.password;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  isAccessTokenExpired(): boolean {
    if (!this.accessTokenExpiresAt) return false;
    return new Date() > this.accessTokenExpiresAt;
  }

  isRefreshTokenExpired(): boolean {
    if (!this.refreshTokenExpiresAt) return false;
    return new Date() > this.refreshTokenExpiresAt;
  }

  hasValidAccessToken(): boolean {
    return !!this.accessToken && !this.isAccessTokenExpired();
  }

  hasValidRefreshToken(): boolean {
    return !!this.refreshToken && !this.isRefreshTokenExpired();
  }

  updateTokens(
    accessToken: string,
    refreshToken?: string,
    accessTokenExpiresAt?: Date,
    refreshTokenExpiresAt?: Date
  ): void {
    this.accessToken = accessToken;
    if (refreshToken) this.refreshToken = refreshToken;
    if (accessTokenExpiresAt) this.accessTokenExpiresAt = accessTokenExpiresAt;
    if (refreshTokenExpiresAt)
      this.refreshTokenExpiresAt = refreshTokenExpiresAt;
    this.updatedAt = new Date();
  }

  revokeTokens(): void {
    this.accessToken = undefined;
    this.refreshToken = undefined;
    this.idToken = undefined;
    this.accessTokenExpiresAt = undefined;
    this.refreshTokenExpiresAt = undefined;
    this.updatedAt = new Date();
  }
}
