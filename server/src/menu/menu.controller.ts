import { Controller, Post, Get, Patch, Delete, Body, Param, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async createMenu(@Body() createMenuDto: CreateMenuDto) {
    return await this.menuService.create(createMenuDto);
  }

  @Get()
  async getAllMenus() {
    return await this.menuService.findAll();
  }

  @Get(':id')
  async getMenuById(@Param('id') id: string) {
    return await this.menuService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.updateMenu(id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.deleteMenu(id);
  }
}