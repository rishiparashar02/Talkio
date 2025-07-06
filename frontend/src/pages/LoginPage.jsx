import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      login(formData);
    } else {
      // Placeholder for register handler
      console.log("Register user with:", formData);
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* Logo / Heading */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">{isLogin ? "Welcome Back" : "Create Account"}</h1>
              <p className="text-base-content/60">
                {isLogin ? "Sign in to your account" : "Register to start chatting"}
              </p>
            </div>
          </div>

          {/* Switcher */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsLogin(true)}
              className={`btn btn-sm ${isLogin ? "btn-primary" : "btn-ghost"}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`btn btn-sm ${!isLogin ? "btn-primary" : "btn-ghost"}`}
            >
              Register
            </button>
          </div>

          {/* Animated Form */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "register"}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="email"
                    className="input input-bordered w-full pl-10"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-10"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-base-content/40" />
                    ) : (
                      <Eye className="h-5 w-5 text-base-content/40" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  isLogin ? "Sign In" : "Sign Up"
                )}
              </button>
            </motion.form>
          </AnimatePresence>

          {/* Switch back link */}
          <div className="text-center text-sm text-base-content/60">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span className="link link-primary" onClick={() => setIsLogin(false)}>
                  Register
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="link link-primary" onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Image or Illustration */}
      {/* Right Side - Illustration */}
      {/* Right Side - Chat Preview Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-base-200 p-10 text-base-content space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-primary">Talkio</h2>
          <p className="text-sm text-base-content/70">
            Fast. Secure. Real-time Chat.
          </p>
        </div>

        {/* Chat Bubbles Mock */}
        <div className="mt-4 bg-base-100 rounded-xl shadow-md p-5 w-80 space-y-4">
          <div className="bg-base-200 rounded-xl p-2 text-sm w-fit max-w-[70%]">
            Hey there! 👋
          </div>
          <div className="bg-primary text-primary-content rounded-xl p-2 text-sm self-end ml-auto w-fit max-w-[70%]">
            Hi! Ready to talk?
          </div>
          <div className="bg-base-200 rounded-xl p-2 text-sm w-fit max-w-[70%]">
            Always 😄
          </div>
        </div>

        {/* Illustration */}
        <img
          src=""
          alt="Chat Illustration"
          className="w-32 opacity-80"
        />
      </div>


    </div>
  );
};

export default LoginPage;