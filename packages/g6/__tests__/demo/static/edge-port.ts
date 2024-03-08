import { Cubic, Line } from '@/src/elements/edges';
import { Circle, Star } from '@/src/elements/nodes';
import type { StaticTestCase } from '../types';

export const edgePort: StaticTestCase = async (context) => {
  const { container } = context;

  const node1 = container.appendChild(
    new Circle({
      id: 'node-1',
      style: {
        x: 50,
        y: 50,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  const node2 = container.appendChild(
    new Circle({
      id: 'node-2',
      style: {
        x: 200,
        y: 50,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node1,
        targetNode: node2,
        stroke: '#1890FF',
        lineWidth: 2,
        labelText: 'sourcePort❓ targetPort❓',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        endArrow: true,
      },
    }),
  );

  const node3 = container.appendChild(
    new Circle({
      id: 'node-3',
      style: {
        x: 50,
        y: 150,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'left', placement: [0, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, fill: '#31d0c6' },
          { key: 'top', placement: [0.5, 0], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node4 = container.appendChild(
    new Circle({
      id: 'node-4',
      style: {
        x: 200,
        y: 150,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'left', placement: [0, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'top', placement: [0.5, 0], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'bottom', placement: [0.5, 1], r: 4, fill: '#31d0c6' },
        ],
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node3,
        targetNode: node4,
        sourcePort: 'right',
        targetPort: 'bottom',
        lineWidth: 2,
        labelText: 'sourcePort✅ targetPort✅',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node5 = container.appendChild(
    new Circle({
      id: 'node-5',
      style: {
        x: 50,
        y: 250,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'left', placement: [0, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node6 = container.appendChild(
    new Circle({
      id: 'node-6',
      style: {
        x: 200,
        y: 250,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'top', placement: [0.5, 0], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node5,
        targetNode: node6,
        lineWidth: 2,
        labelText: 'sourcePort✖️ targetPort✖️',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node7 = container.appendChild(
    new Circle({
      id: 'node-7',
      style: {
        x: 50,
        y: 350,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'left', placement: [0, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node8 = container.appendChild(
    new Circle({
      id: 'node-8',
      style: {
        x: 200,
        y: 350,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'top', placement: [0.5, 0], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'bottom', placement: [0.5, 1], r: 4, fill: '#31d0c6' },
        ],
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node7,
        targetNode: node8,
        targetPort: 'bottom',
        lineWidth: 2,
        labelText: 'sourcePort✖️ targetPort✅',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node9 = container.appendChild(
    new Circle({
      id: 'node-9',
      style: {
        x: 50,
        y: 450,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'left', placement: [0, 0.5], r: 4, fill: '#31d0c6' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node10 = container.appendChild(
    new Circle({
      id: 'node-10',
      style: {
        x: 200,
        y: 450,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'top', placement: [0.5, 0], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node9,
        targetNode: node10,
        sourcePort: 'left',
        lineWidth: 2,
        labelText: 'sourcePort✅ targetPort✖️',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node11 = container.appendChild(
    new Circle({
      id: 'node-11',
      style: {
        x: 300,
        y: 50,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  const node12 = container.appendChild(
    new Circle({
      id: 'node-12',
      style: {
        x: 450,
        y: 50,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node11,
        targetNode: node12,
        lineWidth: 2,
        labelText: 'sourcePort❓ targetPort✖️',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node13 = container.appendChild(
    new Circle({
      id: 'node-13',
      style: {
        x: 300,
        y: 150,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  const node14 = container.appendChild(
    new Circle({
      id: 'node-14',
      style: {
        x: 450,
        y: 150,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, fill: '#31d0c6' },
        ],
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node13,
        targetNode: node14,
        targetPort: 'right',
        lineWidth: 2,
        labelText: 'sourcePort❓ targetPort✅',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node15 = container.appendChild(
    new Circle({
      id: 'node-15',
      style: {
        x: 300,
        y: 250,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node16 = container.appendChild(
    new Circle({
      id: 'node-16',
      style: {
        x: 450,
        y: 250,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node15,
        targetNode: node16,
        lineWidth: 2,
        labelText: 'sourcePort✖️ targetPort❓',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node17 = container.appendChild(
    new Circle({
      id: 'node-17',
      style: {
        x: 300,
        y: 350,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'bottom', placement: [0.5, 1], r: 4, fill: '#31d0c6' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node18 = container.appendChild(
    new Circle({
      id: 'node-18',
      style: {
        x: 450,
        y: 350,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  container.appendChild(
    new Line({
      style: {
        sourceNode: node17,
        targetNode: node18,
        sourcePort: 'bottom',
        lineWidth: 2,
        labelText: 'sourcePort✅ targetPort❓',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );

  const node19 = container.appendChild(
    new Circle({
      id: 'node-19',
      style: {
        x: 300,
        y: 450,
        size: 50,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
        ports: [
          { key: 'bottom', placement: [0.5, 1], r: 4, fill: '#31d0c6' },
          { key: 'right', placement: [1, 0.5], r: 4, stroke: '#31d0c6', fill: '#fff' },
        ],
      },
    }),
  );

  const node20 = container.appendChild(
    new Star({
      id: 'node-20',
      style: {
        x: 450,
        y: 450,
        size: 50,
        innerR: 10,
        fill: '#f8f8f8',
        stroke: '#8b9baf',
      },
    }),
  );

  container.appendChild(
    new Cubic({
      style: {
        sourceNode: node19,
        targetNode: node20,
        sourcePort: 'bottom',
        lineWidth: 2,
        labelText: 'sourcePort✅ targetPort❓',
        labelFontSize: 12,
        labelMaxLines: 2,
        labelWordWrap: true,
        labelWordWrapWidth: 100,
        stroke: '#1890FF',
        endArrow: true,
      },
    }),
  );
};
