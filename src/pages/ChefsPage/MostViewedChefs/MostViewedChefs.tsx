import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../reduxToolkit/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMostViewedChefs } from "../../../reduxToolkit/thunks/chefThunk";
import ChefCard from "../../../components/ChefCard/ChefCard";

const MostViewedChefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { mostViewedChefs } = useSelector((state: RootState) => state.chef);

  useEffect(() => {
    dispatch(fetchMostViewedChefs());
  }, [dispatch]);
  return mostViewedChefs?.map((chef) => <ChefCard key={chef._id} chef={chef} />);
};

export default MostViewedChefs;
