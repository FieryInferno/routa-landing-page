**CONTEXT:**

- **Feature:** Register
- **Stack:** React, TypeScript, Jest, React Testing Library.
- **Goal:** Build the vertical slice (Domain -> Data -> UI) using STRICT TDD.

**THE RULES:**

1.  **Domain (`src/features/auth/domain`):** Pure TS. Entities, Use Cases, Repository Interfaces.
2.  **Data (`src/features/auth/data`):** DTOs, Mappers, Repository Implementations (API calls).
3.  **UI (`src/features/auth/ui`):** Hooks and Components.

**THE MICRO-TDD LOOP (Apply this to EVERY step below):**
For every file that requires logic/testing, you MUST execute this exact loop:

1.  **PLAN:** List both all positive and negative scenarios. **STOP and wait.**
2.  **RED:** Write _one_ failing test.
3.  **VERIFY:** Run test command (`npm test`). Confirm failure.
4.  **GREEN:** Write minimal implementation code.
5.  **VERIFY:** Run test command. Confirm success.
6.  **REFACTOR:** Clean up.

**THE ARCHITECTURAL ROADMAP (Execute in this order):**

**STEP 1: THE CONTRACT (Domain)**

- Define `Entity` and `IRepository`.
- _Action:_ Create types only. No tests needed.
- **STOP after creating files.**

**STEP 2: THE ADAPTER (Data)**

- Target: `Mapper` (DTO -> Entity).
- _Action:_ **Execute MICRO-TDD LOOP.**
- **STOP after Refactor.**

**STEP 3: THE REPOSITORY (Data)**

- Target: `RepositoryImpl`.
- _Action:_ **Execute MICRO-TDD LOOP.** (Mock `axios`).
- **STOP after Refactor.**

**STEP 4: THE USE CASE (Domain)**

- Target: `UseCase`.
- _Action:_ **Execute MICRO-TDD LOOP.** (Mock `IRepository`).
- **STOP after Refactor.**

**STEP 5: THE HOOK (UI)**

- Target: `useRegister`.
- _Action:_ **Execute MICRO-TDD LOOP.** (Mock `UseCase`).
- **STOP after Refactor.**

**INSTRUCTION:**
Start by executing **STEP 1** only.
