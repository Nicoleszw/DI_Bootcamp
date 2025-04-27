import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchRecipes } from '../features/dataSlice';
import { Recipe } from '../types/types';

interface Props {
  url: string;
}

const DataFetcher: React.FC<Props> = ({ url }) => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchRecipes(url));
  }, [dispatch, url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      {data?.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} width={100} />
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
