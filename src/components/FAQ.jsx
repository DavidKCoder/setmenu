import { forum_splash } from "@/app/fonts";

export const QuestionIcon =
    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd">
        </path>
    </svg>;

export default function FAQ() {
    return (
        <section className="relative bg-white dark:bg-gray-900 z-10">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover  z-10"
            />

            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white underline decoration-orange-300 decoration-2 decoration-solid"
                    style={{ textDecorationColor: "#E9C0A4FF", textUnderlineOffset: "4px", textDecorationThickness: 5 }}
                >
                    Frequently asked questions
                </h2>
                <div
                    className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                    style={{
                        top: -60,
                        left: -60,
                        fontSize: 250
                    }}
                >
                    FAQ
                </div>
                <div
                    className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                {QuestionIcon}
                                How do I reserve a menu for an event?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Choose a restaurant, select your event type, guest count, and preferred date. You’ll
                                then be shown ready-made menu options. Select one and proceed to confirm your
                                reservation.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                {QuestionIcon}
                                Can I customize the menu after selection?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Most menus are pre-set by restaurants for convenience, but some offer flexibility. You
                                can contact the restaurant directly for custom arrangements after reservation.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                {QuestionIcon}
                                Is there any cost to use this platform?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                No, using the platform is completely free for users. You only pay for the menu you
                                choose, directly to the restaurant.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                {QuestionIcon}
                                How do I know if a restaurant is available on my selected date?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                When choosing a date, unavailable dates are automatically filtered. You’ll only see
                                restaurants that can accept your reservation on that date.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                {QuestionIcon}
                                How far in advance can I book an event?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                You can book up to 6 months in advance. It’s recommended to reserve early, especially
                                for weekends or holidays.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                {QuestionIcon}
                                What happens after I make a reservation?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                You’ll receive a confirmation email with your reservation details. The restaurant will
                                also be notified and may contact you to confirm final details if needed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}