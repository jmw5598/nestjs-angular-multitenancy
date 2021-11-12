import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialCommonDbTables1636717329968 implements MigrationInterface {
    name = 'InitialCommonDbTables1636717329968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tenant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "identifier" uuid NOT NULL, "domain" character varying NOT NULL, "connection_string" character varying NOT NULL, CONSTRAINT "PK_da8c6efd67bb301e810e56ac139" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_82b3bfa949c71a873d4818874d" ON "tenant" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "subscription_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_13bf5fb01dc4c8909a555120da5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscription" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "description" character varying NOT NULL, "identifier" character varying NOT NULL, "starts_on" TIMESTAMP WITH TIME ZONE NOT NULL, "ends_on" TIMESTAMP WITH TIME ZONE NOT NULL, "subscription_type_id" uuid NOT NULL, "account_id" uuid NOT NULL, CONSTRAINT "REL_587985961c9f142c76f623e5e4" UNIQUE ("account_id"), CONSTRAINT "PK_8c3e00ebd02103caa1174cd5d9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d78db09911a71b079736857625" ON "subscription" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_54a2b686aed3b637654bf7ddbb3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_d2f304754e23fab1bcd101752a3" FOREIGN KEY ("subscription_type_id") REFERENCES "subscription_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD CONSTRAINT "FK_587985961c9f142c76f623e5e40" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_587985961c9f142c76f623e5e40"`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP CONSTRAINT "FK_d2f304754e23fab1bcd101752a3"`);
        await queryRunner.query(`DROP TABLE "plan"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d78db09911a71b079736857625"`);
        await queryRunner.query(`DROP TABLE "subscription"`);
        await queryRunner.query(`DROP TABLE "subscription_type"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_82b3bfa949c71a873d4818874d"`);
        await queryRunner.query(`DROP TABLE "tenant"`);
    }

}
