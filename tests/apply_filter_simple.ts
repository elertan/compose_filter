import 'mocha';
import {apply_filter, EDataType} from '../src';
import {expect} from 'chai';

interface ISimpleItem {
  id: number;
  name: string;
}

describe('apply_filter_simple', () => {
  it('works', async () => {
    const items: ISimpleItem[] = [
      {
        id: 1,
        name: "Dennis",
      },
      {
        id: 2,
        name: "Gavin",
      },
      {
        id: 3,
        name: "Mark",
      },
    ];
    const filter_result = await apply_filter(items, {
      fields: {
        id: EDataType.Number,
        name: EDataType.String,
      },
      filters: [],
    });
    expect(filter_result.items.length).to.eq(3);
  });
});
