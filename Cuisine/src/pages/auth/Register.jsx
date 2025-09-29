import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Eye, EyeOff, Mail, Lock, User, Phone, Chrome, 
  CheckCircle, XCircle, ArrowLeft, Check, X 
} from "lucide-react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptNewsletter: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: []
  });

  // Validation de la force du mot de passe
  const checkPasswordStrength = (password) => {
    const feedback = [];
    let score = 0;

    if (password.length >= 8) {
      score += 1;
    } else {
      feedback.push("Au moins 8 caractères");
    }

    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Une lettre minuscule");
    }

    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Une lettre majuscule");
    }

    if (/\d/.test(password)) {
      score += 1;
    } else {
      feedback.push("Un chiffre");
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      score += 1;
    } else {
      feedback.push("Un caractère spécial");
    }

    return { score, feedback };
  };

  // Validation complète du formulaire
  const validateForm = () => {
    const newErrors = {};

    // Validation prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
    }

    // Validation nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation téléphone (optionnel mais format vérifié si renseigné)
    if (formData.phone && !/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
    }

    // Validation mot de passe
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (passwordStrength.score < 3) {
      newErrors.password = "Le mot de passe n'est pas assez fort";
    }

    // Validation confirmation mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "La confirmation du mot de passe est requise";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    // Validation conditions d'utilisation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Vous devez accepter les conditions d'utilisation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulation d'une requête API
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Ici vous intégreriez votre logique d'inscription
      console.log("Inscription avec:", formData);
      
      // Simulation d'une erreur (email déjà utilisé)
      if (formData.email === "test@exists.com") {
        setErrors({ general: "Cette adresse email est déjà utilisée" });
        return;
      }
      
      // Redirection après inscription réussie
      // navigate("/login", { state: { message: "Compte créé avec succès !" } });
      
    } catch (error) {
      setErrors({ general: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsLoading(false);
    }
  };

  // Inscription Google
  const handleGoogleRegister = async () => {
    setIsLoading(true);
    try {
      console.log("Inscription Google");
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      setErrors({ general: "Erreur lors de l'inscription Google" });
    } finally {
      setIsLoading(false);
    }
  };

  // Gestion des changements de champs
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Vérification de la force du mot de passe en temps réel
    if (field === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
    
    // Effacer l'erreur du champ lors de la saisie
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // Composant indicateur de force du mot de passe
  const PasswordStrengthIndicator = () => {
    const getStrengthText = (score) => {
      switch (score) {
        case 0:
        case 1: return "Très faible";
        case 2: return "Faible";
        case 3: return "Moyen";
        case 4: return "Fort";
        case 5: return "Très fort";
        default: return "";
      }
    };

    const getStrengthColor = (score) => {
      switch (score) {
        case 0:
        case 1: return "bg-red-500";
        case 2: return "bg-orange-500";
        case 3: return "bg-yellow-500";
        case 4: return "bg-blue-500";
        case 5: return "bg-green-500";
        default: return "bg-gray-300";
      }
    };

    if (!formData.password) return null;

    return (
      <div className="space-y-2 mt-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className={`h-full rounded-full transition-all duration-300 ${getStrengthColor(passwordStrength.score)}`}
              style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
            />
          </div>
          <span className={`text-xs font-medium ${
            passwordStrength.score >= 3 ? 'text-green-600' : 'text-orange-600'
          }`}>
            {getStrengthText(passwordStrength.score)}
          </span>
        </div>
        {passwordStrength.feedback.length > 0 && (
          <div className="text-xs text-gray-600">
            <p>Il manque :</p>
            <ul className="list-disc list-inside ml-2">
              {passwordStrength.feedback.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const getValidationIcon = (field) => {
    if (formData[field] && !errors[field]) {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
    if (errors[field]) {
      return <XCircle className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          
            <Link to="/" className="items-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Saveur d'<span className="text-orange-500">Afrique</span>
              </h1>
            </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Créer un compte</h1>
          <p className="text-gray-600">Rejoignez-nous pour découvrir nos délicieux plats</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="space-y-1 pb-6">
            
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

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Prénom et Nom */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    Prénom *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`pl-10 h-11 border-2 rounded-lg transition-all ${
                        errors.firstName ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                      }`}
                    />
                    {/* Icône de validation */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {getValidationIcon('firstName')}
                    </div>
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Nom *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`pl-10 h-11 border-2 rounded-lg transition-all ${
                        errors.lastName ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                      }`}
                    />
                    {/* Icône de validation */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {getValidationIcon('lastName')}
                    </div>
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Adresse email *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@exemple.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`pl-10 pr-10 h-11 border-2 rounded-lg transition-all ${
                      errors.email ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                    }`}
                  />
                  {/* Icône de validation */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {getValidationIcon('email')}
                  </div>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Téléphone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Téléphone (optionnel)
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`pl-10 pr-10 h-11 border-2 rounded-lg transition-all ${
                      errors.phone ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                    }`}
                  />
                  {/* Icône de validation */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {getValidationIcon('phone')}
                  </div>
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Mot de passe */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Mot de passe *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Créez un mot de passe sécurisé"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`pl-10 pr-10 h-11 border-2 rounded-lg transition-all ${
                      errors.password ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-orange-400'
                    }`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                </div>
                <PasswordStrengthIndicator />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirmation mot de passe */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  Confirmer le mot de passe *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className={`pl-10 pr-10 h-11 border-2 rounded-lg transition-all ${
                      errors.confirmPassword ? 'border-red-300 focus:border-red-400' : 
                      formData.confirmPassword && formData.password === formData.confirmPassword ? 'border-green-300 focus:border-green-400' :
                      'border-gray-200 focus:border-orange-400'
                    }`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-md"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Eye className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                  {/* Indicateur de correspondance */}
                  {formData.confirmPassword && (
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                      {formData.password === formData.confirmPassword ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Conditions d'utilisation */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", checked)}
                    className="mt-1 flex-shrink-0" // Ajoutez `flex-shrink-0`
                  />
                  <div className="flex-1 min-w-0"> {/* Encapsulez le texte dans un conteneur flexible */}
                    <Label
                      htmlFor="acceptTerms"
                      className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
                    >
                      J'accepte les{" "}
                      <Link to="/terms" className="text-orange-600 hover:text-orange-700 underline">
                        conditions d'utilisation
                      </Link>{" "}
                      et la{" "}
                      <Link to="/privacy" className="text-orange-600 hover:text-orange-700 underline">
                        politique de confidentialité
                      </Link>{" "}
                      *
                    </Label>
                    {errors.acceptTerms && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        {errors.acceptTerms}
                      </p>
                    )}
                  </div>
                </div>


                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="acceptNewsletter"
                    checked={formData.acceptNewsletter}
                    onCheckedChange={(checked) => handleInputChange("acceptNewsletter", checked)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="acceptNewsletter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Je souhaite recevoir des offres spéciales et actualités par email
                  </Label>
                </div>
              </div>

              {/* Bouton d'inscription */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Création du compte...
                  </div>
                ) : (
                  "Créer mon compte"
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">ou</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Inscription Google */}
             <button
             onClick={handleGoogleRegister}
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

            {/* Lien vers connexion */}
            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                Vous avez déjà un compte ?{" "}
                <Link
                  to="/auth/login"
                  className="text-orange-600 hover:text-orange-700 font-semibold hover:underline transition-colors"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;