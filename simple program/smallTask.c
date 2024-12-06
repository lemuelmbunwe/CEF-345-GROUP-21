#include <stdio.h>

char gradeStudent(int score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else if (score >= 0) {
        return 'F';
    } else {
        return 'X'; // Invalid score
    }
}

int main() {
    int score;
    
    printf("Enter the student's score (0-100): ");
    scanf("%d", &score);
    
    char grade = gradeStudent(score);
    
    if (grade == 'X') {
        printf("Invalid score entered. Please enter a score between 0 and 100.\n");
    } else {
        printf("The student's grade is: %c\n", grade);
    }
    
    return 0;
}