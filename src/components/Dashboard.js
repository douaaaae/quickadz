import React from 'react';
import { useSelector } from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import Navbar from './NavAdmin';
import Footer1 from './Footer2';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Récupération des annonces depuis Redux
  const annoncesState = useSelector((state) => state.annonces);
  const annonces = Array.isArray(annoncesState.annonces) ? annoncesState.annonces : [];

  // Calcul des statistiques
  const annoncesParMois = annonces.reduce((acc, annonce) => {
    const mois = new Date(annonce.datePoster).getMonth() + 1;
    acc[mois] = (acc[mois] || 0) + 1;
    return acc;
  }, {});

  const annoncesParCategorie = annonces.reduce((acc, annonce) => {
    acc[annonce.categorie] = (acc[annonce.categorie] || 0) + 1;
    return acc;
  }, {});

  const annoncesParVille = annonces.reduce((acc, annonce) => {
    acc[annonce.ville] = (acc[annonce.ville] || 0) + 1;
    return acc;
  }, {});

  // Données pour les graphiques
  const dataBar = {
    labels: Object.keys(annoncesParMois),
    datasets: [
      {
        label: 'Nombre d’annonces par mois',
        data: Object.values(annoncesParMois),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataPieCategorie = {
    labels: Object.keys(annoncesParCategorie),
    datasets: [
      {
        data: Object.values(annoncesParCategorie),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2'],
        hoverOffset: 4,
      },
    ],
  };

  const dataPieVille = {
    labels: Object.keys(annoncesParVille),
    datasets: [
      {
        data: Object.values(annoncesParVille),
        backgroundColor: ['#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  return (
     
    <div className="bg-gray-100 min-h-screen p-6">
       <Navbar />
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <div className="bg-white rounded-lg shadow p-4" style={{ width: '70%',  margin: 'auto', marginTop:'2%'  }}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ads by month : </h2>
          <div style={{ width: '50%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
          <Bar data={dataBar} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4" style={{ width: '70%',height:'',  margin: 'auto', marginTop:'2%' }}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ads by category :</h2>
          <div style={{ width: '50%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
          <Pie data={dataPieCategorie} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4" style={{ width: '70%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ads by city :</h2>
          <div style={{ width: '50%',  margin: 'auto', marginTop:'2%', marginBottom:'2%'  }}>
          <Pie data={dataPieVille}/>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Dashboard;