import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangesOwnerOfProfileUserRelationshipToProfile1637056935075 implements MigrationInterface {
    name = 'ChangesOwnerOfProfileUserRelationshipToProfile1637056935075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_e66ed379f8b17b06d03121ceff5"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_8f3a18392322c8151466152ff3f"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_36443e45eaaf4ead6206702d74b"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_eb04952672ab06d1f50058b76a1"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_e36107290b17cfd2b870c8b0287"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "REL_e66ed379f8b17b06d03121ceff"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP COLUMN "profile_id"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "UQ_d752442f45f258a8bdefeebb2f2" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_8f3a18392322c8151466152ff3f" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_36443e45eaaf4ead6206702d74b" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_e36107290b17cfd2b870c8b0287" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_eb04952672ab06d1f50058b76a1" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_eb04952672ab06d1f50058b76a1"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_e36107290b17cfd2b870c8b0287"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_36443e45eaaf4ead6206702d74b"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_8f3a18392322c8151466152ff3f"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "UQ_d752442f45f258a8bdefeebb2f2"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD "profile_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "REL_e66ed379f8b17b06d03121ceff" UNIQUE ("profile_id")`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_e36107290b17cfd2b870c8b0287" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_eb04952672ab06d1f50058b76a1" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_36443e45eaaf4ead6206702d74b" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_8f3a18392322c8151466152ff3f" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_e66ed379f8b17b06d03121ceff5" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
