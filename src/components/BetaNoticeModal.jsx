"use client";

export default function BetaNoticeModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg p-6 w-[380px] shadow-xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                    &times;
                </button>

                <div className="flex flex-col items-center">
          <span
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-yellow-200 text-yellow-800 rounded-full mb-3">
            Beta Version
          </span>
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
                        Welcome to our Beta Version!
                    </h2>
                    <p className="text-gray-600 text-center text-sm mb-5">
                        * You’re using a Beta version of our application. Features might change or evolve. We’d love your
                        feedback to help us improve!
                    </p>
                    <p className="text-gray-600 text-center text-sm mb-5">
                        * Դուք օգտագործում եք մեր հավելվածի Beta տարբերակը։ Ֆունկցիաները կարող են փոխվել կամ զարգանալ։
                        Մենք
                        կցանկանայինք լսել ձեր կարծիքը, որը կօգնի մեզ կատարելագործվել։
                    </p>
                    <p className="text-gray-600 text-center text-sm mb-5">
                        * Вы используете Beta-версию нашего приложения. Функции могут меняться или совершенствоваться. Мы
                        будем рады вашим отзывам, которые помогут нам стать лучше.
                    </p>
                </div>
            </div>
        </div>
    );
}
