import React, { useState, useEffect } from 'react';
import { AlertCircle, Phone, FileText, TrendingUp, CheckCircle, Clock, Menu, X, ChevronDown, ChevronUp, MapPin, Mail, Star, Award, Users, Target } from 'lucide-react';

export default function CliniqueResilesApp() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    email: '',
    situation: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ nom: '', tel: '', email: '', situation: '', message: '' });
  };

  const Navigation = () => (
    <>
      <div className="bg-red-600 text-white py-2 px-4 text-center font-bold text-sm">
        🚨 URGENCE RÉSILIATION ? Réponse sous 5mn • Tél: 01 XX XX XX XX
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('accueil')}>
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">LA CLINIQUE</h1>
              <p className="text-xs text-gray-600">des Résiliés</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={() => setCurrentPage('accueil')} className={`hover:text-red-600 ${currentPage === 'accueil' ? 'text-red-600' : 'text-gray-700'}`}>Accueil</button>
            <button onClick={() => setCurrentPage('urgence')} className={`hover:text-red-600 ${currentPage === 'urgence' ? 'text-red-600' : 'text-gray-700'}`}>Urgences</button>
            <button onClick={() => setCurrentPage('programme')} className={`hover:text-red-600 ${currentPage === 'programme' ? 'text-red-600' : 'text-gray-700'}`}>Programme</button>
            <button onClick={() => setCurrentPage('temoignages')} className={`hover:text-red-600 ${currentPage === 'temoignages' ? 'text-red-600' : 'text-gray-700'}`}>Témoignages</button>
            <button onClick={() => setCurrentPage('faq')} className={`hover:text-red-600 ${currentPage === 'faq' ? 'text-red-600' : 'text-gray-700'}`}>FAQ</button>
            <button onClick={() => setCurrentPage('apropos')} className={`hover:text-red-600 ${currentPage === 'apropos' ? 'text-red-600' : 'text-gray-700'}`}>À propos</button>
            <button onClick={() => setCurrentPage('contact')} className={`hover:text-red-600 ${currentPage === 'contact' ? 'text-red-600' : 'text-gray-700'}`}>Contact</button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col py-4 px-4 gap-4">
              <button onClick={() => setCurrentPage('accueil')} className="text-left py-2 hover:text-red-600">Accueil</button>
              <button onClick={() => setCurrentPage('urgence')} className="text-left py-2 hover:text-red-600">Urgences</button>
              <button onClick={() => setCurrentPage('programme')} className="text-left py-2 hover:text-red-600">Programme</button>
              <button onClick={() => setCurrentPage('temoignages')} className="text-left py-2 hover:text-red-600">Témoignages</button>
              <button onClick={() => setCurrentPage('faq')} className="text-left py-2 hover:text-red-600">FAQ</button>
              <button onClick={() => setCurrentPage('apropos')} className="text-left py-2 hover:text-red-600">À propos</button>
              <button onClick={() => setCurrentPage('contact')} className="text-left py-2 hover:text-red-600">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="font-bold">+</span>
              </div>
              <span className="font-bold">La Clinique des Assurances Résiliés</span>
            </div>
            <p className="text-gray-400 text-sm">
              Le seul cabinet d assurance dédié à la réhabilitation des profils difficiles
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <button onClick={() => setCurrentPage('accueil')} className="text-left hover:text-white">Accueil</button>
              <button onClick={() => setCurrentPage('programme')} className="text-left hover:text-white">Notre Programme</button>
              <button onClick={() => setCurrentPage('temoignages')} className="text-left hover:text-white">Témoignages</button>
              <button onClick={() => setCurrentPage('faq')} className="text-left hover:text-white">FAQ</button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>01 XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@clinique-resilies.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Lun-Ven: 9h-19h</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
              <a href="#" className="hover:text-white">CGU</a>
              <a href="#" className="hover:text-white">Gestion des cookies</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2024 La Clinique des Assurances Résiliés. Tous droits réservés.
        </div>
      </div>
    </footer>
  );

  const SuccessMessage = () => (
    showSuccess && (
      <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-bounce">
        <div className="flex items-center gap-2">
          <CheckCircle size={24} />
          <span className="font-semibold">Merci ! Nous vous rappelons sous 5mn.</span>
        </div>
      </div>
    )
  );

  const PageAccueil = () => (
    <>
      <div className="bg-gradient-to-br from-red-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              RÉSILIÉ • MALUSSÉ • REFUSÉ
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              On vous assure<br />
              <span className="text-red-600">aujourd hui</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Le seul cabinet qui vous accompagne jusqu à redevenir un profil standard, année après année.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage('urgence')}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 shadow-lg transition"
              >
                <AlertCircle size={24} />
                URGENCE RÉSILIATION
              </button>
              <a 
                href="#formulaire"
                className="bg-white text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 border-2 border-gray-300 text-center transition"
              >
                Devis en 2 minutes
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                Réponse sous 5mn
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                Sans engagement
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} />
                87% satisfaits
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-6xl">🚗</div>
                  </div>
                  <div className="absolute top-8 right-8 bg-white border-2 border-red-400 rounded px-2 py-1 text-2xl rotate-12">
                    🩹
                  </div>
                  <div className="absolute bottom-0 right-12 text-4xl">🩺</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Auto</h3>
                <p className="text-gray-600">
                Votre spécialiste en assurance auto résilé, malussé et refusé
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Notre Programme de Réhabilitation
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Un parcours progressif sur 3 niveaux pour retrouver des tarifs standards
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 relative hover:shadow-xl transition">
              <div className="absolute -top-4 left-6 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                NIVEAU 1
              </div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Soins Intensifs</h4>
                <p className="text-gray-700 mb-4">Résiliation, refus, malus lourd</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Assurance immédiate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Même profil complexe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Tarif adapté</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 relative hover:shadow-xl transition">
              <div className="absolute -top-4 left-6 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                NIVEAU 2
              </div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Réhabilitation</h4>
                <p className="text-gray-700 mb-4">Amélioration progressive</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                    <span>Réduction du malus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                    <span>Suivi personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-orange-500 flex-shrink-0" />
                    <span>Tarifs en baisse</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 relative hover:shadow-xl transition">
              <div className="absolute -top-4 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                NIVEAU 3
              </div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Retour Standard</h4>
                <p className="text-gray-700 mb-4">Profil réhabilité</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Assurable partout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Meilleurs tarifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Autonomie retrouvée</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full text-white font-bold flex items-center justify-center shadow-lg">1</div>
            </div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full text-white font-bold flex items-center justify-center shadow-lg">2</div>
            </div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full text-white font-bold flex items-center justify-center shadow-lg">3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">87%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">5mn</div>
                <div className="text-gray-600">Délai de réponse</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">-38%</div>
              <div className="text-gray-600">Économie moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">28</div>
              <div className="text-gray-600">Mois en moyenne</div>
            </div>
          </div>
        </div>
      </div>

      <div id="formulaire" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Devis Express</h3>
            <p className="text-gray-600">Remplissez le formulaire, nous vous rappelons sous 5mn</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                <input 
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                  placeholder="Jean Dupont"
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                <input 
                  type="tel"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                  placeholder="06 XX XX XX XX"
                  value={formData.tel}
                  onChange={(e) => setFormData({...formData, tel: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Votre situation *</label>
              <select 
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                value={formData.situation}
                onChange={(e) => setFormData({...formData, situation: e.target.value})}
              >
                <option value="">Sélectionnez votre situation</option>
                <option value="resilie">Résilié par mon assureur</option>
                <option value="refuse">Refusé par plusieurs assureurs</option>
                <option value="malus">Malus important</option>
                <option value="jeune">Jeune conducteur avec antécédents</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" required className="w-4 h-4" />
                <span>J accepte que mes données soient utilisées pour être recontacté *</span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 transition shadow-lg"
            >
              <Phone size={24} />
              Être rappelé sous 5mn
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Vos données sont protégées et conformes RGPD
            </p>
          </form>
        </div>
      </div>
    </>
  );

  const PageUrgence = () => (
    <div className="py-16 px-4 bg-gradient-to-br from-red-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            🚨 URGENCE RÉSILIATION
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            RÉSILIÉ ?<br />
            <span className="text-red-600">On vous assure AUJOURD HUI</span>
          </h1>
            <p className="text-2xl text-gray-600 mb-12">
            Réponse garantie sous 5 minutes
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">😰</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">1. Vous êtes résilié</h3>
            <p className="text-sm text-gray-600">Situation difficile</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">2. Nous analysons</h3>
            <p className="text-sm text-gray-600">Sous 5 minutes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">3. Vous êtes assuré</h3>
            <p className="text-sm text-gray-600">Solution immédiate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📈</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">4. Réhabilitation</h3>
            <p className="text-sm text-gray-600">Sur 3 niveaux</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulaire Express Urgence</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <input 
                type="text"
                required
                placeholder="Nom complet *"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
              />
              <input 
                type="tel"
                required
                placeholder="Téléphone *"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                value={formData.tel}
                onChange={(e) => setFormData({...formData, tel: e.target.value})}
              />
              <select 
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                value={formData.situation}
                onChange={(e) => setFormData({...formData, situation: e.target.value})}
              >
                <option value="">Votre situation *</option>
                <option value="resilie">Résilié</option>
                <option value="refuse">Refusé</option>
                <option value="malus">Malus lourd</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700"
            >
              🚨 URGENCE - Me rappeler maintenant
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const PageProgramme = () => (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
          Comment fonctionne la réhabilitation assurantielle ?
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Notre programme unique en France vous accompagne sur 3 niveaux pour passer de profil résilié à conducteur standard
        </p>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🚨</span>
              </div>
              <div>
                <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-2">
                  NIVEAU 1
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Soins Intensifs</h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Qui est concerné ?</strong> Conducteurs résiliés par leur assureur, refusés par plusieurs compagnies, malus supérieur à 2.00, antécédents lourds.
              </p>
              <p className="text-lg">
                <strong>Durée :</strong> 12 à 24 mois selon votre profil
              </p>
              <p className="text-lg">
                <strong>Prix moyen :</strong> À partir de 150 €/mois
              </p>
              <p className="text-lg">
                <strong>Nos partenaires :</strong> Nous travaillons avec des assureurs spécialisés acceptant les profils difficiles
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-red-600 mt-1 flex-shrink-0" />
                  <span>Assurance auto tous risques possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-red-600 mt-1 flex-shrink-0" />
                  <span>Acceptation immédiate sans enquête longue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-red-600 mt-1 flex-shrink-0" />
                  <span>Accompagnement pour améliorer votre dossier</span>
                </li>
              </ul>
            </div>
            <button className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              Obtenir mon devis Niveau 1
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">📈</span>
              </div>
              <div>
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-2">
                  NIVEAU 2
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Réhabilitation</h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Qui est concerné ?</strong> Conducteurs ayant un malus entre 1.25 et 2.00, ou sortant du Niveau 1 après 12-18 mois sans sinistre.
              </p>
              <p className="text-lg">
                <strong>Durée :</strong> 18 à 36 mois
              </p>
              <p className="text-lg">
                <strong>Prix moyen :</strong> De 100 € à 133 €/mois
              </p>
              <p className="text-lg">
                <strong>Objectif :</strong> Réduire progressivement votre malus et accéder à des assureurs plus compétitifs
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Suivi personnalisé trimestriel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Renégociation annuelle de votre contrat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <span>Conseils pour éviter les pièges</span>
                </li>
              </ul>
            </div>
            <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
              Obtenir mon devis Niveau 2
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">✅</span>
              </div>
              <div>
                <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-2">
                  NIVEAU 3
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Retour au Standard</h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Qui est concerné ?</strong> Conducteurs avec malus inférieur à 1.25, ou bonus retrouvé, profil stabilisé.
              </p>
              <p className="text-lg">
                <strong>Durée :</strong> Autonomie retrouvée
              </p>
              <p className="text-lg">
                <strong>Prix moyen :</strong> 58 € à 83 €/mois
              </p>
              <p className="text-lg">
                <strong>Résultat :</strong> Vous êtes désormais assurable partout aux tarifs du marché standard
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Accès à tous les assureurs traditionnels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Tarifs compétitifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Liberté de choisir votre assureur</span>
                </li>
              </ul>
            </div>
            <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
              Obtenir mon devis Niveau 3
            </button>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Calendrier type du parcours</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                An 1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Stabilisation (Niveau 1)</h4>
                <p className="text-gray-600">Assurance immédiate, reconstruction du dossier, aucun sinistre</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                An 2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Amélioration (Passage Niveau 2)</h4>
                <p className="text-gray-600">Réduction du malus, meilleur tarif, début de réhabilitation</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                An 3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Retour à la normale (Niveau 3)</h4>
                <p className="text-gray-600">Profil standard, tarifs normaux, autonomie complète</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PageTemoignages = () => (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Parcours de nos patients
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Découvrez comment nous avons aidé des conducteurs à retrouver une assurance normale
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                ML
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Marc L., 42 ans</h3>
                <p className="text-sm text-gray-600">Île-de-France</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔴</span>
                  <span className="font-semibold text-sm">2021: Résilié</span>
                </div>
                <span className="font-bold text-red-600">238 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟠</span>
                  <span className="font-semibold text-sm">2022: Niveau 2</span>
                </div>
                <span className="font-bold text-orange-600">183 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟢</span>
                  <span className="font-semibold text-sm">2024: Standard</span>
                </div>
                <span className="font-bold text-green-600">117 €/mois</span>
              </div>
            </div>

            <blockquote className="italic text-gray-700 mb-4 border-l-4 border-red-600 pl-4">
              L équipe m a accompagné pas à pas. Aujourd hui je paie moins cher qu avant ma résiliation !
            </blockquote>

            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold">
              Économie: -51% en 3 ans
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">
                SD
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Sophie D., 29 ans</h3>
                <p className="text-sm text-gray-600">Rhône-Alpes</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔴</span>
                  <span className="font-semibold text-sm">2022: Malus 2.5</span>
                </div>
                <span className="font-bold text-red-600">267 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟠</span>
                  <span className="font-semibold text-sm">2023: Niveau 2</span>
                </div>
                <span className="font-bold text-orange-600">158 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟢</span>
                  <span className="font-semibold text-sm">2024: En cours</span>
                </div>
                <span className="font-bold text-green-600">100 €/mois</span>
              </div>
            </div>

            <blockquote className="italic text-gray-700 mb-4 border-l-4 border-red-600 pl-4">
              Je pensais être bloquée à vie avec des tarifs exorbitants. Merci pour votre aide !
            </blockquote>

            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold">
              Économie: -62% en 2 ans
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600">
                PA
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Pierre A., 35 ans</h3>
                <p className="text-sm text-gray-600">PACA</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔴</span>
                  <span className="font-semibold text-sm">2020: 4 refus</span>
                </div>
                <span className="font-bold text-red-600">342 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟠</span>
                  <span className="font-semibold text-sm">2022: Niveau 2</span>
                </div>
                <span className="font-bold text-orange-600">200 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟢</span>
                  <span className="font-semibold text-sm">2024: Standard</span>
                </div>
                <span className="font-bold text-green-600">79 €/mois</span>
              </div>
            </div>

            <blockquote className="italic text-gray-700 mb-4 border-l-4 border-red-600 pl-4">
              Un vrai miracle ! De 4 refus à une assurance normale en 4 ans. Incroyable.
            </blockquote>

            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold">
              Économie: -77% en 4 ans
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-orange-600">
                CB
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Céline B., 38 ans</h3>
                <p className="text-sm text-gray-600">Occitanie</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔴</span>
                  <span className="font-semibold text-sm">2022: Malus 3.0</span>
                </div>
                <span className="font-bold text-red-600">300 €/mois</span>
              </div>
              <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🟠</span>
                  <span className="font-semibold text-sm">2024: Niveau 2</span>
                </div>
                <span className="font-bold text-orange-600">150 €/mois</span>
              </div>
            </div>

            <blockquote className="italic text-gray-700 mb-4 border-l-4 border-red-600 pl-4">
              Parcours en cours mais déjà -50% sur ma cotisation. Vivement le Niveau 3 !
            </blockquote>

            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-center font-bold">
              En cours: -50% en 2 ans
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous aussi, démarrez votre réhabilitation</h3>
          <p className="text-gray-600 mb-6">Rejoignez les centaines de conducteurs qui ont retrouvé une assurance normale</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition inline-flex items-center gap-2"
          >
            <Phone size={24} />
            Commencer mon parcours
          </button>
        </div>
      </div>
    </div>
  );

  const PageFAQ = () => {
    const faqData = [
      {
        category: "Résiliation",
        questions: [
          {
            q: "Puis-je être assuré si j ai été résilié pour non-paiement ?",
            a: "Oui, nous travaillons avec des assureurs spécialisés qui acceptent ce type de profil. Le tarif sera adapté à votre situation."
          },
          {
            q: "Combien de temps après une résiliation puis-je m assurer ?",
            a: "Immédiatement. Nous pouvons vous trouver une assurance dès le lendemain de votre résiliation."
          },
          {
            q: "Dois-je déclarer ma résiliation à tous les assureurs ?",
            a: "Oui, c est obligatoire. Toute fausse déclaration peut entraîner la nullité du contrat."
          }
        ]
      },
      {
        category: "Malus",
        questions: [
          {
            q: "À partir de quel malus êtes-vous spécialisés ?",
            a: "Nous intervenons dès un malus de 1.25, et surtout pour les malus supérieurs à 2.00 où peu d assureurs acceptent."
          },
          {
            q: "Peut-on effacer un malus rapidement ?",
            a: "Non, le malus diminue de 5% par année sans sinistre. Notre rôle est de vous accompagner durant cette période."
          },
          {
            q: "Combien de temps pour retrouver un bonus ?",
            a: "En moyenne 3 à 5 ans selon votre malus de départ et votre conduite."
          }
        ]
      },
      {
        category: "Le Programme",
        questions: [
          {
            q: "Combien de temps dure le parcours complet ?",
            a: "Entre 2 et 4 ans selon votre profil de départ et votre évolution."
          },
          {
            q: "Puis-je arrêter en cours de route ?",
            a: "Oui, vous n avez aucun engagement. Vous pouvez partir quand vous voulez."
          },
          {
            q: "Comment passez-vous d un niveau à l autre ?",
            a: "Nous évaluons votre dossier chaque année et vous proposons de passer au niveau suivant dès que c est possible."
          }
        ]
      },
      {
        category: "Tarifs",
        questions: [
          {
            q: "Quels sont vos honoraires ?",
            a: "Nos honoraires sont inclus dans le tarif proposé. Pas de frais cachés."
          },
          {
            q: "Puis-je payer en plusieurs fois ?",
            a: "Oui, nous proposons des facilités de paiement mensuelles."
          },
          {
            q: "Proposez-vous des devis gratuits ?",
            a: "Oui, tous nos devis sont gratuits et sans engagement."
          }
        ]
      }
    ];

    return (
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Tout ce que vous devez savoir sur notre programme de réhabilitation
          </p>

          <div className="space-y-8">
            {faqData.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">
                    {catIndex + 1}
                  </span>
                  {category.category}
                </h2>
                <div className="space-y-2">
                  {category.questions.map((item, qIndex) => {
                    const index = `${catIndex}-${qIndex}`;
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={qIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                          {isOpen ? <ChevronUp size={20} className="text-red-600 flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-gray-700 bg-gray-50">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Vous avez d autres questions ?</h3>
            <p className="text-gray-600 mb-6">Notre équipe est là pour vous répondre</p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    );
  };

  const PageAPropos = () => (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
          La première clinique assurantielle de France
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Nous avons créé un concept unique: accompagner les conducteurs en difficulté jusqu à leur réhabilitation complète
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bienveillance</h3>
            <p className="text-gray-600">
              Nous croyons que tout le monde mérite une seconde chance. Pas de jugement, que de l aide.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600">
              10 ans d expérience dans l assurance des profils difficiles. Nous connaissons tous les assureurs.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Résultats</h3>
            <p className="text-gray-600">
              87% de clients satisfaits et une économie moyenne de 38% sur le parcours complet.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            Trop de conducteurs se retrouvent exclus du système d assurance traditionnel. Résiliés, malussés, refusés... ils se sentent abandonnés et paient des tarifs exorbitants.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Nous avons créé <strong>La Clinique des Assurances Résiliés</strong> pour leur offrir une solution complète: non seulement les assurer immédiatement, mais surtout les accompagner année après année jusqu à leur réhabilitation totale.
          </p>
          <p className="text-lg text-gray-700">
            Notre approche médicale n est pas un hasard: nous traitons vraiment chaque dossier comme un patient à soigner, avec un programme de guérison progressif adapté.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Chiffres Clés</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">2019</div>
              <div className="text-gray-600">Année de création</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">1200+</div>
              <div className="text-gray-600">Clients accompagnés</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">87%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15</div>
              <div className="text-gray-600">Partenaires assureurs</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nos Partenaires Assureurs</h2>
          <p className="text-center text-gray-600 mb-8">
            Nous travaillons avec les meilleurs assureurs spécialisés du marché
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
                Assureur 1
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
                Assureur 2
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
                Assureur 3
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
                Assureur 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PageContact = () => (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
          Contactez-nous
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Notre équipe est à votre écoute pour répondre à toutes vos questions
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulaire de Contact</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                    <input 
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      value={formData.tel}
                      onChange={(e) => setFormData({...formData, tel: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet *</label>
                    <select 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      value={formData.situation}
                      onChange={(e) => setFormData({...formData, situation: e.target.value})}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="info">Information générale</option>
                      <option value="suivi">Suivi de dossier</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">07 53 31 90 64</p>
                    <p className="text-sm text-gray-500">Lun-Ven: 9h-19h | Sam: 9h-13h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@clinique-resilies.fr</p>
                    <p className="text-sm text-gray-500">Réponse en 5mn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">9, allée Georges Bizet</p>
                    <p className="text-gray-600">95870 Bezons</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Besoin urgent ?</h3>
              <p className="mb-6 opacity-90">
                Pour une résiliation ou un refus récent, utilisez notre ligne d urgence
              </p>
              <button 
                onClick={() => setCurrentPage('urgence')}
                className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <AlertCircle size={20} />
                Accéder à l urgence
              </button>
            </div>

            <div className="mt-6 bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Horaires d ouverture</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="font-semibold text-gray-900">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samedi</span>
                  <span className="font-semibold text-gray-900">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimanche</span>
                  <span className="font-semibold text-gray-900">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SuccessMessage />
      
      {currentPage === 'accueil' && <PageAccueil />}
      {currentPage === 'urgence' && <PageUrgence />}
      {currentPage === 'programme' && <PageProgramme />}
      {currentPage === 'temoignages' && <PageTemoignages />}
      {currentPage === 'faq' && <PageFAQ />}
      {currentPage === 'apropos' && <PageAPropos />}
      {currentPage === 'contact' && <PageContact />}
      
      <Footer />
    </div>
  );
}
                