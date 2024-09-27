import React from 'react';
import { render } from '@testing-library/react';
import { PopoverPortal } from '../src/PopoverPortal';

describe('PopoverPortal', () => {
  it('appends and removes elements from the container', () => {
    const container = document.createElement('div');
    const element = document.createElement('div');
    const scoutElement = document.createElement('div');

    const { unmount } = render(
      <PopoverPortal container={container} element={element} scoutElement={scoutElement}>
        <div>Popover Content</div>
      </PopoverPortal>
    );

    // Check if elements are appended
    expect(container.contains(element)).toBeTruthy();
    expect(container.contains(scoutElement)).toBeTruthy();

    // Unmount and check if elements are removed
    unmount();
    expect(container.contains(element)).toBeFalsy();
    expect(container.contains(scoutElement)).toBeFalsy();
  });
});
