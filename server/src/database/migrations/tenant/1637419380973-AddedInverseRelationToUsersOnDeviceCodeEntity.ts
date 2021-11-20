import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedInverseRelationToUsersOnDeviceCodeEntity1637419380973 implements MigrationInterface {
    name = 'AddedInverseRelationToUsersOnDeviceCodeEntity1637419380973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device_code" ADD CONSTRAINT "UQ_f9958a4febb3773972b11898ebd" UNIQUE ("token")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "device_code" DROP CONSTRAINT "UQ_f9958a4febb3773972b11898ebd"`);
    }

}
