const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center p-8">
            <div className="max-w-md text-center">
                <div className="grid grid-cols-3 gap-5">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`aspect-square rounded-2xl bg-primary/10 ${i % 2 === 0 }`}
                        />
                    ))}
                </div>
                <h2 className="text-xl  mb-4">{title}</h2>
                <p className="text-base-content">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;