import { Module } from '@nestjs/common';
import { RoleFeatureService } from './role-feature.service';
import { RoleFeatureController } from './role-feature.controller';

@Module({
  controllers: [RoleFeatureController],
  providers: [RoleFeatureService],
})
export class RoleFeatureModule {}
