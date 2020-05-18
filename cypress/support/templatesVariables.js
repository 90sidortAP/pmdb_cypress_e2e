// This file contains data for templates page tests
// Templates Elements
export const selectRecordDisplay = 'select[name="DataTables_Table_0_length"]'
export const templateRows = 'tr[role="row"]'
export const templatePages = 'a[aria-controls="DataTables_Table_0"]'
export const templateSearchFilter = 'input[class="sheet__search"]'
export const templateEmptySearch = 'td[class="dataTables_empty"]'
export const templateSelectInput = (numValue) => {
    return `input[name="selections"][value="${numValue}"]`
} 
export const templateSelectAll = 'input[class="table__select table__select-all"]'
export const templateDetailMenu = 'div[class="menu"]'
export const templateDetailClose = 'img[title="Close side panel"]'
export const templateDetailProjectName = 'a[id="details__name"]'
export const templateDetailChanges = 'div[class="details__changes-container"]'
export const templateDetailInfo = 'a[data-project-tab-type="informations"]'

// Templates URLs
export const allTemplatesSite = 'http://127.0.0.1:8000/templates/'
export const licenseTemplatesSite = 'http://127.0.0.1:8000/templates/licensein/'
export const rdTemplatesSite = 'http://127.0.0.1:8000/templates/rd/'
// Templates Other data
export const formCreamy = 'Creamy'
export const formHerbalTea = 'Herbal Tea'
export const nameBifi = 'Bifidobacterium'
export const nameMagnesium = 'Magnesium'
export const molecouleChromium = 'Chromium'
export const molecouleZinc = 'Zinc'
export const strength125 = '125mg'
export const strength03 = '0,3'
export const emptySearchText = 'No matching records found'
export const nonExistentText1 = 'ThisQueryDoesNotOccur1'
export const nonExistentText2 = 'ThisQueryDoesNotOccur2'
export const project74Name = '\n      Colecalciferol/Fish/Folic Acid/Glycine Max/Iodine/Vitamin E--Orodispersible tablet\n    —'
export const project74Creation = '\n    Creation: Adrian Jasiński,\n    2020-05-08, 14:57:27\n  '
export const project74Modification = '\n    Modification: Adrian Jasiński,\n    2020-05-08, 14:57:27\n  '
