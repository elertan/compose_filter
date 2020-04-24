export enum EDataType {
  String,
  Number,
  Date,
  Boolean,
  Object,
  Array,
}

export enum EOperator {
  Not,
  And,
  Or,
  Xor,
  Nor,
}

export enum EStringComparison {
  Equal,
  InsideOf,
  InsideOfFuzzy,
  StartsWith,
  EndsWith,
  LongerThan,
}

export enum ENumberComparison {
  Equal,
  LargerThan,
  LargerThanOrEqual,
  SmallerThan,
  SmallerTanOrEqual,
}

export enum EDateComparison {
  Equal,
  After,
  Before,
  AfterOrEqual,
  BeforeOrEqual,
}

export interface IFilter<T extends {}> {
  field: keyof T;
  comparison: EStringComparison | ENumberComparison | EDateComparison;
  value: any;
}

export interface IFilterConfig<TItem extends {}> {
  fields: Record<keyof TItem, EDataType>;
  filters: IFilter<TItem>[];
}

export interface IFilterResult<TItem extends {}> {
  items: TItem[];
}

export const apply_filter = async <TItem extends {}>(items: TItem[], filter_config: IFilterConfig<TItem>): Promise<IFilterResult<TItem>> => {
  let remainder = items;
  filter_config.filters.forEach((filter) => {
    remainder = remainder.filter();
  });
  return {
    items,
  };
};
