// data.js - Dummy data for Crypto Crime Watcher prototype

// Array of objects representing suspicious crypto addresses
const dummyData = [
    {
        address: '0x123abc456def7890',  // Example wallet address
        category: 'High',          // Risk level
        source: 'Dark Web',        // Where the address was detected
        activity: 'Fraudulent Transactions',  // Type of suspicious activity
        lastSeen: '2023-10-15'     // Last detected date
    },
    {
        address: '0xabcdef1234567890',
        category: 'Medium',
        source: 'Forum',
        activity: 'Suspicious Transfers',
        lastSeen: '2023-09-20'
    },
    {
        address: '0x7890def456abc123',
        category: 'Low',
        source: 'Blockchain Explorer',
        activity: 'Unusual Patterns',
        lastSeen: '2023-08-05'
    },
    {
        address: '0x4567890abc123def',
        category: 'High',
        source: 'Dark Web',
        activity: 'Money Laundering',
        lastSeen: '2023-11-01'
    },
    {
        address: '0xdef123abc4567890',
        category: 'Medium',
        source: 'Social Media',
        activity: 'Phishing Links',
        lastSeen: '2023-07-10'
    }
    // Add more entries as needed for your prototype
];

// If you're using modules, you can export the data
// export default dummyData;

// For a simple prototype, you can access it globally or import it in other JS files.
