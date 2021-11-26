import {MigrationInterface, QueryRunner} from "typeorm";

export class RenamedUserColumnsToAssignedToAndCreatedBy1637928586721 implements MigrationInterface {
    name = 'RenamedUserColumnsToAssignedToAndCreatedBy1637928586721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_4f44d4e4d0fc0a8a966db88e853"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" RENAME COLUMN "user_id" TO "assigned_to"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_55d1e6bba2c80274fa0653d5609" FOREIGN KEY ("assigned_to") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_55d1e6bba2c80274fa0653d5609"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" RENAME COLUMN "assigned_to" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_4f44d4e4d0fc0a8a966db88e853" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
