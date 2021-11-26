import {MigrationInterface, QueryRunner} from "typeorm";

export class FixedRelationshipOnCreatedByColumnFromManyToManyToManyToOne1637928832625 implements MigrationInterface {
    name = 'FixedRelationshipOnCreatedByColumnFromManyToManyToManyToOne1637928832625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD "created_by" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_fff9fa61dfaa8a18f334aa60683" FOREIGN KEY ("created_by") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_fff9fa61dfaa8a18f334aa60683"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP COLUMN "created_by"`);
    }

}
