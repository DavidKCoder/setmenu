import { FaCalendarAlt, FaMoneyBillWave, FaUsers, FaUtensils } from "react-icons/fa";
import { MdLocationOn, MdRestaurantMenu } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { IoVideocam } from "react-icons/io5";

export const EventInfo = ({date, restaurantName, people, location, eventType, pricePerPerson}) => {
    return (
        <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Event Summary</h2>
            <ul className="space-y-1.5 text-sm sm:text-md">
                <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                    <FaCalendarAlt className="text-amber-500" />
                    <span className="text-gray-400">Date:</span> {date}
                </li>
                <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                    <MdRestaurantMenu className="text-amber-500" />
                    <span className="text-gray-400">Restaurant:</span> {restaurantName}
                </li>
                <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                    <MdLocationOn className="text-amber-500" />
                    <span className="text-gray-400">Location:</span> {location}
                </li>
                <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                    <FaUsers className="text-amber-500" />
                    <span className="text-gray-400">Guests:</span> {people}
                </li>
                <li className="flex items-center gap-2 text-warmGray-50 font-mono capitalize">
                    <FaUtensils className="text-amber-500" />
                    <span className="text-gray-400">Event Type:</span> {eventType}
                </li>
                <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                    <LuNotebookText className="text-amber-500" />
                    <span className="text-gray-400">Menu:</span> Classic Choice
                </li>
            </ul>
            <hr className="my-6 border-t border-amber-400 opacity-30 font-mono" />
            <ul className="space-y-1.5 text-sm sm:text-md font-mono">
                <li className="flex items-center gap-2 text-warmGray-50">
                    <FaMoneyBillWave className="text-amber-500" />
                    <span className="text-gray-400">Total:</span>{" "}
                    {(+people * +pricePerPerson).toLocaleString("de-DE")} AMD
                </li>
                <li className="flex items-center gap-2 text-warmGray-50">
                    <IoVideocam className="text-amber-500" />
                    <span className="text-gray-400">Extra options:</span> Անվճար DJ / Հանդիսավա / Ֆոտո
                    նկարահանում
                </li>
            </ul>
        </>
    );
};