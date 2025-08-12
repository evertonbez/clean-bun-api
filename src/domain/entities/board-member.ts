interface BoardMemberProps {
  id: string;
  boardId: string;
  userId: string;
  role: string;
}

export class BoardMember {
  id: string;
  boardId: string;
  userId: string;
  role: string;

  constructor(props: BoardMemberProps) {
    this.id = props.id;
    this.boardId = props.boardId;
    this.userId = props.userId;
    this.role = props.role || "viewer";
  }

  isOwner(): boolean {
    return this.role === "owner";
  }

  isAdmin(): boolean {
    return this.role === "admin" || this.isOwner();
  }

  isMember(): boolean {
    return this.role === "member" || this.isAdmin();
  }

  isViewer(): boolean {
    return this.role === "viewer";
  }

  canEdit(): boolean {
    return this.isMember();
  }

  canDelete(): boolean {
    return this.isAdmin();
  }

  canManageMembers(): boolean {
    return this.isAdmin();
  }

  changeRole(newRole: string): void {
    const validRoles = ["viewer", "member", "admin", "owner"];
    if (!validRoles.includes(newRole)) {
      throw new Error(
        `Invalid role: ${newRole}. Valid roles are: ${validRoles.join(", ")}`
      );
    }
    this.role = newRole;
  }
}
