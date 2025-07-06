import { useState } from "react";
import { Send, Moon, Sun } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("text-sm");
  const [bubbleStyle, setBubbleStyle] = useState("rounded-xl");

  const toggleTheme = () => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">

        {/* Appearance Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Appearance</h2>
          <p className="text-sm text-base-content/70">Customize the look and feel of your chat</p>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-base-300 bg-base-100">
          <span className="text-sm font-medium">Dark Mode</span>
          <button onClick={toggleTheme} className="btn btn-sm">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* Font Size Selector */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-base-300 bg-base-100">
          <span className="text-sm font-medium">Font Size</span>
          <select
            className="select select-sm w-32"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="text-sm">Small</option>
            <option value="text-base">Medium</option>
            <option value="text-lg">Large</option>
          </select>
        </div>

        {/* Bubble Style Selector */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-base-300 bg-base-100">
          <span className="text-sm font-medium">Bubble Style</span>
          <select
            className="select select-sm w-32"
            value={bubbleStyle}
            onChange={(e) => setBubbleStyle(e.target.value)}
          >
            <option value="rounded-xl">Rounded</option>
            <option value="rounded-none">Flat</option>
            <option value="rounded-md">Medium</option>
          </select>
        </div>

        {/* Preview Section */}
        <h3 className="text-lg font-semibold mb-3">Preview</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-4 bg-base-200">
            <div className="max-w-lg mx-auto">
              <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">

                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Rishi Parashar</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] ${bubbleStyle} p-3 shadow-sm
                          ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
                          ${fontSize}
                        `}
                      >
                        <p>This is a preview message.</p>
                        <p className={`text-[10px] mt-1.5 ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}`}>
                          12:24 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className={`input input-bordered flex-1 h-10 ${fontSize}`}
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
