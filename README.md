Feature: Login 

   As a user I want to be able to login correctly
    @loginPage
   Scenario: Should be able to log in with correct username and password
    Given Login page is opened
    When User provides correct username
    And User provides correct password
    And User clicks Log in button
    Then Projects site is opened

Feature: Login errors 
    
    As a user I want to receive clear and unambigous error message when login attempt fails
    @loginPage
    Scenario: Should not be able to log in with incorrect username and correct password
     Given Login page is opened
     When User provides incorrect username
     And User provides correct password
     And User clicks Log in button
     Then Login error is shown

   Scenario: Should not be able to log in with correct username and incorrect password
    Given Login page is opened
    When User provides correct username
    And User provides incorrect password
    And User clicks Log in button
    Then Login error is shown

   Scenario: Should not be able to log in with incorrect username and incorrect password
    Given Login page is opened
    When User provides incorrect username
    And User provides incorrect password
    And User clicks Log in button
    Then Login error is shown

   Scenario: Should not be able to log in with no username
    Given Login page is opened
    When User provides correct password
    And User clicks Log in button
    Then Login error is shown

   Scenario: Should not be able to log in with no password
    Given Login page is opened
    When User provides correct username
    And User clicks Log in button
    Then Login error is shown

   Scenario: Should not be able to log in with no password and no username
    Given Login page is opened
    When User clicks Log in button
    Then Login error is shown

Feature: Logout 

   As a user I want to be able to logout correctly
    @loginPage
   Scenario: Should be able to log out
    Given Projects site is opened
    When User clicks user menu
    And User clicks Logout
    Then Login page is opened

Feature: Templates entries display 

   As a user I want to be able to define how many templates should be shown
    @templatesPage
   Scenario: Should be able to change number of displayed templates
    Given Templates site is opened
    When User selects 50 entries
    Then Shows up to 50 entries
    When User selects All entries
    Then Shows all entries
    When User selects 25 entries
    Then Shows up to 25 entries
    When User selects 100 entries
    Then Shows up to 100 entries

Feature: Projects entries display 

   As a user I want to be able to define how many projects should be shown
    @projectsPage
   Scenario: Should be able to change number of displayed projects
    Given Projects site is opened
    When User selects 50 entries
    Then Shows up to 50 entries
    When User selects All entries
    Then Shows all entries
    When User selects 25 entries
    Then Shows up to 25 entries
    When User selects 100 entries
    Then Shows up to 100 entries

Feature: Templates pagination 

   As a user I want to be able to navigate through template pages
    @templatesPage
   Scenario: Should be able to change pages
    Given Templates site is opened
    When User selects page 2
    Then Records from page 2 are shown
    When User selects page 4
    Then Records from page 4 are shown

Feature: Projects pagination 

   As a user I want to be able to navigate through project pages
    @projectsPage
   Scenario: Should be able to change pages
    Given Projects site is opened
    When User selects page 2
    Then Records from page 2 are shown
    When User selects page 4
    Then Records from page 4 are shown

Feature: Templates long names tooltips 

   As a user I want to be able to read all the info from columns
    @templatesPage
   Scenario: Should display a tooltip with whole text when it is to long to be shown in column
    Given Templates site is opened
    When User moves mouse to a column with short text
    Then Tooltip with all text is shown

Feature: Projects long names tooltips 

   As a user I want to be able to read all the info from columns
    @projectsPage
   Scenario: Should display a tooltip with whole text when it is to long to be shown in column
    Given Projects site is opened
    When User moves mouse to a column with short text
    Then Tooltip with all text is shown

Feature: Templates selection 

   As a user I want to be able to select and deselect one/ multiple / all templates
    @templatesPage
   Scenario: Should be able to select and deselect templates
    Given Templates site is opened
    When User selects template 99
    Then Template 99 is selected
    When User selects template 92
    Then Template 92 is selected
    When User dselects template 92
    Then Template 92 is not selected
    When User deselects template 99
    Then Template 99 is deselected

   Scenario: Should be able to select and deselect all templates 
    Given Templates site is opened
    When User selects all templates
    Then All templates are selected
    When User deselects all templates
    Then All templates are deselected

