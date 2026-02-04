const primaryColorLight = '#33a6c6'; // primary
const primaryColorDark = '#33a6c6';  // adjust if needed

const gradient1 = "#00A3AD"
const gradient2 = "#006D75"

export const Colors = {
    gradient: {
        start: gradient1,
        end: gradient2
    },
    light: {
        text: '#2c2f36',            // --text
        background: '#3eb0c0',      // --background
        primary: primaryColorLight,        // --primary
        icon: '#737373',             // --muted-foreground
        tabIconDefault: '#737373',   // --muted-foreground
        tabIconSelected: primaryColorLight, // --primary
        card: '#ffffff',             // --card
        cardForeground: '#ededed',   // --card-foreground
        muted: '#f5f5f5',            // --muted
        mutedForeground: '#737373',  // --muted-foreground
        destructive: '#f25353',      // --destructive
        border: '#ededed',           // --border
        input: '#e5e5e5',            // --input
        ring: '#a1a1a1',             // --ring
    },
    dark: {
        text: '#ededed',             // --foreground (or adjust)
        background: '#151718',       // your actual dark background
        primary: primaryColorDark,
        icon: '#9BA1A6',             // from your old dark theme
        tabIconDefault: '#9BA1A6',
        tabIconSelected: primaryColorDark,
        card: '#000000',             // adjust dark card
        cardForeground: '#ededed',
        muted: '#1a1a1a',            // dark muted
        mutedForeground: '#9BA1A6',
        destructive: '#f25353',
        border: '#333333',
        input: '#222222',
        ring: '#555555',
    },
};
