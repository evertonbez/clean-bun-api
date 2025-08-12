interface AccountProps {
  id: string;
  name: string;
  createdAt: Date;
}

export class Account {
  id: string;
  name: string;
  createdAt: Date;

  constructor(props: AccountProps) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt;
  }
}
