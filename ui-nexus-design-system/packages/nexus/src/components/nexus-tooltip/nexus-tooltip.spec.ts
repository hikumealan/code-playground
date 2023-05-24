/* eslint-disable no-magic-numbers */
/* eslint-disable id-length */
import { NexusTooltip } from './nexus-tooltip';
import { newSpecPage } from '@stencil/core/testing';
import { NexusTooltipTrigger } from './nexus-tooltip-trigger/nexus-tooltip-trigger';
import { NexusTooltipContent } from './nexus-tooltip-content/nexus-tooltip-content';
import { NexusIcon } from '../nexus-icon/nexus-icon';

const nexTtipCls = '.nexus-btn';
const nexTtipVisCls = '.nexus-tooltip-content-visible';

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

describe('nexus-tooltip', () => {
  it('should contain class', async () => {
    const page = await newSpecPage({
      components: [NexusTooltip],
      html: `<nexus-tooltip></nexus-tooltip>`
    });

    expect(page.root).toHaveClass('nexus-tooltip');
  });

  it('should append content to the body on hover', async (done) => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    const mouseenter = new Event('mouseenter', {
      bubbles: true
    });

    const mouseleave = new Event('mouseleave', {
      bubbles: true
    });

    const btn = page.root.querySelector(nexTtipCls);

    btn.dispatchEvent(mouseenter);

    setTimeout(() => {
      const tooltipContent = page.body.querySelectorAll(nexTtipVisCls);

      expect(tooltipContent.length).toBe(1);
    // eslint-disable-next-line no-magic-numbers
    }, 1000);

    setTimeout(() => {
      btn.dispatchEvent(mouseleave);

      const tooltipContent = page.body.querySelectorAll(nexTtipVisCls);

      expect(tooltipContent.length).toBe(0);

      done();
    // eslint-disable-next-line no-magic-numbers
    }, 1000);
  });

  it('should persist content on click', async (done) => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    const mouseenter = new Event('mouseenter', {
      bubbles: true
    });

    const click = new Event('click', {
      bubbles: true
    });

    const mouseleave = new Event('mouseleave', {
      bubbles: true
    });

    const btn = page.root.querySelector(nexTtipCls);

    btn.dispatchEvent(mouseenter);
    btn.dispatchEvent(click);

    setTimeout(() => {
      btn.dispatchEvent(mouseleave);

      const tooltipContent = page.body.querySelectorAll(nexTtipVisCls);

      expect(tooltipContent.length).toBe(1);
    }, 0);

    setTimeout(() => {
      btn.dispatchEvent(click);

      const tooltipContent = page.body.querySelectorAll(nexTtipVisCls);

      expect(tooltipContent.length).toBe(0);

      done();
    }, 1);
  });

  it('should close tooltip if content icon is clicked', async (done) => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent,
        NexusIcon
      ],
      html: `<nexus-tooltip>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    const mouseenter = new Event('mouseenter', {
      bubbles: true
    });

    const click = new Event('click', {
      bubbles: true
    });

    const closeTooltip = new Event('_closeTooltip', {
      bubbles: true
    });

    const btn = page.root.querySelector(nexTtipCls);

    btn.dispatchEvent(mouseenter);
    btn.dispatchEvent(click);

    jest.spyOn(page.rootInstance, 'handleCloseTooltip');

    setTimeout(() => {
      const closeBtn = page.body.querySelector(nexTtipVisCls).querySelector('.nexus-btn-icon');

      closeBtn.dispatchEvent(closeTooltip);

      expect(page.rootInstance.handleCloseTooltip).toHaveBeenCalled();

      done();
    });
  });

  it('should remove the correct tooltip when the close icon is clicked', async () => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent,
        NexusIcon
      ],
      html: `<nexus-tooltip attr-id="custom-id-2">
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });


    jest.spyOn(page.rootInstance, 'removeTooltip').mockImplementation(() => null);

    page.rootInstance.handleCloseTooltip({
      target: {
        id: 'custom-id-2'
      }
    });

    expect(page.rootInstance.removeTooltip).toHaveBeenCalled();
  });

  it('should create a unique id if none is provided', async (done) => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    const btn = page.root.querySelector(nexTtipCls);

    const mouseenter = new Event('mouseenter', {
      bubbles: true
    });

    const click = new Event('click', {
      bubbles: true
    });

    btn.dispatchEvent(mouseenter);
    btn.dispatchEvent(click);

    setTimeout(() => {
      expect(page.body.querySelector(nexTtipVisCls).id).toContain('nexus-tooltip-');

      done();
    });
  });

  it('should use a custom id if one is provided', async (done) => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip attr-id="custom-id">
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    const btn = page.root.querySelector(nexTtipCls);

    const mouseenter = new Event('mouseenter', {
      bubbles: true
    });

    const click = new Event('click', {
      bubbles: true
    });

    btn.dispatchEvent(mouseenter);
    btn.dispatchEvent(click);

    setTimeout(() => {
      expect(page.body.querySelector(nexTtipVisCls).id).toBe('custom-id');

      done();
    });
  });
});

