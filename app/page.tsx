import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import ServiceTypes from '@/components/ServiceTypes';
import EnterpriseSolutions from '@/components/EnterpriseSolutions';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-obsidian selection:bg-champagne selection:text-black">
            <Navbar />
            <Hero />
            <Ecosystem />
            <ServiceTypes />
            <EnterpriseSolutions />
            <Waitlist />
            <Footer />
        </main>
    );
}
