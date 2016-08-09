import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BaFirebaseDemoAppComponent } from '../app/ba-firebase-demo.component';

beforeEachProviders(() => [BaFirebaseDemoAppComponent]);

describe('App: BaFirebaseDemo', () => {
  it('should create the app',
      inject([BaFirebaseDemoAppComponent], (app: BaFirebaseDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ba-firebase-demo works!\'',
      inject([BaFirebaseDemoAppComponent], (app: BaFirebaseDemoAppComponent) => {
    expect(app.title).toEqual('ba-firebase-demo works!');
  }));
});
