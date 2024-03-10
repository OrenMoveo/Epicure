import { useEffect, useState } from "react";
import { fetchNewChefs } from "../../../reduxToolkit/thunks/chefThunk";
import ChefCard from "../../../components/ChefCard/ChefCard";

import InfiniteScroll from "react-infinite-scroll-component";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { setNewChefs } from "../../../reduxToolkit/slices/chefSlice";

const NewChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newChefs } = useSelector((state: RootState) => state.chef);

  const classN: string = useOutletContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setNewChefs([]));
  }, []);

  useEffect(() => {
    dispatch(fetchNewChefs(page.toString()));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll dataLength={newChefs ? newChefs.length : 0} next={fetchMoreData} hasMore={true} loader={""}>
      <div className={classN}>
        {newChefs?.map((chef) => (
          <ChefCard chef={chef} key={chef._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default NewChefs;
