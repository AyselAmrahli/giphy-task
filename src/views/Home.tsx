import { FC, useCallback, useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGifs, getRandomGif } from '../redux/actions';
import { RootState } from '../redux/constants/model';
import getAgeRestriction from '../utils';

import Grid from '../components/shared/Grid';
import SearchField from '../components/shared/SearchField';
import Gif from '../components/Gif';
import Text from '../components/Text';
import GifDetail from '../components/GifDetail';
import Button from '../components/shared/Button';

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Local state
  const [value, setValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // handle change of field
  const handleChange = (val: string) => {
      setValue(val);
      setIsTyping(true);
  }

  // Redux state
  const { randomGif, gifs } = useSelector((state: RootState) => ({
    randomGif: state.GifReducer.randomGif,
    gifs: state.GifReducer.gifs,
  }));

  // Fetch random GIF periodically
  useEffect(() => {
    dispatch(getRandomGif());

    const refetchInterval = setInterval(() => {
      dispatch(getRandomGif());
    }, 10000);

    return () => clearInterval(refetchInterval);
  }, [dispatch]);

  // Fetch GIFs based on search input
  useEffect(() => {
    if (!value) return;

    const searchTimeout = setTimeout(() => {
      dispatch(getGifs(value));
    }, 1000);

    return () => clearTimeout(searchTimeout);
  }, [value, dispatch]);

  // Event handlers
  const handleCancelSearch = useCallback(() => {
    setIsTyping(false);
    setValue('');
  }, []);

  const handleGifClick = useCallback((id: string) => {
    navigate(`/detail/${id}`);
  }, [navigate]);

  // Generate GIF list
  const gifList = useMemo(
    () =>
      gifs?.map((gif: any) => (
        <div key={gif.id} onClick={() => handleGifClick(gif.id)}>
          <Gif src={gif.images.downsized.url} />
        </div>
      )),
    [gifs, handleGifClick]
  );

  return (
    <>
      <section className="section section-search">
        <SearchField
          onChange={(val: string) => handleChange(val)}
          defaultValue={value}
          placeholder="Search"
        />

        {isTyping && (
          <Button className="cancel-search" onClick={handleCancelSearch}>
            Cancel
          </Button>
        )}
      </section>

      <section className="section section-result">
        <Text content={isTyping ? 'Search results:' : 'Random Selected GIF:'} />

        {!isTyping ? (
          <div>
            {randomGif && (
              <>
                <div onClick={() => handleGifClick(randomGif.id)}>
                  <Gif src={randomGif.images.downsized.url} />
                </div>
                <GifDetail
                  title={randomGif.title}
                  ageRestriction={getAgeRestriction(randomGif.rating)}
                  link={randomGif.bitly_url}
                />
              </>
            )}
          </div>
        ) : (
          <Grid>{gifList}</Grid>
        )}
      </section>
    </>
  );
};

export default Home;
