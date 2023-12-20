const gares = [
    { nom: 'Dinard', departures: ['Rennes', 'Saint-Malo'], arrivals: ['Rennes'] },
    { nom: 'Rennes', departures: ['Dinard', 'Saint-Malo'], arrivals: ['Paris', 'Nantes'] },
    { nom: 'Châteaubourg', departures: ['Saint-Jacques-de-la-Lande', 'Ploërmel'], arrivals: ['Quimper'] },
    { nom: 'Douarnenez', departures: ['Crozon', 'Brest'], arrivals: ['Brest', 'Lannion'] },
    { nom: 'Guingamp', departures: ['Saint-Brieuc', 'Cancale'], arrivals: ['Saint-Méloir-des-Ondes', 'Combourg'] },
    { nom: 'Mordelles', departures: ['Le Rheu', 'Paris'], arrivals: ['Châteauroux', 'Le Plessis-Belleville'] },
    { nom: 'Roissy-en-France', departures: ['Saint-Denis', 'Nanterre'], arrivals: ['La Défense', 'Suresnes'] },
    { nom: 'Boulogne-Billancourt', departures: ['Bezons', 'Pontoise'], arrivals: ['Vincennes', 'Lognes'] },
    { nom: 'Torcy', departures: ['Lagny-sur-Marne', 'Thorigny-sur-Marne'], arrivals: ['Marne-la-Vallée', 'Noisy-le-Grand'] },
    { nom: 'Versailles', departures: ['Massy', 'Antony'], arrivals: ['Saint-Arnoult-en-Yvelines', 'Rambouillet'] },
    { nom: 'Maintenon', departures: ['Saint-Piat', 'Yermenonville'], arrivals: ['Armenonville', 'Gallardon'] },
    { nom: 'Gas', departures: ['Saint-Prest', 'Jouy'], arrivals: ['Soulaires', 'Gasville-Oisème'] },
    { nom: 'Coltainville', departures: ['Champhol', 'Nogent-le-Roi'], arrivals: ['Chaudon', 'Le Gué-de-Longroi'] },
    { nom: 'Ablis', departures: ['Auneau-Bleury-Saint-Symphorien', 'Aunay-sous-Auneau'], arrivals: ['Villiers-le-Morhier', 'Épernon'] },
    { nom: 'Houx', departures: ['Chartres', 'Le Mans'], arrivals: ['Bordeaux', 'Caen'] },
    { nom: 'Rouen', departures: ['Amiens', 'Compiègne'], arrivals: ['Reims', 'Cabourg'] },
    { nom: 'Bar-le-Duc', departures: ['Nancy', 'Metz'], arrivals: ['Chambley-Bussières', 'Hagéville'] },
    { nom: 'Lachaussée', departures: ['Saint-Julien-lès-Gorze', 'Mars-la-Tour'], arrivals: ['Jarny', 'Doncourt-lès-Conflans'] },
    { nom: 'Tronville', departures: ['Troyes', 'Lyon'], arrivals: ['Lyon', 'Grenoble'] },
    { nom: 'Strasbourg', departures: ['Besançon', 'Saint-Hilaire-du-Touvet'], arrivals: ['Le Touvet', 'La Terrasse'] },
    { nom: 'Chambéry', departures: ['La Tour-du-Pin', 'Romans-sur-Isère'], arrivals: ['Valence', 'Avignon'] },
    { nom: 'Lunel', departures: ['Nîmes', 'Montpellier'], arrivals: ['Toulon','Pierrefeu-du-Var'] },
    { nom: 'Marseille', departures: ['Carcassonne', 'Toulouse'], arrivals: ['Montauban','Angoulême'] },
    { nom: 'Niort', departures: ['Poitiers', 'Bourges'], arrivals: ['Blois', 'Créteil'] },
    { nom: 'Limoges', departures: ['Brive-la-Gaillarde', 'Clermont-Ferrand'], arrivals: ['Lège-Cap-Ferret','Arès'] },
    { nom: 'Andernos-les-Bains', departures: ['Biganos', 'Arcachon'], arrivals: ['Cap Ferret','Laval'] },
    { nom: 'Fougères', departures: ['Romagné', 'Saint-Aubin-du-Cormier'], arrivals: ['Saint-Aubin-du-Cormier','Liffré'] },
    { nom: 'Thorigné-Fouillard', departures: ['Vitré', 'Flers'], arrivals: ['Alençon','Dreux'] },
    { nom: 'Fontainebleau', departures: ['Melun', 'Château-Tierry'], arrivals: ['Meaux','Calais'] },
    { nom: 'Lille', departures: ['Betton', 'Melesse'], arrivals: ['La Mézière','Saint Sulpice-la-Forêt'] },
    { nom: 'Chevaigné', departures: ['La Bouëxière', 'La Chapelle-des-Fougeretz'], arrivals: ['Vignoc','Pacé'] },
    { nom: 'Chantepie', departures: ['Noyal-sur-Vilaine', 'Acigné'], arrivals: ['Cesson-Sévigné','Servon-sur-Vilaine'] },
    { nom: 'Brécé', departures: ['Domloup', 'Vern-sur-Seiche'], arrivals: ['Chartres-de-Bretagne','Bruz'] },

];

// Fonction pour afficher les départs
function displayDepartures(gare) {
    const departureList = document.getElementById('departureList');
    const listItem = document.createElement('li');
    listItem.textContent = `${gare.nom}: Départs vers ${gare.departures.join(', ')}`;
    departureList.appendChild(listItem);
  }
  
  // Fonction pour afficher les arrivées
  function displayArrivals(gare) {
    const arrivalList = document.getElementById('arrivalList');
    const listItem = document.createElement('li');
    listItem.textContent = `${gare.nom}: Arrivées depuis ${gare.arrivals.join(', ')}`;
    arrivalList.appendChild(listItem);
  }
  
  // Affichage des données pour chaque gare
  gares.forEach(gare => {
    displayDepartures(gare);
    displayArrivals(gare);
  });