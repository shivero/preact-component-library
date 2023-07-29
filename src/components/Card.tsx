import { useState } from 'preact/hooks';

type CardProps = {
    title: string;
    description: string;
};

export const Card = ({ title, description }: CardProps) => {

    return (
        <div className="bg-slate-100 shadow-lg overflow-hidden fixed bottom-0 left-0 right-0 ">
            <div className="container mx-auto px-6 py-4">
                <h2 className="text-2xl mb-2">{title}</h2>
                <div className="grid gap-8 grid-cols-[2fr_2fr_1fr]">
                    <div>
                        {/* tailwindcss switch like checkbox */}
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <SwitchCheckbox />
                        </div>

                        <div className="text-gray-700 text-sm">
                            <p className="pb-4">Dzięki plikom cookies i technologiom pokrewnym oraz przetwarzaniu Twoich danych, możemy zapewnić, że dopasujemy do Ciebie wyświetlane treści.</p>
                            <p className="pb-4">Wyrażając zgodę na przechowywanie informacji na urządzeniu końcowym lub dostęp do nich i przetwarzanie danych (w tym w obszarze profilowania, analiz rynkowych i statystycznych) sprawiasz, że łatwiej będzie odnaleźć Ci w Allegro dokładnie to, czego szukasz i potrzebujesz.</p>
                            <p className="pb-4">Administratorem Twoich danych będzie Allegro oraz niektórzy partnerzy, z którymi współpracujemy.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700 text-sm">
                            <p><strong>Przetwarzamy dane w celach:</strong></p>
                            <p className="pb-3">Ułatwienia korzystania z naszych stron, prezentowania spersonalizowanych treści i reklam oraz ich pomiaru, tworzenia statystyk, poprawy funkcjonalności strony.</p>
                            Zgodę wyrażasz dobrowolnie. Możesz ją w każdym momencie wycofać lub ponowić w zakładce Ustawienia plików cookies na stronie głównej. Wycofanie zgody nie wpływa na legalność uprzedniego przetwarzania.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="bg-orange-600 w-full py-2 text-white tracking-widest uppercase">ok, zgadzam się</button>
                        <button className=" w-full py-2 text-teal-800 tracking-widest uppercase">nie zgadzam się</button>
                        <button className=" w-full py-2 text-teal-800 tracking-widest uppercase">zmieniam zgody</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SwitchCheckbox = () => {
    const [isToggled, setIsToggled] = useState(false)
    if (isToggled) {
        return (
            <>
                <input type="checkbox" onClick={() => setIsToggled(!isToggled)} name="toggle" id="toggle" className="toggle-checkbox right-0 absolute  block w-6 h-6 rounded-full transition-all bg-white border-4 appearance-none cursor-pointer" checked />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-blue-400 cursor-pointer"></label>
            </>

        )
    }
    else {
        return (
            <>
                <input type="checkbox" onClick={() => setIsToggled(!isToggled)} name="toggle" id="toggle" className="toggle-checkbox right-4 absolute block transition-all w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </>
        )
    }

}