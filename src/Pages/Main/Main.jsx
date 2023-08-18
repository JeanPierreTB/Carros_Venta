import React, { useEffect, useState } from 'react';
import Car from '../../Componentes/Car';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 

function Main() {
  const [userdata, setUserData] = useState();
  const [cars, setCars] = useState([]);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [Categories, setCategories] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { nombre, contra } = useAuth();
  const itemsPerPage = 12;
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/datos-usuario/${nombre}/${contra}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data.usuario[0]);
      })
      .catch(e => console.error(`Ocurrió un error ${e}`));
  }, [nombre, contra]);

  useEffect(() => {
    fetch(`http://localhost:3001/obtener-autos`)
      .then(response => response.json())
      .then(data => {
        setCars(data);
        const categorias = [...new Set(data.map(car => car.marca))];
        setCategories(categorias);
        setFilteredCars(data);
      })
      .catch(e => console.error(`Ocurrió un error ${e}`));
  }, []);

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const handleFilter = (category) => {
    const filteredCars = category ? cars.filter(car => car.marca === category) : cars;
    setFilteredCars(filteredCars);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    const filteredCars = cars.filter(car => car.nombre.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredCars(filteredCars);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <header className='flex items-center justify-between'>
        <img className="rounded-2xl h-12 w-35 p-1" src="https://img.freepik.com/vector-gratis/logotipo-concesionario-automoviles-diseno-plano_23-2149338507.jpg?w=2000" alt="logo"></img>
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Busqueda de autos'
            className='w-[900px] h-8'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FaSearch className='text-black -ml-4 cursor-pointer' onClick={handleSearch} />
        </div>
        <nav>
          <ul className='[&>li]:text-white [&>li]:font-bold flex space-x-4 [&>li]:cursor-pointer'>
            <li><Link to="/transa">Transacciones</Link></li>
            <li onClick={toggleCategoriesDropdown}>
              Categorias
              {showCategoriesDropdown && (
                <ul className='absolute bg-white p-2 rounded-lg shadow'>
                  <li className='text-black' onClick={() => handleFilter(null)}>Todos</li>
                  {Categories.map((category, index) => (
                    <li key={index} className='text-black' onClick={() => handleFilter(category)}>{category}</li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link to="/perfil">Cuenta</Link></li>
            <li><Link to="/">Cerrar sesión</Link></li>
          </ul>
        </nav>
      </header>
      <div className='text-white font-bold text-2xl flex items-center justify-between mt-5'>
        <h1>Bienviendo {userdata?.nombre}</h1>
        <p>Monto: {userdata?.monto}</p>
      </div>
      <main className='ml-10 mt-10 grid grid-cols-6 gap-y-2'>
        {displayedCars.map(car => (
          <Car
            key={car.id}
            img={car.foto}
            marca={car.marca}
            nombre={car.nombre}
            des={car.descripcion}
            precio={car.precio}
          />
        ))}
      </main>
      <footer className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            onClick={goToPreviousPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Anterior
          </button>
        )}
        {displayedCars.length === itemsPerPage && (
          <button
            onClick={goToNextPage}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Siguiente
          </button>
        )}
      </footer>
    </div>
  );
}

export default Main;


