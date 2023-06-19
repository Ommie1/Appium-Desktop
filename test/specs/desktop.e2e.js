describe("Desktop Application", () => {
  it("Test sample", async () => {
    await $("/Window/Window[2]/Custom/Group/Group[5]/Button[8]").click();
    await $("/Window/Window[2]/Custom/Group/Group[4]/Button[4]").click();
  });
});
