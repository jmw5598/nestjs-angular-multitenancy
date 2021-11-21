import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialEntitiesForCalendarEvents1637518874532 implements MigrationInterface {
    name = 'InitialEntitiesForCalendarEvents1637518874532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "calendar_event_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "calendar_event_type" character varying NOT NULL, "description" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_9d8a3c0119ac3fc5bfd94a0f7db" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "calendar_event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "deleted_at" TIMESTAMP WITH TIME ZONE, "title" character varying NOT NULL, "start_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "end_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "is_all_day" boolean NOT NULL DEFAULT false, "description" character varying NOT NULL, "address_id" uuid, "calendar_event_type_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_176fe24e6eb48c3fef696c7641f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_d2e8c18238818c7d7e05060e5b4" FOREIGN KEY ("address_id") REFERENCES "calendar_event_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_bc049884a228423b677f89b6d84" FOREIGN KEY ("calendar_event_type_id") REFERENCES "calendar_event_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_4f44d4e4d0fc0a8a966db88e853" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_4f44d4e4d0fc0a8a966db88e853"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_bc049884a228423b677f89b6d84"`);
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_d2e8c18238818c7d7e05060e5b4"`);
        await queryRunner.query(`DROP TABLE "calendar_event"`);
        await queryRunner.query(`DROP TABLE "calendar_event_type"`);
    }

}
