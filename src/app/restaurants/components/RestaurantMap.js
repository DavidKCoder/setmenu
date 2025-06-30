export default function RestaurantMap({ location }) {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
            <div className="rounded-xl overflow-hidden w-full h-96">
                <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                />
            </div>
        </div>
    );
}
