interface BoardProps {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
}

export class Board {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;

  constructor(props: BoardProps) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.ownerId = props.ownerId;
  }

  updateName(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error("Board name cannot be empty");
    }
    this.name = name.trim();
    this.updatedAt = new Date();
  }

  isOwnedBy(userId: string): boolean {
    return this.ownerId === userId;
  }

  transferOwnership(newOwnerId: string): void {
    if (!newOwnerId) {
      throw new Error("New owner ID cannot be empty");
    }
    this.ownerId = newOwnerId;
    this.updatedAt = new Date();
  }
}
