import opaTest from "sap/ui/test/opaQunit";
import MainPage from "./pages/MainPage";

const onTheMainPage = new MainPage();

QUnit.module("Sample Journey");

opaTest("Should search for Soda Zero", function () {
	// Arrangements
	onTheMainPage.iStartMyUIComponent({
		componentConfig: {
			name: "uimodule"
		}
	});

	// Actions
	onTheMainPage.iPressTheSearchField();
	onTheMainPage.iEnterSearchText();

	// Assertions
	onTheMainPage.iShouldOnlySeeSodaZero();

	// Cleanup
	onTheMainPage.iTeardownMyApp();
});
