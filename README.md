## "Deno LSP errors vanish suddently"

**To reproduce:**

- `deno init`
- `deno add npm:effect npm:@effect/sql`
- define code in `main.ts`:

```typescript
import { Model } from "@effect/sql"
import { Schema as S } from "effect"

export class ExampleModel extends Model.Class<ExampleModel>("ExampleModel")({
  id: Model.Generated(S.String),
  created_at: Model.DateTimeInsert,
  content: S.String,
}) {}

const make = Model.makeRepository(ExampleModel, {
  tableName: 'examples',
  spanPrefix: 'ExampleRepo',
  idColumn: 'id',
  thisPropertyDoesntExist: 'foobar'
})
```

After waiting for a while (maybe 2-3 mins), ALL OF THE ERRORS VANISH.
Even the basic `px` object with `basdz` prop that isn't allowed doesn't show ANY errors.

NO CLUE what might cause this.
