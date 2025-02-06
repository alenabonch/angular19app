import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
    .compileComponents();
  });

  it('should render a defer block in different states', async () => {
    // configures the defer block behavior to start in "paused" state for manual control.
    TestBed.configureTestingModule({deferBlockBehavior: DeferBlockBehavior.Manual});

    const componentFixture = TestBed.createComponent(UsersComponent);
    await componentFixture.whenStable();
    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await componentFixture.getDeferBlocks())[0];
    // Renders placeholder state by default.
    expect(componentFixture.nativeElement.innerHTML).toContain('Hover me to load content');
    // Render loading state and verify rendered output.
    await deferBlockFixture.render(DeferBlockState.Loading);
    expect(componentFixture.nativeElement.innerHTML).toContain('loading....');
    // // Render final state and verify the output.
    // const title = componentFixture.nativeElement.querySelector('h1');
    // expect(componentFixture.nativeElement.innerHTML).toContain('large-component works!');
  });
});
