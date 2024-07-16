/**
 * Represents a view in the application.
 */
class View {
    private isSource: boolean;

    /**
     * Constructor for the View class.
     * @param isSource True if the view should be used as the source of something.
     */
    constructor(isSource: boolean) {
        this.isSource = isSource;
    }

    /**
     * Determines if the view is considered a source.
     * @returns True if the view is a source, otherwise false.
     */
    public isViewSource(): boolean {
        return this.isSource;
    }
}

// Usage example:
const myView = new View(true);
console.log(myView.isViewSource()); // Output: true
