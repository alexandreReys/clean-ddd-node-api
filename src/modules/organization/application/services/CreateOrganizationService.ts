import IOrganizationRepository from "@modules/organization/domain/repositories/IOrganizationRepository";
import { ICreateOrganizationDTO } from "@modules/organization/application/dtos/ICreateOrganizationDTO";

export class CreateOrganizationService {
  private organizationRepository: IOrganizationRepository;

  constructor(organizationRepository: IOrganizationRepository) {
    this.organizationRepository = organizationRepository;
  }

  async execute(data: ICreateOrganizationDTO) {
    const { findByEmail, create } = this.organizationRepository;

    const organizationExists = await findByEmail(data.email);

    if (organizationExists) {
      throw new Error("Organization e-mail already exists!");
    }

    return create(data);
  }
}
