const one = "http://127.0.0.1:8000/api/template/datatable/?draw=1&columns%5B0%5D%5Bdata%5D=0&columns%5B0%5D%5Bname%5D=id&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable"
const two ="%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=1&columns%5B1%5D%5Bname%5D=project_name&columns%5B1%"
const three ="5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=2&c"
const four ="olumns%5B2%5D%5Bname%5D=molecule&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%"
const five ="5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=3&columns%5B3%5D%5Bname%5D=project_manager&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D"
const six ="%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=4&columns%5B4%5D%5Bname%5D=strength&columns%5B4%5D%5Bsearchable%5D=true&colu"
const seven ="mns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=25&search%5Bvalue%5D=&search%5Bregex%5D=false"

export const mockURL1 = one + two + three + four + five + six + seven

export const mockData1 = {
    "draw": 1,
    "recordsTotal": 99,
    "recordsFiltered": 99,
    "data": [
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/99/detailsmenu/\" data-id=\"99\">\n    <input name=\"selections\" class=\"table__select table__select-one 99\"\n    type=\"checkbox\" value=\"99\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Bifidobacterium Breve/Lactobacillus Rhamnosus\">Bifidobacterium ...</div>\n            <div class=\"project_name_form\" >Creamy Gel</div >\n            </div>",
            "Bifidobacterium Breve/Lactobacillus Rhamnosus",
            "TEST MOCK !!!!",
            "0,5%; 1%"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/98/detailsmenu/\" data-id=\"98\">\n    <input name=\"selections\" class=\"table__select table__select-one 98\"\n    type=\"checkbox\" value=\"98\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Chromium/Coffea/Paullinia Cupana\">Chromium/Coffea ...</div>\n            <div class=\"project_name_form\" >Powder For Solution</div >\n            </div>",
            "Chromium/Coffea/Paullinia Cupana",
            "Anna Włodarska",
            "5mg/10ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/97/detailsmenu/\" data-id=\"97\">\n    <input name=\"selections\" class=\"table__select table__select-one 97\"\n    type=\"checkbox\" value=\"97\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Saccharomyces Cerevisiae/Viola Tricolor Arvensis/Vitamin E\">Saccharomyces C ...</div>\n            <div class=\"project_name_form\" >Powder For Oral Solution</div >\n            </div>",
            "Saccharomyces Cerevisiae/Viola Tricolor Arvensis/Vitamin E",
            "Kamil Włodarski",
            "20mg/ml; 5 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/96/detailsmenu/\" data-id=\"96\">\n    <input name=\"selections\" class=\"table__select table__select-one 96\"\n    type=\"checkbox\" value=\"96\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Achillea Millefolium/Equisetum Arvense/Hibiscus/Levisticum Officinale/Linum Usitatissimum/Phaseolus Vulgaris/Taraxacum Officinale\">Achillea Millef ...</div>\n            <div class=\"project_name_form\" >Solution</div >\n            </div>",
            "<div class=\"long-text\" data-html=\"true\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Achillea Millefolium/Equisetum Arvense/Hibiscus/Levisticum Officinale/Linum Usitatissimum/Phaseolus Vulgaris/Taraxacum Officinale\">Achillea Millefolium/Equisetum Arvense/Hibiscus/Levisticum Officinale/Linum Usitatissimum/Phaseolus  ...</div>",
            "Katarzyna Chądzyńska",
            "0.5mg/ml 2mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/95/detailsmenu/\" data-id=\"95\">\n    <input name=\"selections\" class=\"table__select table__select-one 95\"\n    type=\"checkbox\" value=\"95\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Calcium/Colecalciferol/Fluorine/Magnesium/Phosphorus\">Calcium/Colecal ...</div>\n            <div class=\"project_name_form\" >Cream</div >\n            </div>",
            "Calcium/Colecalciferol/Fluorine/Magnesium/Phosphorus",
            "Anna Włodarska",
            "2mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/94/detailsmenu/\" data-id=\"94\">\n    <input name=\"selections\" class=\"table__select table__select-one 94\"\n    type=\"checkbox\" value=\"94\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Cyanocobalamin/Magnesium/Melissa Officinalis/Nicotinic Acid/Pyridoxine/Rhodiola Rosea\">Cyanocobalamin/ ...</div>\n            <div class=\"project_name_form\" >Solution For Oral And Inhalation Use</div >\n            </div>",
            "Cyanocobalamin/Magnesium/Melissa Officinalis/Nicotinic Acid/Pyridoxine/Rhodiola Rosea",
            "Adam Torbus",
            "1mg; 5mg"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/93/detailsmenu/\" data-id=\"93\">\n    <input name=\"selections\" class=\"table__select table__select-one 93\"\n    type=\"checkbox\" value=\"93\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Epilobium Parviflorum/Urtica Dioica\">Epilobium Parvi ...</div>\n            <div class=\"project_name_form\" >Solution For Injection Or Infusion</div >\n            </div>",
            "Epilobium Parviflorum/Urtica Dioica",
            "Małgorzata Wójcik",
            "10mg/10ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/92/detailsmenu/\" data-id=\"92\">\n    <input name=\"selections\" class=\"table__select table__select-one 92\"\n    type=\"checkbox\" value=\"92\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Calcium/Soya Isoflavones/Vitamin E\">Calcium/Soya Is ...</div>\n            <div class=\"project_name_form\" >Cutaneous Spray Solution</div >\n            </div>",
            "Calcium/Soya Isoflavones/Vitamin E",
            "Justyna Rogowska",
            "5 mg"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/91/detailsmenu/\" data-id=\"91\">\n    <input name=\"selections\" class=\"table__select table__select-one 91\"\n    type=\"checkbox\" value=\"91\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Achillea Millefolium/Alpinia Officinarum/Capsicum Oleoresin/Cucurbita Pepo/Humulus Lupulus/Malva Sylvestris/Melaleuca Alternifolia/Mentha Piperita/Olax Dissitiflora/Rosmarinus Officinalis/Serenoa Repens/Urtica Dioica/Vitis Vinifera\">Achillea Millef ...</div>\n            <div class=\"project_name_form\" >Shampoo</div >\n            </div>",
            "<div class=\"long-text\" data-html=\"true\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Achillea Millefolium/Alpinia Officinarum/Capsicum Oleoresin/Cucurbita Pepo/Humulus Lupulus/Malva Sylvestris/Melaleuca Alternifolia/Mentha Piperita/Olax Dissitiflora/Rosmarinus Officinalis/Serenoa Repens/Urtica Dioica/Vitis Vinifera\">Achillea Millefolium/Alpinia Officinarum/Capsicum Oleoresin/Cucurbita Pepo/Humulus Lupulus/Malva Syl ...</div>",
            "Marcin Feder",
            "0,3 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/90/detailsmenu/\" data-id=\"90\">\n    <input name=\"selections\" class=\"table__select table__select-one 90\"\n    type=\"checkbox\" value=\"90\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aronia Melanocarpa/Camellia Sinensis/Cinnamomum Zeylanicum/Curcuma Longa/Piper Nigrum/Scutellaria/Vaccinium Macrocarpon/Vaccinium Myrtillus/Vitis Vinifera/Zingiber Officinale\">Aronia Melanoca ...</div>\n            <div class=\"project_name_form\" >Dispersible Tablet</div >\n            </div>",
            "<div class=\"long-text\" data-html=\"true\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aronia Melanocarpa/Camellia Sinensis/Cinnamomum Zeylanicum/Curcuma Longa/Piper Nigrum/Scutellaria/Vaccinium Macrocarpon/Vaccinium Myrtillus/Vitis Vinifera/Zingiber Officinale\">Aronia Melanocarpa/Camellia Sinensis/Cinnamomum Zeylanicum/Curcuma Longa/Piper Nigrum/Scutellaria/Va ...</div>",
            "Kamil Włodarski",
            "5mg/10ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/89/detailsmenu/\" data-id=\"89\">\n    <input name=\"selections\" class=\"table__select table__select-one 89\"\n    type=\"checkbox\" value=\"89\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Ascorbic Acid/Chondroitinsulfuric Acid/Glucosamine\">Ascorbic Acid/C ...</div>\n            <div class=\"project_name_form\" >Herbal Tea</div >\n            </div>",
            "Ascorbic Acid/Chondroitinsulfuric Acid/Glucosamine",
            "Kamil Włodarski",
            "0,3 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/88/detailsmenu/\" data-id=\"88\">\n    <input name=\"selections\" class=\"table__select table__select-one 88\"\n    type=\"checkbox\" value=\"88\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Biotin/Glycine Max/Nicotinic Acid/Ornithine/Pantothenic Acid/Riboflavin/Thiamine\">Biotin/Glycine  ...</div>\n            <div class=\"project_name_form\" >Effervescent Tablet</div >\n            </div>",
            "Biotin/Glycine Max/Nicotinic Acid/Ornithine/Pantothenic Acid/Riboflavin/Thiamine",
            "Małgorzata Wójcik",
            "0,2%; 0,4%"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/87/detailsmenu/\" data-id=\"87\">\n    <input name=\"selections\" class=\"table__select table__select-one 87\"\n    type=\"checkbox\" value=\"87\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Ascorbic Acid/Betacarotene/Selenium/Vitamin E\">Ascorbic Acid/B ...</div>\n            <div class=\"project_name_form\" >Liquid</div >\n            </div>",
            "Ascorbic Acid/Betacarotene/Selenium/Vitamin E",
            "Marcin Feder",
            "0,5%; 1%"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/86/detailsmenu/\" data-id=\"86\">\n    <input name=\"selections\" class=\"table__select table__select-one 86\"\n    type=\"checkbox\" value=\"86\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Achillea Millefolium/Artemisia Abrotanum/Quercus Robur/Salix Alba/Salvia Officinalis/Thymus Vulgare\">Achillea Millef ...</div>\n            <div class=\"project_name_form\" >Solution For Injection In Pre-Filled Pen</div >\n            </div>",
            "Achillea Millefolium/Artemisia Abrotanum/Quercus Robur/Salix Alba/Salvia Officinalis/Thymus Vulgare",
            "Piotr Potaczek",
            "0,3 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/85/detailsmenu/\" data-id=\"85\">\n    <input name=\"selections\" class=\"table__select table__select-one 85\"\n    type=\"checkbox\" value=\"85\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aesculus Hippocastanum/Atropa Belladonna/Carduus Benedictus/Daphne Mezereum/Fluorine/Hamamelis Virginiana/Placenta\">Aesculus Hippoc ...</div>\n            <div class=\"project_name_form\" >Oral Liquid</div >\n            </div>",
            "<div class=\"long-text\" data-html=\"true\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aesculus Hippocastanum/Atropa Belladonna/Carduus Benedictus/Daphne Mezereum/Fluorine/Hamamelis Virginiana/Placenta\">Aesculus Hippocastanum/Atropa Belladonna/Carduus Benedictus/Daphne Mezereum/Fluorine/Hamamelis Virgi ...</div>",
            "Monika Pietruczuk",
            "0.5mg/ml 2mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/84/detailsmenu/\" data-id=\"84\">\n    <input name=\"selections\" class=\"table__select table__select-one 84\"\n    type=\"checkbox\" value=\"84\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aluminium/Boron/Calcium/Copper/Iodine/Iron Ferrous/Lithium/Magnesium/Potassium/Strontium\">Aluminium/Boron ...</div>\n            <div class=\"project_name_form\" >Capsule Soft</div >\n            </div>",
            "Aluminium/Boron/Calcium/Copper/Iodine/Iron Ferrous/Lithium/Magnesium/Potassium/Strontium",
            "Małgorzata Wójcik",
            "4%/0,1%"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/83/detailsmenu/\" data-id=\"83\">\n    <input name=\"selections\" class=\"table__select table__select-one 83\"\n    type=\"checkbox\" value=\"83\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Phaseolus Vulgaris\">Phaseolus Vulga ...</div>\n            <div class=\"project_name_form\" >Powder In Sachet</div >\n            </div>",
            "Phaseolus Vulgaris",
            "Martyna Szczyrek",
            "0,001 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/82/detailsmenu/\" data-id=\"82\">\n    <input name=\"selections\" class=\"table__select table__select-one 82\"\n    type=\"checkbox\" value=\"82\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Ascorbic Acid/Carum Petroselinum/Vaccinium Macrocarpon/Vaccinium Myrtillus\">Ascorbic Acid/C ...</div>\n            <div class=\"project_name_form\" >Granules For Oral Solution</div >\n            </div>",
            "Ascorbic Acid/Carum Petroselinum/Vaccinium Macrocarpon/Vaccinium Myrtillus",
            "Mariusz Strutyński",
            "0.05mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/81/detailsmenu/\" data-id=\"81\">\n    <input name=\"selections\" class=\"table__select table__select-one 81\"\n    type=\"checkbox\" value=\"81\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aronia Melanocarpa/Cornus Officinalis/Crataegus Laevigata/Hippophae/Mangifera Indica/Panax Ginseng/Punica Granatum/Pyrus Cydonia/Rubus Fruticosus/Rubus Idaeus/Sambucus Nigra/Vaccinium Macrocarpon/Vitis Vinifera\">Aronia Melanoca ...</div>\n            <div class=\"project_name_form\" >Vaginal Ring</div >\n            </div>",
            "<div class=\"long-text\" data-html=\"true\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Aronia Melanocarpa/Cornus Officinalis/Crataegus Laevigata/Hippophae/Mangifera Indica/Panax Ginseng/Punica Granatum/Pyrus Cydonia/Rubus Fruticosus/Rubus Idaeus/Sambucus Nigra/Vaccinium Macrocarpon/Vitis Vinifera\">Aronia Melanocarpa/Cornus Officinalis/Crataegus Laevigata/Hippophae/Mangifera Indica/Panax Ginseng/P ...</div>",
            "Adam Torbus",
            "0.05mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/80/detailsmenu/\" data-id=\"80\">\n    <input name=\"selections\" class=\"table__select table__select-one 80\"\n    type=\"checkbox\" value=\"80\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Colecalciferol/Cyanocobalamin/Folic Acid/Pantothenic Acid/Pyridoxine/Withania Somnifera\">Colecalciferol/ ...</div>\n            <div class=\"project_name_form\" >Granules For Oral Suspension</div >\n            </div>",
            "Colecalciferol/Cyanocobalamin/Folic Acid/Pantothenic Acid/Pyridoxine/Withania Somnifera",
            "Mariusz Strutyński",
            "250mg/20ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/79/detailsmenu/\" data-id=\"79\">\n    <input name=\"selections\" class=\"table__select table__select-one 79\"\n    type=\"checkbox\" value=\"79\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Magnesium/Potassium/Pyridoxine\">Magnesium/Potas ...</div>\n            <div class=\"project_name_form\" >Herbal Tea</div >\n            </div>",
            "Magnesium/Potassium/Pyridoxine",
            "Marcin Feder",
            "0,5mg"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/78/detailsmenu/\" data-id=\"78\">\n    <input name=\"selections\" class=\"table__select table__select-one 78\"\n    type=\"checkbox\" value=\"78\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Bifidobacterium Animalis/Lactobacillus Acidophilus/Streptococcus\">Bifidobacterium ...</div>\n            <div class=\"project_name_form\" >Oral Drops Solution</div >\n            </div>",
            "Bifidobacterium Animalis/Lactobacillus Acidophilus/Streptococcus",
            "Katarzyna Dorosławska",
            "250mg/20ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/77/detailsmenu/\" data-id=\"77\">\n    <input name=\"selections\" class=\"table__select table__select-one 77\"\n    type=\"checkbox\" value=\"77\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Hyoscyamus Niger\">Hyoscyamus Nige ...</div>\n            <div class=\"project_name_form\" >Oral Liquid</div >\n            </div>",
            "Hyoscyamus Niger",
            "Monika Pietruczuk",
            "0,001 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/76/detailsmenu/\" data-id=\"76\">\n    <input name=\"selections\" class=\"table__select table__select-one 76\"\n    type=\"checkbox\" value=\"76\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Ascorbic Acid/Citrus Aurantifolia/Pelargonium Sidoides\">Ascorbic Acid/C ...</div>\n            <div class=\"project_name_form\" >Prolonged-Release Tablet</div >\n            </div>",
            "Ascorbic Acid/Citrus Aurantifolia/Pelargonium Sidoides",
            "Adam Torbus",
            "0,001 mg/ml"
        ],
        [
            "\n    <div class=\"table__select-container\" data-url=\"/templates/75/detailsmenu/\" data-id=\"75\">\n    <input name=\"selections\" class=\"table__select table__select-one 75\"\n    type=\"checkbox\" value=\"75\"></div>\n    ",
            "<div class=\"project-widget \" >\n            <div class=\"project_name_api\" data-trigger=\"hover\" data-toggle=\"popover\"             data-placement=\"top\" data-content=\"Allium Sativum/Echinacea Purpurea\">Allium Sativum/ ...</div>\n            <div class=\"project_name_form\" >Chocolate Candy</div >\n            </div>",
            "Allium Sativum/Echinacea Purpurea",
            "Anna Włodarska",
            "500mg/100ml"
        ]
    ],
    "columns": [
        {
            "name": "id",
            "verbose_name": "ID"
        },
        {
            "name": "project_name",
            "verbose_name": "Project Name"
        },
        {
            "name": "molecule",
            "verbose_name": "Molecule"
        },
        {
            "name": "project_manager",
            "verbose_name": "Project Manager"
        },
        {
            "name": "strength",
            "verbose_name": "Strength"
        }
    ],
    "view_id": 22,
    "view_update_url": "/scenes/22/update/",
    "result": "ok"
}
