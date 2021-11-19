import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangesOwnerOfProfileUserRelationshipToProfile1637056935075 implements MigrationInterface {
    name = 'ChangesOwnerOfProfileUserRelationshipToProfile1637056935075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_e66ed379f8b17b06d03121ceff5"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "REL_e66ed379f8b17b06d03121ceff"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP COLUMN "profile_id"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "UQ_d752442f45f258a8bdefeebb2f2" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "UQ_d752442f45f258a8bdefeebb2f2"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD "profile_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "REL_e66ed379f8b17b06d03121ceff" UNIQUE ("profile_id")`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_e66ed379f8b17b06d03121ceff5" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
