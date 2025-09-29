import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import {  toast } from "sonner"; // You need to import `toast` as well
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "connexion@gmail.com",
    password: "Connexion123"
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const navigate = useNavigate();
 const { login } = useAuth();
  // Validation des champs
  const validateForm = () => {
    const newErrors = {};

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation mot de passe
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (formData.email !== "connexion@gmail.com" || formData.password !== "Connexion123") {
        setErrors({ general: "Email ou mot de passe incorrect" });
        toast.error("Email ou mot de passe incorrect");
        return;
      }
          
      

       const userData = { email: formData.email, name: "Utilisateur Test" };
      login(userData);
      
      // ✅ Toast 
     toast.success("Connexion réussie 🎉", {
  description: "Bienvenue sur votre tableau de bord",
});

      // Ajoutez un délai pour laisser le temps au toast de s'afficher
      setTimeout(() => {
        navigate('/client'); // Redirige vers la page du client
      }, 1000); // 1.5 seconde de délai avant la redirection
      

    } catch (error) {
      setErrors({ general: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsLoading(false);
    }
  };


  // Connexion Google
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Ici vous intégreriez l'authentification Google
      console.log("Connexion Google");
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      setErrors({ general: "Erreur lors de la connexion Google" });
    } finally {
      setIsLoading(false);
    }
  };

  // Mot de passe oublié
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    if (!resetEmail) {
      setErrors({ reset: "Veuillez saisir votre email" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resetEmail)) {
      setErrors({ reset: "Format d'email invalide" });
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setResetMessage("Un email de réinitialisation a été envoyé à votre adresse");
      setErrors({});
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetMessage("");
        setResetEmail("");
      }, 3000);
    } catch (error) {
      setErrors({ reset: "Erreur lors de l'envoi de l'email" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ lors de la saisie
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // Fonction pour afficher l'icône de validation
  const getValidationIcon = (field) => {
    if (formData[field] && !errors[field]) {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
    if (errors[field]) {
      return <XCircle className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardHeader className="space-y-4 pb-6">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowForgotPassword(false)}
                className="p-2 hover:bg-orange-50"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Mot de passe oublié
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Saisissez votre email pour recevoir un lien de réinitialisation
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {resetMessage && (
              <Alert className="mb-6 border-green-200 bg-green-50">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <AlertDescription className="text-green-700">
                  {resetMessage}
                </AlertDescription>
              </Alert>
            )}

            {errors.reset && (
              <Alert className="mb-6 border-red-200 bg-red-50">
                <XCircle className="w-4 h-4 text-red-600" />
                <AlertDescription className="text-red-700">
                  {errors.reset}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleForgotPassword} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resetEmail" className="text-gray-700 font-medium">
                  Adresse email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="resetEmail"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className={`pl-11 h-12 border-2 rounded-xl transition-all ${
                      errors.reset ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                    }`}
                  />
                  {/* Ajout de l'icône de validation pour le mot de passe oublié */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {resetEmail && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail) && !errors.reset ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  "Envoyer le lien de réinitialisation"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-1 pb-6">
              <Link to="/" className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                  Saveur d'<span className="text-orange-500">Afrique</span>
                </h1>
              </Link>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">
                Connexion
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Saisissez vos informations pour vous connecter
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Erreur générale */}
              {errors.general && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {errors.general}
                  </AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Adresse email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`pl-11 pr-11 h-12 border-2 rounded-xl transition-all ${
                        errors.email ? 'border-red-300 focus:border-red-400' : 
                        formData.email && !errors.email ? 'border-green-300 focus:border-green-400' :
                        'border-gray-200 focus:border-orange-400'
                      }`}
                    />
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                      {getValidationIcon('email')}
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
                {/* Mot de passe */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Mot de passe
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Votre mot de passe"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className={`pl-11 pr-11 h-12 border-2 rounded-xl transition-all ${
                        errors.password ? 'border-red-300 focus:border-red-400' : 
                        formData.password && !errors.password ? 'border-green-300 focus:border-green-400' :
                        'border-gray-200 focus:border-orange-400'
                      }`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                      {getValidationIcon('password')}
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      {errors.password}
                    </p>
                  )}
                </div>
                {/* Mot de passe oublié */}
                <div className="text-right">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-sm p-0 h-auto"
                  >
                    Mot de passe oublié ?
                  </Button>
                </div>
                {/* Bouton de connexion */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Connexion...
                    </div>
                  ) : (
                    "Se connecter"
                  )}
                </Button>
              </form>
              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-gray-500 text-sm">ou</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 mb-6"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continuez avec Google
              </button>
              {/* Lien vers inscription */}
              <div className="text-center mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  Vous n'avez pas de compte ?{" "}
                  <Link
                    to="/auth/register"
                    className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-colors"
                  >
                    Créer un compte
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default LoginPage;