Feature: Projects selection 

   As a user I want to be able to select and deselect one/ multiple / all projects
    @projectsPage
   Scenario: Should be able to select and deselect projects
    Given Projects site is opened
    When User selects project 99
    Then Project 99 is selected
    When User selects project 92
    Then Project 92 is selected
    When User deselects project 92
    Then Project 92 is not selected
    When User deselects project 99
    Then Project 99 is deselected

   Scenario: Should be able to select and deselect all projects 
    Given Projects site is opened
    When User selects all projects
    Then All projects are selected
    When User deselects all projects
    Then All projects are deselected

Feature: Templates filtering 

   As a user I want to be able to select filter templates by all columns
    @templatesPage
   Scenario: Should be able to filter templates by Project Name
    Given Templates site is opened
    When User types Cream to filter input
    Then Only templates with Cream are shown 

   Scenario: Should be able to filter templates by Molecule
    Given Templates site is opened
    When User types Zinc to filter input
    Then Only templates with Zinc are shown

   Scenario: Should be able to filter templates by Project Manager
    Given Templates site is opened
    When User types Marcin to filter input
    Then Only templates with Marcin are shown

   Scenario: Should be able to filter templates by Strength
    Given Templates site is opened
    When User types 10ml to filter input
    Then Only templates with 10ml are shown

   Scenario: Should show message when query does not match templates
    Given Templates site is opened
    When User types DsntExist to filter input
    Then No matching records found is shown

Feature: Projects filtering 

   As a user I want to be able to select filter projects by all columns
    @projectsPage
   Scenario: Should be able to filter projects by Project Name
    Given Projects site is opened
    When User types Cream to filter input
    Then Only projects with Cream are shown 

   Scenario: Should be able to filter projects by Project Manager
    Given Projects site is opened
    When User types Marcin to filter input
    Then Only projects with Marcin are shown

   Scenario: Should be able to filter projects by Pharmaceutical Form
    Given Projects site is opened
    When User types Herbal to filter input
    Then Only projects with Herbal are shown

   Scenario: Should be able to filter projects by Prescription Category
    Given Projects site is opened
    When User types Food to filter input
    Then Only projects with Food are shown

   Scenario: Should be able to filter projects by Market
    Given Projects site is opened
    When User types Poland to filter input
    Then Only projects with Poland are shown

   Scenario: Should be able to filter projects by Strength
    Given Projects site is opened
    When User types 20mg to filter input
    Then Only projects with 20mg are shown

   Scenario: Should show message when query does not match projects
    Given Projects site is opened
    When User types DsntExist to filter input
    Then No matching records found is shown

Feature: Templates column sorting 

   As a user I want to be able to sort table by all columns
    @templatesPage
   Scenario: Should be able to sort templates by Project Name
    Given Templates site is opened
    When User clicks Project Name column (ascending)
    Then Records are sorted ascending by Project Name
    When User clicks Project Name column (descending)
    Then Records are sorted descending by Project Name

   Scenario: Should be able to sort templates by Molecule
    Given Templates site is opened
    When User clicks Molecule column (ascending)
    Then Records are sorted ascending by Molecule
    When User clicks Molecule column (descending)
    Then Records are sorted descending by Molecule

   Scenario: Should be able to sort templates by Project Manager
    Given Templates site is opened
    When User clicks Project Manager column (ascending)
    Then Records are sorted ascending by Project Manager
    When User clicks Project Manager column (descending)
    Then Records are sorted descending by Project Manager

   Scenario: Should be able to sort templates by Strength
    Given Templates site is opened
    When User clicks Strength column (ascending)
    Then Records are sorted ascending by Strength
    When User clicks Strength column (descending)
    Then Records are sorted descending by Strength

