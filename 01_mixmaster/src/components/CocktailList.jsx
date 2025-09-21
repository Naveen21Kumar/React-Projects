import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrink, strGlass, strDrinkThumb } = item;
    return {
      id: idDrink,
      info: strAlcoholic,
      name: strDrink,
      glass: strGlass,
      image: strDrinkThumb,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
