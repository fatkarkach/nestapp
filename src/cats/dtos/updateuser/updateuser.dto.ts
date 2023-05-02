import { PartialType } from "@nestjs/mapped-types";
import { CreateuserDto } from "../createuser/createuser.dto";

export class UpdateuserDto extends PartialType(CreateuserDto) {
  
}
