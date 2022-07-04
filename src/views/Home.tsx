import React, { FC, useCallback, useEffect, useState } from 'react';
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

const Home:FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  let dispatch = useDispatch();
  const {randomGif, gifs} = useSelector((state: RootState) => {
    return {
      randomGif: state.GifReducer.randomGif,
      gifs: state.GifReducer.gifs
    }
  })

  useEffect(() => {
    dispatch(getRandomGif());
    const refetchGifs = setInterval(() => {
      dispatch(getRandomGif());
    }, 10000);

    return () => clearInterval(refetchGifs);
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(getGifs(value))
    }, 1000);

    return () => clearTimeout(getData);
  }, [value])

  const gifList = gifs?.map((gif: any) => (
    <div key={gif.id} onClick={() => {navigate(`/detail/${gif.id}`)}}>
      <Gif src={gif.images.downsized.url}/>
    </div>)
  )

  const handleCancelSearch = useCallback(() => {
    setIsTyping(false);
    setValue('')
  }, [])

  return (
    <>
      <section className="section section-search">
        <SearchField
          onChange={(val: string) => setValue(val)}
          onFocus={() => setIsTyping(true)}
          defaultValue={value}
          placeholder="Search"
        />

        {isTyping &&
        <Button
          className="cancel-search"
          onClick={handleCancelSearch}
        >
          Cancel
        </Button>}
      </section>

      <section className="section section-result">
        <Text content={!isTyping ? 'Random Selected GIF:' : 'Search results:'} />

        {!isTyping ?
        <div>
            {randomGif && (
              <>
                <div onClick={() => {navigate(`/detail/${randomGif.id}`)}}>
                  <Gif src={randomGif.images.downsized.url} />
                </div>
                <GifDetail title={randomGif.title} ageRestriction={getAgeRestriction(randomGif.rating)} link={randomGif.bitly_url} />
              </>
            )}
        </div> :
        <Grid>
          {gifList}
        </Grid>
        }
      </section>
    </>
  );
}

export default Home;
