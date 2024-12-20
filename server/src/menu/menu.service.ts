import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  // Create Menu
  async create(data: CreateMenuDto) {
    return this.prisma.menu.create({
      data: {
        name: data.name,
        depth: data.depth,
        parentId: data.parentId || null, // Allow dynamic nesting
      },
    });
  }

  // Get All Menus (with nested children)
  async findAll(parentId: string | null = null) {
    // return this.prisma.menu.findMany({
    //   where: { parentId: null }, // Fetch root-level menus
    //   include: {
    //     children: {
    //       include: { children: 
    //         {include: {children: {
    //           include: {children: true}
    //         }}}
    //        }, // Recursively fetch children
    //     },
    //   },
    // });
    const menus = await this.prisma.menu.findMany({
      where: { parentId },
      include: {
        children: true, // Include immediate children
      },
    });
  
    // Recursively fetch children for each menu
    return Promise.all(
      menus.map(async (menu) => ({
        ...menu,
        children: await this.findAll(menu.id),
      }))
    );
  }

  async findById(id: string) {
    const menus = await this.prisma.menu.findMany({
      where: { id },
      include: {
        children: true, // Include immediate children
      },
    });

    return Promise.all(
      menus.map(async (menu) => ({
        ...menu,
        children: await this.findAll(menu.id),
      }))
    );

    // return this.prisma.menu.findUnique({
    //   where: { id },
    //   include: {
    //     children: {
    //       include: { children: true }, // Recursively fetch nested children
    //     },
    //   },
    // });
  }

  // Update Menu
  async updateMenu(id: string, data: UpdateMenuDto) {
    const menu = await this.prisma.menu.findUnique({ where: { id } });
    if (!menu) throw new NotFoundException('Menu not found');
    return this.prisma.menu.update({ where: { id }, data });
  }

  // Delete Menu
  async deleteMenu(id: string) {
    return this.prisma.menu.delete({ where: { id } });
  }
}