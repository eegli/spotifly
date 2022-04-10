import { describe, expect, test } from '@jest/globals';
import { flagsFromObject } from './utils';

describe('Utils, flagsFromObject', () => {
  [
    {
      description: 'All array values',
      args: {
        base: 'npx',
        obj: { withBoolean: true, allNames: ['a', 'b'] },
        multiSelectKeys: ['allNames'],
      },
    },
    {
      description: 'Without multiselect',
      args: {
        base: 'npx',
        obj: { withBoolean: true, firsName: ['a', 'b'] },
      },
    },
    {
      description: 'With args',
      args: {
        base: 'npx',
        obj: { withBoolean: true, port: '3000', display: false },
      },
    },
    {
      description: 'String containing spaces',
      args: {
        base: 'npx',
        obj: { names: 'a b' },
      },
    },
    {
      description: 'Trims whitespaces',
      args: {
        base: '   npx',
        obj: { port: '3000   ' },
      },
    },
  ].forEach(({ description, args }) => {
    test(`${description}`, () => {
      expect(flagsFromObject(args)).toMatchSnapshot();
    });
  });
});
