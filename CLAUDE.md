# DualFrameCreative

<!-- AUTO-CONTEXT-BLOCK:START -->
## Context files

This project loads these files at the start of every session.

@DATABASE.md
@FRONTEND.md
@BUGS.md

Follow these rules to keep the files correct:

- Change DATABASE.md in the same turn that you change the database schema.
- Change FRONTEND.md in the same turn that you add a new page, route, or
  flow, or change an existing UI pattern.
- Add an entry to BUGS.md only after you verify the bug. Follow these
  steps before you write the entry:
  - Show the exact input or state that causes the failure. Do not guess.
  - State why the old code produces the wrong result.
  - Apply the fix, then check that the failure case is gone.
  - Do not log a claim you have not checked this way.
  Write the date, the symptom, the root cause, the fix, and the changed
  files. Put the new entry above the old entries.
<!-- AUTO-CONTEXT-BLOCK:END -->
