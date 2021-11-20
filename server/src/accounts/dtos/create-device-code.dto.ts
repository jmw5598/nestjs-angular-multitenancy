import { IsNotEmpty } from "class-validator";

export class CreateDeviceCodeDto {
  @IsNotEmpty()
  public token: string;
}
