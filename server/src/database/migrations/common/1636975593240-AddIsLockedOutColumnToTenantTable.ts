import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIsLockedOutColumnToTenantTable1636975593240 implements MigrationInterface {
    name = 'AddIsLockedOutColumnToTenantTable1636975593240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tenant" ADD "is_locked_out " boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "is_locked_out "`);
    }

}
