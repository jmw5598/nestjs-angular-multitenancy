import {MigrationInterface, QueryRunner} from "typeorm";

export class AddsJoinTableToClaimEntity1636984229512 implements MigrationInterface {
    name = 'AddsJoinTableToClaimEntity1636984229512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_36443e45eaaf4ead6206702d74b"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_8f3a18392322c8151466152ff3f"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_eb04952672ab06d1f50058b76a1"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_e36107290b17cfd2b870c8b0287"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
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
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_e36107290b17cfd2b870c8b0287" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_eb04952672ab06d1f50058b76a1" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_8f3a18392322c8151466152ff3f" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_36443e45eaaf4ead6206702d74b" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
