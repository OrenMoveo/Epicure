import { useEffect, useState, useRef } from "react";
import { fetchNewChefs } from "../../../reduxToolkit/thunks/chefThunk";
import ChefCard from "../../../components/ChefCard/ChefCard";
import useIsMobile from "../../../hooks/useIsMobile";
import useIsTablet from "../../../hooks/useIsTablet";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { setNewChefs } from "../../../reduxToolkit/slices/chefSlice";

const NewChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newChefs } = useSelector((state: RootState) => state.chef);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTablet = isMobile || isTablet;
  const classN: string = useOutletContext();
  const [page, setPage] = useState(1);
  const marginError = 10;

  const handleScroll = () => {
    if (containerRef.current) {
      if (Math.abs(containerRef.current.scrollTop - (containerRef.current.scrollHeight - containerRef.current.clientHeight)) <= marginError) {
        fetchMoreData();
        containerRef.current.scrollTo({
          top: containerRef.current.scrollTop + 150,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    dispatch(setNewChefs([]));
  }, []);

  useEffect(() => {
    dispatch(fetchNewChefs(page.toString()));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return !isMobileOrTablet ? (
    <div className={classN} ref={containerRef} onScroll={handleScroll}>
      {newChefs?.map((chef) => (
        <ChefCard chef={chef} key={chef._id} />
      ))}
    </div>
  ) : (
    <InfiniteScroll dataLength={newChefs.length} next={fetchMoreData} hasMore={true} loader={""} className="">
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {newChefs?.map((chef) => (
          <ChefCard chef={chef} key={chef._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default NewChefs;
