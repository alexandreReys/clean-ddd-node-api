import { IOrganizationDTO } from "@modules/organization/application/dtos/IOrganizationDTO";
import { ICreateOrganizationDTO } from "../../application/dtos/ICreateOrganizationDTO";

export default interface IOrganizationRepository {
  findByEmail(email: string): Promise<IOrganizationDTO | null>;
  create(data: ICreateOrganizationDTO): Promise<IOrganizationDTO | null>;
}
