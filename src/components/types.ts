export interface One {
  type: string;
  values: number[];
  study_type: string;
  parameter_name: string;
  min_value?: number;
  max_value?: number;
  default_value?: number;
}

export interface Two {
  type: string;
  values: number[];
}

export interface Three {
  type: string;
  values: number[];
}

export interface Four {
  type: string;
  study_type: string;
  parameter_name: string;
  min_value: number;
  max_value: number;
  default_value: number;
}

export interface Variable {
  $1: One;
  $2: Two;
  $3: Three;
  $4: Four;
}

export interface Criterion {
  type: string;
  text: string;
  variable: Variable;
}

export interface Stock {
  id: number;
  name: string;
  tag: string;
  color: string;
  criteria: Criterion[];
}

export interface Props {
  text?: string | undefined;
  stock?: Stock;
  data?: Criterion;
  stockLength: number;
  index: number;
}
