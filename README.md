## "Deno LSP breaks by creating / deleting a file"



https://github.com/user-attachments/assets/03cbb42e-64ff-4688-8391-2eb8ec9543e6



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
})
```

- Restart Deno LSP
- Then, fidget around with the `make` function, call it, console log it, use it etc.
- Then also make some errors in the file, remove them.
- Then create a file `new-file.ts` / delete it
- Then all of a sudden the `idColumn` breaks and infers to `never`. Now there is an error in `main.ts` for no reason.

NO CLUE what might cause this. Happens soo randomly.
