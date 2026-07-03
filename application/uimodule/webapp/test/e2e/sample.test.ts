/* eslint-disable */
import GenericTile from "sap/m/GenericTile";
import SearchField from "sap/m/SearchField";
import { wdi5 } from "wdio-ui5-service";

describe("samples", () => {
	it("should log", () => {
		const logger = wdi5.getLogger();
		logger.log("hello world!");
	});

	it("should retrieve the Main page", async () => {
		const appLocator = {
			selector: {
				controlType: "sap.m.Page",
				viewName: "uimodule.ext.main.Main",
			},
		};

		const app = await browser.asControl(appLocator);
		expect(app).toBeDefined();
	});

	it("should retrieve the search field and enter Zero", async () => {
		const searchLocator = {
			selector: {
				id: "searchField",
				viewName: "uimodule.ext.main.Main",
			},
		};

		const search = await browser.asControl<SearchField>(searchLocator);
		expect(search).toBeDefined();
		await search.enterText("Zero");
		const value = await (search.getValue() as unknown as Promise<string>);
		expect(value).toBe("Zero");
	});

	it("should display only the Soda Zero tile", async () => {
		const tilesLocator = {
			selector: {
				controlType: "sap.m.GenericTile",
				viewName: "uimodule.ext.main.Main",
			},
		};

		const tiles = await browser.allControls<GenericTile>(tilesLocator);
		expect(tiles.length).toBe(1);
		const header = await (tiles[0].getHeader() as unknown as Promise<string>);
		expect(header).toBe("Soda Zero");
	});
});
