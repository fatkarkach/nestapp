import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { CreateuserDto } from './dtos/createuser/createuser.dto';
import { UpdateuserDto } from './dtos/updateuser/updateuser.dto';
import { UserEntity } from './entity/user.entity';
import { v4 as uuid } from "uuid";

@Controller('cats')
export class CatsController {
  private readonly users :UserEntity[]=[];

  @Get()
  finduser():UserEntity[]{
    return this.users;

  }

  @Get(":id")
  findAll(@Param("id") id:string):UserEntity {
    const user:UserEntity= this.users.find((user)=>user.id===id);
    return user;
  }

  @Post("body")
  createB(@Body() userData:CreateuserDto){
    const newUser={
      ...userData,
      id:uuid(),
    }
    this.users.push(newUser);
    
    return newUser;
  }

  @Get("parm/:param")
  find(@Param() param:any): string {
    return param;
  }

  @Post()
  create(@Req() req:Request):string{
    console.log(req.body);
    return 'create new users'
  }
  
  @Patch(":username")
  update(@Param("username") username:string,@Body() UpdateuserDto:UpdateuserDto){
    return UpdateuserDto

  }
  @Delete(":username")
  remove(@Param("username") username:string,@Res() res){
    

  }
}