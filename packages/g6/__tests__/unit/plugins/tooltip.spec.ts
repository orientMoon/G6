import type { Tooltip } from '@/src';
import { ComboEvent, EdgeEvent, NodeEvent, idOf } from '@/src';
import { pluginTooltip, pluginTooltipAsync, pluginTooltipEnable } from '@@/demos';
import { createDemoGraph } from '@@/utils';

describe('plugin tooltip', () => {
  it('node', async () => {
    const graph = await createDemoGraph(pluginTooltip);
    graph.emit(NodeEvent.CLICK, { targetType: 'node', target: { id: '6' } });
    await expect(graph).toMatchSnapshot(__filename, 'node');
    graph.destroy();
  });

  it('combo', async () => {
    const graph = await createDemoGraph(pluginTooltip);
    graph.emit(ComboEvent.CLICK, { targetType: 'combo', target: { id: 'a' } });
    await expect(graph).toMatchSnapshot(__filename, 'combo');
    graph.destroy();
  });

  it('edge', async () => {
    const graph = await createDemoGraph(pluginTooltip);
    graph.emit(EdgeEvent.CLICK, { targetType: 'edge', target: { id: idOf({ source: '0', target: '1' }) } });
    await expect(graph).toMatchSnapshot(__filename, 'edge');
    graph.destroy();
  });

  it('update trigger to hover', async () => {
    const graph = await createDemoGraph(pluginTooltip);
    graph.setPlugins((plugins) =>
      plugins.map((plugin) => {
        if (typeof plugin === 'object') {
          return {
            ...plugin,
            trigger: 'hover',
          };
        }
        return plugin;
      }),
    );
    graph.emit(NodeEvent.POINTER_ENTER, { targetType: 'node', target: { id: '6' } });
    await expect(graph).toMatchSnapshot(__filename, 'hover');
    graph.destroy();
  });

  it('show tooltip by id', async () => {
    const graph = await createDemoGraph(pluginTooltip);
    const tooltip = graph.getPluginInstance<Tooltip>('tooltip');
    await tooltip.showById('6');
    await expect(graph).toMatchSnapshot(__filename, 'show-tooltip-by-id');
    graph.destroy();
  });

  it('enable', async () => {
    const graph = await createDemoGraph(pluginTooltipEnable);
    const container = graph.getCanvas().getContainer()!;
    const el = container.querySelector('.tooltip') as HTMLDivElement;
    const plugin = graph.getPluginInstance<Tooltip>('tooltip');

    await plugin.showById('node3');
    expect(el.style.visibility).toBe('hidden');

    await plugin.showById('node1');
    expect(el.style.visibility).toBe('visible');

    graph.destroy();
  });

  it('get content null', async () => {
    const graph = await createDemoGraph(pluginTooltipEnable);
    const container = graph.getCanvas().getContainer()!;
    const el = container.querySelector('.tooltip') as HTMLDivElement;
    const plugin = graph.getPluginInstance<Tooltip>('tooltip');

    await plugin.showById('node2');
    expect(el.style.visibility).toBe('hidden');

    graph.destroy();
  });

  it('get content async', async () => {
    const graph = await createDemoGraph(pluginTooltipAsync);
    const container = graph.getCanvas().getContainer()!;
    const el = container.querySelector('.tooltip') as HTMLDivElement;
    const plugin = graph.getPluginInstance<Tooltip>('tooltip');

    await plugin.showById('node1');
    expect(el.style.visibility).toBe('visible');
    expect(el.innerHTML).toBe('get content async test');

    graph.destroy();
  });
});
