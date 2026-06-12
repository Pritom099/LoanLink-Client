import { Mail, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Company info */}
                    <div>
                        <div className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                LL
                            </div>
                            <span className='text-black'>LoanLink</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Fast, transparent microloan solutions for everyone. Get funded quickly with our simple approval process.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/loans" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Browse Loans</a></li>
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rates & Fees</a></li>
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                            <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                        <div className="space-y-2">
                            <a
                                href="mailto:support@loanlink.com"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail size={16} />
                                support@loanlink.com
                            </a>

                            <a
                                href="tel:+18005551234"
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone size={16} />
                                1-800-555-1234
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        © 2026 LoanLink. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;