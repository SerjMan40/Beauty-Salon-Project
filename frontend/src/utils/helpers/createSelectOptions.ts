export interface SelectOption<T extends string | number = string> {
  label: string
  value: T
}

export function createSelectOptions<T extends string | number>(
  values: readonly T[],
  getLabel: (value: T) => string = String,
): SelectOption<T>[] {
  return values.map((value) => ({ label: getLabel(value), value }))
}
