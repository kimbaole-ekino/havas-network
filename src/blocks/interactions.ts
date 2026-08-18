export function bindBlockInteractions(): void {
  document
    .querySelectorAll<HTMLElement>("[data-gradient-pointer]")
    .forEach((block) => {
      block.addEventListener("pointermove", (event) => {
        const bounds = block.getBoundingClientRect();
        block.style.setProperty(
          "--pointer-x",
          `${event.clientX - bounds.left}px`,
        );
        block.style.setProperty(
          "--pointer-y",
          `${event.clientY - bounds.top}px`,
        );
      });

      block.addEventListener("pointerleave", () => {
        block.style.removeProperty("--pointer-x");
        block.style.removeProperty("--pointer-y");
      });
    });
}
