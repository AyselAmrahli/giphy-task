import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGifDetail } from '../redux/actions';
import { RootState } from '../redux/constants/model';
import getAgeRestriction from '../utils';

import Gif from '../components/Gif';
import GifDetail from '../components/GifDetail';
import Header from '../components/Header';
import Loading from '../components/Loading';


const Detail:FC = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const gif = useSelector((state: RootState) => state.GifReducer.gifDetail)

  useEffect(() => {
    dispatch(getGifDetail(id))
  }, [])

  return (
    <section>
      <Header title={gif?.title} />
      {gif ? (
        <>
          <Gif src={gif.images.downsized.url} />
          <GifDetail
            title={gif.title}
            ageRestriction={getAgeRestriction(gif.rating)}
            link={gif.bitly_url}
          />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Detail;
