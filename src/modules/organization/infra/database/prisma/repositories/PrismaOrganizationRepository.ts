import { Organization } from "@modules/organization/domain/entities/Organization";
import IOrganizationRepository from "@modules/organization/domain/repositories/IOrganizationRepository";
import { prismaClient } from "src/infra/database/prismaClient";
import { ICreateOrganizationDTO } from "@modules/organization/application/dtos/ICreateOrganizationDTO";
import { IOrganizationDTO } from "@modules/organization/application/dtos/IOrganizationDTO";

const convertToOrganizationDTO = (
  organizationData: IOrganizationDTO | null
) => {
  if (!organizationData) return null;

  const { id, name, email, phone } = organizationData;
  const organization = new Organization(id, name, email, "", phone);

  return organization.toDTO();
};

export class OrganizationRepository implements IOrganizationRepository {
  constructor() {}

  async findByEmail(email: string): Promise<IOrganizationDTO | null> {
    const organizationData = await prismaClient.organization.findFirst({
      where: {
        email: email,
      },
    });

    return convertToOrganizationDTO(organizationData);
  }

  async create(data: ICreateOrganizationDTO): Promise<IOrganizationDTO | null> {
    const organizationData = await prismaClient.organization.create({
      data: {
        ...data,
      },
    });

    return convertToOrganizationDTO(organizationData);
  }
}
