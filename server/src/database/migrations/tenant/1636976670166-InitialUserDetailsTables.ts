import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialUserDetailsTables1636976670166 implements MigrationInterface {
    name = 'InitialUserDetailsTables1636976670166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "claim" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "type" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_466b305cc2e591047fa1ce58f81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "refresh_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "refresh_token" character varying NOT NULL, "is_blacklisted" boolean NOT NULL DEFAULT false, "user_id" uuid NOT NULL, CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "username" character varying NOT NULL, "password" character varying NOT NULL, "reset_token" uuid NOT NULL DEFAULT uuid_generate_v4(), "reset_token_expiration" TIMESTAMP WITH TIME ZONE NOT NULL, "is_email_confirmed" boolean NOT NULL, "is_locked_out" boolean NOT NULL, "profile_id" uuid NOT NULL, CONSTRAINT "UQ_c480e576dd71729addbc2d51b67" UNIQUE ("username"), CONSTRAINT "REL_e66ed379f8b17b06d03121ceff" UNIQUE ("profile_id"), CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c480e576dd71729addbc2d51b6" ON "app_user" ("username") `);
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "address_id" uuid NOT NULL, CONSTRAINT "REL_fb70f0dc1dda3ae5e1b7fb0c93" UNIQUE ("address_id"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "street" character varying NOT NULL, "street_2" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, "zip" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_claim" ("role_id" uuid NOT NULL, "claim_id" uuid NOT NULL, CONSTRAINT "PK_124de9fd2a49b6a181fdb3a1499" PRIMARY KEY ("role_id", "claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_36443e45eaaf4ead6206702d74" ON "role_claim" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f3a18392322c8151466152ff3" ON "role_claim" ("claim_id") `);
        await queryRunner.query(`CREATE TABLE "user_role" ("user_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_f634684acb47c1a158b83af5150" PRIMARY KEY ("user_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d0e5815877f7395a198a4cb0a4" ON "user_role" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55" ON "user_role" ("role_id") `);
        await queryRunner.query(`CREATE TABLE "user_claim" ("user_id" uuid NOT NULL, "claim_id" uuid NOT NULL, CONSTRAINT "PK_7b62e1929aa2a637431e35ab3a7" PRIMARY KEY ("user_id", "claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_eb04952672ab06d1f50058b76a" ON "user_claim" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_e36107290b17cfd2b870c8b028" ON "user_claim" ("claim_id") `);
        await queryRunner.query(`ALTER TABLE "refresh_token" ADD CONSTRAINT "FK_6bbe63d2fe75e7f0ba1710351d4" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_e66ed379f8b17b06d03121ceff5" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_fb70f0dc1dda3ae5e1b7fb0c93e" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_36443e45eaaf4ead6206702d74b" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_8f3a18392322c8151466152ff3f" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_eb04952672ab06d1f50058b76a1" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_claim" ADD CONSTRAINT "FK_e36107290b17cfd2b870c8b0287" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_e36107290b17cfd2b870c8b0287"`);
        await queryRunner.query(`ALTER TABLE "user_claim" DROP CONSTRAINT "FK_eb04952672ab06d1f50058b76a1"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_d0e5815877f7395a198a4cb0a46"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_8f3a18392322c8151466152ff3f"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_36443e45eaaf4ead6206702d74b"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_fb70f0dc1dda3ae5e1b7fb0c93e"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_e66ed379f8b17b06d03121ceff5"`);
        await queryRunner.query(`ALTER TABLE "refresh_token" DROP CONSTRAINT "FK_6bbe63d2fe75e7f0ba1710351d4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e36107290b17cfd2b870c8b028"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb04952672ab06d1f50058b76a"`);
        await queryRunner.query(`DROP TABLE "user_claim"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_32a6fc2fcb019d8e3a8ace0f55"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d0e5815877f7395a198a4cb0a4"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8f3a18392322c8151466152ff3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_36443e45eaaf4ead6206702d74"`);
        await queryRunner.query(`DROP TABLE "role_claim"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c480e576dd71729addbc2d51b6"`);
        await queryRunner.query(`DROP TABLE "app_user"`);
        await queryRunner.query(`DROP TABLE "refresh_token"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "claim"`);
    }

}
