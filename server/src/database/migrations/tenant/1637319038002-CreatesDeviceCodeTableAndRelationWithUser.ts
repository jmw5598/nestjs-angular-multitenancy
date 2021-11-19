import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatesDeviceCodeTableAndRelationWithUser1637319038002 implements MigrationInterface {
    name = 'CreatesDeviceCodeTableAndRelationWithUser1637319038002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "device_code" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "token" character varying NOT NULL, CONSTRAINT "PK_3a62a161670ed87b6720f511f8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f9958a4febb3773972b11898eb" ON "device_code" ("token") `);
        await queryRunner.query(`CREATE TABLE "user_device_code" ("device_code_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_d7e210141eb3da1ca40eee68fb4" PRIMARY KEY ("device_code_id", "user_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d71ab7ad9ec78fbe381b7d31ac" ON "user_device_code" ("device_code_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_05174cad66b5c5f57ba5ddf68a" ON "user_device_code" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "user_device_code" ADD CONSTRAINT "FK_05174cad66b5c5f57ba5ddf68af" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_device_code" DROP CONSTRAINT "FK_05174cad66b5c5f57ba5ddf68af"`);
        await queryRunner.query(`ALTER TABLE "user_device_code" DROP CONSTRAINT "FK_d71ab7ad9ec78fbe381b7d31ac2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_05174cad66b5c5f57ba5ddf68a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d71ab7ad9ec78fbe381b7d31ac"`);
        await queryRunner.query(`DROP TABLE "user_device_code"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9958a4febb3773972b11898eb"`);
        await queryRunner.query(`DROP TABLE "device_code"`);
    }

}
