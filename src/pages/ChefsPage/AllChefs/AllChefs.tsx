import { useEffect, useState } from "react";
import { fetchAllChefs } from "../../../reduxToolkit/thunks/chefThunk";
import ChefCard from "../../../components/ChefCard/ChefCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { setAllChefs } from "../../../reduxToolkit/slices/chefSlice";

const AllChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allChefs } = useSelector((state: RootState) => state.chef);
  const [page, setPage] = useState(1);

  const classN: string = useOutletContext();

  useEffect(() => {
    dispatch(setAllChefs([]));
  }, []);

  useEffect(() => {
    dispatch(fetchAllChefs(page.toString()));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll dataLength={allChefs ? allChefs.length : 0} next={fetchMoreData} hasMore={true} loader={""}>
      <div className={classN}>
        {allChefs?.map((chef) => (
          <ChefCard chef={chef} key={chef._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default AllChefs;
