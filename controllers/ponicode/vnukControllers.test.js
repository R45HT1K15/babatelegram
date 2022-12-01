const vnukControllers = require("../vnukControllers")
// @ponicode
describe("vnukControllers.addBabushka", () => {
    test("0", async () => {
        await vnukControllers.addBabushka({ body: "role", session: "http://base.com" }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("1", async () => {
        await vnukControllers.addBabushka({ body: "add", session: "http://base.com" }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("2", async () => {
        await vnukControllers.addBabushka({ body: "wasGeneratedBy", session: "ponicode.com" }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("3", async () => {
        await vnukControllers.addBabushka({ body: "role", session: "https://api.telegram.org/bot" }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("4", async () => {
        await vnukControllers.addBabushka({ body: "registry", session: "https://" }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("5", async () => {
        await vnukControllers.addBabushka({ body: "", session: "" }, { json: () => "" })
    })
})
