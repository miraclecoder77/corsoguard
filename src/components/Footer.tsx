import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 border-t border-border bg-background/50 backdrop-blur-md relative z-10">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground font-mono">
                    &copy; {new Date().getFullYear()} CorsoGuard. All rights reserved.
                </div>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="/privacy"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="/disclosure"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        Disclosure
                    </Link>
                    <Link
                        href="/blog"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