Feature: Projects column sorting 

   As a user I want to be able to sort table by all columns
    @projectsPage
   Scenario: Should be able to sort projects by Project Name
    Given Projects site is opened
    When User clicks Project Name column (ascending)
    Then Records are sorted ascending by Project Name
    When User clicks Project Name column (descending)
    Then Records are sorted descending by Project Name

   Scenario: Should be able to sort projects by Project Manager
    Given Projects site is opened
    When User clicks Project Manager column (ascending)
    Then Records are sorted ascending by Project Manager
    When User clicks Project Manager column (descending)
    Then Records are sorted descending by Project Manager

   Scenario: Should be able to sort projects by Pharmaceutical Form
    Given Projects site is opened
    When User clicks Pharmaceutical Form column (ascending)
    Then Records are sorted ascending by Pharmaceutical Form
    When User clicks Pharmaceutical Form column (descending)
    Then Records are sorted descending by Pharmaceutical Form

   Scenario: Should be able to sort templates by Prescription Category
    Given Projects site is opened
    When User clicks Prescription Category column (ascending)
    Then Records are sorted ascending by Prescription Category
    When User clicks Prescription Category column (descending)
    Then Records are sorted descending by Prescription Category

   Scenario: Should be able to sort templates by Strength
    Given Projects site is opened
    When User clicks Strength column (ascending)
    Then Records are sorted ascending by Strength
    When User clicks Strength column (descending)
    Then Records are sorted descending by Strength

   Scenario: Should be able to sort templates by Market
    Given Projects site is opened
    When User clicks Market column (ascending)
    Then Records are sorted ascending by Market
    When User clicks Market column (descending)
    Then Records are sorted descending by Market

Feature: Templates types 

   As a user I want to be able to work only with License-in/R&D templates
    @templatesPage
   Scenario: Should be able to display only License-in/ R&D templates
    Given Templates site is opened
    When User clicks Templates: License-in
    Then License-in templates are shown
    When User clicks Templates: R&D
    Then R&D templates are shown

Feature: Projects types 

   As a user I want to be able to work only with License-in/R&D projects
    @projectsPage
   Scenario: Should be able to display only License-in/ R&D projects
    Given Projects site is opened
    When User clicks Projects: License-in
    Then License-in projects are shown
    When User clicks Projects: R&D
    Then R&D projects are shown

Feature: Template details 

   As a user I want to be able check template details
    @templatesPage
   Scenario: Should be able to open and close template
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Close side panel
    Then Template Information is closed

   Scenario: Should be able to check template information after clicking on a specific template
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown

   Scenario: Should be able to check template schedule after clicking on a specific template
    Given Templates site is opened
    When User clicks on template Schedule (94)
    Then Template Schedule is shown (94)

   Scenario: Should be able to check template agreement after clicking on a specific template
    Given Templates site is opened
    When User clicks on template Agreement (94)
    Then Template Agreement is shown (94)

   Scenario: Should be able to check template financial after clicking on a specific template
    Given Templates site is opened
    When User clicks on template Financial (94)
    Then Template Financial is shown (94)

   Scenario: Should be able to check template others after clicking on a specific template
    Given Templates site is opened
    When User clicks on template Others (94)
    Then Template Others is shown (94)

   Scenario: Should change displayed template details after selecting another template
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Schedule (90)
    Then Template Schedule is shown (90)

Feature: Projects details 

   As a user I want to be able check project details
    @projectsPage
   Scenario: Should be able to open and close project
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Close side panel
    Then Project Information is closed

   Scenario: Should be able to check project information after clicking on a specific project
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown

   Scenario: Should be able to check project schedule after clicking on a specific project
    Given Projects site is opened
    When User clicks on project Schedule (94)
    Then Project Schedule is shown (94)

   Scenario: Should be able to check project agreement after clicking on a specific project
    Given Projects site is opened
    When User clicks on project Agreement (94)
    Then Project Agreement is shown (94)

   Scenario: Should be able to check project financial after clicking on a specific project
    Given Projects site is opened
    When User clicks on project Financial (94)
    Then Project Financial is shown (94)

   Scenario: Should be able to check project others after clicking on a specific project
    Given Projects site is opened
    When User clicks on project Others (94)
    Then Project Others is shown (94)

   Scenario: Should change displayed project details after selecting another project
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks on project (90)
    Then Project Information is changed