describe('nexus-tooltip position', () => {
  it('should return the correct trigger position', async() => {
    const page = await newSpecPage({
      components: [NexusTooltip],
      html: `<nexus-tooltip></nexus-tooltip>`
    });

    // eslint-disable-next-line no-magic-numbers
    expect(page.rootInstance.triggerPosition({ clientRect: { top: 700 } }).placement).toBe('top');

    // eslint-disable-next-line no-magic-numbers
    expect(page.rootInstance.triggerPosition({ clientRect: { top: 50 } }).placement).toBe('bottom');
    // eslint-disable-next-line no-magic-numbers
    expect(page.rootInstance.triggerPosition({ clientRect: { top: 200 } }).placement).toBe('bottom');
    // eslint-disable-next-line no-magic-numbers
    expect(page.rootInstance.triggerPosition({ clientRect: { top: 0 } }).placement).toBe('bottom');
  });

  it('should create the position object', async () => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    page.waitForChanges();

    const clientRectLeft = {
      clientRect: {
        left: -10,
        top: 0
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 0,
      doubleTopOffset: 0
    };

    expect(page.rootInstance.getPosition(clientRectLeft).content.top).toEqual(-16);
    expect(page.rootInstance.getPosition(clientRectLeft).content.left).toEqual(0);

    const clientRectRight = {
      clientRect: {
        left: 1400,
        top: 200
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 0,
      doubleTopOffset: 0
    };

    expect(page.rootInstance.getPosition(clientRectRight).content.top).toEqual(232);
    // Default window.innerWidth is 1366
    expect(page.rootInstance.getPosition(clientRectRight).content.left).toEqual(1366);


    const clientRectBottom = {
      clientRect: {
        left: 300,
        top: 900
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 0,
      doubleTopOffset: 0
    };

    expect(page.rootInstance.getPosition(clientRectBottom).content.top).toEqual(916);
    expect(page.rootInstance.getPosition(clientRectBottom).content.left).toEqual(300);
  });

  it('should create the position object', async () => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    page.waitForChanges();

    const clientRectLeft = {
      clientRect: {
        left: -10,
        top: 1200
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 0,
      doubleTopOffset: 0
    };

    expect(page.rootInstance.getPosition(clientRectLeft).content.top).toEqual(1216);
    expect(page.rootInstance.getPosition(clientRectLeft).content.left).toEqual(0);

    const clientRectRight = {
      clientRect: {
        left: 1400,
        top: 0
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 200,
      contentHeight: 0,
      topOffset: 16,
      doubleTopOffset: 32
    };

    expect(page.rootInstance.getPosition(clientRectRight).content.top).toEqual(-16);
    expect(page.rootInstance.getPosition(clientRectRight).content.left).toEqual(1166);


    const clientRectBottom = {
      clientRect: {
        left: 300,
        top: 900
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 53,
      contentHeight: 54,
      topOffset: 16,
      doubleTopOffset: 32
    };

    expect(page.rootInstance.getPosition(clientRectBottom).content.top).toEqual(916);
    expect(page.rootInstance.getPosition(clientRectBottom).content.left).toEqual(273);

    resizeWindow(-100, 300);
    const clientRectTop = {
      clientRect: {
        left: 300,
        top: 0
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 16,
      doubleTopOffset: 32
    };

    expect(page.rootInstance.getPosition(clientRectTop).content.top).toEqual(16);
    expect(page.rootInstance.getPosition(clientRectTop).content.left).toEqual(-100);

    resizeWindow(1366, 300);
    const clientRect = {
      clientRect: {
        left: 300,
        top: 20
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 0,
      doubleTopOffset: 0
    };

    expect(page.rootInstance.getPosition(clientRect).content.top).toEqual(-12);
    expect(page.rootInstance.getPosition(clientRect).content.left).toEqual(300);
  });

  it('should create the position object with position right', async () => {
    const page = await newSpecPage({
      components: [
        NexusTooltip,
        NexusTooltipTrigger,
        NexusTooltipContent
      ],
      html: `<nexus-tooltip placement='right'>
        <nexus-tooltip-trigger></nexus-tooltip-trigger>
        <nexus-tooltip-content></nexus-tooltip-content>
      </nexus-tooltip>`
    });

    page.waitForChanges();

    const clientRectLeft = {
      clientRect: {
        left: -10,
        top: 0
      },
      triggerWidth: 0,
      triggerHeight: 0,
      contentWidth: 0,
      contentHeight: 0,
      topOffset: 0,
      doubleTopOffset: 0
    };

    expect(page.rootInstance.getPosition(clientRectLeft).content.top).toEqual(16);
    expect(page.rootInstance.getPosition(clientRectLeft).content.left).toEqual(0);

    const tabEvent = new KeyboardEvent('keydown', { code: 'Tab' });
    const spaceEvent = new KeyboardEvent('keydown', { code: 'Space' });
    const enterEvent = new KeyboardEvent('keydown', { code: 'Enter' });
    page.root.dispatchEvent(tabEvent);
    page.root.dispatchEvent(spaceEvent);
    page.root.dispatchEvent(enterEvent);
    await page.waitForChanges();
    expect(page.rootInstance.getPosition(clientRectLeft)).toBeTruthy();
  });
})
