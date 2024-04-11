export class User {
  public id: string;
  public name: string;
  public email: string;
  private password: string;
  public phone: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }

  public toDTO() {
    const { password, ...dto } = this;
    return dto;
  }
}
