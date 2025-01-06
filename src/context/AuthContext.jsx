import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      toast.success(`Bienvenido ${result.user.displayName}`);
    } catch (error) {
      console.error("Error durante la autenticación:", error);
      toast.error("Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  const logout = () => {
    auth.signOut();
    setUser(null);
    toast.success("Sesión cerrada correctamente.");
  };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
