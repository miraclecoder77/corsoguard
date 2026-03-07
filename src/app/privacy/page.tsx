export default function PrivacyPage() {
    return (
        <div className="min-h-screen p-8 pt-24 max-w-3xl mx-auto prose prose-invert">
            <h1 className="text-4xl font-extrabold text-white mb-6">Privacy Policy</h1>
            <p className="text-neutral-400">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-neutral-300">
                CorsoGuard collects minimal information. Our socialization checklist uses <code>localStorage</code>, meaning your progress is stored entirely on your device. We do not transmit or store this data on our servers.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Advertising & Analytics</h2>
            <p className="text-neutral-300">
                We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline">Google Ads Settings</a>.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. GDPR & CCPA Compliance</h2>
            <p className="text-neutral-300">
                If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights. Because we do not store personal data on our servers, data deletion requests regarding the checklist simply require you to clear your browser cache.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
            <p className="text-neutral-300">
                If you have questions about this privacy policy, contact us at privacy@corsoguard.example.com.
            </p>
        </div>
    );
}
