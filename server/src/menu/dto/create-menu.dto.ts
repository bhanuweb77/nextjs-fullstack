// export class CreateMenuDto {
//     name: string;
//     parentId?: string;
//     depth: number;
//   }
import {IsNumber, IsOptional, IsString } from 'class-validator';

  export class CreateMenuDto {
    @IsString()
    name: string;
    @IsOptional()
    @IsNumber()
    depth: number;
    @IsOptional()
    @IsString()
    parentId?: string; // Optional parent ID for nested menus
  }
  