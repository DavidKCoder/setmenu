import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import OurStory from "@/components/OurStory";
import PopularRestaurants from "@/components/PopularRestaurants";
import Testimonials from "@/components/Testimonials";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import EventPlanning from "@/components/EventPlanning";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />

            <section id="categories">
                <Categories />
            </section>

            {/*<section id="eventPlanning">*/}
            {/*    <EventPlanning />*/}
            {/*</section>*/}

            <section id="our-story">
                <OurStory />
            </section>

            <section id="stats">
                <Stats />
            </section>

            <section id="popular">
                <PopularRestaurants />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="faq">
                <FAQ />
            </section>
        </>
    );
}
