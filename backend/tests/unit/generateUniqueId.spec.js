const generateUniqueId = require('../../src/utils/generateUniqueId')

describe("Generating Unique ID", () => {
  it("should generate an unique ID on record creation of a table", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8)
  })
})