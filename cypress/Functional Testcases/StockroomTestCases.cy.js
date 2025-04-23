/* 

## Test Case 1: Successfully Scan Data Matrix and Pull Up Correct Item Information 

Objective: Ensure that scanning a Data Matrix correctly pulls up the correct item along with its lot number, expiration date, and serial number (if applicable). 

 Steps: 
1. Locate and scan a valid Data Matrix barcode. 
2. Verify that the correct product is displayed. 
3.Check that the lot number, expiration date, and serial number (if applicable) are automatically populated. 
4.  Expected Result: The correct product is displayed with the corresponding lot number, expiration date, and serial number (if applicable). Shape 


## Test Case 2: Scan General Product Label 

Objective: Verify that scanning a general product label returns the correct product. 

Steps: 
1.Scan a general product label. 
2.Verify that the system correctly identifies the product. 
3.Expected Result: The system returns the correct product associated with the scanned label. 
4. Shape 

## Test Case 3: Scan Lot/Serial Number Specific Label 

Objective: Ensure that scanning a lot/serial number-specific label returns the correct lot/serial number. 

Steps: 
1.Scan a lot/serial number-specific label. 
2.Verify that the system pulls up the correct lot/serial number. 
3.Expected Result: The system identifies and shows the correct lot/serial number for the scanned label. 
4. Shape 

## Test Case 4: Serialized Product Shows Serial Number Field 

Objective: Ensure that serialized products display a serial number field when selected. 

Steps: 
1.Select a serialized product. 
2.Verify that a serial number field appears for the serialized unit of measure (UOM). 
3.Expected Result: The system displays the serial number field. 
Shape 

## Test Case 5: Serial Number Auto-Generation When Field is Empty 

Objective: Ensure that if no serial number is entered, the system generates one automatically. 

Steps: 
1.Select a serialized product and leave the serial number field empty. 
2.Verify that a serial number is generated for the product. 
3. Expected Result: The system automatically generates a serial number for the scanned product. 
Shape 

## Test Case 6: Prevent Multiple Quantity with Same Serial Number 

Objective: Ensure that the system prevents scanning multiple quantities with the same serial number. 

Steps: 
Scan a serialized product. 
Attempt to scan the same serial number more than once. 
Verify that the system displays an error message. 
Expected Result: The system prevents scanning the same serial number twice and displays an error message. 
Shape 

Test Case 7: Prevent Duplicate Serial Number Entry 

Objective: Ensure that the system prevents scanning a product if the serial number already exists. 

Steps: 
Scan a serialized product with a serial number that already exists in the system. 
Verify that the system prevents the scan and displays a message indicating the serial number already exists. 
Expected Result: The system prevents scanning of the product with the existing serial number and displays a suitable error message. 
Shape 

Test Case 8: Larger UOM with No Serial Number 

Objective: Ensure that a larger UOM can be added without entering a serial number, and the system generates serial numbers for each unit. 

Steps: 
Select a serialized product. 
Choose a larger UOM (e.g., box with multiple units). 
Leave the serial number field empty. 
Verify that the system generates a serial number for each serialized unit within the larger UOM. 
Expected Result: The system generates a serial number for each serialized unit within the larger UOM. 
Shape 

Test Case 9: Larger UOM with Serial Number 

Objective: Ensure that a serialized product added within a larger UOM does not allow entering a serial number for the whole UOM. 

Steps: 
Select a serialized product. 
Choose a larger UOM (e.g., box with multiple units). 
Try to enter a serial number for the larger UOM. 
Verify that the serial number field is disabled for the larger UOM. 
Expected Result: The serial number field should be disabled for the larger UOM. 
Shape 

Test Case 10: Search and Add Product by Product Name 

Objective: Ensure that a product can be found by its name and selected for the add function. 

Steps: 
Enter the product name in the search field. 
Select the product from the search results. 
Add the product to the system. 
Expected Result: The correct product is found and added successfully. 
Shape 

Test Case 11: Search and Add Product by Manufacturer Code 

Objective: Ensure that a product can be found by its manufacturer code and selected for the add function. 

Steps: 
Enter the manufacturer code in the search field. 
Select the product from the search results. 
Add the product to the system. 
Expected Result: The correct product is found and added successfully. 
Shape 

Test Case 12: Expiration Date Entry Requirement 

Objective: Ensure that if an expiration date is required, the system prompts the user to enter it before scanning the product. 

Steps: 
Scan a product that requires an expiration date. 
Verify that the system prompts the user to enter an expiration date. 
Expected Result: The system prompts for an expiration date if it is required for the product. 
Shape 

Test Case 13: Add Product to Selected Shelf 

Objective: Ensure that the product is added to the selected shelf. 

Steps: 
Select a shelf. 
Add a product to the selected shelf. 
Verify that the product appears on the selected shelf. 
Expected Result: The product is successfully added to the selected shelf. 
Shape 

Test Case 14: Add New Shelf 

Objective: Ensure that a new shelf is added to the system when a new shelf name is entered. 

Steps: 
Enter a new shelf name in the shelf input field. 
Add the shelf. 
Verify that the new shelf appears in the system. 
Expected Result: The new shelf is successfully added. 
Shape 

Test Case 15: Pricing Adjustment Based on UOM Selection 

Objective: Ensure that the pricing adjusts correctly according to the UOM selected. 

Steps: 
Select different UOM options for a product. 
Verify that the price adjusts according to the UOM selected. 
Expected Result: Pricing adjusts according to the selected UOM. 
Shape 

Test Case 16: Default Supplier in Supplier Drop-Down 

Objective: Ensure that the default supplier for a product is selected automatically in the supplier drop-down. 

Steps: 
Select a product. 
Verify that the default supplier is pre-selected in the supplier drop-down. 
Expected Result: The default supplier is selected automatically for the product. 
Shape 

Test Case 17: Supplier Field Hidden When Adjustment is Selected 

Objective: Ensure that the supplier field is hidden when the reason selected is "Adjustment." 

Steps: 
Select "Adjustment" as the reason. 
Verify that the supplier field is hidden. 
Expected Result: The supplier field should not appear when "Adjustment" is selected as the reason. 
Shape 

Test Case 18: Successfully Scan and Input Product Information 

Objective: Ensure that a product can be scanned with all information entered correctly. 

Steps: 
Scan a product barcode. 
Ensure all required information (expiration date, lot number, serial number) is entered. 
Verify that the product is scanned in successfully. 
Expected Result: The product is successfully scanned and all relevant information is correctly entered. 
*/