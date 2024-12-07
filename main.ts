import { Model } from "@effect/sql"
import { Effect, Schema as S } from "effect"

export class ExampleModel extends Model.Class<ExampleModel>("ExampleModel")({
  id: Model.Generated(S.String),
  created_at: Model.DateTimeInsert,
  content: S.String,
}) {}

const make = Model.makeRepository(ExampleModel, {
  tableName: 'examples',
  spanPrefix: 'ExampleRepo',
  idColumn: 'id'
})

export type PizzaHut = {
  foo: 'bar';
}

const px: PizzaHut = {
  foo: 'bar',
}

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