Feature: Templates full screen 

   As a user I want to be able to open template details in full screen mode
    @templatesPage
   Scenario: Should be able to open template information in full screen mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Full screen icon
    Then Template Information is shown in full screen mode

   Scenario: Should be able to open template schedule in full screen mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Full screen icon
    Then Template Information is shown in full screen mode
    When User clicks template Schedule in full screen mode
    Then Template Schedule is shown in full screen mode

   Scenario: Should be able to open template agreement in full screen mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Full screen icon
    Then Template Information is shown in full screen mode
    When User clicks template Agreement in full screen mode
    Then Template Agreement is shown in full screen mode

   Scenario: Should be able to open template financial in full screen mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Full screen icon
    Then Template Information is shown in full screen mode
    When User clicks template Financial in full screen mode
    Then Template Financial is shown in full screen mode

   Scenario: Should be able to open template others in full screen mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Full screen icon
    Then Template Information is shown in full screen mode
    When User clicks template Others in full screen mode
    Then Template Others is shown in full screen mode

   Scenario: Should be able to edit template from full screen mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Full screen icon
    Then Template Information is shown in full screen mode
    When User clicks Edit icon in full screen mode
    Then Template edit mode is opened

Feature: Projects full screen 

   As a user I want to be able to open project details in full screen mode
    @projectsPage
   Scenario: Should be able to open project information in full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode

   Scenario: Should be able to open project schedule in full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode
    When User clicks project Schedule in full screen mode
    Then Project Schedule is shown in full screen mode

   Scenario: Should be able to open project agreement in full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode
    When User clicks project Agreement in full screen mode
    Then Project Agreement is shown in full screen mode

   Scenario: Should be able to open project financial in full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode
    When User clicks project Financial in full screen mode
    Then Project Financial is shown in full screen mode

   Scenario: Should be able to open project files in full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode
    When User clicks project Files in full screen mode
    Then Project Files is shown in full screen mode

   Scenario: Should be able to open project others in full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode
    When User clicks project Others in full screen mode
    Then Project Others is shown in full screen mode

   Scenario: Should be able to edit project from full screen mode
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Full screen icon
    Then Project Information is shown in full screen mode
    When User clicks Edit icon in full screen mode
    Then Project edit mode is opened

Feature: Templates changelog 

   As a user I want to be able to check changes made to a template
    @templatesPage
   Scenario: Should be able to open template changelog
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Show Changelog
    Then Changelog is shown

   Scenario: Should show no changes made in changelog if template was never modified
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Show Changelog
    Then Changelog is shown
    And Message No changes is displayed

Feature: Projects changelog 

   As a user I want to be able to check changes made to a project
    @projectsPage
   Scenario: Should be able to open project changelog
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Show Changelog
    Then Changelog is shown

   Scenario: Should show no changes made in changelog if project was never modified
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Show Changelog
    Then Changelog is shown
    And Message No changes is displayed

Feature: Templates edit 

   As a user I want to be able to edit template data
    @templatesPage
   Scenario: Should be able to edit template information
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Edit template
    Then Template Information is in edit mode
    When User types to API input
    And User clicks Save
    Then Changed template Information is shown (94) 

   Scenario: Should be able to edit template schedule
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Schedule (94)
    And User clicks Edit template
    Then Template Schedule is in edit mode
    When User types to PMB approval date input
    And User clicks Save
    Then Changed template Schedule is shown (94)

   Scenario: Should be able to edit template agreement
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Agreement (94)
    Then Template Agreement is shown (94)
    And User clicks Edit template
    Then Template Agreement is in edit mode
    When User types to Supply period input
    And User clicks Save
    Then Changed template Agreement is shown (94)

   Scenario: Should be able to edit template financial
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Financial (94)
    Then Template Financial is shown (94)
    And User clicks Edit template
    Then Template Financial is in edit mode
    When User types to License cost input
    And User clicks Save
    Then Changed template Financial is shown (94)

   Scenario: Should be able to edit template others
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Others (94)
    Then Template Others is shown (94)
    And User clicks Edit template
    Then Template Others is in edit mode
    When User types to Reference product input
    And User clicks Save
    Then Changed template Others is shown (94)

   Scenario: Should be able to cancel edition
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Others (94)
    Then Template Others is shown (94)
    And User clicks Edit template
    Then Template Others is in edit mode
    When User click Cancel
    Then Template Others is shown (94)

   Scenario: Should not be able to select other templates when in edit mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Edit template
    Then Template Information is in edit mode
    And Template table is darkened

