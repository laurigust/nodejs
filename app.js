const express = require('express');
const app = express();

// Replace these with your real app URLs
const androidAppUrl = 'https://play.google.com/store/apps/details?id=com.example.androidapp';
const iosAppUrl = 'https://apps.apple.com/app/id1234567890';
const fallbackUrl = 'https://yourwebsite.com'; // Optional fallback for desktop or unknown devices

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || '';

    if (/android/i.test(userAgent)) {
        res.redirect(androidAppUrl);
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        res.redirect(iosAppUrl);
    } else {
        res.redirect(fallbackUrl);
    }
});

// Optional: health check endpoint
app.get('/health', (req, res) => {
    res.send('OK');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Redirect server running at http://localhost:${PORT}`);
});
