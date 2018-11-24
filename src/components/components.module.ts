import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { PopoverComponent } from './popover/popover';
import { MainHeaderComponent } from './main-header/main-header';
import { UserActionPopoverComponent } from './user-action-popover/user-action-popover';
@NgModule({
	declarations: [SideMenuComponent,
	UserActionPopoverComponent,
	PopoverComponent,
	MainHeaderComponent],
	imports: [],
	exports: [SideMenuComponent,
    UserActionPopoverComponent,
	PopoverComponent,
	MainHeaderComponent]
})
export class ComponentsModule {}
