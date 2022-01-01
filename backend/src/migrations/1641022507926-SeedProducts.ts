import { getRepository, MigrationInterface, QueryRunner } from "typeorm"
import { ProductSeed } from "../seeds/product.seed"

export class SeedProducts1641022507926 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const products = await getRepository("product").save(ProductSeed)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
