#include <stdio.h>
#include <string.h>

// Structure to hold property details
typedef struct {
    char name[50];
    char location[50];
    float price;
} Property;

// Global array to store properties and a counter for the number of properties
#define MAX_PROPERTIES 100
Property properties[MAX_PROPERTIES];
int property_count = 0;

// Function declarations
void add_property();
void view_properties();
void search_properties(float min_price, float max_price);

int main() {
    int choice;
    do {
        printf("\nProperty Listing System\n");
        printf("1. Add Property\n");
        printf("2. View Properties\n");
        printf("3. Search Properties\n");
        printf("4. Exit\n");
        printf("Choose an option: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                add_property();
                break;
            case 2:
                view_properties();
                break;
            case 3: {
                float min_price, max_price;
                printf("Enter minimum price: ");
                scanf("%f", &min_price);
                printf("Enter maximum price: ");
                scanf("%f", &max_price);
                search_properties(min_price, max_price);
                break;
            }
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 4);

    return 0;
}

// Function to add a property
void add_property() {
    if (property_count >= MAX_PROPERTIES) {
        printf("Property list is full!\n");
        return;
    }

    Property new_property;
    printf("Enter property name: ");
    scanf(" %[^\n]%*c", new_property.name);  // %[^\n]%*c is used to read a string with spaces
    printf("Enter location: ");
    scanf(" %[^\n]%*c", new_property.location);
    printf("Enter price: ");
    scanf("%f", &new_property.price);

    properties[property_count++] = new_property;
    printf("Property added successfully!\n");
}

// Function to view all properties
void view_properties() {
    if (property_count == 0) {
        printf("No properties available.\n");
        return;
    }

    printf("\nList of Properties:\n");
    for (int i = 0; i < property_count; i++) {
        printf("Property %d:\n", i + 1);
        printf("Name: %s\n", properties[i].name);
        printf("Location: %s\n", properties[i].location);
        printf("Price: %.2f\n", properties[i].price);
        printf("--------------------------\n");
    }
}

// Function to search properties within a price range
void search_properties(float min_price, float max_price) {
    int found = 0;
    printf("\nProperties between %.2f and %.2f:\n", min_price, max_price);
    for (int i = 0; i < property_count; i++) {
        if (properties[i].price >= min_price && properties[i].price <= max_price) {
            printf("Property %d:\n", i + 1);
            printf("Name: %s\n", properties[i].name);
            printf("Location: %s\n", properties[i].location);
            printf("Price: %.2f\n", properties[i].price);
            printf("--------------------------\n");
            found = 1;
        }
    }
    if (!found) {
        printf("No properties found in the specified price range.\n");
    }
}