Feature: Projects edit 

   As a user I want to be able to edit project data
    @projectsPage
   Scenario: Should be able to edit project information
    Given Projects site is opened
    When User clicks on project (94)
    Then Project Information is shown
    When User clicks Edit project
    Then Project Information is in edit mode
    When User types to API input
    And User clicks Save
    Then Changed project Information is shown (94) 

   Scenario: Should be able to edit template schedule
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Schedule (94)
    And User clicks Edit template
    Then Template Schedule is in edit mode
    When User types to PMB approval date input
    And User clicks Save
    Then Changed template Schedule is shown (94)

   Scenario: Should be able to edit template agreement
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Agreement (94)
    Then Template Agreement is shown (94)
    And User clicks Edit template
    Then Template Agreement is in edit mode
    When User types to Supply period input
    And User clicks Save
    Then Changed template Agreement is shown (94)

   Scenario: Should be able to edit template financial
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Financial (94)
    Then Template Financial is shown (94)
    And User clicks Edit template
    Then Template Financial is in edit mode
    When User types to License cost input
    And User clicks Save
    Then Changed template Financial is shown (94)

   Scenario: Should be able to edit template others
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Others (94)
    Then Template Others is shown (94)
    And User clicks Edit template
    Then Template Others is in edit mode
    When User types to Reference product input
    And User clicks Save
    Then Changed template Others is shown (94)

   Scenario: Should be able to cancel edition
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks on template Others (94)
    Then Template Others is shown (94)
    And User clicks Edit template
    Then Template Others is in edit mode
    When User click Cancel
    Then Template Others is shown (94)

   Scenario: Should not be able to select other templates when in edit mode
    Given Templates site is opened
    When User clicks on template (94)
    Then Template Information is shown
    When User clicks Edit template
    Then Template Information is in edit mode
    And Template table is darkened

Feature: Templates creation 

   As a user I want to be able to create new templates
    @templatesPage
   Scenario: Should be able to create new template with mandatory data only
    Given Templates site is opened
    When User clicks Create new template
    Then Template creation form is opened
    When User selects source (License-in)
    And User selects Project Manager (Maciej Piwowarski)
    And User selects Molecule (1-Propanol)
    And User provides Strength (99)
    And User selects Pharmaceutical Form (Herbal)
    And User clicks Create template
    Then New template1 should be created

   Scenario: Should be able to create new template with all data
    Given Templates site is opened
    When User clicks Create new template
    Then Template creation form is opened
    When User selects source (License-in)
    And User selects Project Manager (Maciej Piwowarski)
    And User selects Molecule (1-Propanol)
    And User provides Strength (99)
    And User selects Pharmaceutical Form (Herbal)
    And User selects Therapeutical area (Neurology)
    And User selects Confidential
    And User clicks Create template
    Then New template2 should be created

   Scenario: Should not be able to create new template with no mandatory data
    Given Templates site is opened
    When User clicks Create new template
    Then Template creation form is opened
    When User clicks Create template
    Then Template is not saved
    When User selects source (License-in)
    When User clicks Create template
    Then Template is not saved
    And User selects Project Manager (Maciej Piwowarski)
    When User clicks Create template
    Then Template is not saved
    And User selects Molecule (1-Propanol)
    When User clicks Create template
    Then Template is not saved
    And User provides Strength (99)
    When User clicks Create template
    Then Template is not saved
