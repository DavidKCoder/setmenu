import CreateRestaurantForm from "@/components/CreateRestaurantForm";

export default function Page() {
    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Create a New Restaurant</h1>
            <CreateRestaurantForm />
        </div>
    );
}
