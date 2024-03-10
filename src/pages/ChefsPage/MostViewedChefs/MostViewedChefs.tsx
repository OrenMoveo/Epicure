import { useEffect, useState } from "react";
import { fetchMostViewedChefs } from "../../../reduxToolkit/thunks/chefThunk";
import ChefCard from "../../../components/ChefCard/ChefCard";

import InfiniteScroll from "react-infinite-scroll-component";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { setMostViewedChefs } from "../../../reduxToolkit/slices/chefSlice";

const MostViewedChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { mostViewedChefs } = useSelector((state: RootState) => state.chef);

  const classN: string = useOutletContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setMostViewedChefs([]));
  }, []);

  useEffect(() => {
    dispatch(fetchMostViewedChefs(page.toString()));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll dataLength={mostViewedChefs ? mostViewedChefs.length : 0} next={fetchMoreData} hasMore={true} loader={""}>
      <div className={classN}>
        {mostViewedChefs?.map((chef) => (
          <ChefCard chef={chef} key={chef._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default MostViewedChefs;
