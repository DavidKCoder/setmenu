import { useState } from "react";
import DatePicker from "react-datepicker";
import { RxCalendar } from "react-icons/rx";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker({excludedDates, highlightDates}) {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-800">Expected Events</h2>
            <div className="relative">
                <DatePicker
                    popperPlacement="left"
                    selected={selectedDate}
                    onChange={setSelectedDate}
                    minDate={new Date()}
                    className="cursor-pointer"
                    dateFormat="yyyy-MM-dd"
                    excludeDates={excludedDates}
                    highlightDates={highlightDates}
                    disabledKeyboardNavigation
                    customInput={
                        <span className="flex items-center">
                            <RxCalendar size={23} className="text-gray-700" />
                        </span>}
                />
            </div>
        </div>
    );
}
