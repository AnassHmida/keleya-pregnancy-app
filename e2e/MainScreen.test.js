import {device, element, by} from 'detox';
import {describe, it, beforeEach} from '@jest/globals';

describe('Main Screen', () => {
  beforeEach(async () => {
    await device.launchApp(); 
    await device.reloadReactNative(); 
  });

  it('should navigate to SignUp screen when Get Started button is pressed', async () => {
    await element(by.text('Get Started')).tap();
    await expect(element(by.id('signUpScreen'))).toBeVisible();
  });
});
